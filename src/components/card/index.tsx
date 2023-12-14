import React from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
const Card: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.resim }} style={styles.image} />
                    <TouchableOpacity style={{position:'absolute',left:'45%',bottom:5}}>
                        <Ionicons  name='add-circle-outline' size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:'2%',marginHorizontal:'2%'}}> 
                    <View>

                    <Text style={styles.buttonText} ellipsizeMode="tail">{item.ad}</Text>
                    <Text style={styles.buttonText}>{item.fiyat} TL</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={{}}>
                        <Ionicons  name='heart-circle-outline' size={25} color="white" />
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
            
        />
    );
};

export default Card;
