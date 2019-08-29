import React from 'react';
import  {render, unmountComponentAtNode} from 'react-dom';
import Login from '../Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Login />, div);
  unmountComponentAtNode(div);
});

it('renders a page', (y) => {
  
})