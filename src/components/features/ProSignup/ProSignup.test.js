import React from 'react';
import { shallow } from 'enzyme';
import { ProSignupComponent } from './Signup';

describe('Component ProSignup', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProSignupComponent />);
    expect(component).toBeTruthy();
  });
});
