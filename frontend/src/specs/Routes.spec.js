import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { shallow, mount } from 'enzyme'
import Routes from '../components/Routes'

it('Renders the navbar without crashing', () => {
   const navb = mount(<Routes />)
   expect(navb.exists()).toBe(true)
})
