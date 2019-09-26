import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow , mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit('renders the home page', () => {
  const wrapper = mount( <App />)
  expect(wrapper.children.length).toEqual(1)
})
