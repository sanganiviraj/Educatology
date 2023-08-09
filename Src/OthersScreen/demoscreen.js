import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native';
import React from 'react';
import Icon , {Icons} from '../constant/Icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Demoscreen = () => {
  return (
    <View style={styles.centeredView}>
            <View style={styles.modelcontainer}>
                <Text style={{fontSize:20,color:'black',fontWeight:500,marginLeft:20}}> Enter a valid Task !! </Text>
                <TouchableOpacity onPress={() => modalsetvisible(!modalvisible)}>
                    <Icon type={Icons.AntDesign} name="closesquare" size={30} color='#1882FF' style={{marginRight:20}}/>
                </TouchableOpacity>
            </View>
            </View>
  )
}


const styles = StyleSheet.create({

    modelcontainer:{
        width:(windowWidth*90)/100,
        height:60,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'pink',
        borderRadius:12
       },
       centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
})

export default Demoscreen
