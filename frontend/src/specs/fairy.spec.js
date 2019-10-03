import React from 'react';
import { Provider } from 'react-redux'
import { render,  unmountComponentAtNode } from 'react-dom';
import Fairy from '../gamelogic/fairy';
import store from '../reduxStore/store'

it('renders the game page without crashing', () => {
  const div = document.createElement('div');
  const Fairies = 
    <Provider store={store}>
      <Fairy />
    </Provider>
  render(Fairies, div);
  unmountComponentAtNode(div);
});


