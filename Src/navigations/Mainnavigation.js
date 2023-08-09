import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React,{useRef,useEffect} from "react";
import { StyleSheet, View , Text , TouchableOpacity } from 'react-native';

import Course from "../screens/course";
import Students from "../screens/students";
import Profile from "../screens/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon , {Icons} from '../constant/Icons';
import * as Animatable from 'react-native-animatable';
import studenthome from "../screens/studenthome";


const Tabarr = [
    {route : 'studenthome' , label : 'studenthome' ,  type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: studenthome , header:false },
    {route : 'Course' , label : 'Course' ,  type: Icons.AntDesign, activeIcon: 'codesquare', inActiveIcon: 'codesquareo', component: Course , header:false },
    {route : 'Students' , label : 'Students' ,  type: Icons.Ionicons, activeIcon: 'people-sharp', inActiveIcon: 'people-outline', component: Students , header:false },
    {route : 'Profile' , label : 'profile' ,  type: Icons.MaterialCommunityIcons, activeIcon: 'view-list', inActiveIcon: 'view-list-outline', component: Profile,header:false }
]


const Drawerstack = createDrawerNavigator()
const Stack = createBottomTabNavigator()

// const DrawerNavigation = () => {
//     return(
//             <Drawerstack.Navigator screenOptions={{ headerShown : false}}>
//                     <Drawerstack.Screen name="home" component={Home} />
//                     <Drawerstack.Screen name="course" component={Course} />
//                     <Drawerstack.Screen name="student" component={Students} />
//                     <Drawerstack.Screen name="profile" component={Profile} />
//             </Drawerstack.Navigator>
        
//     )
// }


const TabButton = (props) => {
    const {item,onPress,accessibilityState } = props;
    const focused  = accessibilityState.selected;
    const viewRef = useRef(null);
    
    useEffect (() => {
        if (focused) {
            viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
        } else {
            viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
        }

    },[focused])


    return(
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={1}>
            <Animatable.View style={styles.container} duration={1000} ref={viewRef}>
                 <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#1882FF' : '#8AC0FF'}/>
            </Animatable.View>
        </TouchableOpacity>
    )   
}

const Mainnavigation = () => {
    return(
        
            <Stack.Navigator 
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    left: 16,
                    borderRadius: 16
                  }
            }}  
            >
                {
                    Tabarr.map((item,index) => {
                        return(
                            <Stack.Screen key={index} name={item.route} component={item.component}
                            options={{
                                tabBarShowLabel : false,
                                headerShown : item.header ,
                                tabBarButton : (props) => <TabButton {...props} item={item}/>,
                            
                            }}
                            />
                        )
                    })
                }
            </Stack.Navigator>
            
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Mainnavigation