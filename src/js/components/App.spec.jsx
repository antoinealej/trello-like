import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';
import AppComp from './App';
import ColumnsList from './Columns/ColumnsList';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the component with ColumnsList', () => {
    const wrapper = shallow(<AppComp />);
    expect(wrapper.contains(<ColumnsList />)).to.equal(true);
  });
});
