import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/button";
import styles from "../../styles/auth/singup"
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
function SignUp({ navigation }: any) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    const handleSignUp = () => {
        axios.post("http://localhost:8080/users/saveOrder",formData).then(res=>{
            navigation.navigate("account")
        }).catch(err=>{
            console.log(err)
        })        
      };
    
    return (
        <Container>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate("account") }}>
                    <Ionicons name="arrow-back-outline" color={"white"} size={15} />
                </TouchableOpacity>
                <Text style={styles.text}>KİŞİSEL BİLGİLER</Text>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="E-POSTA" style={styles.textinput} keyboardType="email-address" onChangeText={(text) => handleChange('email', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="PAROLA" style={styles.textinput} secureTextEntry keyboardType="visible-password" onChangeText={(text) => handleChange('password', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="AD" style={styles.textinput} onChangeText={(text) => handleChange('firstName', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="SOYAD" style={styles.textinput} onChangeText={(text) => handleChange('lastName', text)}/>
                <TextInput placeholderTextColor={"#7E8087"} placeholder="CEP TELEFONU" style={styles.textinput} keyboardType='phone-pad' onChangeText={(text) => handleChange('phoneNumber', text)}/>
                <Button size="sm" title="HESAP OLUŞTUR" onPress={handleSignUp}/>
            </View>
        </Container>
    )
}
export default SignUp;