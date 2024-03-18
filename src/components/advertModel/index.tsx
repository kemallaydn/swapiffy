import React, { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomView from '../customView';
import Button from '../button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AdvertModel = ({ visible, onClose }) => {
    const [modalVisible, setModalVisible] = useState(visible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>

            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '3%', marginHorizontal: "3%" }}>
                        <Text style={{ fontWeight: 'bold' }}>...</Text>
                        <Ionicons name="chevron-down-outline" size={20} onPress={onClose} />
                    </View>
                    <ScrollView>
                        {/* Ürüne ait bilgiler */}
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>

                            <Image source={{ uri: "http://localhost:8080/photos/get?photoName=2.jpeg" }} style={{ resizeMode: "contain", width: '100%', height: 300 }} />
                        </View>
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>Ürün Başlığı</Text>
                            <Text>Açıklama: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            <Text>Fiyat: $19.99</Text>
                            <Text>Renk: Mavi</Text>
                            <Text>Boyut: XL</Text>
                            {/* Daha fazla ürün bilgisi ekleyebilirsiniz */}
                        </View>
                    </ScrollView>
                    <Button size='lg' title="Mesaj Gönder" onPress={onClose} />
                    <Button size='lg' title="Teklif Gönder" onPress={onClose} />
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Ekranın alt kısmına yerleştirir
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arkaplanı hafifçe karartır
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        paddingTop: 10,
        paddingBottom: '10%',
        height: Dimensions.get('window').height * 0.8,
        maxHeight: '70%'
    },
    productInfo: {
        marginBottom: 20,
        margin: 20,
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


export default AdvertModel;