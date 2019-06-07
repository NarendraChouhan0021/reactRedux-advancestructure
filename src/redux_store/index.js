import { combineReducers } from "redux";
import homeReducers from '../component/Home/store/reducers/reducer';
import loginReducers from '../component/Login/store/reducers/reducer';

const rootReducer = combineReducers({
    home: homeReducers,
    login: loginReducers,
});
  
export default rootReducer;