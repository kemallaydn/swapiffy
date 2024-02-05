import React, { useState } from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const ImagePickerScreen = ({ visible, setVisible }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const toggleModal = () => {
        setVisible(!visible);
    };

    const openCamera = async () => {
        try {
            const image = await ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
            });
            setSelectedImage(image.path);
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    const openGallery = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                multiple: true,
            });
            setSelectedImage(image.path);
            toggleModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={toggleModal} >
                <View style={styles.modalContainer}>

                    <Button title="Kamerayı Aç" onPress={openCamera} color={"white"}/>
                    <Button title="Galeriden Seç" onPress={openGallery} color={"white"} />
                    <Button title="Kapat" onPress={toggleModal} color={"white"} />

                </View>
            </Modal>
            {selectedImage && (
                <View>
                    <Image source={{ uri: selectedImage }} style={{ width: 200, height: 300 }} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
flex:1
    },
    modalContainer: {

        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 12,

    },
});
export default ImagePickerScreen;
