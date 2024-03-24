import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomView from "../../components/customView";
import { useEffect, useState } from "react";
import { context } from "../../context";
function ChatRoom(props: any) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const {authState}=context();
    const { navigation } = props;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <Container isScroll={false}>
            <CustomView>
                <View style={{ alignItems: 'center', backgroundColor: "#7E8087", flexDirection: "row", borderRadius: 20, padding: '2%', marginBottom: '5%' }}>
                    <Ionicons name="search" size={20} color={"black"} style={{ paddingRight: '2%' }} />
                    <TextInput placeholder="Ara" placeholderTextColor={"black"} />
                </View>
                <ScrollView>
                    <TouchableOpacity style={{ flexDirection: 'row',backgroundColor:"#7E8087",padding:'2%',borderRadius:20 }} onPress={()=>{
                        if(authState.isLoggedIn){

                            navigation.navigate("chat")
                        }else{
                            Alert.alert("Seni şirkete alan aklımı sikim")
                        }
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50 }}>
                            <Image source={{ uri: "https://picsum.photos/200/300?grayscale" }} style={{
                                width: '100%', height: '100%', borderRadius: 50, borderWidth: 1
                            }} />
                        </View>
                        <View style={{ flex: 5, justifyContent: 'center', paddingLeft: '5%' }}>
                            <Text style={{ fontWeight: "600", fontSize: 20 }}>Ali Bey</Text>
                            <Text style={{ fontWeight: "300" }}>Tüm şirkete mail mi atılır mk</Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:'center'}}>
                            <Text>{formattedTime}</Text>
                            <Ionicons name="checkmark-done" size={20} color={"black"} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </CustomView>
        </Container>
    )
}
export default ChatRoom;