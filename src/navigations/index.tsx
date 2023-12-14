import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import AppStack from "./appStack";

const Stack = createNativeStackNavigator();
function AppNavigator(){
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}
export default AppNavigator;