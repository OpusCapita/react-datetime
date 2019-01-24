import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './time-picker.scss';

export default class TimePicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    time: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
    }),
    minutesInterval: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    time: {
      hour: 0,
      minute: 0,
    },
    minutesInterval: 5,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.hours = [];
    this.minutes = [];
  }

  componentWillMount() {
    this.getHourListValues();
    this.getMinuteListValues();
  }

  onChange = (e) => {
    const oldTime = { ...this.props.time };
    const newTime = Object.assign(oldTime, {
      [e.target.name]: Number(e.target.value),
    });
    this.props.onChange(newTime);
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

  render() {
    return (
      <div className="oc-time-picker-container">
        <FormControl name="hour" componentClass="select" value={this.props.time.hour} onChange={this.onChange}
          disabled={this.props.disabled}
        >
          {this.hours.map(hour => (
            <option
              key={`hour-${hour}`}
              value={hour}
            >
              {this.getPaddedNumber(hour)}
            </option>
          ))}
        </FormControl>

        <FormControl name="minute" componentClass="select" value={this.props.time.minute} onChange={this.onChange}
          disabled={this.props.disabled}
        >
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
