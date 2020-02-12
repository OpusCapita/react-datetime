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
    const { time, onChange } = this.props;
    const oldTime = { ...time };
    const newTime = Object.assign(oldTime, {
      [e.target.name]: Number(e.target.value),
    });
    onChange(newTime);
  };

  /**
   * Gets a number with that 0-prefix, if it's < 10
   * @param number
   * @returns number {string}
   */
  getPaddedNumber = (number) => ((number < 10) ? `0${number}` : number);


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
    const { minutesInterval } = this.props;
    for (let i = 0; i < 60; i += minutesInterval) {
      this.minutes.push(i);
    }
  };

  render() {
    const {
      time: { minute, hour },
      disabled,
    } = this.props;
    return (
      <div className="oc-time-picker-container">
        <FormControl
          name="hour"
          componentClass="select"
          value={hour}
          onChange={this.onChange}
          disabled={disabled}
        >
          {this.hours.map((h) => (
            <option
              key={`hour-${h}`}
              value={h}
            >
              {this.getPaddedNumber(h)}
            </option>
          ))}
        </FormControl>

        <FormControl
          name="minute"
          componentClass="select"
          value={minute}
          onChange={this.onChange}
          disabled={disabled}
        >
          {this.minutes.map((m) => (
            <option
              key={`minute-${m}`}
              value={m}
            >
              {this.getPaddedNumber(m)}
            </option>
          ))}
        </FormControl>
      </div>
    );
  }
}
