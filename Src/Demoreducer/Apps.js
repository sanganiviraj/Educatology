import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import stores from './stores';
import Countermain from './Countermain';

const Apps = () => {
  return (
    <Provider store={stores}>
      <Countermain />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default Apps;
