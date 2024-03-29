import { Text, TouchableOpacity, View } from "react-native";
import Container from "../container";
import styles from "./style"
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabProps from "../../models/tab.model";
import { useNavigation } from "@react-navigation/native";
const Tab:React.FC<TabProps> = ({ label, onPress, isSelected}) => {
  const tabItems=["home-sharp","heart-circle-outline", "add-sharp","pencil-sharp","person-circle"]
  const tabItems2=["ANA SAYFA","SOHBET","+","İLANLARIM","HESAP"]
  const  {navigate}=useNavigation(); 
  const press=(index:any)=>{
    switch (index) {
      case 0:
         navigate("home")
        break;
      case 1:
        navigate("chatRoom")
        break;
      case 2:
        navigate("favorites")
        break;
      case 3:
        navigate("ShoppingCart")
        break;
      case 4:
        navigate("account")
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {tabItems2.map((item,index)=>(
          <TouchableOpacity key={index} onPress={()=>press(index)}>
            {
              item =="+" ? <Ionicons name="add-sharp" size={25} color={"white"}/>: <Text style={styles.text}>{item}</Text>
            }
          </TouchableOpacity>
      ))}
    </View>
  );
};
export default Tab;