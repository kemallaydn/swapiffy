import { View } from "react-native";

function CustomView({ children }: any) {
    return (
        <View style={{
            flex: 1,

            paddingHorizontal: "3%",
        }}>
            {children}
        </View>
    )
}
export default CustomView;