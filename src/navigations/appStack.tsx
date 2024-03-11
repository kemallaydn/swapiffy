import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/app/home";
import Account from "../screens/app/login";
import SignUp from "../screens/app/singup";
import SignInAccount from "../screens/app/account";
import ShoppingCart from "../screens/app/shoppingcart";
import Chat from "../screens/app/chat";
import { GlobalContext } from "../context";
import ChatRoom from "../screens/app/chatRoom";
import Favorites from "../screens/app/addAdvert";
const Stack = createNativeStackNavigator();
function appStack() {
    const {authState: {isLoggedIn}}=useContext(GlobalContext);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="signup" component={SignUp} />
            {isLoggedIn ? <Stack.Screen name="account" component={SignInAccount} /> : <Stack.Screen name="account" component={Account} />}
            <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
            <Stack.Screen name="chat" component={Chat} />
            <Stack.Screen name="chatRoom" component={ChatRoom} />
            <Stack.Screen name="favorites" component={Favorites} />
        </Stack.Navigator>
    )
}
export default appStack;