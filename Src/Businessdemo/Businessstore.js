import {createStore} from 'redux';
import {add_list, delete_list} from './actionlist';

const initialState = {
  data: [
    {
      uid: '',
      username: '',
      businessdata: {},
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add_list: {
      const {id, name, number} = action.datalist;
      return {
        ...state,
        data: [...state.data, {id, name, number}],
      };
    }

    case delete_list: {
      const {id} = action.datalist;
      return {
        ...state,
        data: state.data.filter(list => list.id != id),
      };
    }

    default:
      return state;
  }
};

const liststores = createStore(reducer);

export default liststores;
