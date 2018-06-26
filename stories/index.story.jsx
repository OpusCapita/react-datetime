import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { DateInput } from '../src/index';

const stories = storiesOf('@opuscapita/react-datetime/dateinput', module);

// Localization story
stories.add('Localization', () =>
  (
    <div id="component-container">
      <DateInput
        value="03/05/2008"
        locale={text('en')}
        dateFormat={text('Date format as string', 'YYYY-MM-DD')}
      />
    </div>
  ));

stories.add('Calendar visualization', () =>
  (
    <div id="component-container">
      <DateInput
        value="03/05/2008"
        locale="en"
        time={boolean('With time', false)}
        showWeekNumbers={boolean('Show week numbers', false)}
      />
    </div>
  ));
