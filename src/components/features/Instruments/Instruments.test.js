import React from 'react';
import { shallow } from 'enzyme';
import { Instruments } from './Instruments';

describe('Component Instruments', () => {
  it('should render without crashing', () => {
    const component = shallow(<InstrumentsComponent />);
    expect(component).toBeTruthy();
  });
});
