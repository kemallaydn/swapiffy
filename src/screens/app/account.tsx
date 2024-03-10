import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/button";
import Container from "../../components/container";
import styles from "../../styles/app/account";
import NavigationProps from "../../models/navigation.model";
import Navbar from "../../components/navbar";
import CustomView from "../../components/customView";
import { GlobalContext } from "../../context";

function SignInAccount({ navigation }: NavigationProps) {
  const {authDispatch} = useContext(GlobalContext)
  const [selectedButton, setSelectedButton] = useState("Orders");
  const handleButtonPress = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  return (
    <Container>
      <CustomView>
        <View style={styles.content}>
          <Button
            size="sm"
            title="SİPARİŞLERİM"
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
                type: "LOGOUT_USER",
              })

            }}
          />
        </View>
      </CustomView>
    </Container>
  );
}
export default SignInAccount;
