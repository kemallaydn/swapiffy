import React from 'react';
import { TouchableOpacity, Text, FlatList, Image, View, ListRenderItem, StyleSheet } from 'react-native';
import CardItem, { CardProps } from '../../models/card.model';
import styles from "./style";

const Category: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.circleItem}>
                <Text style={styles.circleItemText}>{item.category}</Text>
            </TouchableOpacity>
        );
    };
    return (
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ id }) => id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginHorizontal:'3%',paddingBottom:'18%'}}
            />


    );
};

export default Category;