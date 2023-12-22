import React from 'react';
import { TouchableOpacity, Text, FlatList, Image, View, ListRenderItem } from 'react-native';
import styles from "./style"
import CardItem, { CardProps } from '../../models/card.model';
const Circle: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.circle}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={{ textAlign: 'center', color: 'white' }}>{item.konu}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ borderBottomColor: "white", marginHorizontal: '5%' }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                style={{ borderBottomColor: '#804049', borderBottomWidth: 0 }}
                horizontal
                contentContainerStyle={{ paddingVertical: '2.3%', marginBottom: '4%' }}
            />
        </View>
    );
};
export default Circle;