import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon, {Icons} from '../constant/Icons';
import {ScrollView} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Continuedata = [
  {
    coursename: 'Full Stack Web Devlopment ',
    desc: 'A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end.',
    author: 'Dr.Vs sangani',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTqdwb0Lg_0N-2ZXBiULMWbJqIabtX87Q3w&usqp=CAU',
    keys: 1,
  },
  {
    coursename: 'ChatGPT: Complete Course ',
    desc: 'ChatGPT is an AI chatbot that uses natural language processing to create humanlike conversational dialogue. The language model can respond to questions and compose various written content, including articles, and emails.',
    author: 'Sergey Kasimov ',
    img: 'https://beebom.com/wp-content/uploads/2022/12/cool-things-do-with-chatgpt-featured.jpg?w=750&quality=75',
    keys: 2,
  },
  {
    coursename: 'Flutter With Beginning',
    desc: 'Flutter is an open source framework developed and supported by Google. Frontend and full-stack developers use Flutter to build an applications user interface (UI) for multiple platforms with a single codebase.',
    author: 'Rob Percival',
    img: 'https://www.softwebsolutions.com/wp-content/uploads/2020/10/flutter-app-developer.jpg',
    keys: 3,
  },
  {
    coursename: '🔰 Master In VS Code',
    desc: 'Visual Studio Code is a free coding editor that helps you start coding quickly. Use it to code in any programming language, without switching editors.support for many languages, including Python, Java, C++, JavaScript, and more.',
    author: 'Derrick Mitchell',
    img: 'https://cdn.dribbble.com/users/6569/screenshots/16471177/media/8bbfe7fd594073dc6271d5d852c7381a.png?resize=400x0',
    keys: 4,
  },
];

const Alldata = [
  {
    cname: 'Graphic Design Bootcamp: Photoshop, Illustrator, InDesign',
    cdesc:
      'Bestselling Beginner Course! Use Photoshop, Illustrator, & InDesign For Logo Design, Web Design, Poster Design, And More.',
    cimg: 'https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg',
    author: 'Derrick Mitchell',
    link: 'https://bit.ly/3N4gKTx',
    index: 1,
  },
  {
    cname: 'Learn JavaScript from Scratch: The Ultimate Beginners Course',
    cdesc:
      'Learn Modern JavaScript Programming Fundamentals With Practical Hands Training.',
    cimg: 'https://user-images.githubusercontent.com/68542775/167072911-dc31eac8-6885-4a05-9c25-279ecce22a79.png',
    author: 'Juan E. Galvan',
    link: 'https://udemycourses.me/download-javascript-promises-the-complete-guide/',
    index: 2,
  },
  {
    cname: '🔰 The Complete Digital Marketing Course - 12 Courses in 1 🔰',
    cdesc:
      'Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!',
    cimg: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg',
    author: 'Rob Percival',
    link: 'https://udemycourses.me/mega-digital-marketing-course-a-z-free-download/',
    index: 3,
  },
  {
    cname:
      '🔰 The Data Science Course 2021: Complete Data Science Bootcamp 🔰 ',
    cdesc:
      'Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning',
    cimg: 'https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0.jpg',
    author: '365 Careers',
    link: 'https://bit.ly/3cOps7Q',
    index: 4,
  },
  {
    cname: 'Learn C# By Building Applications',
    cdesc:
      'Learn C# 6 And C# 7 By Understanding The Core Concepts And Using Them To Build Real World .NET Console Applications.',
    cimg: 'https://www.theiotacademy.co/assets/images/coursepages/c-language-certification-course.png',
    author: '365 Careers',
    link: 'https://bit.ly/3fURxfN',
    index: 5,
  },
  {
    cname: 'Unity 3D Course: No Coding, Build & Market Video Games Fast',
    cdesc:
      'No Programming Required How To Build And Market Your Game From Scratch Complete Guide',
    cimg: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/04/unity-3d-for-game-development.webp',
    author: 'Sergey Kasimov',
    link: 'https://bit.ly/3xbewc3',
    index: 6,
  },
];

const Studenthome = ({navigation}, props) => {
  const [press, setpress] = useState(false);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.bg}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'https://stylesatlife.com/wp-content/uploads/2021/11/Chris-Hemsworth-Face-Shape.jpg.webp',
                }}
              />

              <View style={{marginLeft: 5, marginTop: 5}}>
                <Text style={{fontSize: 20, fontWeight: 600, color: 'white'}}>
                  Good Morning
                </Text>
                <Text style={{fontSize: 13, fontWeight: 400, color: '#FAF9F6'}}>
                  Chris Hemsworth
                </Text>
              </View>
            </View>

            <View style={{marginRight: 10, marginTop: 5}}>
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.push('Profile')
                  navigation.navigate('Profile');
                }}>
                <Icon
                  type={Icons.Ionicons}
                  name="ios-share-outline"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: 'white',
              marginTop: 30,
              marginLeft: 10,
            }}>
            {' '}
            Popular Courses{' '}
          </Text>

          <View style={{height: 150, marginTop: 10}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Continuedata.map((item, index) => {
                return (
                  <View key={index} style={styles.container}>
                    <Image style={styles.image} source={{uri: item.img}} />

                    <View style={{marginLeft: 6, width: 230}}>
                      <Text style={styles.title}> {item.coursename} </Text>

                      <Text style={styles.subtitle}>{item.desc}</Text>

                      <Text style={styles.authors}> {item.author} </Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: 'black',
              marginTop: 30,
              marginLeft: 10,
            }}>
            {' '}
            All Course{' '}
          </Text>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: '#636366',
              marginTop: 37,
              marginRight: 10,
            }}>
            {' '}
            See all{' '}
          </Text>
        </View>

        {Alldata.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                props.navigation.push('coursedetail', {
                  coursedetail: item,
                  alldata: Alldata,
                });
              }}
              key={index}>
              <View style={styles.box}>
                <Image style={styles.images} source={{uri: item.cimg}} />

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'black',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  {item.cname}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: 300}}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#636366',
                        marginLeft: 10,
                        marginTop: 5,
                      }}>
                      {item.cdesc}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{marginRight: 10, marginTop: 5}}
                    onPress={() => {
                      setpress(!press);
                    }}>
                    <Icon
                      type={Icons.AntDesign}
                      size={30}
                      color="#1882FF"
                      name={press ? 'hearto' : 'heart'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          );
        })}

        <View
          style={{
            backgroundColor: '#1882FF',
            width: windowWidth,
            height: 40,
            marginTop: 40,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bg: {
    width: windowWidth,
    height: 300,
    backgroundColor: '#1882FF',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  container: {
    width: (windowWidth * 90) / 100,
    height: 130,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 400,
    color: '#49494C',
    textAlign: 'justify',
    marginBottom: 3,
  },
  authors: {
    fontSize: 12,
    fontWeight: 500,
    color: '#636366',
  },
  box: {
    width: (windowWidth * 95) / 100,
    height: 250,
    borderRadius: 12,
    // backgroundColor:'#1882FF',
    backgroundColor: 'white',
    marginVertical: 10,
    alignSelf: 'center',
    elevation: 10,
  },
  images: {
    width: (windowWidth * 95) / 100,
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default Studenthome;
