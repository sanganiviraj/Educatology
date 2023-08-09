import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState,useEffect, useDebugValue} from 'react'
import Lottie from 'lottie-react-native';
import { windowHeight,windowWidth } from '../constant/extra';
import { Qui_adddata } from './Quizaction';
import { useDispatch } from 'react-redux';
import { LongPressGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Quizhome = ({navigation}) => {
   

  return (
    <View style={styles.screen}>
        <Text style={styles.title}> QuizBuzz </Text>

        <Lottie source={require('../assets/animationlottie/23710-quiz-program.json')} autoPlay style={styles.anime}/>

        <Text style={styles.subtitile}> Welcome To QuizBuzz </Text>

        <Text style={styles.quote}>You look across the board at comedy quiz shows, and they are mainly hosted by men.</Text>

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('quizmain')}}>
            <Text style={{fontSize:28,fontWeight:600,color:'white',alignSelf:'center'}}> Take a Quiz </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        fontSize:35,
        fontWeight:900,
        color:'#004385',
        alignSelf:'center',
        marginTop:20
    },
    anime:{
        width:(windowWidth*90)/100,
        // height:windowHeight,
        alignSelf:'center',
        marginTop:30
        
    },
    subtitile:{
        fontSize:30,
        fontWeight:600,
        color:'#065a84',
        alignSelf:'center',
        marginTop:70
    },
    quote:{
        fontSize:20,
        fontWeight:400,
        color:'#031a6b',
        alignSelf:'center',
        marginTop:10,
        textAlign:'center'
    },
    button:{
        width:(windowWidth*90)/100,
        alignSelf:'center',
        backgroundColor:'#004385',
        borderRadius:7,
        height:70,
        justifyContent:'center',
        marginTop:70

    }

})

export default Quizhome

