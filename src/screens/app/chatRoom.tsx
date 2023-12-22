import { Image, Text, TextInput, View } from "react-native";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomView from "../../components/customView";
import { useEffect, useState } from "react";

function ChatRoom() {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
}, []);
const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <Container>
            <Navbar title="Sohbetler" />
            <CustomView>
                <View style={{ alignItems: 'center', backgroundColor: "#7E8087", flexDirection: "row", borderRadius: 20, padding: '2%', marginVertical: '5%' }}>
                    <Ionicons name="search" size={20} color={"white"} style={{ paddingRight: '2%' }} />
                    <TextInput placeholder="Ara" />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' ,height:50,width:50}}>
                        <Image source={{ uri: "https://picsum.photos/200/300?grayscale" }} style={{width: '100%',height: '100%',borderRadius: 50,borderWidth: 1
                        }} />
                    </View>
                    <View style={{flex:5,justifyContent:'center',paddingLeft:'5%'}}>
                        <Text>Kemal</Text>
                        <Text style={{fontWeight:"200"}}>Kemal</Text>
                    </View>
                    <View>
                        <Text>{formattedTime}</Text>
                    </View>
                </View>
            </CustomView>
        </Container>
    )
}
export default ChatRoom;