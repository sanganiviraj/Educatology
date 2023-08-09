import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Image, Text} from 'react-native-animatable';
import Icon, {Icons} from '../constant/Icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


dummydata=[
  {
    url:'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg'
  },
  {
    url:'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg'
  },
  {
    url:'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg'
  },
]

const Coursedetail = props => {
  const {navigation, route} = props;



  return (
    <View style={styles.screeen}>
      <ScrollView>
      <Image
        style={styles.img}
        source={{
          uri: route.params.coursedetail.cimg,
        }}
      />

      <View style={styles.minibox}>
        <Icon type={Icons.Entypo} name="user" size={30} color="#1882FF" />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: 'black',
            marginLeft: 10,
          }}>
          {route.params.coursedetail.author}
        </Text>
      </View>

      <Text style={styles.title}>
        {route.params.coursedetail.cname}
      </Text>

      <View style={{width: (windowWidth * 95) / 100}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: 'black',
            marginLeft: 20,
            marginTop: 20,
          }}>
          Description{' '}
        </Text>

        <Text style={styles.desc}>
          {route.params.coursedetail.cdesc}
        </Text>
      </View>

     

      <TouchableOpacity
        style={styles.signup}
        onPress={() => {
          Linking.openURL(route.params.coursedetail.link);
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 600,
            alignSelf: 'center',
          }}>
          {' '}
          Download Course{' '}
        </Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screeen: {
    flex: 1,
    
  },
  img: {
    width: (windowWidth * 95) / 100,
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  minibox: {
    width: 200,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 340,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: 'black',
    marginTop: 40,
    marginLeft: 20,
  },
  desc: {
    fontSize: 16,
    fontWeight: 500,
    color: '#636366',
    marginTop: 5,
    marginLeft: 20,
  },
  signup: {
    width: (windowWidth * 95) / 100,
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#67ADFF',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default Coursedetail;
