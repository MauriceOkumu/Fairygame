import React from 'react';
import  {render, unmountComponentAtNode} from 'react-dom';
import { shallow , mount} from 'enzyme'
import Login from '../Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Login />, div);
  unmountComponentAtNode(div);
});

it('renders a page', () => {
  mount( <Login />)
})