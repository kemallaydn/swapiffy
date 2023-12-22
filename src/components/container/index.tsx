import { Platform, SafeAreaView, View } from "react-native"
import children from "../../models/children.model"
import React from "react";
import styles from "./style";
import Navbar from "../navbar";
import Tab from "../tab";
const Container: React.FC<children> = ({ children ,visible=true}) => {
    return (
        Platform.OS == "android"
            ? <View style={styles.container}>

                <View style={styles.content}>
                    {children}
                </View>
                {visible && <Tab/>}
            </View>
            : <View style={styles.container}>

                <View style={styles.content}>
                    {children}
                </View>
                {visible && <Tab/>}
            </View>
    )
}
export default Container;