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
import './date-input.scss';

// Date formats used by the component (mainly by the getDate method)
var FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT'
};

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = moment.utc(props.value, moment.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);

    _this.state = {
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: _this.getDate(momentDate, FORMATS.DATE_OBJECT),
      // inputDate: Prettified string shown in input field
      inputDate: _this.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
    };

    _this.localeUtils = Object.assign(LocaleUtils, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
      } });

    _this.input = null;
    _this.dayPicker = null;
    _this.focused = false;
    return _this;
  }

  // TODO: change this one to getDerivedStateFromProps ASAP


  DateInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If value changes when input is blurred
    if (!this.focused && nextProps.value && this.props.value !== nextProps.value) {
      var momentDate = moment.utc(nextProps.value, moment.ISO_8601);
      this.setState({
        selectedDay: this.getDate(momentDate, FORMATS.DATE_OBJECT),
        inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE, nextProps.dateFormat)
      });
    }
  };

  DateInput.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  };

  /**
   * Fires every time dayPicker is open and document is clicked
   * @param e
   */


  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */


  /**
   * Returns the first of the week based on locale (used by DayPicker)
   * @returns {number}
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

    var classPrefix = 'oc-datetime';
    /* eslint-disable no-unused-vars */

    var _props = this.props,
        locale = _props.locale,
        time = _props.time,
        value = _props.value,
        inputProps = _props.inputProps,
        _inputRef = _props.inputRef,
        disabled = _props.disabled,
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'showWeekNumbers', 'minutesInterval']);

    var momentDate = moment.utc(value, moment.ISO_8601);
    var timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute()
    };

    return React.createElement(
      TetherComponent,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        className: '' + classPrefix
      },
      React.createElement(
        FormGroup,
        null,
        React.createElement(FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          },
          value: this.state.inputDate,
          disabled: disabled
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus
        }))
      ),
      this.state.showOverlay && React.createElement(
        'div',
        {
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          }
        },
        React.createElement(DayPicker, _extends({
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: this.isSameDay,
          localeUtils: this.localeUtils,
          month: this.state.dayPickerVisibleMonth,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement
        }, otherProps)),
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
  value: '',
  dateFormat: 'L',
  locale: 'en',
  onChange: function onChange() {},

  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false,
  showWeekNumbers: true,
  time: false,
  minutesInterval: 5
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

  this.getDate = function (date, type) {
    var dateFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this3.props.dateFormat;

    var momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
    var removeInvisibleChars = function removeInvisibleChars(str) {
      return str.replace(/\u200E/g, '');
    };
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

  this.getFirstDayOfWeek = function () {
    return moment.localeData(_this3.props.locale).firstDayOfWeek();
  };

  this.handleInputFocus = function (e) {
    var _state = _this3.state,
        showOverlay = _state.showOverlay,
        selectedDay = _state.selectedDay;

    _this3.focused = true;

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
    _this3.focused = false;

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
        selectedDay: _this3.getDate(inputDate, FORMATS.DATE_OBJECT)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
      });
      onChange(_this3.getDate(inputDate, FORMATS.UTC));
      if (inputProps.onChange) inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      onChange(null);
    }
  };

  this.handleDayClick = function (day) {
    var momentObj = moment.utc(day);
    _this3.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: _this3.getDate(momentObj, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(_this3.getDate(momentObj, FORMATS.UTC));
      _this3.input.blur();
    });
  };

  this.handleTimePickerChange = function (newTime) {
    var momentDate = moment.utc(_this3.props.value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    _this3.setState({
      inputDate: _this3.getDate(momentDate, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(_this3.getDate(momentDate, FORMATS.UTC));
    });
  };

  this.handleYearMonthChange = function (val) {
    _this3.setState({
      dayPickerVisibleMonth: val
    });
  };

  this.isSameDay = function (day) {
    return DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return React.createElement(YearMonthPicker, {
      date: date,
      onChange: _this3.handleYearMonthChange,
      locale: _this3.props.locale
    });
  };
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwicHJvcHMiLCJtb21lbnREYXRlIiwidXRjIiwidmFsdWUiLCJJU09fODYwMSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2VsZWN0ZWREYXkiLCJnZXREYXRlIiwiaW5wdXREYXRlIiwiZGF0ZUZvcm1hdCIsImxvY2FsZVV0aWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsImZvY3VzZWQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZURheUNsaWNrIiwiaXNTYW1lRGF5IiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsImRheSIsIm1vbWVudE9iaiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLFFBQXVDLGlCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxTQUFQLElBQW9CQyxTQUFwQixRQUFxQyxrQkFBckM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsY0FBNUI7QUFDQSxPQUFPLGdDQUFQOztBQUVBO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixxQ0FBdkI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLGlEQUE1QjtBQUNBLE9BQU8sbUJBQVA7O0FBRUE7QUFDQSxJQUFNQyxVQUFVO0FBQ2RDLE9BQUssS0FEUztBQUVkQyxlQUFhLGFBRkM7QUFHZEMsZUFBYTtBQUhDLENBQWhCOztJQU1xQkMsUzs7O0FBNkJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNq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QUFxQm1ELFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFheEIsS0FBS3lCLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7T0FPRGxDLG9CLEdBQXVCO0FBQUEsUUFBR1MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckIsb0JBQUMsZUFBRDtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLcUIscUJBRmpCO0FBR0UsY0FBUSxPQUFLaEYsS0FBTCxDQUFXOEI7QUFIckIsTUFEcUI7QUFBQSxHOztTQWhQSi9CLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIG9uQ2hhbmdlKCkge1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG5cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiBjaGFuZ2UgdGhpcyBvbmUgdG8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIEFTQVBcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBJZiB2YWx1ZSBjaGFuZ2VzIHdoZW4gaW5wdXQgaXMgYmx1cnJlZFxuICAgIGlmICghdGhpcy5mb2N1c2VkICYmIG5leHRQcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKG5leHRQcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBuZXh0UHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICB0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgZ2V0RGF0ZSA9IChkYXRlLCB0eXBlLCBkYXRlRm9ybWF0ID0gdGhpcy5wcm9wcy5kYXRlRm9ybWF0KSA9PiB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGNvbnN0IHJlbW92ZUludmlzaWJsZUNoYXJzID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3Qgb2YgdGhlIHdlZWsgYmFzZWQgb24gbG9jYWxlICh1c2VkIGJ5IERheVBpY2tlcilcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEZpcnN0RGF5T2ZXZWVrID0gKCkgPT4gbW9tZW50LmxvY2FsZURhdGEodGhpcy5wcm9wcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxuICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgICAgb25DaGFuZ2UodGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMpKTtcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudE9iaiA9IG1vbWVudC51dGMoZGF5KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKG1vbWVudE9iaiwgRk9STUFUUy5VVEMpKTtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gbmV3VGltZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlclxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XG4gICAgLz5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXt0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICAgIG1vbnRoPXt0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XG4gICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==