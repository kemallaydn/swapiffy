import { Text, View } from "react-native";
import Container from "../container";
import styles from "./style"

function Navbar(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BookShop</Text>
        </View>
    )
}
export default Navbar;