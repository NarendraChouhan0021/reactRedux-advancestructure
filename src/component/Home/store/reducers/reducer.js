import t from '../../actions/login/types';

export default function(state={
    username:''
},action){
    switch (action.type){
    
        case actiontypes.AUTH_USER:
        return {
          ...state,
         user: action.payload
        };
        default:
              return state;
      }
}