import React from 'react';
import { shallow } from 'enzyme';
import { FeaturedBoxesComponent } from './FeaturedBoxes';

describe('Component FeaturedBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeaturedBoxesComponent />);
    expect(component).toBeTruthy();
  });
});
