import React, { useState } from "react";
import { StyleSheet, View,Dimensions} from 'react-native';
import { Image, Text } from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Facultydata=[
    {
        name:'Derrick Mitchell',
        coursename:'react native',
        coures : 3,
        imgurl:'https://freepngimg.com/save/22654-man/594x600',
        index:1
    },
    {
        name:'Juan E. Galvan',
        coursename:'Java Script',
        coures : 6,
        imgurl:'https://media.webhelp.com/wp-content/uploads/2022/01/17113726/anywhere.png',
        index:2
    },
    {
        name:'Rob Percival',
        coursename:'Machine learning',
        coures : 5,
        imgurl:'https://www.bluesnap.com/wp-content/uploads/2023/05/growing-global-emag-man.png',
        index:3
    },
    {
        name:'Sergey Kasimov',
        coursename:'Grapihc Design',
        coures : 2,
        imgurl:'https://www.pngkit.com/png/full/95-953236_man-transparent-png-sticker-professional-man-png.png',
        index:4
    },
    {
        name:'Robert brick',
        coursename:'Digital Marketing',
        coures : 3,
        imgurl:'https://www.careerguide.com/career/wp-content/uploads/2023/01/591-5911320_professional-man-in-suit-png-transparent-png-removebg-preview.png',
        index:4
    },

]

const Students = () => {
    const [data,setdata] = useState();

    return(
        <View style={styles.screens}>
            <ScrollView>
            <View style={{height:10}}/>
            {
                Facultydata.map((item,index) => {
                    
                    return( 
                        <View style={styles.box} key={index}>
                        <View style={styles.box2}>
                            <View style={{marginTop:20,marginLeft:10}}>
                                <Text style={styles.title}>{item.name} </Text>
        
                                <Text style={styles.subtitle}>{item.coursename} </Text>
        
                                <Text style={{fontSize:15,fontWeight:500,color:'#FFFFFF',marginTop:30}}>Courses :<Text style={styles.course}> {item.coures} </Text></Text> 
                            </View>
        
                        </View>
        
                        <Image style={styles.image} source={{ uri : item.imgurl}}/>
                    </View> 
                
                    )
                })
            }
            
            <View style={{height:60}}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screens:{
        flex:1,
    
    },
    box:{
        width:(windowWidth*95)/100,
        height:200,
        alignSelf:'center',
        marginVertical:10
    },
    box2:{
        width:(windowWidth*95)/100,
        height:150,
        backgroundColor:'#1882FF',
        marginTop:50,
        borderRadius:12
    },
    image:{
        width:200,
        height:200,
        position:'absolute',
        resizeMode:'contain',
        marginLeft:170
    },
    title:{
        fontSize:24,
        fontWeight:600,
        color:'white'
    },
    subtitle:{
        fontSize:18,
        fontWeight:500,
        color:'#E7E7E7'
    },
    course:{
        fontSize:18,
        fontWeight:600,
        color:'white',
        marginTop:30
    }

})

export default Students