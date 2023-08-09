import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainuser from './Mainuser';
import Usershow from './Usershow';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
// import userstore from './Userstore';
import allreducer from '../Apidemo/combinereducer';
import Userlist from './Userlist';
import Userdetail from './userdetail';
import Businesslist from './businesslist';
import { createStore } from 'redux';

const Stack = createStackNavigator();

const store = createStore(allreducer)

const Navigationuser = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='userhome' component={Userlist}/>
        <Stack.Screen name='usershow' component={Usershow}/>
        <Stack.Screen name='userdetail' component={Userdetail}/>
        <Stack.Screen name='businesslist' component={Businesslist}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}


const styles = StyleSheet.create({})

export default Navigationuser
