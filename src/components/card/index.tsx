import React from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
import CustomView from '../customView';
const Card: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }:any) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <TouchableOpacity style={{ position: 'absolute', left: '45%', bottom: 5 }}>
                        <Ionicons name='add-circle-outline' size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '2%', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.buttonText} ellipsizeMode="tail">{item.ad}</Text>
                        <Text style={styles.buttonText}>{item.price} TL</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingTop: "30%" }}>
                            <Ionicons name='heart-circle-outline' size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <CustomView>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                numColumns={2}
            />
        </CustomView>
    );
};

export default Card;
