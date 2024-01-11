import React from 'react';
import { TouchableOpacity, Text, FlatList, Image, View, ListRenderItem } from 'react-native';
import styles from "./style"
import CardItem, { CardProps } from '../../models/card.model';
import Button from '../button';
const Circle: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }: any) => {
        return (
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
            }}>
            <Button title={item.price}  style={{flex:1,width:'100%'}}/>
            </View>
        );
    };
    return (
        <View style={{ borderBottomColor: "white" }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                style={{ borderBottomColor: '#804049', borderBottomWidth: 0,flexDirection:'row',
                }}
                horizontal
                contentContainerStyle={{ paddingVertical: '2.3%', marginBottom: '4%' }}
            />
        </View>
    );
};
export default Circle;