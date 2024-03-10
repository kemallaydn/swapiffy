import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
import CustomView from '../customView';
import { context } from '../../context';
import { addProduct } from '../../context/action/addProduct';
import SwapModal from '../swapModal';

const Card: React.FC<CardProps> = ({ data }) => {
    const [favorites, setFavorites] = useState({ urunId: '', userId: '', image: "" });
    const [sepet, setSepet] = useState({ urunId: '', userId: '', image: "", adet: 1 });
    const { favoritesDispacth, favoriteState, authState, sepetDispacth, sepetState } = context();
    const isFavorite = favoriteState.favorite.some(item => item.urunId === favorites.urunId);

    useEffect(() => {
        if (favorites.urunId) {
            if (isFavorite) {
                favoritesDispacth({
                    type: "CIKAR",
                    payload: favorites
                });
            } else {
                favoritesDispacth({
                    type: "EKLE",
                    payload: favorites
                });
            }
        }
    }, [favorites]);
    
    const favoriekle = (id: string, image: string) => {
        if (authState.data.authenticatedUser != null) {
            setFavorites({
                ...favorites,
                urunId: id,
                userId: authState.data.authenticatedUser.id,
                image: image
            })
        } else {
            Alert.alert("Giriş")
        }
    }

    const sepetekle = (id: string) => {
        if (authState.data.authenticatedUser != null) {
            addProduct({ kullaniciId: authState.data.authenticatedUser.id, urunId: id, adet: 1 })(sepetDispacth)
        } else {
            Alert.alert("Giriş")
        }
    }

    const renderItem: ListRenderItem<CardItem> = ({ item }: any) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <TouchableOpacity style={{ position: 'absolute', left: '45%', bottom: 5 }} onPress={() => {
                        sepetekle(item.id)
                    }}>
                        <Ionicons name='repeat' size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2%', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.buttonText} ellipsizeMode="tail">{item.ad}</Text>
                        <Text style={styles.buttonText}>{item.price} </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingTop: "30%" }} onPress={() => {
                            favoriekle(item.id, item.image)
                        }}>
                            <Ionicons name='heart-circle-outline' size={25} color={favoriteState.favorite.some(res => res.urunId === item.id) ? "pink" : "white"} />
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
                style={{ marginHorizontal: '3%',paddingTop:'3%'}}
            />
       
    );
};

export default Card;
