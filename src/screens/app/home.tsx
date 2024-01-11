import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Tab from "../../components/tab/";
import styles from "../../styles/app/home"
import { Image } from "react-native";
import axios from "axios";
import getData from "../../utils/getData";
import Card from "../../components/card";
import Circle from "../../components/circle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { context } from "../../context";
import SwapModal from "../../components/swapModal";
function Home() {

  const [data, setData] = useState([]);
  const [resim, setResim] = useState([]);
 
  async function asyncExample() {
    setData(await getData())
  }
  useEffect(() => {
    asyncExample();
    
  }, [])

  return (
    <Container isScroll={false}>
      <SwapModal/>
      <Circle data={data} />
      <Card data={data} />

    </Container>
  )
}
export default Home;