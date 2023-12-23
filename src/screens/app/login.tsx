import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/container";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import styles from "../../styles/auth/account"
import NavigationProps from "../../models/navigation.model";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { GlobalContext } from "../../context";
import CustomView from "../../components/customView";
import Navbar from "../../components/navbar";
function Account({navigation}:any){
    const [formData, setFormData] = useState({
        email: 'Kemal',
        password: 'Aydın',
   
    });
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    const {authDispatch}=useContext(GlobalContext);
    const  login=async()=>{
       await axiosInstance.post("http://localhost:8080/v1/auth/login",formData).then((res)=>{
        authDispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
          })
        console.log(res.data)
       }).catch((err)=>{
        console.log(err);
       })
    }
    return(
        <Container>
            <Navbar/>
            <CustomView>
                <Text style={styles.text}>HESABINIZA GİRİŞ YAPIN</Text>
                <TextInput placeholderTextColor={"#7E8087"}  placeholder="E-POSTA" style={styles.textinput} onChangeText={(text) => handleChange('email', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="PAROLA" style={styles.textinput} onChangeText={(text) => handleChange('password', text)}/>
                <Button size="sm" title="OTURUM AÇ" onPress={()=>login()}/>
                <Text style={styles.text}>Parolanızı mı unuttunuz?</Text>
                <Text style={styles.text}>HESABINIZ YOK MU?</Text>
                <Button size="sm" title="KAYDOLUN" onPress={()=>{navigation.navigate("signup")}}/>
            </CustomView>
        </Container>
    )
}
export default Account;