import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
import './css/index.css';
import Routes from './components/Routes'
// import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './reduxStore/store'
import setAuthToken from '../src/authToken/authtoken'
import { setCurrentUser } from '../src/actions/authentication'

if(localStorage.jwtToken) {
    console.log('Hurray ',localStorage.jwtToken)
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
  }

render(
     <Provider store = {store}>
         <Routes />
     </Provider>, 
     document.getElementById('root')
    );

