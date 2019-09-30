import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { render, unmountComponentAtNode } from 'react-dom'
import { shallow, mount } from 'enzyme'
import Routes from '../components/Routes'
import errorReducer from '../reducers/errorreducer'
// import  store  from '../reduxStore/store'

it('Renders the navbar without crashing', () => {
   const div = document.createElement('div');
   const store = createStore(combineReducers({
      error:errorReducer
   }))
   const navb = 
   <Provider store={store}>
      <Routes />
      </Provider>
   // expect(navb.exists()).toBe(true)
   // shallow(navb)
  
   
})
