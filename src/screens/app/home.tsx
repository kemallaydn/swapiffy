import React from "react";
import Container from "../../components/container";
import Advert from "../../components/advert";
import Category from "../../components/category";
import {  Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
function Home() {
  return (
    <Container isScroll={true}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: '5%', marginBottom: '5%' }}  >
        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', fontWeight: '700' }}>Merhaba Kemal</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Ionicons name="search" size={20} color="black" style={{ paddingRight: 10 }} />
          <Ionicons name="notifications" size={20} color="black" />
        </View>
      </View>
      <Category/>
      <Advert/>
    </Container>
  )
}
export default Home;

