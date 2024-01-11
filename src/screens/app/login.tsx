import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/container";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import styles from "../../styles/auth/account"
import NavigationProps from "../../models/navigation.model";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { GlobalContext, context } from "../../context";
import CustomView from "../../components/customView";
import Navbar from "../../components/navbar";
import { Login } from "../../context/action/Login";
function Account({navigation}:any){
    const [formData, setFormData] = useState({
        email: 'Kemal',
        password: 'Aydın',
   
    });
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const {authDispatch,sepetDispacth}=context();
    const giris=()=>{ 
        Login(formData)(authDispatch);
    }
    const  login=async()=>{
       await axiosInstance.post("http://localhost:8080/v1/auth/login",formData).then(async(res)=>{
        await axiosInstance.post("http://localhost:8080/v1/api/card/getCard",{
            kullaniciId:res.data.authenticatedUser.id
        }).then((res)=>{
            sepetDispacth({
                type: "ADD_SUCCES",
                payload: res.data
              })
        })
        authDispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data
          })

       }).catch((err)=>{
        console.log(err);
       })
    }
    return(
        <Container>
            <CustomView>
                <Text style={styles.text}>HESABINIZA GİRİŞ YAPIN</Text>
                <TextInput placeholderTextColor={"#7E8087"}  placeholder="E-POSTA" style={styles.textinput} onChangeText={(text) => handleChange('email', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="PAROLA" style={styles.textinput} onChangeText={(text) => handleChange('password', text)}/>
                <Button size="sm" title="OTURUM AÇ" onPress={()=>giris()}/>
                <Text style={styles.text}>Parolanızı mı unuttunuz?</Text>
                <Text style={styles.text}>HESABINIZ YOK MU?</Text>
                <Button size="sm" title="KAYDOLUN" onPress={()=>{navigation.navigate("signup")}}/>
            </CustomView>
        </Container>
    )
}
export default Account;