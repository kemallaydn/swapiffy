import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/shoppingcart"
import { Image, TouchableOpacity, View } from "react-native";
import Button from "../../components/button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";
import NavigationProps from "../../models/navigation.model";

function ShoppingCart({ navigation }:NavigationProps) {
    return (
        <Container>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="close" color={"white"} size={20} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Button size="sm" title="Alışveriş Sepeti" style={styles.button} />
                <Button size="sm" title="Favoriler" style={styles.button} />
            </View>
            <View style={styles.contentShop}>
                <View style={styles.context}>
                    <Image source={{ uri: "https://picsum.photos/id/0/5000/3333" }} style={styles.image} />
                </View>
                <View style={styles.context}>
                    <TouchableOpacity onPress={() => { navigation.goBack()}} style={{alignItems:'flex-end',margin:'5%'}}>
                        <Ionicons name="close" color={"white"} size={20} />
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={styles.text}>Karayip Korsanları</Text>
                        <Text style={styles.text}>122.23 TL</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:'5%'}}>
                        <Button size="sm" title="-" style={{paddingHorizontal:'6%'}} />
                        <View style={{justifyContent:'center',alignItems:'center',borderColor:'white',borderWidth:1,paddingHorizontal:'7%'}}>

                        <Text style={[{color:'white'}]}>1</Text>
                        </View>
                        <Button size="sm" title="+" style={{paddingHorizontal:'6%'}} />
                    </View>
                </View>
            </View>
        </Container>
    )
}
export default ShoppingCart;