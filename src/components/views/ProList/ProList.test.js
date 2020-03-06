import React from 'react';
import { shallow } from 'enzyme';
import { ProListComponent } from './ProList';

describe('Component ProList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProListComponent />);
    expect(component).toBeTruthy();
  });
});
