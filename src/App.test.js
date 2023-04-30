import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Click it Count it starts', () => {
  it('starts with 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h3').text();
    expect(text).toEqual('Count: 0');
  });

  it('click it, increase it by 1', () => {
    const wrapper = shallow(<App />);
    const increaseBtn = wrapper.find('button.increase');
    increaseBtn.simulate('click');
    const text = wrapper.find('h3').text();
    expect(text).toEqual('Count: 1');
  });

  it('check the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
