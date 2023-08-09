import { StyleSheet, Text, View,TextInput,Button,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import { windowHeight,windowWidth } from '../constant/extra'
import Icon , {Icons} from '../constant/Icons';
// import { Useradddata,Userdeletedata } from './Useraction';
import { Businessadddata,Businessdeletedata } from './businessaction';
import {connect} from 'react-redux'


const Businesslist = ({Businessadddata,Businessdeletedata,businessdata,navigation,route}) => {
    
  const [bUsername,setbUsername] = useState('');
  const [bPassword,setbPasssword] = useState('');
  const {bsid} = route.params;



//   console.log(bsid)

  const _Onhandletext = () => {
    if(bUsername=='' || bPassword=='' ){
       ToastAndroid.show('Enter valid value' , ToastAndroid.SHORT)
    }
    else{
        

        navigation.goBack('userdetail')  
        setbUsername(''),
        setbPasssword(''),
        Businessadddata(bUsername,bPassword,bsid)
      


    }
}

  return (

      <View style={styles.screen}>
        <View style={styles.box}>
            <Text style={{fontSize:40,fontWeight:600,color:'#1882FF',alignSelf:'center'}}> Business Data </Text>
        <View style={styles.enterdata}>
            <Icon type={Icons.FontAwesome} name='user' size={30} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={bUsername}
                    onChangeText={data => setbUsername(data)}
                    placeholder="Business Username"
                    placeholderTextColor="grey"
                    color='black'
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 60,
                        fontSize:20
                    }}
                    />
            </View>

           

            <View style={styles.enterdata}>
                <Icon type={Icons.AntDesign} name='eye' size={30} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={bPassword}
                    secureTextEntry={true}
                    keyboardType='numeric'
                    onChangeText={data => setbPasssword(data)}
                    placeholder="Business Password"
                    placeholderTextColor="grey"
                    color='black'
                    style={{
                        width: (windowWidth*75)/100 ,
                        height: 50,
                        fontSize:20
                    }}
                    />
            </View>

            <View style={{width:150,alignSelf:'center',marginTop:50}}>
            <Button 
            title='Submit'
            onPress={ () => {
              // navigation.navigate('userdetail') 
              // console.log(navigation)
              _Onhandletext()
            }}
            />
            </View>

        </View>
        
    </View>
   
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    },
    box:{
        width:windowWidth,
        height:350,
        paddingTop:50,
    },
    input:{
        width:(windowWidth*90)/100,
        height:70,
        borderRadius:8,
        borderColor:'black',
        borderWidth:2,
        alignSelf:'center'
    },
    insert:{
        width:(windowWidth*90)/100,
        height:70,
        fontSize:25,
        color:'black'
    },
    container:{
        width:(windowWidth*90)/100,
        height:100,
        borderRadius:12,
        backgroundColor:'#1882FF',
        marginVertical:20,
        alignSelf:'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    showtext:{
        fontSize:24,
        fontWeight:600,
        color:'white',
        
    },
    enterdata:{
        marginTop:20,
        width: (windowWidth*90)/100 ,
        height: 60,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black',
        flexDirection:'row',
        alignItems:"center"
    },
})

const mapStateToProps = state => {
  return{
    businessdata : state.reducer.businessdata
  }
}

const mapDispatchToProps = {Businessadddata,Businessdeletedata}

export default connect(mapStateToProps,mapDispatchToProps)(Businesslist);

// export default Businesslist
