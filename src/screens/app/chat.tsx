import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/container";
import styles from "../../styles/app/chat";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, FlatList, PermissionsAndroid, Platform } from "react-native";
import Stomp, { Client, Message } from 'stompjs';
import Ionicons from "react-native-vector-icons/Ionicons";
import SockJS from "sockjs-client";
import { GlobalContext, context } from "../../context";
import CustomView from "../../components/customView";
import Navbar from "../../components/navbar";
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
interface StompClientState {
    client: Client | null;
    subscription: any;
}
const audioRecorderPlayer = new AudioRecorderPlayer();

function Chat({ navigation }: any) {


    const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            console.log(e);
            return;
        });
        console.log(result);
    };
    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();

        console.log("durr");
    };
    const [messages, setMessages] = useState({ senderId: "", recipientId: "", content: "" });
    const [stompClient, setStompClient] = useState<StompClientState>({ client: null, subscription: null });
    const [messageList, setMessageList] = useState([]);
    const { authState,advertState } = useContext(GlobalContext);
    const id = authState.data.authenticatedUser.id;
    const a = async () => {
        if (Platform.OS === 'android') {
            try {
                const grants = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                ]);

                console.log('write external stroage', grants);

                if (
                    grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.RECORD_AUDIO'] ===
                    PermissionsAndroid.RESULTS.GRANTED
                ) {
                    console.log('Permissions granted');
                } else {
                    console.log('All required permissions not granted');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    }
    useEffect(() => {
        a();
        setMessages({ ...messages, senderId: id, recipientId: advertState.data.userid})
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

            <View style={{alignItems: item.senderId != id ? "flex-start" : "flex-end", paddingLeft: item.senderId != id ? 0 : 60, paddingRight: item.senderId == id ? 0 : 80 }}>
                <View style={{ backgroundColor:"#4D4D4D",  borderRadius:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',margin:15}}>
                <Text style={{ margin: 10 }}>{item.content}</Text>

                </View>
            </View>
        )
    }
    return (
        <Container isScroll={false} visible={false}>
            <CustomView>
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
                <KeyboardAvoidingView behavior={'padding'} style={{}} keyboardVerticalOffset={80}>

                    <View style={{ borderRadius: 0, backgroundColor: '#4D4D4D', marginHorizontal: '-5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '-3%', paddingBottom: '13%', padding: '2%' }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginHorizontal: '1%' }}>
                            <Ionicons name="add-sharp" color={"white"} size={23} />
                        </TouchableOpacity>
                        <TextInput placeholderTextColor={"#7E8087"} placeholder="" value={messages.content} style={styles.textinput} onChangeText={(msg) => setMessages({ ...messages, content: msg })} />
                        {
                            messages.content == "" ?
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                                    <TouchableOpacity onPress={() => { onStopRecord() }} style={{ marginRight: '2%' }}>
                                        <Ionicons name="camera-outline" color={"white"} size={23} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPressOut={onStopRecord} onPressIn={onStartRecord} style={{ marginRight: '1%' }}>
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
