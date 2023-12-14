import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
function authStack(){
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>

        </Stack.Navigator>
    )
}
export default authStack;