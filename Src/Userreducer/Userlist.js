import { StyleSheet, Text, View,TextInput,Button,ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import { windowHeight,windowWidth } from '../constant/extra'
import Icon , {Icons} from '../constant/Icons';
import { Useradddata,Userdeletedata } from './Useraction';
import {connect} from 'react-redux'


const Userlist = ({Useradddata,Userdeletedata,userdata,navigation}) => {
  const [Username,setUsername] = useState('');
  const [Password,setPasssword] = useState('');

  const _Onhandletext = () => {
    if(Username=='' || Password=='' ){
       ToastAndroid.show('Enter valid value' , ToastAndroid.SHORT)
    }
    else{
        
        // dispatch({
        //     type:add_list,
        //     datalist:{
        //         name:Username,
        //         number:Password
        //     }
        // })

        //  dispatch(addlistdata(Username,Password))
        
        navigation.navigate('usershow',{
            udata: userdata
        })  
        setUsername(''),
        setPasssword(''),
        Useradddata(Username,Password)
      


    }
}

  return (

      <View style={styles.screen}>
        <View style={styles.box}>
        <View style={styles.enterdata}>
            <Icon type={Icons.FontAwesome} name='user' size={30} color='grey' style={{alignSelf:'center',marginLeft:20,marginRight:5}}/>
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={Username}
                    onChangeText={data => setUsername(data)}
                    placeholder="Username"
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
                    value={Password}
                    secureTextEntry={true}
                    keyboardType='numeric'
                    onChangeText={data => setPasssword(data)}
                    placeholder="Password"
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
        // borderBottomWidth:2,
        // borderColor:'#1882FF',
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
    userdata : state.reducer.userdata
  }
}

const mapDispatchToProps = {Useradddata,Userdeletedata}

export default connect(mapStateToProps,mapDispatchToProps)(Userlist);

// export default Userlist
