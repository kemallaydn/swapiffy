import axios from 'axios';
import { Alert } from 'react-native';
import { ADD_FAVORITES_ADVERTS, REMOVE_FAVORITES_ADVERTS } from '../Constants/actionTypes';

export const addProductToFavorites = (product: { userId?: null; productId: any; }) => (isLoggedIn: any) =>(dispatcher: (arg0: { type: string; payload: any; }) => void) => async (onSucces: (arg0: string) => void) => {
    if (isLoggedIn) {
        try {
            // Send the product id to the server to add it to favorites
            await axios.post('http://localhost:8080/v1/api/favorites/add', product).then( (res) => {
                    const response =  res.data;
                    if (response == "") {
                        dispatcher({ type: REMOVE_FAVORITES_ADVERTS, payload: product.productId });
                        onSucces('Uyarı,Favorilerden Kaldırıldı.');
                        console.log('Product removed from favorites successfully!');
                    }else{
                        dispatcher({ type: ADD_FAVORITES_ADVERTS, payload: response });
                        onSucces("Favorilere Eklendi");
                        console.log('Product added to favorites successfully!');
                    }
            });
        } catch (error) {
        }
    } else {
        Alert.alert('Uyarı', 'Favorilere eklemek için giriş yapmanız gerekmektedir.');
    }
}

export const  removeProductFromFavorites=(product:any)=>(dispatcher: (arg0: { type: string; payload: any; }) => void) => async (onSucces: (arg0: string) => void) =>{

    try {
        // Send the product id to the server to remove it from favorites
        await axios.delete(`http://localhost:8080/v1/api/favorites/removeFromFavorites?userId=${product.userId}&productId=${product.productId}`).then(()=>{
            dispatcher({ type: REMOVE_FAVORITES_ADVERTS, payload: product.productId });
            onSucces('Uyarı,Favorilerden Kaldırıldı.');
        });
        console.log('Product removed from favorites successfully!');

    } catch (error) {
        console.error('Failed to remove product from favorites:', error);
    }
}

export async function getFavoritesAdvert(userId: any): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
        const response = await axios.get(`http://localhost:8080/v1/api/favorites/getFavorites?userId=${userId}`);
        console.log('Product get from favorites successfully!');
        return response.data;
    } catch (error) {
        console.error('Failed to remove product from favorites:', error);
    }
}

