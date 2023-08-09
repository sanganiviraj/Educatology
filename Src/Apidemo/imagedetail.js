import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {windowWidth, windowHeight} from '../constant/extra';
import {Image} from 'react-native-animatable';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Imagedetail = ({navigation, route}) => {
  const {pdata} = route.params;

  const b = useSelector(state => state.apireducer.businessdata);

  const demomap = [];

  for (const obj of b) {
    if (obj.bid === pdata.id) {
      demomap.push(obj);
    }
  }
  console.log(pdata);

  return (
    <View style={styles.screen}>
      {/* <Text>imagedetail</Text> */}
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: pdata.url,
          }}
        />
      </View>

      <View
        style={{
          width: 200,
          backgroundColor: '#a3cd9e',
          marginTop: 10,
          marginBottom: 10,
          height: 2,
        }}
      />

      <Text style={styles.title}>{pdata.title} </Text>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '800',
          color: 'black',
          marginTop: 30,
          marginLeft: 10,
        }}>
        Description :
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '400',
          color: '#36454F',
          marginTop: 10,
          marginLeft: 10,
        }}>
        {pdata.description}
      </Text>

      <View style={{width: 100, marginTop: 30, alignSelf: 'center'}}>
        <Button
          title="Add data"
          onPress={() => {
            navigation.navigate('apiform', {
              data: pdata,
            });
          }}
        />
      </View>

      <Text style={{color: 'black'}}> item.title </Text>

      <FlatList
        data={demomap}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            // <View style={styles.box}>
            //   <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
            //     {' '}
            //     {item.title}
            //   </Text>
            // </View>

            <Text style={{color: 'black'}}> {item.name} </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: windowWidth,
    height: 350,
    borderBottomRightRadius: 100,
    backgroundColor: '#a3cd9e',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginLeft: 10,
  },
  img: {
    width: (windowWidth * 90) / 100,
    height: 310,
    borderBottomRightRadius: 100,
    borderRadius: 7,
    marginLeft: 10,
    marginTop: 10,
  },
  box: {
    width: (windowWidth * 95) / 100,
    height: 80,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
});

export default Imagedetail;
