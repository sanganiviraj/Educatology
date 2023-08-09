import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../constant/extra';
import {
  Businessadddata,
  Businessdeletedata,
  businessdelete,
} from './businessaction';
import {connect} from 'react-redux';
import Icon, {Icons} from '../constant/Icons';

const Userdetail = ({route, navigation, businessdata, Businessdeletedata}) => {
  const {uname} = route.params;
  // const {mdata} = route.params;
  // console.log(uname);
  // console.log(uname)

  const mapdata = [];

  for (const obj of businessdata) {
    if (obj.buisid === uname.id) {
      mapdata.push(obj);
    }
  }

  // console.log(mapdata);
  // console.log(businessdata)

  const ondeletebusinessdata = (id) => {
    // console.log(id)
    return (Businessdeletedata(id))
    
  };

  return (
    <View style={styles.screen}>
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          fontWeight: 600,
          color: '#1882FF',
        }}>
        {' '}
        Name :{' '}
        <Text
          style={{
            marginTop: 50,
            fontSize: 40,
            fontWeight: 600,
            color: 'black',
          }}>
          {' '}
          {uname.username}{' '}
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          fontWeight: 600,
          color: '#1882FF',
        }}>
        {' '}
        Number :
        <Text
          style={{
            marginTop: 50,
            fontSize: 40,
            fontWeight: 600,
            color: 'black',
          }}>
          {' '}
          {uname.number}{' '}
        </Text>
      </Text>
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          fontWeight: 600,
          color: '#1882FF',
        }}>
        {' '}
        Id :
        <Text
          style={{
            marginTop: 50,
            fontSize: 40,
            fontWeight: 600,
            color: 'black',
          }}>
          {' '}
          {uname.id}{' '}
        </Text>
      </Text>

      <View
        style={{
          width: (windowWidth * 60) / 100,
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <Button
          title="Submit"
          onPress={() => {
            navigation.navigate('businesslist', {bsid: uname.id});
          }}
        />
      </View>

      <FlatList
        data={mapdata}
        keyExtractor={item => item.bid}
        renderItem={({item, index}) => {
          // console.log(item)
          return (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.container} key={index}>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 30, color: 'white', fontWeight: 700}}>
                    {' '}
                    Name :{' '}
                    <Text style={styles.showtext}> {item.busername} </Text>
                  </Text>
                  <Text style={{fontSize: 30, color: 'white', fontWeight: 700}}>
                    {' '}
                    Number :{' '}
                    <Text style={styles.showtext}> {item.bnumber} </Text>
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    // _Ondeletetext(item.id)
                    ondeletebusinessdata(item.bid);
                  }}>
                  <Icon
                    type={Icons.AntDesign}
                    name="closesquareo"
                    color="white"
                    size={40}
                    style={{marginRight: 20}}
                  />
                </TouchableOpacity>
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
  },
  container: {
    width: (windowWidth * 90) / 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#1882FF',
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    businessdata: state.reducer.businessdata,
  };
};

const mapDispatchToProps = {Businessdeletedata};

export default connect(mapStateToProps, mapDispatchToProps)(Userdetail);

// export default Userdetail
