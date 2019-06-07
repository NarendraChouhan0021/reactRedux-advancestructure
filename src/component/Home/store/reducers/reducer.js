import actiontypes from '../actions/types';

export default function(state={
  TotalItems:[]
},action){
  console.log("action.....12.......",action)
    switch (action.type){
    
        case actiontypes.ADD_ITEM:
        return {
          ...state,
          TotalItems:action.payload,
        };
        default:
              return state;
      }
}