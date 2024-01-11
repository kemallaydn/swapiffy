import React, { useState } from 'react';
import { View, Modal, Image, Text, Button } from 'react-native';
const SwapModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Button title="Modalı Aç" onPress={() => setModalVisible(true)} />

            <Modal visible={modalVisible} animationType="slide">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text>Modal İçindeki Metin</Text>
                    <Button title="Kapat" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default SwapModal;
