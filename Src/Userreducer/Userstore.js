import {createStore} from 'redux';
import {useradd, userdelete} from './Useraction';
import {businessadd, businessdelete} from './businessaction';

const initialState = {
  userdata: [],
  businessdata: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case useradd: {
      const {id, username, number, hobby} = action.userdatalist;
      return {
        ...state,
        userdata: [...state.userdata, {id, username, number, hobby}],
      };
    }

    case userdelete: {
      const {id} = action.userdatalist;
      return {
        ...state,
        userdata: state.userdata.filter(list => list.id != id),
      };
    }

    case businessadd: {
      const {bid, busername, bnumber, bhobby, buisid} = action.businesslist;
      return {
        ...state,    
        businessdata: [
          ...state.businessdata,
          {bid, busername, bnumber, bhobby, buisid},
        ],
      };
    }

    case businessdelete: {
      const {bid} = action.businesslist;
      return {
        ...state,
        businessdata: state.businessdata.filter(list => list.bid != bid),
      };
    }

    default:
      return state;
  }
};

// const userstore = createStore(reducer);

export default reducer;
