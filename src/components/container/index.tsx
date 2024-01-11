import { Platform, SafeAreaView, ScrollView, View } from "react-native"
import children from "../../models/children.model"
import React from "react";
import styles from "./style";
import Navbar from "../navbar";
import Tab from "../tab";
const Container: React.FC<children> = ({ children ,visible=true,isScroll=true}) => {
    
    return (
        <View style={styles.container}>
            <Navbar title="SWAPİFFY"/>
            {
                isScroll ? (
                    <ScrollView style={{flex:1}}>
                        {children}
                    </ScrollView>
                ) : (
                    <View style={{flex:1}}>
                        {children}
                    </View>
                )
            }
            {visible && <Tab />}
        </View>
    )
}
export default Container;