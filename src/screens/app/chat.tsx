import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/chat";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, FlatList } from "react-native";
import Stomp, { Client, Message } from 'stompjs';
import Ionicons from "react-native-vector-icons/Ionicons";
import SockJS from "sockjs-client";
import { GlobalContext } from "../../context";
import CustomView from "../../components/customView";
import Navbar from "../../components/navbar";
interface StompClientState {
    client: Client | null;
    subscription: any;
}

function Chat({ navigation }: any) {
    const [messages, setMessages] = useState({ senderId: "", recipientId: "", content: "" });
    const [stompClient, setStompClient] = useState<StompClientState>({ client: null, subscription: null });
    const [messageList, setMessageList] = useState([]);
    const {authState}=useContext(GlobalContext);
    const id =authState.data.authenticatedUser.id;
    useEffect(() => {
        setMessages({ ...messages, senderId: id, recipientId: id==1 ? "2" : "1"  })
        const initializeWebSocket = async () => {
            const socket = new SockJS('http://192.168.1.102:8080/ws');
            const client = Stomp.over(socket);
            client.connect(
                {},
                (frame) => {
                    console.log('WebSocket bağlantısı kuruldu:', frame);
                    const subscription = client.subscribe(`/user/${id}/queue/private`, (message) => {
                        const newMessage = JSON.parse(message.body);
                        setMessageList((prevMessages) => [...prevMessages, newMessage]);
                    });
                    setStompClient({ client, subscription });
                },
                (error) => {
                    console.error('WebSocket bağlantı hatası:', error);
                }
            );
            return () => {
                if (stompClient) {
                    stompClient.client?.disconnect();
                    stompClient.subscription.unsubscribe();
                }
            };
        };
        initializeWebSocket();
    }, []);
    const onSend = () => {
        stompClient.client?.send('/app/chat', {}, JSON.stringify(messages));
        setMessageList((prevMessages) => [...prevMessages, messages]);
        setMessages({ ...messages, content: "" })
    };
    const renderItem = ({ item }) => {

        return (

            <View style={{ alignItems: item.senderId != id ? "flex-start" :"flex-end" ,paddingLeft:item.senderId!=id ? 0 : 60,paddingRight:item.senderId==id ? 0 : 80}}>
                <Text style={{backgroundColor:'white',padding:5,borderRadius:10,margin:15}}>{item.content}</Text>
            </View>
        )
    }
    return (
        <Container visible={false}>
            <CustomView>
                <Navbar/>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4D4D4D', paddingBottom: '2%' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flex: 1 }}>
                    <Ionicons name="chevron-back-sharp" color={"white"} size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 10, marginLeft: '3%' }}>
                    <View style={{ width: 37, height: 37, borderRadius: 40 }}>
                        <Image source={{ uri: "https://picsum.photos/id/0/5000/3333" }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 40 }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: '5%' }}>Kemal</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("account") }} style={{ flex: 1 }}>
                    <Ionicons name="alert-circle-outline" color={"white"} size={30} />
                </TouchableOpacity>
            </View>
                <FlatList
                    style={{ flex: 1, backgroundColor: "#333333", marginHorizontal: '-5%', }}
                    data={messageList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}

                />
            <KeyboardAvoidingView behavior={'padding'} style={{  }} keyboardVerticalOffset={0}>

                <View style={{ borderRadius: 0, backgroundColor: '#4D4D4D',marginHorizontal: '-5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '-10%', paddingBottom: '13%',padding:'2%' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginHorizontal: '1%' }}>
                        <Ionicons name="add-sharp" color={"white"} size={23} />
                    </TouchableOpacity>
                    <TextInput placeholderTextColor={"#7E8087"} placeholder="" value={messages.content} style={styles.textinput} onChangeText={(msg) => setMessages({ ...messages, content: msg })} />
                    {
                        messages.content == "" ?
                            <View style={{ flexDirection: 'row' ,justifyContent:'space-around'}}>

                                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginRight: '2%' }}>
                                    <Ionicons name="camera-outline" color={"white"} size={23} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { onSend() }} style={{ marginRight: '1%' }}>
                                    <Ionicons name="mic-outline" color={"white"} size={21} />
                                </TouchableOpacity>
                            </View> : <TouchableOpacity onPress={() => { onSend() }} style={{ marginRight: '2%' }}>
                                <Ionicons name="paper-plane-sharp" color={"white"} size={23} />
                            </TouchableOpacity>
                    }
                </View>
            </KeyboardAvoidingView>
            </CustomView>
        </Container>
    );
}

export default Chat;
