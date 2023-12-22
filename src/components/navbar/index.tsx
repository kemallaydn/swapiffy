import { Text, View } from "react-native";
import styles from "./style"

function Navbar({title}:any){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default Navbar;