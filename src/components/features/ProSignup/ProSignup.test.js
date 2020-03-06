import React from 'react';
import { shallow } from 'enzyme';
import { ProSignupComponent } from './ProSignup';

describe('Component ProSignup', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProSignupComponent />);
    expect(component).toBeTruthy();
  });
});
