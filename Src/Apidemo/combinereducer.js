import reducer from "../Userreducer/Userstore";
import apireducer from "./Apistore";
import quizreducer from "../Quizapp/Quizstore";
import { combineReducers } from "redux";

const allreducer = combineReducers({
     reducer,
     apireducer,
     quizreducer
})

export default allreducer;