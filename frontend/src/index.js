import React from 'react';
import { render} from 'react-dom';
import './css/index.css';
import Routes from './components/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './reduxStore/store'
import { Provider } from 'react-redux'

render(
     <Provider store = {store}>
         <Routes />
     </Provider>, 
     document.getElementById('root')
    );

