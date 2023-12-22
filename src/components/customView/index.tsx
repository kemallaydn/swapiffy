import { View } from "react-native";

function CustomView({children}:any){
    return(
        <View style={{paddingHorizontal:"3%" ,flex:1}}>
            {children}
        </View>
    )
}
export default CustomView;