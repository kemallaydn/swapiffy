import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
import CustomView from '../customView';
import { context } from '../../context';
import { addProduct } from '../../context/action/addProduct';
import { addProductToFavorites, getFavoritesAdvert, removeProductFromFavorites } from '../../services/favorites';
import AdvertModel from '../advertModel';

const Advert: React.FC<CardProps> = ({ data }) => {
    const { favoritesDispacth, favoriteState: { favorite }, authState, sepetDispacth,advertDispacth} = context();
    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState({});
    useEffect(() => {
        const getFavorites = async () => {
            if (authState.isLoggedIn) {
                const data = await getFavoritesAdvert(authState.data.authenticatedUser.id);
                data.forEach(element => {
                    favoritesDispacth({ type: 'ADD', payload: element });
                });
            }
        }
        getFavorites();
    }, [authState.isLoggedIn]);

    const favoriekle = (id: string, image: string) => {
        if (authState.isLoggedIn) {
            if (favorite.includes(id.toString())) {
                favoritesDispacth({ type: 'REMOVE', payload: id.toString() });
                removeProductFromFavorites({ productId: id, userId: authState.data.authenticatedUser.id })
            } else {
                addProductToFavorites({ productId: id, userId: authState.data.authenticatedUser.id });
                favoritesDispacth({ type: 'ADD', payload: id.toString() });
            }

        } else {
            Alert.alert("Bu işlemi yapabilmek için giriş yapmalısınız")
        } 
    }

    const sepetekle = (item) => {
       setVisible(true);
       setModalData(item);
    }

    const renderItem: ListRenderItem<CardItem> = ({ item, index }: any) => {
        return (
            <View style={styles.container}>
                <AdvertModel onClose={()=>setVisible(!visible)} visible={visible}/>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.imageurl }} style={styles.image} />
                    <TouchableOpacity style={{ position: 'absolute', left: '45%', bottom: 5 }} onPress={() => {
                        advertDispacth({type:'ADD',payload:item})
                        sepetekle(item)
                    }}>
                        <Ionicons name='repeat' size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2%', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.buttonText} ellipsizeMode="tail">{item.ad}</Text>
                        <Text style={styles.buttonText}>{item.price}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingTop: "30%" }} onPress={() => favoriekle(item.id, item.image)}>
                            <Ionicons name='heart-circle-outline' size={25} color={favorite.includes(item.id.toString()) ? "pink" : "white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={({ id }) => id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: '3%', paddingTop: '3%' }}
        />
    );
};

export default Advert;
