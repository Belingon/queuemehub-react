import { combineReducers } from 'redux'
import { createResponsiveStateReducer } from 'redux-responsive';

import app from '../containers/app/reducer';
import things from '../containers/thing/reducer';

const rootReducer = combineReducers({
    app,
    things,
    browser: createResponsiveStateReducer({
      extraSmall: 480,
      small: 768,
      medium: 960,
      large: 1200
    })
  });
  
  export default rootReducer
  