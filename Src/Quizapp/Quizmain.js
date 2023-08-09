import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {windowHeight, windowWidth} from '../constant/extra';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import {useTheme} from '@react-navigation/native';
import Quizresult from './Quizresult';
// import { TouchableOpacity } from 'react-native-gesture-handler'

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const Quizmain = ({route, navigation}) => {
  // const {qdata} = route.params

  const [press, setpress] = useState(false);
  // const [data, setData] = useState([]);
  const [qdata, setqdata] = useState([]);
  const [que, setque] = useState(0);
  const [option, setoption] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [score, setscore] = useState(0);

  const getquiz = async () => {
    try {
      const url =
        'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986';
      const responce = await fetch(url);
      const json = await responce.json();
      setqdata(json.results);
      setoption(generateoptionandshuffle(json.results[0]));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getquiz();
  }, []);

  const generateoptionandshuffle = _quetionop => {
    // console.log(_quetionop);
    const op = [..._quetionop.incorrect_answers];
    op.push(_quetionop.correct_answer);
    shuffleArray(op);
    return op;
  };

  const onhandlepress = () => {
    if (que <= 9) {
      setque(que + 1);
      setoption(generateoptionandshuffle(qdata[que + 1]));
    }
  };

  const handleselectedoption = _option => {
    if (_option === qdata[que].correct_answer) {
      setscore(score + 10);
    }

    if (que < 9) {
      setque(que + 1);
      setoption(generateoptionandshuffle(qdata[que + 1]));
    } else {
      newnavigation();
    }
  };

  const newscreenoption = () => {
    if (que <= 9) {
      setque(que + 1);
      setoption(generateoptionandshuffle(qdata[que + 1]));
    }

    if (que > 9) {
      newnavigation();
    }
  };
  console.log(score);

  const newnavigation = () => {
    navigation.navigate('quizresult', {
      sc: score,
    });
  };

  return Loading ? (
    <UIActivityIndicator
      size={40}
      color="#0000ff"
      style={{alignSelf: 'center'}}
    />
  ) : (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/images/bg2.png')}
        style={{flex: 1}}>
        <View style={styles.top}>
          <Text style={styles.questionq}>
            Q. {decodeURIComponent(qdata[que].question)}{' '}
          </Text>
        </View>

        <View style={styles.middle}>
          <TouchableOpacity
            style={[styles.optionquiz, {borderWidth: 2, borderColor: 'white'}]}
            onPress={() => {
              handleselectedoption(option[0]);
            }}>
            <Text style={[styles.optiontext]}>
              {' '}
              {decodeURIComponent(option[0])}{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionquiz, {borderWidth: 2, borderColor: 'white'}]}
            onPress={() => {
              handleselectedoption(option[1]);
            }}>
            <Text style={[styles.optiontext]}>
              {' '}
              {decodeURIComponent(option[1])}{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionquiz, {borderWidth: 2, borderColor: 'white'}]}
            onPress={() => {
              handleselectedoption(option[2]);
            }}>
            <Text style={[styles.optiontext]}>
              {' '}
              {decodeURIComponent(option[2])}{' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.optionquiz, {borderWidth: 2, borderColor: 'white'}]}
            onPress={() => {
              handleselectedoption(option[3]);
            }}>
            <Text style={[styles.optiontext]}>
              {' '}
              {decodeURIComponent(option[3])}{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.end}>
          {que < 9 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                onhandlepress();
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#033860',
                  alignSelf: 'center',
                }}>
                {' '}
                Next{' '}
              </Text>
            </TouchableOpacity>
          )}

          {que === 9 && (
            <TouchableOpacity
              style={[styles.button, {width: 150}]}
              onPress={() => {
                // newnavigation();
                <Quizresult />;
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#033860',
                  alignSelf: 'center',
                }}>
                {' '}
                Show Result{' '}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor:'white'
  },
  end: {
    // width:(windowWidth*90)/100,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // alignSelf:'center'
    marginLeft: 30,
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  questionq: {
    fontSize: 30,
    fontWeight: 700,
    color: 'white',
    marginLeft: 20,
    marginTop: 20,
  },
  top: {
    marginVertical: 20,
  },
  middle: {
    height: (windowHeight * 80) / 100,
  },
  optionquiz: {
    width: (windowWidth * 90) / 100,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  optiontext: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
    marginLeft: 10,
  },
});

export default Quizmain;
