import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
       flexDirection:'row',

    },
    contentShop:{
        flexDirection:'row',
        height:200
    },
    text: {
        color:'white',
        marginVertical:'3%',
        marginHorizontal:'5%',
        fontSize:10
    },
    button:{
        flex:1,
        borderWidth:0.5
    },
    context:{
        borderWidth:0.5,
        borderColor:'white',
        flex:1,
        height:'100%',
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover'
    }
})