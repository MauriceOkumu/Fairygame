import React from 'react';
import  {render, unmountComponentAtNode} from 'react-dom';
import { shallow , mount} from 'enzyme'
import Login from '../components/Login';
import { createMockStore } from 'redux-test-utils'
//Smoke test
it('renders login page without crashing', () => {
  // const div = document.createElement('div');
  // render(<Login />, div);
  // unmountComponentAtNode(div);
  // const testState = {
  //   showBox: {}
  // };
  // const store = createMockStore(testState)
  // const component = shallowWithStore(<Login />, store);
  // expect(component).to.be.a('object');
});

it('renders the login page', () => {
//   const wrapper = mount( <Login />)
// //   console.log(wrapper.childern)
//   expect (wrapper.exists()).toBe(true)
//   expect(wrapper.children.length).toEqual(1)
})