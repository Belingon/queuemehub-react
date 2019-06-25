import { combineReducers } from 'redux'
import app from '../containers/app/reducer';
import home from '../containers/home/reducer';
import businesses from '../containers/businesses/reducer';

const rootReducer = combineReducers({
    app,
    home,
    businesses
  });
  
  export default rootReducer
  