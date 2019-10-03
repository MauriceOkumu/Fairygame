import React from 'react'
import { Provider } from 'react-redux'
import { render, unmountComponentAtNode } from 'react-dom'
import Routes from '../components/Routes'
import  store  from '../reduxStore/store'

it('Renders the navbar without crashing', () => {
   const div = document.createElement('div');
   const navb = 
   <Provider store={store}>
      <Routes />
      </Provider>
   render(navb, div);
   unmountComponentAtNode(div);
   
})
