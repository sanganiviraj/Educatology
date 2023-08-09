import React,{useState} from "react";
import { StyleSheet, View,ImageBackground ,Dimensions,KeyboardAvoidingView,TextInput,TouchableOpacity,Keyboard,Alert,Modal} from 'react-native';
import { Text } from "react-native-animatable";
import Task from '../OthersScreen/todolist';
import Icon , {Icons} from '../constant/Icons';
import { BottomSheetAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
// import { TextInput } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Profile = () => {
    const [task,settask] = useState();
    const [taskitem,settaskitem] = useState([]);
    const [modalvisible,setmodalvisible] = useState(false);

    const handletext= () => {
        if(task==null){
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalvisible}
                onRequestClose={() => {
                    setmodalvisible(!modalvisible)
                }}
            >
            <View style={styles.screeen}>
            <View style={styles.modelcontainer}>
                <Text style={{fontSize:20,color:'black',fontWeight:500,marginLeft:20}}> Enter a valid Task !! </Text>
                <TouchableOpacity onPress={() => setmodalvisible(!modalvisible)}>
                    <Icon type={Icons.AntDesign} name="closesquare" size={30} color='#1882FF' style={{marginRight:20}}/>
                </TouchableOpacity>
            </View>
            </View>
            </Modal>
           
        }
        else{
            Keyboard.dismiss();
            settaskitem([...taskitem,task]);
            settask(null)
        }
       
    }

    const completetask = (index) =>{
        const copyitems = [...taskitem] ;
        copyitems.splice(index,1);
        settaskitem(copyitems)
    }

    return(
        <View style={styles.screeen}> 
            <View style={styles.taskwrappers}>
                <Text style={styles.title}> Today's Tasks </Text>

                <View style={styles.listitem}>
                    { taskitem.map((item,index) => {
                        return(
                            <TouchableOpacity key={index} onPress={() => {completetask()}}>
                                <Task text={item}/>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>

           <KeyboardAvoidingView style={styles.writetaskwrapper}>
                    <TextInput 
                    style={styles.writetask}
                    placeholder="Write a task"
                    placeholderTextColor='#C0C0C0'
                    onChangeText={(text) => settask(text)}
                    value={task}
                    s/>

                    <TouchableOpacity  onPress={() => handletext()}>
                        <Icon type={Icons.Ionicons} name="add-circle" size={65} color='#1882FF' style={styles.add}/>
                    </TouchableOpacity>
           </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    screeen:{
        flex:1,
        backgroundColor:'#E8EAED'
    },
    taskwrappers:{
        paddingTop:20,
        paddingHorizontal:20,
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:600,
        marginBottom:20
    },
    listitem:{
        
    },
    writetaskwrapper:{
        position:'absolute',
        bottom:90,
        width:windowWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'white',
        
    },
    writetask:{
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'#FFF',
        borderRadius:12,
        elevation:5,
        width:270,
        fontSize:18,
        color:'black',
        height:60,
        marginLeft:15
    },
   add:{
    marginRight:15
   },
   modelcontainer:{
    width:(windowWidth*90)/100,
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'pink'
   },
   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

})

export default Profile