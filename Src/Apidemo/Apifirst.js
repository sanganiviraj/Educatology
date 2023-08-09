import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import allreducer from './combinereducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Apimain from './Apimain';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Imagedetail from './imagedetail';
import Apiform from './Apiform';
const apistore = createStore(allreducer);
const stack = createStackNavigator();

// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

const Apifirst = () => {
  return (
    <Provider store={apistore}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="apimain" component={Apimain} />
          <stack.Screen name="Imagedetail" component={Imagedetail} />
          <stack.Screen name="apiform" component={Apiform} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Apifirst;
