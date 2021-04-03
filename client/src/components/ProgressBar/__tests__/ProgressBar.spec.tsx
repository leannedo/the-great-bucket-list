import React from 'react';
import { mount } from 'enzyme';

import ProgressBar from '../index';

describe('ProgressBar render', () => {
  it('renders correct progress text', () => {
    const wrapper = mount(<ProgressBar progress="75" />);

    expect(
      wrapper.contains(<div className="td-progress-text">75% Completed</div>),
    ).toBeTruthy();
  });
});
