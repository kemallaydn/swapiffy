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
import getData from "../../utils/getData";
import { context } from "../../context";
import { useFocusEffect } from "@react-navigation/native";

function ShoppingCart({ navigation }: NavigationProps) {
    const { favoriteState, sepetState, sepetDispacth, favoritesDispacth } = context();
    const [select, setSelect] = useState(true);
    const [data, setData] = useState([]);
    const [resim, setResim] = useState([]);
    async function asyncExample() {
        setData(await getData())
    }
    useEffect(() => {
        if (select) {
            setData(sepetState.sepet)
        }
        else {
            setData(favoriteState.favorite)
        }
    }, [select, favoriteState.favorite, sepetState.sepet])

    const renderİtem = ({ item }) => {
        return (
            <View style={styles.contentShop}>
                <View style={styles.context}>
                    <Image source={{ uri: item.product ? item.product.image : item.image }} style={styles.image} />
                </View>
                <View style={styles.context}>
                    <TouchableOpacity onPress={() => {
                        if (select) {
                            sepetDispacth({
                                type: "CIKAR",
                                payload: {
                                    urunId: item.urunId
                                }
                            })
                        } else {
                            favoritesDispacth({
                                type: "CIKAR",
                                payload: {
                                    urunId: item.urunId
                                }
                            })
                        }
                        console.log(sepetState)
                        console.log(item.urunId)
                    }} style={{ alignItems: 'flex-end', margin: '5%' }} onPressIn={() => {

                    }}>
                        <Ionicons name="close" color={"pink"} size={20} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={styles.text}>Karayip Korsanları</Text>
                        <Text style={styles.text}>122.23 TL</Text>
                    </View>
                    {select && <View style={{ flexDirection: 'row', margin: '5%' }}>
                        <Button size="sm" title="-" style={{ paddingHorizontal: '6%' }} />
                        <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 1, paddingHorizontal: '7%' }}>

                            <Text style={[{ color: 'white' }]}>{item.adet}</Text>
                        </View>
                        <Button size="sm" title="+" style={{ paddingHorizontal: '6%' }} />
                    </View>}
                </View>
            </View>

        )
    }
    return (
        <Container>
            <Navbar />
            <CustomView>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name="close" color={"white"} size={20} />
                </TouchableOpacity>
                <View style={styles.content}>
                    <Button size="sm" title="Alışveriş Sepeti" style={styles.button} onPress={() => {
                        setSelect(true)
                    }} />
                    <Button size="sm" title="Favoriler" style={styles.button} onPress={() => {
                        setSelect(false)
                    }} />
                </View>
                <FlatList
                    data={data}
                    renderItem={renderİtem}
                    keyExtractor={(item) => item.product ? item.product.id : item.urunId}
                    style={{ marginHorizontal: '0.5%' }}
                />

            </CustomView>
        </Container>
    )
}
export default ShoppingCart;