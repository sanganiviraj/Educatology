import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {add_apidata} from './Apiaction';
import {connect, useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '../constant/extra';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {businessadd} from '../Userreducer/businessaction';
import {FlatList} from 'react-native-gesture-handler';

// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Image } from 'react-native-animatable';
// import { ScrollView } from 'react-native-gesture-handler';

const Apimain = ({navigation}) => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const pokedata = useSelector(state => state.apireducer.pokedata);
  const [offset, setoffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  const getpokedata = async () => {
    // try {
    //   if(!Loading && !isListEnd){
    //       setLoading(true);
    //       const responce = await fetch(
    //         'https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset= ' + offset,
    //       );
    //     const json = await responce.json();
    //     if(json.photos.length>0 ){
    //       setoffset(offset+1);
    //       setData([...data,...json.photos]);
    //       setLoading(false);
    //     }else{
    //       setIsListEnd(true);
    //       setLoading(false);
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(true);
    // }

    // if (!Loading && !isListEnd) {
    //   console.log('getData');
    //   setLoading(true);

    //   fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=' + offset)

    //     .then((response) => response.json())
    //     .then((responseJson) => {

    //       console.log(responseJson.photos);
    //       if (responseJson.photos.length > 0) {
    //         setoffset(offset + 1);

    //         setData([...data, ...responseJson.photos]);
    //         setLoading(false);
    //       } else {
    //         setIsListEnd(true);
    //         setLoading(false);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }

    setLoading(true);
    let off = offset + 1;
    setoffset(off);
    try {
      const responce = await fetch(
        'https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=' +
          off,
      );
      const json = await responce.json();
      // setData([...data, ...json.photos]);
      dispatch(add_apidata([...data, ...json.photos]));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getpokedata();
  }, []);

  // console.log('pokedata :  ' , pokedata );
  console.log('data:', pokedata);

  const listfooter = () => {
    return (
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          // loadmoreitem();
          getpokedata();
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 24,
            color: 'white',
            alignSelf: 'center',
          }}>
          {' '}
          Load more{' '}
        </Text>
      </TouchableOpacity>
    );
  };

  // const renderFooter = () => {
  //   return (
  //     //Footer View with Loader
  //     <View style={styles.footer}>
  //       {Loading ? (
  //         <ActivityIndicator color="black" style={{margin: 15}} />
  //       ) : null}
  //     </View>
  //   );
  // };

  // const loadmoreitem = () => {
  //    setoffset(offset + 1);
  // };

  return (
    <View style={styles.screen}>
      {/* {
        Loading ?  <UIActivityIndicator size={40} color="#0000ff" style={{alignSelf:'center'}}/> 
      :   */}
      <FlatList
        data={pokedata}
        keyExtractor={item => item.id}
        ListFooterComponent={listfooter()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.box,
                {backgroundColor: item.id % 2 == 0 ? '#e5f1e3' : '#a3cd9e'},
              ]}
              onPress={() => {
                navigation.navigate('Imagedetail', {
                  pdata: item,
                });
              }}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  marginLeft: 20,
                  borderRadius: 7,
                }}
                source={{uri: item.url}}
              />

              <View
                style={{
                  marginLeft: 20,
                  width: 180,
                  alignSelf: 'flex-start',
                  marginTop: 15,
                }}>
                <Text style={{fontSize: 20, fontWeight: 500, color: 'black'}}>
                  {item.title}{' '}
                </Text>
              </View>
            </TouchableOpacity>
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
    justifyContent: 'center',
  },
  footer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  box: {
    width: (windowWidth * 90) / 100,
    height: 150,
    borderRadius: 7,
    // backgroundColor:item.id%2==0 ? 'black' : 'pink',
    elevation: 9,
    marginVertical: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    width: 130,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    backgroundColor: 'green',
    borderRadius: 7,
    justifyContent: 'center',
  },
});

// const mapStateToProps = state => {
//   return {
//     pokedata: state,
//   };
// };

// const mapDispatchToProps = {};

// export default (mapStateToProps, mapDispatchToProps)(Apimain);

export default Apimain;
