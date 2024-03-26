import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import Button from "../../components/button";
import Container from "../../components/container";
import styles from "../../styles/app/account";
import NavigationProps from "../../models/navigation.model";
import Navbar from "../../components/navbar";
import CustomView from "../../components/customView";
import { context } from "../../context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LOGOUT_USER } from "../../Constants/actionTypes";

function SignInAccount({ navigation }: NavigationProps) {
  const { authDispatch, advertState: { userAdverts } } = context();
  const [selectedButton, setSelectedButton] = useState("Orders");
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={{backgroundColor:'#7E8087',borderRadius:5,marginBottom:'2%',padding:5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1}}>
          <Image source={{ uri: item.imageurl }} style={{width:60,height:60}} />
        </View>
        <View style={{flex:4}}>
          <Text style={{paddingBottom:'2%',fontWeight:'600'}}>{item.title}</Text>
          <Text style={{fontWeight:'200'}}>{item.description}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
    )
  }
  return (
    <Container isScroll={false}>
      <CustomView>
        <View style={styles.content}>
          <Button
            size="sm"
            title="İLANLARIM"
            style={styles.button}
            textStyle={selectedButton === "Orders" ? { fontWeight: '400' } : { color: '#7E8087' }}
            onPress={() => handleButtonPress("Orders")}
          />
          <Button
            size="sm"
            title="PROFİL"
            style={styles.button}
            textStyle={selectedButton === "Profile" ? { fontWeight: '400' } : { color: '#7E8087' }}
            onPress={() => handleButtonPress("Profile")}
          />
          <Button
            size="sm"
            title="AYARLAR"
            style={styles.button}
            textStyle={selectedButton === "Settings" ? { fontWeight: '400' } : { color: '#7E8087' }}
            onPress={() => handleButtonPress("Settings")}
          />
          <Button
            size="sm"
            title="ÇIKIŞ YAP"
            style={styles.button}
            textStyle={selectedButton === "ÇIKIŞ YAP" ? { fontWeight: '400' } : { color: '#7E8087' }}
            onPress={() => {
              authDispatch({
                type: LOGOUT_USER
              })

            }}
          />
        </View>
        <FlatList
          data={userAdverts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} />
      </CustomView>
    </Container>
  );
}
export default SignInAccount;
