import React, { useMemo, useState } from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
import { context } from '../../context';
import { addProductToFavorites,  } from '../../services/Favorites';
import AdvertModel from '../advertModel';
import {addSelectedAdvertToContext} from '../../context/action/advert';

const Advert = () => {
    const { authState:{userDetails:{id},isLoggedIn},advertDispacth,advertState:{allAdverts,favoriteAdverts}} = context();
    const [visible, setVisible] = useState(false);
   
    const favoriekle = (product:any) => {
        addProductToFavorites({userId:id,productId:product.id})(isLoggedIn)(advertDispacth)((res:any)=>{
            Alert.alert(res.split(",")[0],res.split(",")[1])
        });
    }
    const openModel = (res:any) => {
        setVisible(true);
        addSelectedAdvertToContext(res)(advertDispacth);
    }

    const closeModal = () => {
        setVisible(false);
    }
    const renderItem: ListRenderItem<CardItem> = useMemo(() => ({ item }: any) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.imageurl }} style={styles.image} />
                    <TouchableOpacity style={{ position: 'absolute', left: '45%', bottom: 5 }} onPress={()=>openModel(item)}>
                        <Ionicons name='repeat' size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2%', alignItems: 'center' }}>
                    <View style={{marginTop:'4%'}} >
                        <Text style={styles.buttonText} ellipsizeMode="tail">{item.title}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingTop: "30%" }} onPress={() => favoriekle(item)}>
                            <Ionicons name='heart-circle-outline' size={25} color={favoriteAdverts?.some((res:any)=>res.id == item.id) ? "pink" : "white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }, [favoriteAdverts]);

    return (
        <View>
            <FlatList
                data={allAdverts}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: '3%', paddingTop: '5%' }}
                initialNumToRender={10} // İlk başta 10 öğe render edilecek
                onEndReachedThreshold={0.5}
            />
            {visible && (
                <AdvertModel onClose={closeModal} visible={visible} />
            )}
        </View>
    );
};

export default Advert;
