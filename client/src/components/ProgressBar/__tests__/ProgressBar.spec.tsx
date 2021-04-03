import React from 'react';
//  ts-migrate(7016) FIXME: Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
//  ts-migrate(7016) FIXME: Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import { mount } from 'enzyme';

//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
//  ts-migrate(6142) FIXME: Module '../index' was resolved to '/Users/ngocdo/s... Remove this comment to see the full error message
import ProgressBar from '../index';

//  ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ProgressBar render', () => {
  //  ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('renders correct progress text', () => {
    //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = mount(<ProgressBar progress="75" />);

    //  ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      //  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      wrapper.contains(<div className="td-progress-text">75% Completed</div>),
    ).toBeTruthy();
  });
});
