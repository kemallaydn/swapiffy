import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
    let location: { latitude: number; longitude: number } | null = null;

    Geolocation.getCurrentPosition(
        (position: { coords: { latitude: any; longitude: any } }) => {
            const { latitude, longitude } = position.coords;
            location = { latitude, longitude };
        },
        (error: any) => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    return location;
};

export default useLocation;
