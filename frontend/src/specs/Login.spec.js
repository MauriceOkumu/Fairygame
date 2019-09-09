import React from 'react';
import  {render, unmountComponentAtNode} from 'react-dom';
import { shallow , mount} from 'enzyme'
import Login from '../Login';

//Smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Login />, div);
  unmountComponentAtNode(div);
});

it('renders the login page', () => {
  const wrapper = mount( <Login />)
//   console.log(wrapper.childern)
  expect (wrapper.exists()).toBe(true)
  expect(wrapper.children.length).toEqual(1)
})