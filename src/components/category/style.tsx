import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderBottomColor: "white",
        marginHorizontal: '3%',
        paddingBottom: '5%',
    },
    circleItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 70,
        marginHorizontal: 3,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleItemText: {
        color: 'white',
        fontWeight: '400'
    }
})