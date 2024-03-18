import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/shoppingcart"
import { Image, TouchableOpacity, View } from "react-native";
import Button from "../../components/button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";
import NavigationProps from "../../models/navigation.model";
import Navbar from "../../components/navbar";
import CustomView from "../../components/customView";
import { FlatList } from "react-native";
import getData from "../../utils/getAdvertisement";
import { context } from "../../context";
import { useFocusEffect } from "@react-navigation/native";
import { deleteProduct, updateProduct } from "../../context/action/addProduct";
import { findByIdProduct } from '../../services/getAdvertiment';
import { removeProductFromFavorites } from "../../services/favorites";


function ShoppingCart({ navigation }: NavigationProps) {
    const { favoriteState, favoritesDispacth, authState } = context();
    const [select, setSelect] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            for (const element of favoriteState.favorite) {
                const response = await findByIdProduct(element.toString());
                setData(prev => [...prev, response]);
            }
        }
        getProduct();
    }, []);
    const removeProductById = (productIdToRemove) => {
        // Veriyi güncellemeden önce mevcut veriyi kopyalayın
        const newData = [...data];
        // newData içinde productIdToRemove'a sahip olan öğeyi filtreleyerek kaldırın
        const updatedData = newData.filter(item => item.id !== productIdToRemove);
      
        // setData ile güncellenmiş veriyi state'e atayın
        setData(updatedData);
      };
      

    const renderİtem = ({ item }) => {
        return (
            <View style={styles.contentShop}>
                <View style={styles.context}>
                    <Image source={{ uri: item.product ? item.product.image : item.image }} style={styles.image} />
                </View>
                <View style={styles.context}>
                    <TouchableOpacity onPress={() => {
                        favoritesDispacth({ type: 'REMOVE', payload: item.id.toString() });
                        removeProductById(item.id);
                        removeProductFromFavorites({ productId: item.id, userId: authState.data.authenticatedUser.id })
                    }} style={{ alignItems: 'flex-end', margin: '5%' }}>
                        <Ionicons name="close" color={"pink"} size={20} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={styles.text}>Karayip Korsanları</Text>
                    </View>
                </View>
            </View>

        )
    }
    return (
        <Container isScroll={false}>
            <CustomView>
                <View style={styles.content}>
                    <Button size="sm" title="İlanlarım"
                        textStyle={select ? { fontWeight: '400' } : { color: '#7E8087' }}
                        style={styles.button} onPress={() => {
                            setSelect(true)
                        }} />
                    <Button size="sm" title="Favoriler"
                        textStyle={!select ? { fontWeight: '400' } : { color: '#7E8087' }}

                        style={styles.button} onPress={() => {
                            setSelect(false)
                        }} />
                </View>
                <FlatList
                    data={data}
                    renderItem={renderİtem}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ marginHorizontal: '0.5%' }}
                />
            </CustomView>
        </Container>
    )
}
export default ShoppingCart;