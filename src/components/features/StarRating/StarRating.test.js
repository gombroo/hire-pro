import React from 'react';
import { shallow } from 'enzyme';
import { StarRatingComponent } from './StarRating';

describe('Component StarRating', () => {
  it('should render without crashing', () => {
    const component = shallow(<StarRatingComponent />);
    expect(component).toBeTruthy();
  });
});
