import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/chat";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, FlatList } from "react-native";
import Stomp, { Client, Message }  from 'stompjs';
import Ionicons from "react-native-vector-icons/Ionicons";
import SockJS from "sockjs-client";
interface StompClientState {
    client: Client | null;
    subscription: any;
  }
  
function Chat({ navigation }: any) {
    const [messages, setMessages] = useState({ senderId: "", recipientId: "", content: "" });
    const [stompClient, setStompClient] = useState<StompClientState>({ client: null, subscription: null });
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        setMessages({ ...messages, senderId: "1", recipientId: "1" })
        const initializeWebSocket = async () => {
            const socket = new SockJS('http://localhost:8080/ws');
            const client = Stomp.over(socket);
            client.connect(
                {},
                (frame) => {
                    console.log('WebSocket bağlantısı kuruldu:', frame);
                    const subscription=client.subscribe('/user/2/queue/private', (message) => {
                        const newMessage = JSON.parse(message.body);
                        console.log("message", newMessage);
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
        setMessages({ ...messages, content: ""})
    };
    const renderItem =()=>{
        console.log("safsa"+mesajlar)
        return(
            <View>
                <Text>kemal</Text>
            </View>
        )
    }
    
    return (
        <Container visible={false}>

            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4D4D4D', marginHorizontal: '-5%', padding: '1%' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flex: 1 }}>
                    <Ionicons name="chevron-back-sharp" color={"white"} size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 10, marginLeft: '3%' }}>
                    <View style={{ width: 40, height: 40, borderRadius: 75 }}>
                        <Image source={{ uri: "https://picsum.photos/id/0/5000/3333" }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 40 }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: '5%' }}>Kemal</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("account") }} style={{ flex: 1 }}>
                    <Ionicons name="alert-circle-outline" color={"white"} size={30} />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }} keyboardVerticalOffset={100}>
                
                <FlatList
                style={{ flex: 1 }}
        data={messageList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.content}</Text>}
      />
                <View style={{ borderRadius: 0, backgroundColor: '#4D4D4D', marginHorizontal: '-5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '-15%', paddingBottom: '13%', paddingHorizontal: '0.5%', paddingVertical: '3%' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginHorizontal: '1%' }}>
                        <Ionicons name="add-sharp" color={"white"} size={23} />
                    </TouchableOpacity>
                    <TextInput placeholderTextColor={"#7E8087"} placeholder="" value={messages.content} style={styles.textinput} onChangeText={(msg) => setMessages({ ...messages, content: msg })} />
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginRight: '2%' }}>
                        <Ionicons name="camera-outline" color={"white"} size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onSend() }} style={{ marginRight: '1%' }}>
                        <Ionicons name="mic-outline" color={"white"} size={21} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default Chat;
