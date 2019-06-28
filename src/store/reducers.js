import { combineReducers } from 'redux'
import app from '../containers/app/reducer';
import businesses from '../containers/businesses/reducer';

const rootReducer = combineReducers({
    app,
    businesses
  });
  
export default rootReducer;
  