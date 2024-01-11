import { View } from "react-native";

function CustomView({children}:any){
    return(
        <View style={{
            flex:1,
            marginTop:'5%',
            paddingHorizontal:"3%" ,
            }}>
            {children}
        </View>
    )
}
export default CustomView;