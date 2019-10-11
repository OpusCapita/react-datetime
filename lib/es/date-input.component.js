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
    var formatDate = props.formatDate,
        value = props.value;

    if (!state.showOverlay && value !== state.lastValue) {
      var momentDate = moment.utc(value, moment.ISO_8601);
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);
      return {
        lastValue: value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
        showOverlay: props.showOverlay || state.showOverlay,
        inputDate: inputDate
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

    var formatDate = props.formatDate,
        value = props.value;

    var momentDate = moment.utc(value, moment.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
    var inputDate = formatDate ? formatDate(value)
    // inputDate: Prettified string shown in input field
    : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);

    _this.state = {
      /* eslint-disable-next-line react/no-unused-state */
      lastValue: null,
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, props.dateFormat),
      inputDate: inputDate
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
        formatDate = _props.formatDate,
        otherProps = _objectWithoutProperties(_props, ['className', 'locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval', 'showClearValue', 'disabledDays', 'formatDate']);

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
          readOnly: !!formatDate,
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
  formatDate: undefined,
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
        formatDate = _props3.formatDate,
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

    var inputDate = formatDate ? formatDate(timeAdjustedDate) : DateInput.getDate(timeAdjustedDate, FORMATS.PRETTY_DATE, dateFormat);

    _this3.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: inputDate
    }, function () {
      _this3.props.onChange(DateInput.getDate(timeAdjustedDate, FORMATS.UTC, dateFormat));
      _this3.input.blur();
    });

    _this3.props.onDayClick(day, modifiers);
  };

  this.handleTimePickerChange = function (newTime) {
    var _props4 = _this3.props,
        dateFormat = _props4.dateFormat,
        formatDate = _props4.formatDate,
        value = _props4.value;

    var momentDate = moment.utc(value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    _this3.setState({
      inputDate: inputDate
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.handleYearMonthChange = function (val) {
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat,
        formatDate = _props5.formatDate;

    var momentDate = value ? moment.utc(value, moment.ISO_8601) : moment.utc();

    momentDate.year(val.getFullYear()).month(val.getMonth());
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

    _this3.setState({
      inputDate: inputDate,
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
    var _props6 = _this3.props,
        value = _props6.value,
        dateFormat = _props6.dateFormat,
        formatDate = _props6.formatDate;

    var momentDate = moment.utc(value, moment.ISO_8601);
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    _this3.setState({ inputDate: inputDate });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIk5hdmJhciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiREFURVRJTUVfUE9QVVBfSEVJR0hUIiwiY2xhc3NQcmVmaXgiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwiZm9ybWF0RGF0ZSIsInZhbHVlIiwic2hvd092ZXJsYXkiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJpbnB1dERhdGUiLCJnZXREYXRlIiwiZGF0ZUZvcm1hdCIsInNlbGVjdGVkRGF5IiwiZGF0ZSIsInR5cGUiLCJpc1ZhbGlkIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJtb3VzZUNsaWNrZWRPbkNvbnRhaW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwic2hvd0NsZWFyVmFsdWUiLCJkaXNhYmxlZERheXMiLCJvdGhlclByb3BzIiwidGltZU9iaiIsImhvdXIiLCJtaW51dGUiLCJtb250aCIsImRheVBpY2tlclZpc2libGVNb250aCIsInVuZGVmaW5lZCIsImdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwicmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbiIsImNhbGVuZGFyQ29udGFpbmVyIiwiaGFuZGxlT25PdmVybGF5TW91c2VEb3duIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJzdHIiLCJyZXBsYWNlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5IiwiaW5wdXREaW1lbnNpb25zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9wdXBIZWlnaHQiLCJwb3B1cEJvdHRvbVkiLCJoZWlnaHQiLCJ5Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJoYW5kbGVDbGVhckNsaWNrIiwiVHlwZUVycm9yIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FBRUE7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHFDQUF2QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsaURBQTVCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwyQkFBbkI7QUFDQSxPQUFPLG1CQUFQOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7QUFNQTtBQUNBLElBQU1DLHdCQUF3QixHQUE5QjtBQUNBLElBQU1DLGNBQWMsYUFBcEI7O0lBRXFCQyxTOzs7WUF5Q1pDLHdCLHFDQUF5QkMsSyxFQUFPQyxLLEVBQU87QUFBQSxRQUNwQ0MsVUFEb0MsR0FDZEYsS0FEYyxDQUNwQ0UsVUFEb0M7QUFBQSxRQUN4QkMsS0FEd0IsR0FDZEgsS0FEYyxDQUN4QkcsS0FEd0I7O0FBRTVDLFFBQUksQ0FBQ0YsTUFBTUcsV0FBUCxJQUFzQkQsVUFBVUYsTUFBTUksU0FBMUMsRUFBcUQ7QUFDbkQsVUFBTUMsYUFBYXRCLE9BQU91QixHQUFQLENBQVdKLEtBQVgsRUFBa0JuQixPQUFPd0IsUUFBekIsQ0FBbkI7QUFDQSxVQUFNQyxZQUFZUCxhQUNkQSxXQUFXQyxLQUFYLENBRGMsR0FFZEwsVUFB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QyxZQUFZUCxhQUNkQSxXQUFXQyxLQUFYLENBRGMsR0FFZEwsVUFBVVksT0FBVixDQUFrQkosVUFBbEIsRUFBOEJkLFFBQVFFLFdBQXRDLEVBQW1EaUIsVUFBbkQsQ0FGSjtBQUdBLFdBQUs0RSxRQUFMLENBQWMsRUFBRTlFLG9CQUFGLEVBQWQ7QUFDRCxHOztPQU9Ed0Qsb0IsR0FBdUI7QUFBQSxRQUFHcEQsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckIsb0JBQUMsZUFBRCxJQUFpQixNQUFNQSxJQUF2QixFQUE2QixVQUFVLE9BQUsrRixxQkFBNUMsRUFBbUUsUUFBUSxPQUFLNUcsS0FBTCxDQUFXb0MsTUFBdEYsR0FEcUI7QUFBQSxHOztPQUl2QnlCLHNCLEdBQXlCO0FBQUEsV0FDdkI7QUFBQTtBQUFBO0FBQ0UsY0FBSyxRQURQO0FBRUUsbUJBQ0UsT0FBSzdELEtBQUwsQ0FBV3dDLFFBQVgsR0FBeUIzQyxXQUF6Qiw2QkFBaUVBLFdBQWpFLGlCQUhKO0FBS0UsaUJBQVMsT0FBS29ILGdCQUxoQjtBQU1FLGtCQUFVLE9BQUtqSCxLQUFMLENBQVd3QztBQU52QjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixLQUR1QjtBQUFBLEc7O1NBcFpOMUMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbi8vIFVzZWQgaW4gZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIGZuXG5jb25zdCBEQVRFVElNRV9QT1BVUF9IRUlHSFQgPSAyMDA7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBmb3JtYXREYXRlOiB1bmRlZmluZWQsXG4gICAgbG9jYWxlOiAnZW4tR0InLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIGRpc2FibGVkRGF5czogbnVsbCxcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHNob3dDbGVhclZhbHVlOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgdmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogdmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiBEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICBpbnB1dERhdGUsXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUsIHRpbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnNldCgnaG91cicsIGN1cnJlbnRIb3Vycykuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGZvcm1hdERhdGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSk7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGlucHV0IHZhbHVlXG4gICAqL1xuICBoYW5kbGVDbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvbkNoYW5nZSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhY3QtZGF0ZXRpbWU6IG9uQ2hhbmdlIGNhbGxiYWNrIGlzIG5vdCBzZXQnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkge1xuICAgICAgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXIgZGF0ZT17ZGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfSBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfSAvPlxuICApO1xuXG4gIHJlbmRlckNsZWFyVmFsdWVCdXR0b24gPSAoKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVkID8gYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlIGRpc2FibGVkYCA6IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZWBcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJDbGlja31cbiAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgID5cbiAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3RlZERheXMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICBzaG93Q2xlYXJWYWx1ZSxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGZvcm1hdERhdGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG4gICAgY29uc3QgbW9udGggPVxuICAgICAgdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcbiAgICAgICh0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9e3RoaXMuZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uKCl9XG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWlucHV0LWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICByZWFkT25seT17ISFmb3JtYXREYXRlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=