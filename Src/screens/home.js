import React,{useState} from 'react';
import { View, Text, ImageBackground,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Mainnavigation from '../navigations/Mainnavigation';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContentScrollView,DrawerItem,DrawerItemList  } from '@react-navigation/drawer'
import { Image } from 'react-native-animatable';
import Icon , {Icons} from '../constant/Icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Stacklogin from '../navigations/stacklogin';
import Coursedetail from '../OthersScreen/Coursedetail';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}



const Customdrawer = (props) => {
  return(
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor : 'white'}}>
       <ImageBackground source={require('../assets/images/drawerbgm.png') }  style={{padding:10,}} >
          <Image source={{ uri:'https://thumbs.dreamstime.com/b/cute-man-face-cartoon-cute-man-face-cartoon-vector-illustration-graphic-design-135024353.jpg' }} style={{width:80,height:80,borderRadius:40,marginBottom:10}}/>
          <Text style={{fontSize:20,fontWeight:700,color:'white'}}> Sangani Viraj</Text>
          <Text style={{fontSize:15,fontWeight:500,color:'black',marginLeft:3,marginTop:5}}> Vsviraj60@gmail.com </Text>
       </ImageBackground>
          <View style={{flex:1,paddingTop:10,backgroundColor:'white'}}/>
          <DrawerItemList {...props} />
      </DrawerContentScrollView>
  )
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 

export function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions = {{
       drawerActiveTintColor:'#1882FF',
       drawerInactiveTintColor:'#8AC0FF',
        drawerLabelStyle : {
          marginLeft:-15,
        }
      }} 
    
    drawerContent={props => < Customdrawer{...props} /> }>
      <Drawer.Screen name="mainscreen" component={Mainnavigation}
          options={{
            drawerIcon : ({color}) => (
              <Icon type={Icons.Ionicons} name='home' size={30}  color={color}/>
            )
          }}
      />
      <Drawer.Screen name="feed" component={Feed} 
         options={{
          drawerIcon : ({color}) => (
            <Icon type={Icons.Ionicons} name='people-sharp' size={30} color={color} />
          )
        }}
      />
      <Drawer.Screen name="Article" component={Article} 
      options={{
        drawerIcon : ({color}) => (
          <Icon type={Icons.Ionicons} name='person' size={30} color={color}/>
        )
      }}
      />
    </Drawer.Navigator>
    
  );
}

function New() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='stacklogin' component={Stacklogin}/>
        <Stack.Screen name="mydrawer" component={MyDrawer}/>
        <Stack.Screen name="coursedetail" component={Coursedetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function Home() {
  return (
    
      <New />
  );
}
