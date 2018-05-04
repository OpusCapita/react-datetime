/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import TetherComponent from 'react-tether';
import 'react-day-picker/lib/style.css';

// App imports
import TimePicker from './time-picker/time-picker.component';
import './date-input.scss';

// Date formats used by the component (mainly by getDate)
const FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT',
};

export default class DateInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    locale: PropTypes.string,
    dateFormat: PropTypes.string,
    modelDateFormat: PropTypes.string,
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    time: PropTypes.bool,
  };

  static defaultProps = {
    value: '',
    dateFormat: 'M/D/YYYY',
    modelDateFormat: undefined,
    locale: 'en',
    onChange() {
    },
    inputProps: {},
    inputRef() {
    },
    disabled: false,
    showWeekNumbers: true,
    time: false,
  };

  constructor(props) {
    super(props);

    const momentDate = moment(props.value, moment.ISO_8601);

    this.state = {
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: this.getDate(momentDate, FORMATS.DATE_OBJECT),
      // inputDate: Prettified string shown in input field
      inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat),
    };

    this.localeUtils = Object.assign(
      LocaleUtils,
      { getFirstDayOfWeek: () => moment.localeData().firstDayOfWeek() },
    );
    this.input = null;
    this.dayPicker = null;
    this.clickedInside = false;
    this.clickTimeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
  }

  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */
  getDate = (date, type, dateFormat = this.props.dateFormat) => {
    const momentDate = typeof date === 'string' ? moment(date, dateFormat) : date;
    const removeInvisibleChars = str => str.replace(/\u200E/g, '');
    if (!momentDate.isValid() || !date) return '';

    switch (type) {
      case FORMATS.PRETTY_DATE:
        return removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return removeInvisibleChars(momentDate.format());
      case FORMATS.DATE_OBJECT:
      default:
        return momentDate.toDate();
    }
  };

  handleContainerMouseDown = () => {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  };

  handleInputFocus = (e) => {
    const { showOverlay, selectedDay } = this.state;
    this.setState({
      showOverlay: true,
    }, () => {
      // Delays the execution so that dayPicker opens before selecting a day
      setTimeout(() => {
        if (!showOverlay && this.dayPicker && selectedDay) this.dayPicker.showMonth(selectedDay);
      });
    });
    if (this.props.inputProps.onFocus) {
      this.props.inputProps.onFocus(e);
    }
  };

  handleInputBlur = (e) => {
    const showOverlay = this.clickedInside;
    this.setState({
      showOverlay,
    });
    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      this.input.focus();
    }
    if (this.props.inputProps.onBlur) {
      this.props.inputProps.onBlur(e);
    }
  };

  /**
   * Handles input change, checks validity and updates model value and a day picker
   * @param e {event}
   */
  handleInputChange = (e) => {
    const inputDate = e.target.value;
    this.setState({ inputDate });

    // This get fired only if the new date is valid in given format
    if (moment(inputDate, this.props.dateFormat).isValid() && this.isValidFormat(inputDate)) {
      this.setState({
        selectedDay: this.getDate(inputDate, FORMATS.DATE_OBJECT),
      }, () => {
        // If dayPicker is open, we will show the correct month
        if (this.dayPicker) this.dayPicker.showMonth(this.state.selectedDay);
      });
      this.props.onChange(this.getDate(inputDate, FORMATS.UTC));
      if (this.props.inputProps.onChange) this.props.inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      this.props.onChange(null);
    }
  };

  /**
   * Handles dayPicker click
   * @param day {date}
   */
  handleDayClick = (day) => {
    const momentObj = moment(day);
    this.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: this.getDate(momentObj, FORMATS.PRETTY_DATE),
    }, () => {
      this.props.onChange(this.getDate(momentObj, FORMATS.UTC));
      this.input.blur();
    });
  };

  /**
   * Handles time picker (select boxes) change
   * @param date
   */
  handleTimePickerChange = (date) => {
    const momentDate = moment(date);
    this.setState({
      inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE),
    }, () => {
      this.props.onChange(date);
    });
  };

  /**
   * Checks whether or not selected day is same as a day in calendar
   * Used by dayPicker
   * @param day {date}
   */
  isSameDay = day => DateUtils.isSameDay(this.state.selectedDay, day);

  /**
   * Checks if given is valid format wise. Used in combination with moment's isValid method
   * A little less strict than moment's isValid with strict mode enabled
   * @param date
   * @returns {boolean}
   */
  isValidFormat = (date) => {
    let pattern = /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/;
    if (this.props.time) pattern = /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };

  render() {
    const classPrefix = 'oc-datetime';
    /* eslint-disable no-unused-vars */
    const {
      locale,
      time,
      value,
      inputProps,
      inputRef,
      disabled,
      showWeekNumbers,
      ...otherProps
    } = this.props;

    return (
      <TetherComponent
        attachment="top center"
        constraints={[{
          to: 'scrollParent',
          attachment: 'together',
        }]}
        className={`${classPrefix}`}
      >
        <FormGroup>
          <FormControl
            type="text"
            inputRef={(el) => {
              this.input = el;
              inputRef(el);
            }}
            value={this.state.inputDate}
            disabled={disabled}
            {...inputProps}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        </FormGroup>
        {this.state.showOverlay &&
        <div
          onMouseDown={this.handleContainerMouseDown}
          role="presentation"
          className={`${classPrefix}-calendar`}
        >
          <DayPicker
            ref={(el) => {
              this.dayPicker = el;
            }}
            onDayClick={this.handleDayClick}
            selectedDays={this.isSameDay}
            localeUtils={this.localeUtils}
            showWeekNumbers={showWeekNumbers}
            locale={locale}
            {...otherProps}
          />

          {time &&
          <TimePicker
            onChange={this.handleTimePickerChange}
            value={value}
          />}
        </div>
        }
      </TetherComponent>
    );
  }
}
