/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DateInput from './date-input.component';

export default class DateTimeInput extends React.Component {
  static propTypes = {
    dateFormat: PropTypes.string,
    minutesInterval: PropTypes.number,
  };

  static defaultProps = {
    dateFormat: 'L LT',
    minutesInterval: 5,
  };

  render() {
    const { dateFormat } = this.props;
    return (
      <DateInput
        time
        dateFormat={dateFormat}
        {...this.props}
      />
    );
  }
}
