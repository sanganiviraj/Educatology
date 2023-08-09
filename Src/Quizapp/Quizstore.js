// import { act } from "react-test-renderer";
import { Quiz_add } from "./Quizaction";

const initialstate = {
    Quizdata:[]
}

const quizreducer = (state = initialstate , action) => {
    switch(action.type){
        case Quiz_add:{
            const {quizdata} = action.quizdatalist;
            return {
                ...state,
                Quizdata : [...state.Quizdata, ...quizdata]
            }
        }
        default:{
            return state
        }
    }
}

export default quizreducer