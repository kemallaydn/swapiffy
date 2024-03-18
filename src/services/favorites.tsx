import axios from 'axios';

interface Product {
    userId: string;
    productId: string;
}

export async function addProductToFavorites(product: Product): Promise<void> {
    try {
        // Send the product to the server
        await axios.post('http://localhost:8080/v1/api/favorites/add', product);
        console.log('Product added to favorites successfully!');
    } catch (error) {
        console.error('Failed to add product to favorites:', error);
    }
}

export async function removeProductFromFavorites(product: Product): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
        await axios.delete(`http://localhost:8080/v1/api/favorites/removeFromFavorites?userId=${product.userId.toString()}&productId=${product.productId.toString()}`);
        console.log('Product removed from favorites successfully!');
    } catch (error) {
        console.error('Failed to remove product from favorites:', error);
    }
}

export async function getFavoritesAdvert(userId:string): Promise<void> {
    try {
        // Send the product id to the server to remove it from favorites
        const response = await axios.get(`http://localhost:8080/v1/api/favorites/getFavorites?userId=${userId}`);
        console.log('Product get from favorites successfully!');
        return response.data;
    } catch (error) {
        console.error('Failed to remove product from favorites:', error);
    }
}

