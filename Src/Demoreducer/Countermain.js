import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {increment} from './actionsdemo';
import {decrement} from './actionsdemo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Countermain = ({count, increment, decrement}) => {
  const [value, setvalue] = useState();
  const dispatch = useDispatch()
  console.log(value);

  return (
    <View style={styles.screen}>
      <View style={styles.container}></View>

      <View style={styles.box}>
        <Text
          style={{
            fontSize: 35,
            color: 'black',
            alignSelf: 'center',
            fontWeight: 500,
          }}>
          {count}
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="0"
        placeholderTextColor="white"
        keyboardType="numeric"
        value={value}
        onChangeText={text => {
          setvalue(text);
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          top: 100,
        }}>
        <TouchableOpacity onPress={increment}>
          <View style={styles.boxs}>
            <Text
              style={{
                fontSize: 60,
                fontWeight: 600,
                color: 'white',
                alignSelf: 'center',
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrement}>
          <View style={styles.boxs}>
            <Text
              style={{
                fontSize: 60,
                fontWeight: 600,
                color: 'white',
                alignSelf: 'center',
              }}>
              -
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: '#1882FF',
    width: windowWidth,
    height: 250,
  },
  box: {
    width: 200,
    height: 70,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 15,
    position: 'absolute',
    top: 220,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  boxs: {
    width: 100,
    height: 100,
    backgroundColor: '#1882FF',
    borderRadius: 12,
    justifyContent: 'center',
  },
  input: {
    width: 150,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: 'white',
    marginTop: 200,
    borderRadius: 12,
    backgroundColor: '#1882FF',
    paddingLeft: 30,
  },
});

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countermain);
