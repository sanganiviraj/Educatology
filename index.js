/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Home from './Src/screens/home';
import Mainnavigation from './Src/navigations/Mainnavigation';
import Apps from './Src/Demoreducer/Apps';
import Listscreen from './Src/listdemo/listscreen';
import Mainlist from './Src/listdemo/mainlist';
import Mainuser from './Src/Userreducer/Mainuser';
import Navigationuser from './Src/Userreducer/Navigationuser';
import Apifirst from './Src/Apidemo/Apifirst';
import Imagedetail from './Src/Apidemo/imagedetail';
import Quiznavigation from './Src/Quizapp/Quiznavigation';


AppRegistry.registerComponent(appName, () => Mainnavigation);
