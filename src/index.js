import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './components/app/Root'
//import axiosInterceptor from './sessionStore/JwtInterceptor';

//axiosInterceptor();
const store = configureStore();

render(
    <AppContainer>
        <Root store={store}/>
    </AppContainer>,
    document.getElementById('root')
);