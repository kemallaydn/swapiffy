import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import getData from "../../utils/getData";
import Card from "../../components/card";
import Circle from "../../components/circle";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Home() {
  const [data, setData] = useState([]);
  async function asyncExample() {
    setData(await getData())
  }
  useEffect(() => {
    asyncExample();
  }, [])
  return (
    <Container isScroll={false}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: '5%',marginBottom:'5%' }}  >
        <Text style={{ color: 'black', fontSize: 16, textAlign: 'center',fontWeight:'700' }}>Merhaba Kemal</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Ionicons name="search" size={20} color="black" style={{paddingRight:10}}/>
          <Ionicons name="notifications" size={20} color="black" />
        </View>
      </View>
      <Circle data={data} />
      <Card data={data} />
    </Container>
  )
}
export default Home;