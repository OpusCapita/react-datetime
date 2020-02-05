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
        return new Date(momentDate.format('L'));
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

    var momentDate = moment.utc(moment(day).format('L'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIk5hdmJhciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiREFURVRJTUVfUE9QVVBfSEVJR0hUIiwiY2xhc3NQcmVmaXgiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwiZm9ybWF0RGF0ZSIsInZhbHVlIiwic2hvd092ZXJsYXkiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJpbnB1dERhdGUiLCJnZXREYXRlIiwiZGF0ZUZvcm1hdCIsInNlbGVjdGVkRGF5IiwiZGF0ZSIsInR5cGUiLCJpc1ZhbGlkIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsIkRhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwibW91c2VDbGlja2VkT25Db250YWluZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzTmFtZSIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsInNob3dDbGVhclZhbHVlIiwiZGlzYWJsZWREYXlzIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24iLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsInJlbmRlckNsZWFyVmFsdWVCdXR0b24iLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwic3RyIiwicmVwbGFjZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsImlucHV0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcHVwSGVpZ2h0IiwicG9wdXBCb3R0b21ZIiwiaGVpZ2h0IiwieSIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaGFuZGxlQ2xlYXJDbGljayIsIlR5cGVFcnJvciIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLFFBQXVDLGlCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxTQUFQLElBQW9CQyxTQUFwQixRQUFxQyxrQkFBckM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsY0FBNUI7QUFDQSxPQUFPLGdDQUFQOztBQUVBO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixxQ0FBdkI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLGlEQUE1QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsMkJBQW5CO0FBQ0EsT0FBTyxtQkFBUDs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsT0FBSyxLQURTO0FBRWRDLGVBQWEsYUFGQztBQUdkQyxlQUFhO0FBSEMsQ0FBaEI7O0FBTUE7QUFDQSxJQUFNQyx3QkFBd0IsR0FBOUI7QUFDQSxJQUFNQyxjQUFjLGFBQXBCOztJQUVxQkMsUzs7O1lBeUNaQyx3QixxQ0FBeUJDLEssRUFBT0MsSyxFQUFPO0FBQUEsUUFDcENDLFVBRG9DLEdBQ2RGLEtBRGMsQ0FDcENFLFVBRG9DO0FBQUEsUUFDeEJDLEtBRHdCLEdBQ2RILEtBRGMsQ0FDeEJHLEtBRHdCOztBQUU1QyxRQUFJLENBQUNGLE1BQU1HLFdBQVAsSUFBc0JELFVBQVVGLE1BQU1JLFNBQTFDLEVBQXFEO0FBQ25ELFVBQU1DLGFBQWF0QixPQUFPdUIsR0FBUCxDQUFXSixLQUFYLEVBQWtCbkIsT0FBT3dCLFFBQXpCLENBQW5CO0FBQ0EsVUFBTUMsWUFBWVAsYUFDZEEsV0FBV0MsS0FBWCxDQURjLEdBRWRMLFVBQVVZ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QURILFdBQ0dBLFVBREg7O0FBRXhCLFFBQU1JLGFBQWF0QixPQUFPdUIsR0FBUCxDQUFXSixLQUFYLEVBQWtCbkIsT0FBT3dCLFFBQXpCLENBQW5CO0FBQ0EsUUFBTUMsWUFBWVAsYUFDZEEsV0FBV0MsS0FBWCxDQURjLEdBRWRMLFVBQVVZLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCZCxRQUFRRSxXQUF0QyxFQUFtRGlCLFVBQW5ELENBRko7QUFHQSxXQUFLNEUsUUFBTCxDQUFjLEVBQUU5RSxvQkFBRixFQUFkO0FBQ0QsRzs7T0FPRHdELG9CLEdBQXVCO0FBQUEsUUFBR3BELElBQUgsUUFBR0EsSUFBSDtBQUFBLFdBQ3JCLG9CQUFDLGVBQUQsSUFBaUIsTUFBTUEsSUFBdkIsRUFBNkIsVUFBVSxPQUFLK0YscUJBQTVDLEVBQW1FLFFBQVEsT0FBSzVHLEtBQUwsQ0FBV29DLE1BQXRGLEdBRHFCO0FBQUEsRzs7T0FJdkJ5QixzQixHQUF5QjtBQUFBLFdBQ3ZCO0FBQUE7QUFBQTtBQUNFLGNBQUssUUFEUDtBQUVFLG1CQUNFLE9BQUs3RCxLQUFMLENBQVd3QyxRQUFYLEdBQXlCM0MsV0FBekIsNkJBQWlFQSxXQUFqRSxpQkFISjtBQUtFLGlCQUFTLE9BQUtvSCxnQkFMaEI7QUFNRSxrQkFBVSxPQUFLakgsS0FBTCxDQUFXd0M7QUFOdkI7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsS0FEdUI7QUFBQSxHOztTQXZaTjFDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG4vLyBVc2VkIGluIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiBmblxuY29uc3QgREFURVRJTUVfUE9QVVBfSEVJR0hUID0gMjAwO1xuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0RGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDbGVhclZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgZm9ybWF0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGxvY2FsZTogJ2VuLUdCJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBkaXNhYmxlZERheXM6IG51bGwsXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICBzaG93Q2xlYXJWYWx1ZTogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBVVEMgZGF5IG1pZ2h0IGRpZmZlciBmcm9tIGxvY2FsIGRheSwgdGhlcmVmb3JlIFVUQyBvZmZzZXRcbiAgICAgICAgLy8gbXVzdCBiZSBkaXNjb3VudGVkLlxuICAgICAgICByZXR1cm4gbmV3IERhdGUobW9tZW50RGF0ZS5mb3JtYXQoJ0wnKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIGlucHV0RGF0ZSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oTG9jYWxlVXRpbHMsIHtcbiAgICAgIGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG5cbiAgICAvLyBVc2VkIGluIG9uQmx1ciBoYW5kbGVyIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBibHVyIGhhcHBlbmVkIGJlY2F1c2Ugb2YgYSBjbGlja1xuICAgIC8vIG9uIHRoZSBvdmVybGF5XG4gICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKFxuICAgICAgIXRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICB0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3Qgb2YgdGhlIHdlZWsgYmFzZWQgb24gbG9jYWxlICh1c2VkIGJ5IERheVBpY2tlcilcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEZpcnN0RGF5T2ZXZWVrID0gKCkgPT4gbW9tZW50LmxvY2FsZURhdGEodGhpcy5wcm9wcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgd2hldGhlciBvciBub3QgcG9wdXAgaGFzIHNwYWNlIHRvIG9wZW4gYmVsb3cgdGhlIGlucHV0IGZpZWxkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gXCJhbmNob3IgcG9pbnRcIiBpbiBpbnB1dCBlbGVtZW50XG4gICAqL1xuICBnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0RGltZW5zaW9ucyA9IHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIFBvcHVwIHdpbGwgb3BlbiBiZWxvdyB0aGUgaW5wdXQgYnkgZGVmYXVsdFxuICAgIGxldCBhdHRhY2htZW50ID0gJ3RvcCBjZW50ZXInO1xuXG4gICAgaWYgKGlucHV0RGltZW5zaW9ucykge1xuICAgICAgLyogSWYgdGhlcmUncyB0aW1lIGlucHV0cyBwcmVzZW50LCB0aGUgcG9wdXAgd2lsbCBiZSBzbGlnaHRseSB0YWxsZXIuIEhlaWdodCBoYXMgdG8gYmVcbiAgICAgIGhhcmQgY29kZWQsIGJlY2F1c2Ugd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBiZWZvcmUgd2UgaGF2ZSBvcGVuZWQgaXQgKi9cbiAgICAgIGNvbnN0IHBvcHVwSGVpZ2h0ID0gdGltZSA/IERBVEVUSU1FX1BPUFVQX0hFSUdIVCArIDUwIDogREFURVRJTUVfUE9QVVBfSEVJR0hUO1xuICAgICAgY29uc3QgcG9wdXBCb3R0b21ZID0gcG9wdXBIZWlnaHQgKyBpbnB1dERpbWVuc2lvbnMuaGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLnk7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIC8vIFBvcHVwIGhhcyBubyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCwgc28uLlxuICAgICAgaWYgKHdpbmRvd0hlaWdodCA8IHBvcHVwQm90dG9tWSkgYXR0YWNobWVudCA9ICdib3R0b20gY2VudGVyJztcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNobWVudDtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxuICAgICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIGlucHV0UHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKGlucHV0RGF0ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0UHJvcHM6IHsgb25CbHVyIH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcmV0dGlmeUlucHV0RGF0ZSgpO1xuXG4gICAgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgb3ZlcmxheSBvbiBibHVyLCB1bmxlc3MgaXQgd2FzIGNhdXNlZCBieSBhIGNsaWNrIG9uIHRoZSBjYWxlbmRhclxuICAgIC8vIG92ZXJsYXlcbiAgICBpZiAoIXRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IGZhbHNlO1xuICAgIGlmIChvbkJsdXIpIG9uQmx1cihlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSwgbW9kaWZpZXJzID0ge30pID0+IHtcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7XG4gICAgICBkYXRlRm9ybWF0LCBmb3JtYXREYXRlLCB2YWx1ZSwgdGltZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBVVEMgZGF5IG1pZ2h0IGRpZmZlciBmcm9tIGxvY2FsIGRhdGUgdGhlcmVmb3JlIFVUQyBvZmZzZXQgbXVzdCBiZSBkaXNjb3VudGVkLlxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKG1vbWVudChkYXkpLmZvcm1hdCgnTCcpKTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnNldCgnaG91cicsIGN1cnJlbnRIb3Vycykuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGZvcm1hdERhdGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSk7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGlucHV0IHZhbHVlXG4gICAqL1xuICBoYW5kbGVDbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvbkNoYW5nZSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhY3QtZGF0ZXRpbWU6IG9uQ2hhbmdlIGNhbGxiYWNrIGlzIG5vdCBzZXQnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkge1xuICAgICAgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXIgZGF0ZT17ZGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfSBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfSAvPlxuICApO1xuXG4gIHJlbmRlckNsZWFyVmFsdWVCdXR0b24gPSAoKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVkID8gYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlIGRpc2FibGVkYCA6IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZWBcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJDbGlja31cbiAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgID5cbiAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3RlZERheXMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICBzaG93Q2xlYXJWYWx1ZSxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGZvcm1hdERhdGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG4gICAgY29uc3QgbW9udGggPVxuICAgICAgdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcbiAgICAgICh0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9e3RoaXMuZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uKCl9XG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiBbJ3RvcCddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWlucHV0LWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICByZWFkT25seT17ISFmb3JtYXREYXRlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=