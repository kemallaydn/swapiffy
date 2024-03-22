import React, {  useState } from "react";
import Container from "../../components/container";
import { Text, TextInput, View } from "react-native";
import Button from "../../components/button";
import styles from "../../styles/auth/account"
import { context } from "../../context";
import CustomView from "../../components/customView";
import { Login } from "../../context/action/Login";
function Account({navigation}:any){
    const {authDispatch}=context();
    const [formData, setFormData] = useState({
        email: 'Kemal',
        password: 'Aydın',
   
    });
    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    const giris=()=>{ 
        Login(formData)(authDispatch);
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