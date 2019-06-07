import actiontypes from '../actions/types';

export default function(state={
  users:[]
},action){
  switch (action.type){
  
      case actiontypes.ADD_ITEM:
      return {
        ...state,
        users:action.payload,
      };

      case actiontypes.REMOVE_ITEM:
      return {
        ...state,
        users:action.payload,
      };
      default:
            return state;
    }
}