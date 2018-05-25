import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import './time-picker.scss';

export default class TimePicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    minutesInterval: PropTypes.number,
  };

  static defaultProps = {
    value: undefined,
    minutesInterval: 5,
  };

  constructor(props) {
    super(props);

    this.state = {
      minute: this.getMinutes(props.value),
      hour: this.getHours(props.value),
    };

    this.hours = [];
    this.minutes = [];
  }

  componentWillMount() {
    this.getHourListValues();
    this.getMinuteListValues();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value && nextProps.value) {
      this.setState({
        minute: this.getMinutes(nextProps.value),
        hour: this.getHours(nextProps.value),
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      // Makes a moment object out of value (date), rewrites hour/minute values
      // and calls props.onChange
      const momentDate = moment.utc(this.props.value);
      momentDate.set('hour', this.state.hour);
      momentDate.set('minute', this.state.minute);

      this.props.onChange(momentDate.format().replace(/\u200E/g, ''));
    });
  };

  /**
   * Gets a number with that 0-prefix, if it's < 10
   * @param number
   * @returns number {string}
   */
  getPaddedNumber = number => number < 10 ? `0${number}` : number; // eslint-disable-line no-confusing-arrow


  /**
   * Provides values for the hour select box
   */
  getHourListValues = () => {
    for (let i = 0; i < 24; i += 1) {
      this.hours.push(i);
    }
  };

  /**
   * Provides values for the minute select box
   */
  getMinuteListValues = () => {
    for (let i = 0; i < 60; i += this.props.minutesInterval) {
      this.minutes.push(i);
    }
  };

  /**
   * Gets hours based on a date
   * @param date
   * @returns {number}
   */
  getHours = (date) => {
    if (!date) return 0;
    return moment.utc(date).hours();
  };

  /**
   * Gets minutes based on a date
   * @param date
   * @returns {number}
   */
  getMinutes = (date) => {
    if (!date) return 0;
    return moment.utc(date).minutes();
  };

  render() {
    return (
      <div className="oc-time-picker-container">
        <FormControl name="hour" componentClass="select" value={this.state.hour} onChange={this.onChange}>
          {this.hours.map(hour => (
            <option
              key={`hour-${hour}`}
              value={hour}
            >
              {this.getPaddedNumber(hour)}
            </option>
          ))}
        </FormControl>

        <FormControl name="minute" componentClass="select" value={this.state.minute} onChange={this.onChange}>
          {this.minutes.map(minute => (
            <option
              key={`minute-${minute}`}
              value={minute}
            >
              {this.getPaddedNumber(minute)}
            </option>))}
        </FormControl>
      </div>
    );
  }
}
