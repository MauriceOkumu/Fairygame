import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import App from '../components/App';
import { shallow , mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the home page', () => {
  const wrapper = shallow( <App />)
  expect(wrapper.children.length).toEqual(1)
})
