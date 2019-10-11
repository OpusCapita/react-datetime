var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT'
};

// Used in getTetherComponentAttachmentLocation fn
var DATETIME_POPUP_HEIGHT = 200;
var classPrefix = 'oc-datetime';

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!state.showOverlay && props.value !== state.lastValue) {
      var momentDate = moment.utc(props.value, moment.ISO_8601);
      return {
        lastValue: props.value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
        showOverlay: props.showOverlay || state.showOverlay,
        inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
      };
    }
    return null;
  };

  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */
  DateInput.getDate = function getDate(date, type, dateFormat) {
    var momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
    if (!momentDate.isValid() || !date) return '';
    switch (type) {
      case FORMATS.PRETTY_DATE:
        return DateInput.removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return DateInput.removeInvisibleChars(momentDate.toISOString());
      case FORMATS.DATE_OBJECT:
      default:
        return momentDate.toDate();
    }
  };

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = moment.utc(props.value, moment.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);

    _this.state = {
      /* eslint-disable-next-line react/no-unused-state */
      lastValue: null,
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, props.dateFormat),
      // inputDate: Prettified string shown in input field
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
    };

    _this.localeUtils = Object.assign(LocaleUtils, {
      getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
      }
    });

    _this.input = null;
    _this.dayPicker = null;

    // Used in onBlur handler to determine whether or not blur happened because of a click
    // on the overlay
    _this.mouseClickedOnContainer = false;
    return _this;
  }

  DateInput.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  };

  /**
   * Fires every time dayPicker is open and document is clicked
   * @param e
   */


  /**
   * Returns the first of the week based on locale (used by DayPicker)
   * @returns {number}
   */


  /**
   * Calculates whether or not popup has space to open below the input field
   * @returns {string} - an "anchor point" in input element
   */


  /**
   * Handles input focus event. Shows an overlay and adds an click event listener to the document
   * @param e
   */


  /**
   * Closes overlay. Called from onDocumentClick.
   * @param e
   */


  /**
   * Handles input change, checks validity and updates model value and the day picker
   * @param e {event}
   */


  /**
   * Handles dayPicker click
   * @param day {date}
   */


  /**
   * Handles time picker (select boxes) change
   * @param newTime
   */


  /**
   * Handles year-month picker (select boxes) change
   * @param date
   */


  /**
   * Handles a click on the overlay
   * @param e
   */


  /**
   * Clears input value
   */


  /**
   * Checks whether or not selected day is same as a day in calendar
   * Used by dayPicker
   * @param day {date}
   */


  /**
   * Checks if given is valid format wise. Used in combination with moment's isValid method
   * A little less strict than moment's isValid with strict mode enabled
   * @param date
   * @returns {boolean}
   */


  /**
   * Renders select boxes above the calendar
   * @param date
   * @returns {*}
   */


  DateInput.prototype.render = function render() {
    var _this2 = this;

    /* eslint-disable no-unused-vars */
    var _props = this.props,
        className = _props.className,
        locale = _props.locale,
        time = _props.time,
        value = _props.value,
        inputProps = _props.inputProps,
        _inputRef = _props.inputRef,
        disabled = _props.disabled,
        selectedDays = _props.selectedDays,
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        showClearValue = _props.showClearValue,
        disabledDays = _props.disabledDays,
        otherProps = _objectWithoutProperties(_props, ['className', 'locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval', 'showClearValue', 'disabledDays']);

    var momentDate = moment.utc(value, moment.ISO_8601);
    var timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute()
    };
    var month = this.state.dayPickerVisibleMonth || (typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay);

    return React.createElement(
      TetherComponent,
      {
        attachment: this.getTetherComponentAttachmentLocation(),
        constraints: [{
          to: 'scrollParent',
          pin: true
        }, {
          to: 'window',
          attachment: 'together'
        }],
        className: classPrefix + ' ' + className
      },
      React.createElement(
        FormGroup,
        { className: classPrefix + '-input-container' },
        React.createElement(FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          },
          value: this.state.inputDate,
          disabled: disabled,
          autoComplete: 'off'
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur
        })),
        showClearValue && value && this.renderClearValueButton()
      ),
      this.state.showOverlay && React.createElement(
        'div',
        {
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          },
          onMouseDown: this.handleOnOverlayMouseDown
        },
        React.createElement(DayPicker, _extends({}, otherProps, {
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          disabledDays: disabledDays,
          selectedDays: selectedDays || this.isSameDay,
          localeUtils: this.localeUtils,
          month: month,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement,
          navbarElement: Navbar,
          onDayClick: this.handleDayClick
        })),
        time && React.createElement(TimePicker, {
          onChange: this.handleTimePickerChange,
          time: timeObj,
          minutesInterval: minutesInterval
        })
      )
    );
  };

  return DateInput;
}(React.Component), _class.defaultProps = {
  className: '',
  value: '',
  dateFormat: 'L',
  locale: 'en-GB',
  onChange: function onChange() {},

  onDayClick: function onDayClick() {},
  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false,
  selectedDays: null,
  disabledDays: null,
  showOverlay: false,
  showWeekNumbers: true,
  showClearValue: true,
  time: false,
  minutesInterval: 5
}, _class.removeInvisibleChars = function (str) {
  return str.replace(/\u200E/g, '');
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onDocumentClick = function (e) {
    if (!_this3.calendarContainer) return;

    // Closes overlay if user clicks outside the calendar (and input field)
    if (!_this3.calendarContainer.contains(e.target) && _this3.state.showOverlay && e.target !== _this3.input) {
      _this3.closeOverlay();
      document.removeEventListener('click', _this3.onDocumentClick);
    }
  };

  this.getFirstDayOfWeek = function () {
    return moment.localeData(_this3.props.locale).firstDayOfWeek();
  };

  this.getTetherComponentAttachmentLocation = function () {
    var time = _this3.props.time;

    var inputDimensions = _this3.input && _this3.input.getBoundingClientRect();

    // Popup will open below the input by default
    var attachment = 'top center';

    if (inputDimensions) {
      /* If there's time inputs present, the popup will be slightly taller. Height has to be
      hard coded, because we cannot determine the height of the popup before we have opened it */
      var popupHeight = time ? DATETIME_POPUP_HEIGHT + 50 : DATETIME_POPUP_HEIGHT;
      var popupBottomY = popupHeight + inputDimensions.height + inputDimensions.y;
      var windowHeight = window.innerHeight;

      // Popup has no space to open below the input, so..
      if (windowHeight < popupBottomY) attachment = 'bottom center';
    }

    return attachment;
  };

  this.handleInputFocus = function (e) {
    var _state = _this3.state,
        showOverlay = _state.showOverlay,
        selectedDay = _state.selectedDay;


    _this3.setState({
      showOverlay: true
    }, function () {
      // Delays the execution so that the dayPicker opens before selecting a day
      setTimeout(function () {
        if (!showOverlay && _this3.dayPicker && selectedDay) _this3.dayPicker.showMonth(selectedDay);
      });
    });

    document.addEventListener('click', _this3.onDocumentClick);
    if (_this3.props.inputProps.onFocus) _this3.props.inputProps.onFocus(e);
  };

  this.closeOverlay = function (e) {
    _this3.setState({
      showOverlay: false
    }, function () {
      if (_this3.state.showOverlay) _this3.input.focus();
      if (_this3.props.inputProps.onBlur) _this3.props.inputProps.onBlur(e);
    });
  };

  this.handleInputChange = function (e) {
    var inputDate = e.target.value;
    var _props2 = _this3.props,
        dateFormat = _props2.dateFormat,
        inputProps = _props2.inputProps,
        onChange = _props2.onChange;


    _this3.setState({ inputDate: inputDate });
    // This fires only if the new date is valid in given format
    if (moment.utc(inputDate, dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
      _this3.setState({
        selectedDay: DateInput.getDate(inputDate, FORMATS.DATE_OBJECT, dateFormat)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
      });
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

  this.handleInputBlur = function (e) {
    var onBlur = _this3.props.inputProps.onBlur;

    _this3.prettifyInputDate();

    // We want to close the overlay on blur, unless it was caused by a click on the calendar
    // overlay
    if (!_this3.mouseClickedOnContainer) {
      _this3.setState({
        showOverlay: false
      });
    }
    _this3.mouseClickedOnContainer = false;
    if (onBlur) onBlur(e);
  };

  this.handleDayClick = function (day) {
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (modifiers.disabled) return;

    var _props3 = _this3.props,
        dateFormat = _props3.dateFormat,
        value = _props3.value,
        time = _props3.time;

    var momentDate = moment.utc(day);

    var timeAdjustedDate = null;
    var currentMomentDate = moment(value, moment.ISO_8601).utc();
    var currentHours = currentMomentDate.get('hour');
    var currentMinutes = currentMomentDate.get('minute');

    if (time) {
      // Set current (previously selected) time to newly picked date
      timeAdjustedDate = momentDate.set('hour', currentHours).set('minute', currentMinutes);
    } else {
      // If we don't need to bother ourselves with an exact time,
      // we can set time to T00:00:00.000Z
      timeAdjustedDate = momentDate.startOf('day');
    }

    _this3.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: DateInput.getDate(timeAdjustedDate, FORMATS.PRETTY_DATE, dateFormat)
    }, function () {
      _this3.props.onChange(DateInput.getDate(timeAdjustedDate, FORMATS.UTC, dateFormat));
      _this3.input.blur();
    });

    _this3.props.onDayClick(day, modifiers);
  };

  this.handleTimePickerChange = function (newTime) {
    var dateFormat = _this3.props.dateFormat;

    var momentDate = moment.utc(_this3.props.value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat)
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.handleYearMonthChange = function (val) {
    var _props4 = _this3.props,
        value = _props4.value,
        dateFormat = _props4.dateFormat;

    var momentDate = value ? moment.utc(value, moment.ISO_8601) : moment.utc();

    momentDate.year(val.getFullYear()).month(val.getMonth());

    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat),
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
      dayPickerVisibleMonth: val
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.handleOnOverlayMouseDown = function (e) {
    if (_this3.calendarContainer.contains(e.target)) {
      _this3.mouseClickedOnContainer = true;
    }
  };

  this.handleClearClick = function () {
    var onChange = _this3.props.onChange;

    if (!onChange) throw new TypeError('react-datetime: onChange callback is not set');
    _this3.props.onChange('');
  };

  this.isSameDay = function (day) {
    return DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) {
      pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    }
    return pattern.test(date.trim());
  };

  this.prettifyInputDate = function () {
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat;

    var momentDate = moment.utc(value, moment.ISO_8601);
    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat)
    });
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return React.createElement(YearMonthPicker, { date: date, onChange: _this3.handleYearMonthChange, locale: _this3.props.locale });
  };

  this.renderClearValueButton = function () {
    return React.createElement(
      'button',
      {
        type: 'button',
        className: _this3.props.disabled ? classPrefix + '-clear-value disabled' : classPrefix + '-clear-value',
        onClick: _this3.handleClearClick,
        disabled: _this3.props.disabled
      },
      React.createElement(
        'span',
        null,
        'x'
      )
    );
  };
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIk5hdmJhciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiREFURVRJTUVfUE9QVVBfSEVJR0hUIiwiY2xhc3NQcmVmaXgiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsImlzVmFsaWQiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwidG9EYXRlIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsImxvY2FsZVV0aWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsIm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzZWxlY3RlZERheXMiLCJzaG93V2Vla051bWJlcnMiLCJtaW51dGVzSW50ZXJ2YWwiLCJzaG93Q2xlYXJWYWx1ZSIsImRpc2FibGVkRGF5cyIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwidW5kZWZpbmVkIiwiZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJyZW5kZXJDbGVhclZhbHVlQnV0dG9uIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24iLCJpc1NhbWVEYXkiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwib25EYXlDbGljayIsInN0ciIsInJlcGxhY2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJpbnB1dERpbWVuc2lvbnMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3B1cEhlaWdodCIsInBvcHVwQm90dG9tWSIsImhlaWdodCIsInkiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNob3dNb250aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImhhbmRsZUNsZWFyQ2xpY2siLCJUeXBlRXJyb3IiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxXQUFwQixRQUF1QyxpQkFBdkM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxJQUFvQkMsU0FBcEIsUUFBcUMsa0JBQXJDO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5QkFBeEI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLGNBQTVCO0FBQ0EsT0FBTyxnQ0FBUDs7QUFFQTtBQUNBLE9BQU9DLFVBQVAsTUFBdUIscUNBQXZCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixpREFBNUI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLDJCQUFuQjtBQUNBLE9BQU8sbUJBQVA7O0FBRUE7QUFDQSxJQUFNQyxVQUFVO0FBQ2RDLE9BQUssS0FEUztBQUVkQyxlQUFhLGFBRkM7QUFHZEMsZUFBYTtBQUhDLENBQWhCOztBQU1BO0FBQ0EsSUFBTUMsd0JBQXdCLEdBQTlCO0FBQ0EsSUFBTUMsY0FBYyxhQUFwQjs7SUFFcUJDLFM7OztZQXVDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWFyQixPQUFPc0IsR0FBUCxDQUFXTixNQUFNRyxLQUFqQixFQUF3Qm5CLE9BQU91QixRQUEvQixDQUFuQjtBQUNBLGFBQU87QUFDTEgsbUJBQVdKLE1BQU1HLEtBRFo7QUFFTEsscUJBQWFWLFVBQVVXLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCYixRQUFRRyxXQUF0QyxDQUZSO0FBR0xPLHFCQUFhRixNQUFNRSxXQUFOLElBQXFCRCxN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LFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUtsSCxLQUFMLENBQVdvQyxJQUFmLEVBQXFCO0FBQ25COEUsZ0JBQVUsdUVBQVY7QUFDRDtBQUNELFdBQU9BLFFBQVFDLElBQVIsQ0FBYXZHLEtBQUt3RyxJQUFMLEVBQWIsQ0FBUDtBQUNELEc7O09BRUR0QixpQixHQUFvQixZQUFNO0FBQUEsa0JBQ00sT0FBSzlGLEtBRFg7QUFBQSxRQUNoQkcsS0FEZ0IsV0FDaEJBLEtBRGdCO0FBQUEsUUFDVFEsVUFEUyxXQUNUQSxVQURTOztBQUV4QixRQUFNTixhQUFhckIsT0FBT3NCLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQm5CLE9BQU91QixRQUF6QixDQUFuQjtBQUNBLFdBQUsrRSxRQUFMLENBQWM7QUFDWjVFLGlCQUFXWixVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QmIsUUFBUUUsV0FBdEMsRUFBbURpQixVQUFuRDtBQURDLEtBQWQ7QUFHRCxHOztPQU9EcUQsb0IsR0FBdUI7QUFBQSxRQUFHcEQsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckIsb0JBQUMsZUFBRCxJQUFpQixNQUFNQSxJQUF2QixFQUE2QixVQUFVLE9BQUsrRixxQkFBNUMsRUFBbUUsUUFBUSxPQUFLM0csS0FBTCxDQUFXbUMsTUFBdEYsR0FEcUI7QUFBQSxHOztPQUl2QnlCLHNCLEdBQXlCO0FBQUEsV0FDdkI7QUFBQTtBQUFBO0FBQ0UsY0FBSyxRQURQO0FBRUUsbUJBQ0UsT0FBSzVELEtBQUwsQ0FBV3VDLFFBQVgsR0FBeUIxQyxXQUF6Qiw2QkFBaUVBLFdBQWpFLGlCQUhKO0FBS0UsaUJBQVMsT0FBS21ILGdCQUxoQjtBQU1FLGtCQUFVLE9BQUtoSCxLQUFMLENBQVd1QztBQU52QjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixLQUR1QjtBQUFBLEc7O1NBN1hOekMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbi8vIFVzZWQgaW4gZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIGZuXG5jb25zdCBEQVRFVElNRV9QT1BVUF9IRUlHSFQgPSAyMDA7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbi1HQicsXG4gICAgb25DaGFuZ2UoKSB7fSxcbiAgICBvbkRheUNsaWNrOiAoKSA9PiB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzZWxlY3RlZERheXM6IG51bGwsXG4gICAgZGlzYWJsZWREYXlzOiBudWxsLFxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgc2hvd0NsZWFyVmFsdWU6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xuXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcblxuICAgIGlmICh0aW1lKSB7XG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKS5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgaW5wdXQgdmFsdWVcbiAgICovXG4gIGhhbmRsZUNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9uQ2hhbmdlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWFjdC1kYXRldGltZTogb25DaGFuZ2UgY2FsbGJhY2sgaXMgbm90IHNldCcpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSB7XG4gICAgICBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcHJldHRpZnlJbnB1dERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlciBkYXRlPXtkYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9IGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9IC8+XG4gICk7XG5cbiAgcmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbiA9ICgpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgPyBgJHtjbGFzc1ByZWZpeH0tY2xlYXItdmFsdWUgZGlzYWJsZWRgIDogYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlYFxuICAgICAgfVxuICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckNsaWNrfVxuICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPHNwYW4+eDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNlbGVjdGVkRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIHNob3dDbGVhclZhbHVlLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID1cbiAgICAgIHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICAodHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PXt0aGlzLmdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbigpfVxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1pbnB1dC1jb250YWluZXJgfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=