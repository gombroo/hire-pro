import React from 'react';
import { shallow } from 'enzyme';
import { MusicPlayerComponent } from './MusicPlayer';

describe('Component MusicPlayer', () => {
  it('should render without crashing', () => {
    const component = shallow(<MusicPlayerComponent />);
    expect(component).toBeTruthy();
  });
});
