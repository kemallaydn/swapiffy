import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationMarker = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    let watchID: any;
    useEffect(() => {
        Geocoder.init("AIzaSyBT5Ev7MDzWLgeLhkzXKNeQcMGtpkuB6Dw"); // use a valid API key
        const getLocation = () => {
            Geolocation.getCurrentPosition(
                async (position: { coords: { latitude: any; longitude: any; }; }) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                        const addressResponse = await Geocoder.from({ latitude, longitude });
                        const formattedAddress = addressResponse.results[0].formatted_address;
                        setAddress(formattedAddress);
                    } catch (error) {
                        setError(error.message);
                    }
                },
                (error: { message: React.SetStateAction<null>; }) => {
                    setError(error.message);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );

        };
        getLocation();
        // Clean-up function: cancel the subscription when the component is unmounted
        return () => {
        };
    }, []);

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 40.7741,
                        longitude: 30.7665,
                        latitudeDelta: 0.9223,
                        longitudeDelta: 0.9234,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 40.7741,
                            longitude: 30.7665,
                        }}
                        title={'Kullanıcının Konumu'}
                        description={'Buradasınız!'}
                    />
                </MapView>
            )}

        </View>
    );
};

export default LocationMarker;
export const LocationBar = ()=>{
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    let watchID: any;
    useEffect(() => {
        Geocoder.init("AIzaSyBT5Ev7MDzWLgeLhkzXKNeQcMGtpkuB6Dw"); // use a valid API key
        const getLocation = () => {
         Geolocation.getCurrentPosition(
                async (position: { coords: { latitude: any; longitude: any; }; }) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        setLocation({ latitude, longitude });
                        const addressResponse = await Geocoder.from({ latitude, longitude });
                        const formattedAddress = addressResponse.results[0].formatted_address;
                        setAddress(formattedAddress);
                    } catch (error) {
                        setError(error.message);
                    }
                },
                (error: { message: React.SetStateAction<null>; }) => {
                    setError(error.message);
                },
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );

        };
        getLocation();
        // Clean-up function: cancel the subscription when the component is unmounted
        return () => {

        };
    }, []);
    return(
        <View style={{flexDirection:'row',alignItems:'center',padding:'5%'}}>
            <Ionicons name="location" size={15} color="black" />
            {address 
                ? <Text>{address.split(",")[0]} , {address.split(",")[1]}</Text> 
                : <Text>Yükleniyor...</Text>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '38%',
        width: '100%',
        borderRadius:10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        borderRadius:5,
        ...StyleSheet.absoluteFillObject,
    },
});
