import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
        async (position: { coords: { latitude: any; longitude: any; }; }) => {
            try {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
            } catch (error) {
            reject(error);
            }
        },
        (error: { message: React.SetStateAction<null>; }) => {
            reject(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    });
};

