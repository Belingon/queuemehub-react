import { combineReducers } from 'redux'
import { createResponsiveStateReducer } from 'redux-responsive';

import app from '../containers/app/reducer';
import home from '../containers/home/reducer';

const rootReducer = combineReducers({
    app,
    home,
    browser: createResponsiveStateReducer({
      extraSmall: 480,
      small: 768,
      medium: 960,
      large: 1200
    })
  });
  
  export default rootReducer
  