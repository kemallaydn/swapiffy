import React from 'react';
import { TouchableOpacity, Text, FlatList, Image, View, ListRenderItem, StyleSheet } from 'react-native';
import CardItem, { CardProps } from '../../models/card.model';
import styles from "./style";
import { context } from '../../context';

const Category = () => {
    const {advertState:{allAdverts}}=context();
    const renderItem: ListRenderItem<CardItem> = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.circleItem}>
                <Text style={styles.circleItemText}>{item.category}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={allAdverts}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>


    );
};

export default Category;