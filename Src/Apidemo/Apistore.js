// const { add_apidata } = require("./Apiaction")
import {add_api, add_businessdata} from './Apiaction';
import {add_data} from './Apiaction';

const initialState = {
  pokedata: [],
  businessdata: [],
};

const apireducer = (state = initialState, action) => {
  switch (action.type) {
    case add_api: {
      const {datapokemon} = action.apidatalist;
      return {
        ...state,
        pokedata: [...state.pokedata, ...datapokemon],
      };
    }

    case add_data: {
      const {dp} = action.datalist;
      return {
        ...state,
        pokedata: dp,
      };
    }

    case add_businessdata: {
      const {name, number, bid} = action.businessdatalist;
      return {
        ...state,
        businessdata: [...state.businessdata, {name, number, bid}],
      };
    }
    default:
      return state;
  }
};

export default apireducer;
