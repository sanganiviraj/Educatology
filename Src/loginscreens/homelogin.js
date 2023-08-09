import React from "react";
import { StyleSheet, View,Text ,Dimensions , TouchableOpacity} from 'react-native';
import { Image } from "react-native-animatable";
import { Extra } from "../constant/extra";
// import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homelogin = ({navigation}) => {
    return(
        <View style={styles.screen}>
            <View style={styles.circle}>

            </View>
            <Text style={styles.title}>
                Welcome To Eductology 
            </Text> 

            <Image style={styles.logo} source={require('../assets/images/Educatology.png')}/>

            <Text style={[styles.title,{color:'#67ADFF',marginTop:1,fontSize:18,textAlign:'center'}]}>
            Let Educatology be the catalyst for your productivity journey! 
            </Text> 

            <TouchableOpacity style={[styles.signup]}
                    onPress={() => {
                        navigation.replace('signup')
                    }}>
                    <Text style={{fontSize:18,color:'white',fontWeight:600,alignSelf:'center',}}> Sign Up</Text>
            </TouchableOpacity>

            <Text style={{fontSize:18,fontWeight:500,color:'grey',marginTop:50,alignSelf:'center'}}> Already a member ? </Text>
            
            <TouchableOpacity
                onPress={() => {
                    navigation.replace('login')
                }}>
            <Text style={{fontSize:14,fontWeight:500,color:'#67ADFF',marginTop:20,alignSelf:'center'}}> Sign In </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#FFFFFF',
        
    },
    title:{
        fontSize:24,
        fontWeight:800,
        color:'white',
        alignSelf:'center',
        marginTop:70
    },
    circle:{
        borderRadius:244,
        backgroundColor:'#67ADFF',
        width:488,
        height:488,
        position:'absolute',
        marginTop:-270,
        alignSelf:'center'
    },
    logo:{
        width:300,
        height:300,
        marginTop:120,
        alignSelf:'center'
    },
    signup:{
        width:(windowWidth*80)/100,
        height:50,
        alignSelf:'center',
        backgroundColor:'#67ADFF',
        marginTop:30,
        borderRadius:10,
        justifyContent:'center'
    }
})

export default Homelogin