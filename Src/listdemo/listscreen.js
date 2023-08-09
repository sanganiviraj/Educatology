import { StyleSheet, Text, View,TextInput, Button , FlatList,TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import {add_list, addlistdata,delete_list,deletelistdata} from './actionlist';
import { windowWidth,windowHeight } from '../constant/extra';
import { connect, useDispatch } from 'react-redux';
import Icon , {Icons} from '../constant/Icons';
import { addListener } from '@reduxjs/toolkit';


const Listscreen = ({addlistdata,deletelistdata,data}) => {
    
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

            setUsername(''),
            setPasssword(''),
            addlistdata(Username,Password)
        }
    }

        const _Ondeletetext = (id) => {                                                                                             
        return(
            // dispatch(deletelistdata(id))
            // dispatch({
            //     type:delete_list,
            //     datalist:{
            //         id:id
            //     }
            // })
            deletelistdata(id)
            
            
        )
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
                _Onhandletext()
            }}
            />
            </View>

        </View>

        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item,index}) => {
                return(
                    <View style={styles.container} >
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:30,color:'white',fontWeight:700}}> Name : <Text style={styles.showtext}> {item.name} </Text></Text>
                            <Text style={{fontSize:30,color:'white',fontWeight:700}}> Number : <Text style={styles.showtext}> {item.number} </Text></Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            _Ondeletetext(item.id)
                        }}>
                            <Icon type={Icons.AntDesign} name='closesquareo' color='white' size={40} style={{marginRight:20}}/>
                        </TouchableOpacity>


                    </View>
                )
            }}
        />
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
        borderBottomWidth:2,
        borderColor:'#1882FF',
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
        data: state.data
    }
}

const mapDispatchToProps = {addlistdata,deletelistdata}

export default connect(mapStateToProps,mapDispatchToProps)(Listscreen);

// export default Listscreen;


