import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../../components/button";
import Container from "../../components/container";
import styles from "../../styles/app/account";
import NavigationProps from "../../models/navigation.model";

function SignInAccount({ navigation }:NavigationProps) {
  const [selectedButton, setSelectedButton] = useState("Orders");
  const handleButtonPress = (buttonName:string) => {
    setSelectedButton(buttonName);
  };
  return (
    <Container>
      <View style={styles.content}>
        <Button
          size="sm"
          title="SİPARİŞLERİM"
          style={styles.button}
          textStyle={selectedButton === "Orders" ? {fontWeight: '400' }: {color:'#7E8087'}}
          onPress={() => handleButtonPress("Orders")}
        />
        <Button
          size="sm"
          title="PROFİL"
          style={styles.button}
          textStyle={selectedButton === "Profile" ? {fontWeight: '400' }: {color:'#7E8087'}}
          onPress={() => handleButtonPress("Profile")}
        />
        <Button
          size="sm"
          title="AYARLAR"
          style={styles.button}
          textStyle={selectedButton === "Settings" ? {fontWeight: '400' }: {color:'#7E8087'}}
          onPress={() => handleButtonPress("Settings")}
        />
        <Button
          size="sm"
          title="AYARLAR"
          style={styles.button}
          textStyle={selectedButton === "Settings" ? {fontWeight: '400' }: {color:'#7E8087'}}
          onPress={() => handleButtonPress("Settings")}
        />
        <Button
          size="sm"
          title="AYARLAR"
          style={styles.button}
          textStyle={selectedButton === "Settings" ? {fontWeight: '400' }: {color:'#7E8087'}}
          onPress={() => handleButtonPress("Settings")}
        />
      </View>
      <Text style={styles.text}>TAHMİNİ TESLİM TARİHİ</Text>
    </Container>
  );
}
export default SignInAccount;
