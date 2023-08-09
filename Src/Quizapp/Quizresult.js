import {View, Text, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import {windowHeight, windowWidth} from '../constant/extra';

const Quizresult = () => {
  // const {sc} = route.params;
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.screen}>
      {/* <Text style={styles.title}> Score </Text>

      <View style={styles.square}> */}
      {/* <Lottie
          source={require('../assets/animationlottie/animation_lk00wi5m.json')}
          autoPlay
          style={styles.anime}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          marginTop: 320,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 24,
            color: 'black',
            alignSelf: 'center',
          }}>
          {sc}
        </Text>
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 900,
    color: '#004385',
    alignSelf: 'center',
    marginTop: 20,
  },
  anime: {
    width: (windowWidth * 90) / 100,
    alignSelf: 'center',
    // marginTop: 30,
  },
  square: {
    width: (windowWidth * 95) / 100,
    height: 300,
    borderRadius: 12,
    backgroundColor: '#0096FF',
    alignSelf: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Quizresult;
