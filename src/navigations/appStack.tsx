import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/app/home";
import Account from "../screens/auth/account";
import SignUp from "../screens/auth/singup";
import SignInAccount from "../screens/app/account";
import ShoppingCart from "../screens/app/shoppingcart";
import Chat from "../screens/app/chat";
const Stack = createNativeStackNavigator();
function appStack() {
    const login = false;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="signup" component={SignUp} />
            {login ? <Stack.Screen name="account" component={SignInAccount} /> : <Stack.Screen name="account" component={Account} />}
            <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
    )
}
export default appStack;