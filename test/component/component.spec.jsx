/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { DateInput } from '../../src/index';

describe('DateInput component', () => {
  it('is rendered', () => {
    const wrapper = mount(<DateInput />);
    expect(wrapper).to.exist;
  });
});
