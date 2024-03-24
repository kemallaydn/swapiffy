import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Advert from "../../components/advert";
import Category from "../../components/category";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import {useLocation} from "../../utils/getLocation";
import LocationMarker,{LocationBar} from "../../components/location";
import {context} from "../../context";


function Home() {
  const {advertState:{allAdverts}}=context();
  
  useEffect(() => {
    const getLocations = async() => {
     const response = await useLocation();
     console.log(response);
    }
    getLocations();
  }, [])
  return (
    <Container isScroll={false}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: '5%', marginBottom: '5%' }}  >
        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', fontWeight: '700' }}>Merhaba Kemal</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Ionicons name="search" size={20} color="black" style={{ paddingRight: 10 }} />
          <Ionicons name="notifications" size={20} color="black" />
        </View>
      </View>
      <Category data={allAdverts} />
      <Advert data={allAdverts} />
    </Container>
  )
}
export default Home;

