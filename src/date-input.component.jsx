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
import Navbar from './navbar/navbar.component';
import './date-input.scss';

// Date formats used by the component (mainly by the getDate method)
const FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT',
};

// Used in getTetherComponentAttachmentLocation fn
const DATETIME_POPUP_HEIGHT = 200;
const classPrefix = 'oc-datetime';

export default class DateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onDayClick: PropTypes.func,
    locale: PropTypes.string,
    dateFormat: PropTypes.string,
    formatDate: PropTypes.func,
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
    selectedDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    disabledDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.array]),
    showOverlay: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showClearValue: PropTypes.bool,
    time: PropTypes.bool,
    minutesInterval: PropTypes.number,
  };

  static defaultProps = {
    className: '',
    value: '',
    dateFormat: 'L',
    formatDate: undefined,
    locale: 'en-GB',
    onChange() {},
    onDayClick: () => {},
    inputProps: {},
    inputRef() {},
    disabled: false,
    selectedDays: null,
    disabledDays: null,
    showOverlay: false,
    showWeekNumbers: true,
    showClearValue: true,
    time: false,
    minutesInterval: 5,
  };

  static getDerivedStateFromProps(props, state) {
    const { formatDate, value } = props;
    if (!state.showOverlay && value !== state.lastValue) {
      const momentDate = moment.utc(value, moment.ISO_8601);
      const inputDate = formatDate
        ? formatDate(value)
        : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);
      return {
        lastValue: value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
        showOverlay: props.showOverlay || state.showOverlay,
        inputDate,
      };
    }
    return null;
  }

  static removeInvisibleChars = str => str.replace(/\u200E/g, '');

  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */
  static getDate(date, type, dateFormat) {
    const momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
    if (!momentDate.isValid() || !date) return '';
    switch (type) {
      case FORMATS.PRETTY_DATE:
        return DateInput.removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return DateInput.removeInvisibleChars(momentDate.toISOString());
      case FORMATS.DATE_OBJECT:
      default:
        // UTC day might differ from local day, therefore UTC offset
        // must be discounted.
        return new Date(momentDate.format('L'));
    }
  }

  constructor(props) {
    super(props);

    const { formatDate, value } = props;
    const momentDate = moment.utc(value, moment.ISO_8601);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    const inputDate = formatDate
      ? formatDate(value)
      // inputDate: Prettified string shown in input field
      : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);

    this.state = {
      /* eslint-disable-next-line react/no-unused-state */
      lastValue: null,
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, props.dateFormat),
      inputDate,
    };

    this.localeUtils = Object.assign(LocaleUtils, {
      getFirstDayOfWeek: () => moment.localeData().firstDayOfWeek(),
    });

    this.input = null;
    this.dayPicker = null;

    // Used in onBlur handler to determine whether or not blur happened because of a click
    // on the overlay
    this.mouseClickedOnContainer = false;
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
    if (
      !this.calendarContainer.contains(e.target) &&
      this.state.showOverlay &&
      e.target !== this.input
    ) {
      this.closeOverlay();
      document.removeEventListener('click', this.onDocumentClick);
    }
  };

  /**
   * Returns the first of the week based on locale (used by DayPicker)
   * @returns {number}
   */
  getFirstDayOfWeek = () => moment.localeData(this.props.locale).firstDayOfWeek();

  /**
   * Calculates whether or not popup has space to open below the input field
   * @returns {string} - an "anchor point" in input element
   */
  getTetherComponentAttachmentLocation = () => {
    const { time } = this.props;
    const inputDimensions = this.input && this.input.getBoundingClientRect();

    // Popup will open below the input by default
    let attachment = 'top center';

    if (inputDimensions) {
      /* If there's time inputs present, the popup will be slightly taller. Height has to be
      hard coded, because we cannot determine the height of the popup before we have opened it */
      const popupHeight = time ? DATETIME_POPUP_HEIGHT + 50 : DATETIME_POPUP_HEIGHT;
      const popupBottomY = popupHeight + inputDimensions.height + inputDimensions.y;
      const windowHeight = window.innerHeight;

      // Popup has no space to open below the input, so..
      if (windowHeight < popupBottomY) attachment = 'bottom center';
    }

    return attachment;
  };

  /**
   * Handles input focus event. Shows an overlay and adds an click event listener to the document
   * @param e
   */
  handleInputFocus = (e) => {
    const { showOverlay, selectedDay } = this.state;

    this.setState(
      {
        showOverlay: true,
      },
      () => {
        // Delays the execution so that the dayPicker opens before selecting a day
        setTimeout(() => {
          if (!showOverlay && this.dayPicker && selectedDay) this.dayPicker.showMonth(selectedDay);
        });
      },
    );

    document.addEventListener('click', this.onDocumentClick);
    if (this.props.inputProps.onFocus) this.props.inputProps.onFocus(e);
  };

  /**
   * Closes overlay. Called from onDocumentClick.
   * @param e
   */
  closeOverlay = (e) => {
    this.setState(
      {
        showOverlay: false,
      },
      () => {
        if (this.state.showOverlay) this.input.focus();
        if (this.props.inputProps.onBlur) this.props.inputProps.onBlur(e);
      },
    );
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
      this.setState(
        {
          selectedDay: DateInput.getDate(inputDate, FORMATS.DATE_OBJECT, dateFormat),
        },
        () => {
          // If dayPicker is open, we will show the correct month
          if (this.dayPicker) this.dayPicker.showMonth(this.state.selectedDay);
        },
      );
      if (inputProps.onChange) {
        inputProps.onChange(DateInput.removeInvisibleChars(inputDate));
      } else {
        onChange(DateInput.getDate(inputDate, FORMATS.UTC, dateFormat));
      }
    } else {
      // If the value is invalid we reset the model value
      onChange(null);
    }
  };

  handleInputBlur = (e) => {
    const {
      inputProps: { onBlur },
    } = this.props;
    this.prettifyInputDate();

    // We want to close the overlay on blur, unless it was caused by a click on the calendar
    // overlay
    if (!this.mouseClickedOnContainer) {
      this.setState({
        showOverlay: false,
      });
    }
    this.mouseClickedOnContainer = false;
    if (onBlur) onBlur(e);
  };

  /**
   * Handles dayPicker click
   * @param day {date}
   */
  handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) return;

    const {
      dateFormat, formatDate, value, time,
    } = this.props;
    // UTC day might differ from local date therefore UTC offset must be discounted.
    const momentDate = moment.utc(moment(day).format('L'));

    let timeAdjustedDate = null;
    const currentMomentDate = moment(value, moment.ISO_8601).utc();
    const currentHours = currentMomentDate.get('hour');
    const currentMinutes = currentMomentDate.get('minute');

    if (time) {
      // Set current (previously selected) time to newly picked date
      timeAdjustedDate = momentDate.set('hour', currentHours).set('minute', currentMinutes);
    } else {
      // If we don't need to bother ourselves with an exact time,
      // we can set time to T00:00:00.000Z
      timeAdjustedDate = momentDate.startOf('day');
    }

    const inputDate = formatDate
      ? formatDate(timeAdjustedDate)
      : DateInput.getDate(timeAdjustedDate, FORMATS.PRETTY_DATE, dateFormat);

    this.setState(
      {
        selectedDay: day,
        showOverlay: false,
        inputDate,
      },
      () => {
        this.props.onChange(DateInput.getDate(timeAdjustedDate, FORMATS.UTC, dateFormat));
        this.input.blur();
      },
    );

    this.props.onDayClick(day, modifiers);
  };

  /**
   * Handles time picker (select boxes) change
   * @param newTime
   */
  handleTimePickerChange = (newTime) => {
    const { dateFormat, formatDate, value } = this.props;
    let momentDate = moment.utc(value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    const inputDate = formatDate
      ? formatDate(value)
      : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    this.setState(
      {
        inputDate,
      },
      () => {
        this.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
      },
    );
  };

  /**
   * Handles year-month picker (select boxes) change
   * @param date
   */
  handleYearMonthChange = (val) => {
    const { value, dateFormat, formatDate } = this.props;
    const momentDate = value ? moment.utc(value, moment.ISO_8601) : moment.utc();

    momentDate.year(val.getFullYear()).month(val.getMonth());
    const inputDate = formatDate
      ? formatDate(value)
      : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

    this.setState(
      {
        inputDate,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
        dayPickerVisibleMonth: val,
      },
      () => {
        this.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
      },
    );
  };

  /**
   * Handles a click on the overlay
   * @param e
   */
  handleOnOverlayMouseDown = (e) => {
    if (this.calendarContainer.contains(e.target)) {
      this.mouseClickedOnContainer = true;
    }
  };

  /**
   * Clears input value
   */
  handleClearClick = () => {
    const { onChange } = this.props;
    if (!onChange) throw new TypeError('react-datetime: onChange callback is not set');
    this.props.onChange('');
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
    if (this.props.time) {
      pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    }
    return pattern.test(date.trim());
  };

  prettifyInputDate = () => {
    const { value, dateFormat, formatDate } = this.props;
    const momentDate = moment.utc(value, moment.ISO_8601);
    const inputDate = formatDate
      ? formatDate(value)
      : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    this.setState({ inputDate });
  };

  /**
   * Renders select boxes above the calendar
   * @param date
   * @returns {*}
   */
  renderCaptionElement = ({ date }) => (
    <YearMonthPicker date={date} onChange={this.handleYearMonthChange} locale={this.props.locale} />
  );

  renderClearValueButton = () => (
    <button
      type="button"
      className={
        this.props.disabled ? `${classPrefix}-clear-value disabled` : `${classPrefix}-clear-value`
      }
      onClick={this.handleClearClick}
      disabled={this.props.disabled}
    >
      <span>x</span>
    </button>
  );

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      locale,
      time,
      value,
      inputProps,
      inputRef,
      disabled,
      selectedDays,
      showWeekNumbers,
      minutesInterval,
      showClearValue,
      disabledDays,
      formatDate,
      ...otherProps
    } = this.props;
    const momentDate = moment.utc(value, moment.ISO_8601);
    const timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute(),
    };
    const month =
      this.state.dayPickerVisibleMonth ||
      (typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay);

    return (
      <TetherComponent
        attachment={this.getTetherComponentAttachmentLocation()}
        constraints={[
          {
            to: 'scrollParent',
            pin: ['top'],
          },
          {
            to: 'window',
            attachment: 'together',
          },
        ]}
        className={`${classPrefix} ${className}`}
      >
        <FormGroup className={`${classPrefix}-input-container`}>
          <FormControl
            type="text"
            inputRef={(el) => {
              this.input = el;
              inputRef(el);
            }}
            value={this.state.inputDate}
            disabled={disabled}
            readOnly={!!formatDate}
            autoComplete="off"
            {...inputProps}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
          {showClearValue && value && this.renderClearValueButton()}
        </FormGroup>

        {this.state.showOverlay && (
          <div
            role="presentation"
            className={`${classPrefix}-calendar`}
            ref={(el) => {
              this.calendarContainer = el;
            }}
            onMouseDown={this.handleOnOverlayMouseDown}
          >
            <DayPicker
              {...otherProps}
              ref={(el) => {
                this.dayPicker = el;
              }}
              disabledDays={disabledDays}
              selectedDays={selectedDays || this.isSameDay}
              localeUtils={this.localeUtils}
              month={month}
              showWeekNumbers={showWeekNumbers}
              firstDayOfWeek={this.getFirstDayOfWeek()}
              locale={locale}
              captionElement={this.renderCaptionElement}
              navbarElement={Navbar}
              onDayClick={this.handleDayClick}
            />
            {time && (
              <TimePicker
                onChange={this.handleTimePickerChange}
                time={timeObj}
                minutesInterval={minutesInterval}
              />
            )}
          </div>
        )}
      </TetherComponent>
    );
  }
}
