import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useDebugValue, useState} from 'react';
import {windowHeight, windowWidth} from '../constant/extra';
import {useDispatch, useSelector} from 'react-redux';
import {
  add_apidata,
  add_data,
  add_datas,
  addingbusinessdata,
} from './Apiaction';
// import {TextInput} from 'react-native-gesture-handler';/

const Apiform = ({navigation, route}) => {
  const {data} = route.params;

  const [name, setname] = useState();
  const [number, setnumber] = useState();
  // const [businessarry, setbusinessarray] = useState([]);
  const dispatch = useDispatch();

  const pdatas = useSelector(state => state.apireducer.pokedata);
  const bdatas = useSelector(state => state.apireducer.businessdata);

  console.log(data);

  let dummydata = data.id;
  let dm = pdatas;

  let id = data.id;
  // let x = Math.floor((Math.random() * 10) + 1);

  const handleaddbusiness = () => {
    var index = pdatas.findIndex(list => list.id === dummydata);

    if (name.trim() != '' && number.trim() != '') {
      // const newBusiness = {
      //   name: name,
      //   number: number,
      // };

      // setbusinessarray([...businessarry, newBusiness]);
      dispatch(addingbusinessdata(name, number));
      setname('');
      setnumber('');
    }

    if (dm[index].bdatas == undefined) {
      dm[index].bdatas = [{name, number, id}];
    } else {
      dm[index].bdatas = [...dm[index].bdatas, {name, number, id}];
    }

    dispatch(add_datas(dm));
  };

  // let pushdata = [{}];

  // const total_caculation = name => {
  //   pushdata.push({name});
  // };

  // console.log(businessarry);

  // console.log(index);

  // console.log(data);

  // dummydata[i] = {...dummydata[i],}
  // dummydata[id]

  // add_apidata({...dummydata})

  // const push_data = () => {
  // };

  // console.log(push_data());

  // pdatas[index] = {...pdatas};
  // dummydata[id]={...dummydata[id],}

  // const vs = {...dummydata, {n: name, nm: number}};
  // Object.assign(dm, {n: name, num: number});

  // const dispatch = useDispatch();

  // dispatch(add_datas(dm));

  // console.log(dm);
  // console.log(pdatas[index]);
  // dummydata[id] = {...dummydata[i],}

  return (
    <View style={styles.screen}>
      <View style={{marginTop: 100}}>
        <View style={styles.enterdata}>
          <TextInput
            autoCapitalize="none"
            // autoCorrect="false"
            value={name}
            onChangeText={text => {
              setname(text);
            }}
            placeholder="Enter name"
            placeholderTextColor="grey"
            color="black"
            style={{
              width: (windowWidth * 75) / 100,
              height: 60,
              fontSize: 20,
            }}
          />
        </View>

        <View style={styles.enterdata}>
          <TextInput
            autoCapitalize="none"
            // autoCorrect="false"
            value={number}
            onChangeText={text => {
              setnumber(text);
            }}
            placeholder="Enter number"
            placeholderTextColor="grey"
            color="black"
            style={{
              width: (windowWidth * 75) / 100,
              height: 60,
              fontSize: 20,
            }}
          />
        </View>
      </View>

      <View style={{width: 100, alignSelf: 'center', marginTop: 50}}>
        <Button
          title="Submit"
          onPress={() => {
            // add_datas();
            // total_caculation();
            handleaddbusiness();
            navigation.goBack('imagedetail');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  enterdata: {
    marginTop: 20,
    width: (windowWidth * 90) / 100,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Apiform;
