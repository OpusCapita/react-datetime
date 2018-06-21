import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { DateInput } from '../src/index';

const stories = storiesOf('@opuscapita/react-datetime/dateinput', module);

// Locales
stories.add('locales', () =>
  (
    <div id="component-container">
      <DateInput value="03/05/2008" locale={text('en')} />
    </div>
  ));

stories.add('week numbers', () =>
  (
    <div id="component-container">
      <DateInput value="03/05/2008" locale="en" showWeekNumber={false} />
    </div>
  ));
