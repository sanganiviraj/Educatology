import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from 'react-native';
import Homelogin from "../loginscreens/homelogin";
import Login from "../loginscreens/login";
import Signup from "../loginscreens/signup";

const Tab = createStackNavigator()

const Stacklogin = () => {
    return(
       <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="homelogin" component={Homelogin}/>
            <Tab.Screen name="login" component={Login}/>
            <Tab.Screen name="signup" component={Signup}/>
       </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})

export default Stacklogin