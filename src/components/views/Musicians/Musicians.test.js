import React from 'react';
import { shallow } from 'enzyme';
import { MusiciansComponent } from './Musicians';

describe('Component Musicians', () => {
  it('should render without crashing', () => {
    const component = shallow(<MusiciansComponent />);
    expect(component).toBeTruthy();
  });
});
