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

        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);

        // WebSocket bağlantısını aç
        await new Promise<void>((resolve, reject) => {
            stompClient.connect({}, (_frame: any) => {
                stompClient.subscribe('/user/1/queue/private', (message: Stomp.Message) => {
                    const newMessage = JSON.parse(message.body);

                });
            resolve();
            }, (error: any) => {
                console.error('WebSocket bağlantı hatası:', error);
                reject(error);
            });
        });
    } catch (error) {
        console.error('WebSocket bağlantı hatası:', error);
    }
};

export const getStompClient = () => stompClient;

export const sendMessage = (text: string) => {
    const stompClient = getStompClient();
    if (stompClient && stompClient.connected) {
        stompClient.send('/app/sendMessage', {}, JSON.stringify(text));
    }
};