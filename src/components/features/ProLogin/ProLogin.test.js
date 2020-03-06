import React from 'react';
import { shallow } from 'enzyme';
import { ProLoginComponent } from './ProLogin';

describe('Component ProLogin', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProLoginComponent />);
    expect(component).toBeTruthy();
  });
});
