import React from "react";
import { View, ScrollView } from "react-native";
import children from "../../models/children.model";
import styles from "./style";
import Navbar from "../navbar";
import Tab from "../tab";

const Container: React.FC<children> = ({ children, visible = true, isScroll = true }) => {
    return (
        <View style={styles.container}>

            {isScroll ? (
                <ScrollView style={{ flex: 1 }}>
                    <Navbar title="SWAPİFFY" />
                    {children}
                    </ScrollView>
            ) : (
                <View style={{ flex: 1 }}>
                    <Navbar title="SWAPİFFY" />
                    {children}
                    </View>
            )}
            {visible && <Tab />}
        </View>
    );
};

export default Container;