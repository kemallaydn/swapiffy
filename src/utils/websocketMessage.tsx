// WebSocketModule.js

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient: any = null;

export const connectWebSocket = async () => {
    try {
        if (stompClient && stompClient.connected) {
            console.log('WebSocket zaten bağlı.');
            return;
        }

        // WebSocket bağlantısı oluşturuluyor ("/ws" endpoint'ini kullanıyoruz)
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);

        // WebSocket bağlantısını aç
        await new Promise<void>((resolve, reject) => {
            stompClient.connect({}, (frame) => {
                console.log('WebSocket bağlantısı kuruldu:', frame);
                stompClient.subscribe('/user/1/queue/private', (message) => {
                    const newMessage = JSON.parse(message.body);
                    console.log("gelen mesaj", newMessage);

                });
            resolve();
            }, (error) => {
                console.error('WebSocket bağlantı hatası:', error);
                reject(error);
            });
        });
    } catch (error) {
        console.error('WebSocket bağlantı hatası:', error);
    }
};

export const getStompClient = () => stompClient;

export const sendMessage = (text) => {
    console.log("naber", text)
    const stompClient = getStompClient();
    if (stompClient && stompClient.connected) {
        stompClient.send('/app/sendMessage', {}, JSON.stringify(text));
    }
};