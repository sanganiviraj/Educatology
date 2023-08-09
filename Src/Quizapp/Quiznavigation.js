import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Quizhome from './Quizhome';
import Quizmain from './Quizmain';
import Quizresult from './Quizresult';
import allreducer from '../Apidemo/combinereducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Quiznavigation = () => {

const stack = createStackNavigator();
const quizstore = createStore(allreducer)

  return (
    <Provider store={quizstore}>
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='quizhome' component={Quizhome}/>
        <stack.Screen name='quizmain' component={Quizmain}/>
        <stack.Screen name='quizresult' component={Quizresult}/>
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default Quiznavigation