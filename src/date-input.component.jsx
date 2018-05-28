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
import YearMonthPicker from './year-month-picker/year-month-picker.component';
import './date-input.scss';

// Date formats used by the component (mainly by the getDate method)
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
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    time: PropTypes.bool,
    minutesInterval: PropTypes.number,
  };

  static defaultProps = {
    value: '',
    dateFormat: 'L',
    locale: 'en',
    onChange() {
    },
    inputProps: {},
    inputRef() {
    },
    disabled: false,
    showWeekNumbers: true,
    time: false,
    minutesInterval: 5,
  };

  constructor(props) {
    super(props);

    const momentDate = moment.utc(props.value, moment.ISO_8601);
    this.onDocumentClick = this.onDocumentClick.bind(this);

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
    this.focused = false;
  }

  // TODO: change this one to getDerivedStateFromProps ASAP
  componentWillReceiveProps(nextProps) {
    // If value changes when input is blurred
    if (!this.focused && nextProps.value && this.props.value !== nextProps.value) {
      const momentDate = moment.utc(nextProps.value, moment.ISO_8601);
      this.setState({
        selectedDay: this.getDate(momentDate, FORMATS.DATE_OBJECT),
        inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE, nextProps.dateFormat),
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  /**
   * Fires every time dayPicker is open and document is clicked
   * @param e
   */
  onDocumentClick = (e) => {
    if (!this.calendarContainer) return;

    // Closes overlay if user clicks outside the calendar (and input field)
    if (!this.calendarContainer.contains(e.target) &&
      this.state.showOverlay &&
      e.target !== this.input) {
      this.closeOverlay();
      document.removeEventListener('click', this.onDocumentClick);
    }
  };

  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */
  getDate = (date, type, dateFormat = this.props.dateFormat) => {
    const momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
    const removeInvisibleChars = str => str.replace(/\u200E/g, '');
    if (!momentDate.isValid() || !date) return '';
    switch (type) {
      case FORMATS.PRETTY_DATE:
        return removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return removeInvisibleChars(momentDate.toISOString());
      case FORMATS.DATE_OBJECT:
      default:
        return momentDate.toDate();
    }
  };

  /**
   * Returns the first of the week based on locale (used by DayPicker)
   * @returns {number}
   */
  getFirstDayOfWeek = () => moment.localeData(this.props.locale).firstDayOfWeek();

  /**
   * Handles input focus event. Shows an overlay and adds an click event listener to the document
   * @param e
   */
  handleInputFocus = (e) => {
    const { showOverlay, selectedDay } = this.state;
    this.focused = true;

    this.setState({
      showOverlay: true,
    }, () => {
      // Delays the execution so that the dayPicker opens before selecting a day
      setTimeout(() => {
        if (!showOverlay && this.dayPicker && selectedDay) this.dayPicker.showMonth(selectedDay);
      });
    });

    document.addEventListener('click', this.onDocumentClick);
    if (this.props.inputProps.onFocus) this.props.inputProps.onFocus(e);
  };

  /**
   * Closes overlay. Called from onDocumentClick.
   * @param e
   */
  closeOverlay = (e) => {
    this.focused = false;

    this.setState({
      showOverlay: false,
    }, () => {
      if (this.state.showOverlay) this.input.focus();
      if (this.props.inputProps.onBlur) this.props.inputProps.onBlur(e);
    });
  };

  /**
   * Handles input change, checks validity and updates model value and the day picker
   * @param e {event}
   */
  handleInputChange = (e) => {
    const inputDate = e.target.value;
    const { dateFormat, inputProps, onChange } = this.props;

    this.setState({ inputDate });
    // This fires only if the new date is valid in given format
    if (moment.utc(inputDate, dateFormat).isValid() && this.isValidFormat(inputDate)) {
      this.setState({
        selectedDay: this.getDate(inputDate, FORMATS.DATE_OBJECT),
      }, () => {
        // If dayPicker is open, we will show the correct month
        if (this.dayPicker) this.dayPicker.showMonth(this.state.selectedDay);
      });
      onChange(this.getDate(inputDate, FORMATS.UTC));
      if (inputProps.onChange) inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      onChange(null);
    }
  };

  /**
   * Handles dayPicker click
   * @param day {date}
   */
  handleDayClick = (day) => {
    const momentObj = moment.utc(day);
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
   * @param newTime
   */
  handleTimePickerChange = (newTime) => {
    let momentDate = moment.utc(this.props.value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    this.setState({
      inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE),
    }, () => {
      this.props.onChange(this.getDate(momentDate, FORMATS.UTC));
    });
  };

  /**
   * Handles year-month picker (select boxes) change
   * @param date
   */
  handleYearMonthChange = (val) => {
    this.setState({
      dayPickerVisibleMonth: val,
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
    let pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (this.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };

  /**
   * Renders select boxes above the calendar
   * @param date
   * @returns {*}
   */
  renderCaptionElement = ({ date }) => (
    <YearMonthPicker
      date={date}
      onChange={this.handleYearMonthChange}
      locale={this.props.locale}
    />
  );

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
      minutesInterval,
      ...otherProps
    } = this.props;
    const momentDate = moment.utc(value, moment.ISO_8601);
    const timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute(),
    };

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
          />
        </FormGroup>
        {this.state.showOverlay &&
          <div
            role="presentation"
            className={`${classPrefix}-calendar`}
            ref={(el) => {
              this.calendarContainer = el;
            }}
          >
            <DayPicker
              ref={(el) => {
                this.dayPicker = el;
              }}
              onDayClick={this.handleDayClick}
              selectedDays={this.isSameDay}
              localeUtils={this.localeUtils}
              month={this.state.dayPickerVisibleMonth}
              showWeekNumbers={showWeekNumbers}
              firstDayOfWeek={this.getFirstDayOfWeek()}
              locale={locale}
              captionElement={this.renderCaptionElement}
              {...otherProps}
            />

            {time &&
              <TimePicker
                onChange={this.handleTimePickerChange}
                time={timeObj}
                minutesInterval={minutesInterval}
              />}
          </div>
        }
      </TetherComponent>
    );
  }
}
