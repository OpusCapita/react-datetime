/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, object, select } from '@storybook/addon-knobs';
// Application imports
import { DateInput, DateTimeInput } from '../src/index';
import TimePicker from '../src/time-picker/time-picker.component';
import { StoryHOCComponentWrapper } from './story-wrapper-component';


const stories = storiesOf('@opuscapita/react-datetime', module);

// One complete Story of DateInput
stories.add('DateInput', () => {
  class StoryComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: null };
    }
    onDateChange = val => this.setState({ date: val });
    onDayClick = () => { alert('Day clicked'); } // eslint-disable-line
    render() {
      const props = {
        ...this.props,
        onChange: this.onDateChange,
        onDayClick: this.onDayClick,
        value: this.state.date,
      };
      return <DateInput {...props} />;
    }
  }

  // Customisable props:
  const classNameOptions = {
    None: '',
    customGreen: 'custom-green',
    customBlue: 'custom-blue',
    customRed: 'custom-red',
  };
  const localeOptions = ['en-GB', 'fi-FI', 'se-SE'];
  const dateFormatOptions = ['L', 'l', 'LL', 'll', 'LLL', 'lll', 'LLLL', 'llll'];
  // DateInput Component props
  const props = {
    // booleans
    time: boolean('Show time', false),
    showClearValue: boolean('Show clear value', true),
    showWeekNumbers: boolean('Show week numbers', true),
    showOverlay: boolean('Show Overlay', false),
    disabled: boolean('Is disabled', false),
    // numbers
    minutesInterval: number('Minutes interval', 5),
    // objects
    inputProps: object('inputProps', {}),
    // strings with predefined options
    locale: select('Locale', localeOptions, ''),
    className: select('Custom className', classNameOptions, ''),
    dateFormat: select('Date format', dateFormatOptions, 'L'),
  };

  const WrappedComponent = StoryHOCComponentWrapper(StoryComponent, props);
  return <WrappedComponent />;
});

// Use eslint to remove the error:)

stories.add('DateTimeInput', () => {
  class StoryComponent extends React.Component { 
    constructor(props) {
      super(props);
      this.state = { date: '2013-04-22T00:00:00.000Z' };
    }
    onDateChange = date => this.setState({ date });
    onDayClick = () => { alert('Day clicked'); } // eslint-disable-line
    render() {
      const props = {
        ...this.props,
        onChange: this.onDateChange,
        onDayClick: this.onDayClick,
        value: this.state.date,
      };
      return <DateTimeInput {...props} />;
    }
  }

  // Customisable props:
  const classNameOptions = {
    None: '',
    customGreen: 'custom-green',
    customBlue: 'custom-blue',
    customRed: 'custom-red',
  };
  const localeOptions = ['en-GB', 'fi-FI', 'se-SE'];
  const dateFormatOptions = ['L', 'l', 'LL', 'll', 'LLL', 'lll', 'LLLL', 'llll'];
  // DateInput Component props
  const props = {
    // booleans
    time: boolean('Show time', true),
    showClearValue: boolean('Show clear value', true),
    showWeekNumbers: boolean('Show week numbers', true),
    showOverlay: boolean('Show Overlay', false),
    disabled: boolean('Is disabled', false),
    // numbers
    minutesInterval: number('Minutes interval', 5),
    // objects
    inputProps: object('inputProps', {}),
    // strings with predefined options
    locale: select('Locale', localeOptions, 'fi-FI'),
    className: select('Custom className', classNameOptions, ''),
    dateFormat: select('Date format', dateFormatOptions, 'L'),
  };

  const WrappedComponent = StoryHOCComponentWrapper(StoryComponent, props);
  return <WrappedComponent />;
});

stories.add('TimeInput', () => {
  class StoryComponent extends React.Component { 
    constructor(props) {
      super(props);
      this.state = { time: { hour: 10, minute: 30 } };
    }
    onTimeChange = time => this.setState({ time });
    render() {
      const props = {
        ...this.props,
        onChange: this.onTimeChange,
        time: this.state.time,
      };
      return <TimePicker {...props} />;
    }
  }

  // TimeInput Component props
  const props = {
    // booleans
    disabled: boolean('Is disabled', false),
    // numbers
    minutesInterval: number('Minutes interval', 5),
  };

  const WrappedComponent = StoryHOCComponentWrapper(StoryComponent, props);
  return <WrappedComponent />;
});
