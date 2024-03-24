import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderColor: "white",
        width: '40%',
        marginBottom: '5%',
        paddingHorizontal: '1%',
        flex: 1,

    },
    buttonText: {
        fontWeight: '600',
        fontSize: 12,
        color: 'white'
    },
    imageContent: {
        justifyContent: 'center',
        width: '100%',
        height: 250,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '6%',
        color: 'white'
    },
    
})