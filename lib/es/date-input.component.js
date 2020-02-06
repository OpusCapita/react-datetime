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
        // UTC day might differ from local day, therefore UTC offset
        // must be discounted.
        return new Date(moment(momentDate.format('L'), 'L'));
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
          pin: ['top']
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
    // UTC day might differ from local date therefore UTC offset must be discounted.

    var momentDate = moment.utc(moment(day).format('L'), 'L');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIk5hdmJhciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiREFURVRJTUVfUE9QVVBfSEVJR0hUIiwiY2xhc3NQcmVmaXgiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwiZm9ybWF0RGF0ZSIsInZhbHVlIiwic2hvd092ZXJsYXkiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJpbnB1dERhdGUiLCJnZXREYXRlIiwiZGF0ZUZvcm1hdCIsInNlbGVjdGVkRGF5IiwiZGF0ZSIsInR5cGUiLCJpc1ZhbGlkIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsIkRhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwibW91c2VDbGlja2VkT25Db250YWluZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzTmFtZSIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsInNob3dDbGVhclZhbHVlIiwiZGlzYWJsZWREYXlzIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24iLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsInJlbmRlckNsZWFyVmFsdWVCdXR0b24iLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwic3RyIiwicmVwbGFjZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsImlucHV0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcHVwSGVpZ2h0IiwicG9wdXBCb3R0b21ZIiwiaGVpZ2h0IiwieSIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaGFuZGxlQ2xlYXJDbGljayIsIlR5cGVFcnJvciIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLFFBQXVDLGlCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxTQUFQLElBQW9CQyxTQUFwQixRQUFxQyxrQkFBckM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsY0FBNUI7QUFDQSxPQUFPLGdDQUFQOztBQUVBO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixxQ0FBdkI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLGlEQUE1QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsMkJBQW5CO0FBQ0EsT0FBTyxtQkFBUDs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsT0FBSyxLQURTO0FBRWRDLGVBQWEsYUFGQztBQUdkQyxlQUFhO0FBSEMsQ0FBaEI7O0FBTUE7QUFDQSxJQUFNQyx3QkFBd0IsR0FBOUI7QUFDQSxJQUFNQyxjQUFjLGFBQXBCOztJQUVxQkMsUzs7O1lBeUNaQyx3QixxQ0FBeUJDLEssRUFBT0MsSyxFQUFPO0FBQUEsUUFDcENDLFVBRG9DLEdBQ2RGLEtBRGMsQ0FDcENFLFVBRG9DO0FBQUEsUUFDeEJDLEtBRHdCLEdBQ2RILEtBRGMsQ0FDeEJHLEtBRHdCOztBQUU1QyxRQUFJLENBQUNGLE1BQU1HLFdBQVAsSUFBc0JELFVBQVVGLE1BQU1JLFNBQTFDLEVBQXFEO0FBQ25ELFVBQU1DLGFBQWF0QixPQUFPdUIsR0FBUCxDQUFXSixLQUFYLEVBQWtCbkIsT0FBT3dCLFFBQXpCLENBQW5CO0FBQ0EsVUFBTUMsWUFBWVAsYUFDZEEsV0FBV0MsS0FBWCxDQURjLEdBRWRMLFVBQVVZ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QSxRQUNUUSxVQURTLFdBQ1RBLFVBRFM7QUFBQSxRQUNHVCxVQURILFdBQ0dBLFVBREg7O0FBRXhCLFFBQU1JLGFBQWF0QixPQUFPdUIsR0FBUCxDQUFXSixLQUFYLEVBQWtCbkIsT0FBT3dCLFFBQXpCLENBQW5CO0FBQ0EsUUFBTUMsWUFBWVAsYUFDZEEsV0FBV0MsS0FBWCxDQURjLEdBRWRMLFVBQVVZLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCZCxRQUFRRSxXQUF0QyxFQUFtRGlCLFVBQW5ELENBRko7QUFHQSxXQUFLNEUsUUFBTCxDQUFjLEVBQUU5RSxvQkFBRixFQUFkO0FBQ0QsRzs7T0FPRHdELG9CLEdBQXVCO0FBQUEsUUFBR3BELElBQUgsUUFBR0EsSUFBSDtBQUFBLFdBQ3JCLG9CQUFDLGVBQUQsSUFBaUIsTUFBTUEsSUFBdkIsRUFBNkIsVUFBVSxPQUFLK0YscUJBQTVDLEVBQW1FLFFBQVEsT0FBSzVHLEtBQUwsQ0FBV29DLE1BQXRGLEdBRHFCO0FBQUEsRzs7T0FJdkJ5QixzQixHQUF5QjtBQUFBLFdBQ3ZCO0FBQUE7QUFBQTtBQUNFLGNBQUssUUFEUDtBQUVFLG1CQUNFLE9BQUs3RCxLQUFMLENBQVd3QyxRQUFYLEdBQXlCM0MsV0FBekIsNkJBQWlFQSxXQUFqRSxpQkFISjtBQUtFLGlCQUFTLE9BQUtvSCxnQkFMaEI7QUFNRSxrQkFBVSxPQUFLakgsS0FBTCxDQUFXd0M7QUFOdkI7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsS0FEdUI7QUFBQSxHOztTQXRaTjFDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG4vLyBVc2VkIGluIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiBmblxuY29uc3QgREFURVRJTUVfUE9QVVBfSEVJR0hUID0gMjAwO1xuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0RGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDbGVhclZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgZm9ybWF0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGxvY2FsZTogJ2VuLUdCJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBkaXNhYmxlZERheXM6IG51bGwsXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICBzaG93Q2xlYXJWYWx1ZTogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBVVEMgZGF5IG1pZ2h0IGRpZmZlciBmcm9tIGxvY2FsIGRheSwgdGhlcmVmb3JlIFVUQyBvZmZzZXRcbiAgICAgICAgLy8gbXVzdCBiZSBkaXNjb3VudGVkLlxuICAgICAgICByZXR1cm4gbmV3IERhdGUobW9tZW50KG1vbWVudERhdGUuZm9ybWF0KCdMJyksICdMJykpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICBpbnB1dERhdGUsXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUsIHRpbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gVVRDIGRheSBtaWdodCBkaWZmZXIgZnJvbSBsb2NhbCBkYXRlIHRoZXJlZm9yZSBVVEMgb2Zmc2V0IG11c3QgYmUgZGlzY291bnRlZC5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhtb21lbnQoZGF5KS5mb3JtYXQoJ0wnKSwgJ0wnKTtcbiAgICBsZXQgdGltZUFkanVzdGVkRGF0ZSA9IG51bGw7XG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XG4gICAgY29uc3QgY3VycmVudEhvdXJzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdob3VyJyk7XG4gICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ21pbnV0ZScpO1xuXG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIC8vIFNldCBjdXJyZW50IChwcmV2aW91c2x5IHNlbGVjdGVkKSB0aW1lIHRvIG5ld2x5IHBpY2tlZCBkYXRlXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodGltZUFkanVzdGVkRGF0ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAgIGlucHV0RGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gbmV3VGltZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGlucHV0RGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0LCBmb3JtYXREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSkgOiBtb21lbnQudXRjKCk7XG5cbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpLm1vbnRoKHZhbC5nZXRNb250aCgpKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIG92ZXJsYXlcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFycyBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgaGFuZGxlQ2xlYXJDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghb25DaGFuZ2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlYWN0LWRhdGV0aW1lOiBvbkNoYW5nZSBjYWxsYmFjayBpcyBub3Qgc2V0Jyk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHtcbiAgICAgIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICBwcmV0dGlmeUlucHV0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0LCBmb3JtYXREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyIGRhdGU9e2RhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX0gbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX0gLz5cbiAgKTtcblxuICByZW5kZXJDbGVhclZhbHVlQnV0dG9uID0gKCkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZSBkaXNhYmxlZGAgOiBgJHtjbGFzc1ByZWZpeH0tY2xlYXItdmFsdWVgXG4gICAgICB9XG4gICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyQ2xpY2t9XG4gICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICA+XG4gICAgICA8c3Bhbj54PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2VsZWN0ZWREYXlzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgbWludXRlc0ludGVydmFsLFxuICAgICAgc2hvd0NsZWFyVmFsdWUsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBmb3JtYXREYXRlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID1cbiAgICAgIHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICAodHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PXt0aGlzLmdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbigpfVxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogWyd0b3AnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1pbnB1dC1jb250YWluZXJgfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgcmVhZE9ubHk9eyEhZm9ybWF0RGF0ZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG93Q2xlYXJWYWx1ZSAmJiB2YWx1ZSAmJiB0aGlzLnJlbmRlckNsZWFyVmFsdWVCdXR0b24oKX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU9uT3ZlcmxheU1vdXNlRG93bn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWREYXlzfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5cyB8fCB0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XG4gICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17TmF2YmFyfVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aW1lICYmIChcbiAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XG4gICAgICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19