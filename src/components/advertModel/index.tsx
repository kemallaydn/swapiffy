import React, { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CustomView from '../customView';
import Button from '../button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LocationMarker, { LocationBar } from '../location';
import { context } from '../../context';
import { useNavigation } from '@react-navigation/native';

const AdvertModel = ({ visible, onClose },props:any) => {
    const  navigation  = useNavigation();
    const [modalVisible, setModalVisible] = useState(visible);
    const { favoritesDispacth, favoriteState: { favorite }, authState, sepetDispacth,advertState,} = context();
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
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                            <Image source={{ uri: "http://localhost:8080/photos/get?photoName=2.jpeg" }} style={{ resizeMode: "contain", width: '100%', height: 250 }} />
                        </View>
                    <ScrollView>
                        <LocationBar />
                        {/* Ürüne ait bilgiler */}
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>Ayakkabı</Text>
                            <Text>Ayakkabı </Text>
                            <Text>Açıklama : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse illum vero accusamus nemo accusantium, sunt iusto, ratione similique laborum asperiores quae ad aut blanditiis doloribus hic at quisquam eos!</Text>
                            <Text>Ürün Kategorisi : Ayakkabı</Text>
                            <Text>Durumu : İyi</Text>
                            <Text style={{fontWeight:'bold',paddingVertical:'3%'}}>İlan Konumu</Text>
                            <LocationMarker />

                        </View>
                        {/* Daha fazla ürün bilgisi ekleyebilirsiniz */}
                    </ScrollView>
                    <Button size='lg' title="Mesaj Gönder" onPress={()=>{
                        navigation.navigate('chat')
                    }} />
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
        maxHeight: '74%'
    },
    productInfo: {
        marginBottom: 20,
        marginHorizontal: 20,
        paddingBottom:'27%'
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});


export default AdvertModel;