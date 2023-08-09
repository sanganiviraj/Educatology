import React,{useState} from "react";
import { StyleSheet, View,Dimensions,Pressable,Image,Text,TouchableOpacity } from 'react-native';
import Icon , {Icons} from '../constant/Icons';
import Studenthome from "./studenthome";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Alldata=[
    {
        cname:'Graphic Design Bootcamp: Photoshop, Illustrator, InDesign',
        cdesc:'Bestselling Beginner Course! Use Photoshop, Illustrator, & InDesign For Logo Design, Web Design, Poster Design, And More.',
        cimg:'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg',
        author:'Derrick Mitchell',
        link:'https://bit.ly/3N4gKTx',
        index:1
    },
    {
        cname:'Learn JavaScript from Scratch: The Ultimate Beginners Course',
        cdesc:'Learn Modern JavaScript Programming Fundamentals With Practical Hands Training.',
        cimg:'https://user-images.githubusercontent.com/68542775/167072911-dc31eac8-6885-4a05-9c25-279ecce22a79.png',
        author:'Juan E. Galvan',
        link:'https://udemycourses.me/download-javascript-promises-the-complete-guide/',
        index:2
    },
    {
        cname:'🔰 The Complete Digital Marketing Course - 12 Courses in 1 🔰',
        cdesc:'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
        cimg:'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg',
        author:'Rob Percival',
        link:'https://udemycourses.me/mega-digital-marketing-course-a-z-free-download/',
        index:3
    },
    {
        cname:'🔰 The Data Science Course 2021: Complete Data Science Bootcamp 🔰 ',
        cdesc:'Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning',
        cimg:'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg',
        author:'365 Careers',
        link:'https://bit.ly/3cOps7Q',
        index:4
    },
    {
        cname:'Learn C# By Building Applications',
        cdesc:'Learn C# 6 And C# 7 By Understanding The Core Concepts And Using Them To Build Real World .NET Console Applications.',
        cimg:'https://www.theiotacademy.co/assets/images/coursepages/c-language-certification-course.png',
        author:'365 Careers',
        link:'https://bit.ly/3fURxfN',
        index:5
    },
    {
        cname:'Unity 3D Course: No Coding, Build & Market Video Games Fast',
        cdesc:'No Programming Required How To Build And Market Your Game From Scratch Complete Guide',
        cimg:'https://www.mindinventory.com/blog/wp-content/uploads/2022/04/unity-3d-for-game-development.webp',
        author:'Sergey Kasimov',
        link:'https://bit.ly/3xbewc3',
        index:6
    }
]

const Course = (props) => {
    const [press, setpress] = useState(false);

    return(
        <View style={styles.screen}> 
            <ScrollView>
            {
                Alldata.map((item,index) => {
                    return(
                        <Pressable onPress={() => {
                            props.navigation.push('coursedetail',{
                                coursedetail : item
                            })
                        }} key={index}>
                        <View style={styles.box}> 
                            <Image style={styles.images} source={{ uri : item.cimg}}/>

                            <Text style={{fontSize:18,fontWeight:500,color:'black',marginLeft:10,marginTop:5}}>{item.cname}</Text>

                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{width:300}}>
                                    <Text style={{fontSize:10,fontWeight:500,color:'#636366',marginLeft:10,marginTop:5}}>{item.cdesc}</Text>
                                </View>

                                <TouchableOpacity 
                                style={{marginRight:10,marginTop:5}}
                                onPress={() => {
                                    setpress(!press)
                                }}>
                                <Icon type={Icons.AntDesign} size={30} color='#1882FF' name={press ? 'hearto' : 'heart'}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                        </Pressable>
                    )
                })
            }
           


            <View style={{backgroundColor:'#1882FF',width:windowWidth,height:40,marginTop:40}}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    box:{
        width:(windowWidth*95)/100,
        height:250,
        borderRadius:12,
        // backgroundColor:'#1882FF',
        backgroundColor:'white',
        marginVertical:10,
        alignSelf:'center',
        elevation:10,
    },
    images:{
        width:(windowWidth*95)/100,
        height:150,
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    }

})

export default Course