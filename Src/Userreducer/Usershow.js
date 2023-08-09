import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight,windowWidth } from '../constant/extra';
import { Userdeletedata } from './Useraction';
import { connect, useDispatch } from 'react-redux';
import Icon , {Icons} from '../constant/Icons';


const Usershow = ({Userdeletedata,userdata,navigation}) => {

    
    // const udata = route.params.udata
    console.log(userdata)

    const _Ondeletetext = (id) => {                                                                                             
        return(
            // dispatch(deletelistdata(id))
            // dispatch({
            //     type:delete_list,
            //     datalist:{
            //         id:id
            //     }
            // })
            console.log(id),
            Userdeletedata(id)
        )
    }


  return (
    
    <View>

        {/* <Text style={{fontSize:24,fontWeight:500,color:'black'}}> {udata} </Text> */}
        <FlatList 
            data={userdata}
            keyExtractor={(item) => item.id}
            renderItem={({item,index}) => {
                // console.log(userdata)
                return(
                    <TouchableOpacity onPress={() => { navigation.navigate('userdetail',{ uname : item }) }}>
                    <View style={styles.container} >
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:30,color:'white',fontWeight:700}}> Name : <Text style={styles.showtext}> {item.username} </Text></Text>
                            <Text style={{fontSize:30,color:'white',fontWeight:700}}> Number : <Text style={styles.showtext}> {item.number} </Text></Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            _Ondeletetext(item.id)
                        }}>
                            <Icon type={Icons.AntDesign} name='closesquareo' color='white' size={40} style={{marginRight:20}}/>
                        </TouchableOpacity>


                    </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

const mapStateToProps = state => {
    return{
        userdata: state.reducer.userdata
    }
}

const mapDispatchToProps = {Userdeletedata}

export default connect(mapStateToProps,mapDispatchToProps)(Usershow);

// export default Usershow;