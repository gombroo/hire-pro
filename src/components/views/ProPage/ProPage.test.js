import React from 'react';
import { shallow } from 'enzyme';
import { ProPageComponent } from './ProPage';

describe('Component ProPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProPageComponent />);
    expect(component).toBeTruthy();
  });
});
