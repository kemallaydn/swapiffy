import React, { useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/shoppingcart"
import { Alert, Image, TouchableOpacity, View } from "react-native";
import Button from "../../components/button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";
import NavigationProps from "../../models/navigation.model";
import CustomView from "../../components/customView";
import { FlatList } from "react-native";
import { context } from "../../context";
import { removeProductFromFavorites } from "../../services/Favorites";


function ShoppingCart({ navigation }: NavigationProps) {
    const {advertDispacth,  authState:{userDetails:{id}} ,advertState:{favoriteAdverts}} = context();
    const [select, setSelect] = useState(true);

    const removeFromFavorites = (id:any) => {
        removeProductFromFavorites({productId: id, userId: id })(advertDispacth)((res)=>{
            Alert.alert(res.split(",")[0],res.split(",")[1])
        })
    }

    const renderİtem = ({ item }:any) => {
        return (
            <View style={styles.contentShop}>
                <View style={styles.context}>
                    <Image source={{ uri: item.imageurl}} style={styles.image} />
                </View>
                <View style={styles.context}>
                    <TouchableOpacity onPress={() => removeFromFavorites(item.id)} style={{ alignItems: 'flex-end', margin: '5%' }}>
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
                    data={favoriteAdverts}
                    renderItem={renderİtem}
                    keyExtractor={({id}) => id}
                    style={{ marginHorizontal: '0.5%' }}
                />
            </CustomView>
        </Container>
    )
}
export default ShoppingCart;