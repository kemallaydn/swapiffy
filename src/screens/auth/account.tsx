import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import styles from "../../styles/auth/account"
import NavigationProps from "../../models/navigation.model";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
function Account({navigation}:any){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
   
    });
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    const  login=async()=>{
       await axiosInstance.post("auth/login",formData).then((res)=>{
        console.log(res.data)
       }).catch((res)=>{
        console.log(res);
       })
    }
    return(
        <Container>
            <View>
                <Text style={styles.text}>HESABINIZA GİRİŞ YAPIN</Text>
                <TextInput placeholderTextColor={"#7E8087"}  placeholder="E-POSTA" style={styles.textinput} onChangeText={(text) => handleChange('email', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="PAROLA" style={styles.textinput} onChangeText={(text) => handleChange('password', text)}/>
                <Button size="sm" title="OTURUM AÇ" onPress={()=>login()}/>
                <Text style={styles.text}>Parolanızı mı unuttunuz?</Text>
                <Text style={styles.text}>HESABINIZ YOK MU?</Text>
                <Button size="sm" title="KAYDOLUN" onPress={()=>{navigation.navigate("signup")}}/>
            </View>
        </Container>
    )
}
export default Account;