import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import AppComp from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<AppComp />);
    const welcome = <div>Hello World!</div>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
