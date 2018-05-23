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
   * @param date
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
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'showWeekNumbers']);

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
          value: value
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
  time: false
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

  this.handleTimePickerChange = function (date) {
    var momentDate = moment.utc(date);
    _this3.setState({
      inputDate: _this3.getDate(momentDate, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwicHJvcHMiLCJtb21lbnREYXRlIiwidXRjIiwidmFsdWUiLCJJU09fODYwMSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2VsZWN0ZWREYXkiLCJnZXREYXRlIiwiaW5wdXREYXRlIiwiZGF0ZUZvcm1hdCIsImxvY2FsZVV0aWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsImZvY3VzZWQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2hvd1dlZWtOdW1iZXJzIiwib3RoZXJQcm9wcyIsInRvIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImRheVBpY2tlclZpc2libGVNb250aCIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJkYXkiLCJtb21lbnRPYmoiLCJibHVyIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FBRUE7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHFDQUF2QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsaURBQTVCO0FBQ0EsT0FBTyxtQkFBUDs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsT0FBSyxLQURTO0FBRWRDLGVBQWEsYUFGQztBQUdkQyxlQUFhO0FBSEMsQ0FBaEI7O0lBTXFCQyxTOzs7QUEyQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUdqQixRQUFNQyxhQUFhYixPQUFPYyxHQUFQLENBQVdGLE1BQU1HLEtBQWpCLEVBQXdCZixPQUFPZ0IsUUFBL0IsQ0FBbkI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCOztBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxLQURGO0FBRVg7QUFDQUMsbUJBQWEsTUFBS0MsT0FBTCxDQUFhVCxVQUFiLEVBQXlCTixRQUFRRyxXQUFqQyxDQUhGO0FBSVg7QUFDQWEsaUJBQVcsTUFBS0QsT0FBTCxDQUFhVCxVQUFiLEVBQXlCTixRQUFRRSxXQUFqQyxFQUE4Q0csTUFBTVksVUFBcEQ7QUFMQSxLQUFiOztBQVFBLFVBQUtDLFdBQUwsR0FBbUJDLE9BQU9DLE1BQVAsQ0FDakJ4QixXQURpQixFQUVqQixFQUFFeUIsbUJBQW1CO0FBQUEsZUFBTTVCLE9BQU82QixVQUFQLEdBQW9CQyxjQUFwQixFQUFOO0FBQUEsT0FBckIsRUFGaUIsQ0FBbkI7O0FBS0EsVUFBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFyQmlCO0FBc0JsQjs7QUFFRDs7O3NCQUNBQyx5QixzQ0FBMEJDLFMsRUFBVztBQUNuQztBQUNBLFFBQUksQ0FBQyxLQUFLRixPQUFOLElBQWlCRSxVQUFVcEIsS0FBM0IsSUFBb0MsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLEtBQXFCb0IsVUFBVXBCLEtBQXZFLEVBQThFO0FBQzVFLFVBQU1GLGFBQWFiLE9BQU9jLEdBQVAsQ0FBV3FCLFVBQVVwQixLQUFyQixFQUE0QmYsT0FBT2dCLFFBQW5DLENBQW5CO0FBQ0EsV0FBS29CLFFBQUwsQ0FBYztBQUNaZixxQkFBYSxLQUFLQyxPQUFMLENBQWFULFVBQWIsRUFBeUJOLFFBQVFHLFdBQWpDLENBREQ7QUFFWmEsbUJBQVcsS0FBS0QsT0FBTCxDQUFhVCxVQUFiLEVBQXlCTixRQUFRRSxXQUFqQyxFQUE4QzBCLFVBQVVYLFVBQXhEO0FBRkMsT0FBZDtBQUlEO0FBQ0YsRzs7c0JBRURhLG9CLG1DQUF1QjtBQUNyQkMsYUFBU0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS3RCLGVBQTNDO0FBQ0QsRzs7QUFFRDs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7O0FBdUJBOzs7Ozs7QUFNQTs7Ozs7O0FBcUJBOzs7Ozs7QUFlQTs7Ozs7O0FBeUJBOzs7Ozs7QUFnQkE7Ozs7OztBQWFBOzs7Ozs7QUFVQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVlBOzs7Ozs7O3NCQWFBdUIsTSxxQkFBUztBQUFBOztBQUNQLFFBQU1DLGNBQWMsYUFBcEI7QUFDQTs7QUFGTyxpQkFZSCxLQUFLN0IsS0FaRjtBQUFBLFFBSUw4QixNQUpLLFVBSUxBLE1BSks7QUFBQSxRQUtMQyxJQUxLLFVBS0xBLElBTEs7QUFBQSxRQU1MNUIsS0FOSyxVQU1MQSxLQU5LO0FBQUEsUUFPTDZCLFVBUEssVUFPTEEsVUFQSztBQUFBLFFBUUxDLFNBUkssVUFRTEEsUUFSSztBQUFBLFFBU0xDLFFBVEssVUFTTEEsUUFUSztBQUFBLFFBVUxDLGVBVkssVUFVTEEsZUFWSztBQUFBLFFBV0ZDLFVBWEU7O0FBY1AsV0FDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRSxvQkFBVyxZQURiO0FBRUUscUJBQWEsQ0FBQztBQUNaQyxjQUFJLGNBRFE7QUFFWkMsc0JBQVk7QUFGQSxTQUFELENBRmY7QUFNRSx3QkFBY1Q7QUFOaEI7QUFRRTtBQUFDLGlCQUFEO0FBQUE7QUFDRSw0QkFBQyxXQUFEO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLG9CQUFVLGtCQUFDVSxFQUFELEVBQVE7QUFDaEIsbUJBQUtwQixLQUFMLEdBQWFvQixFQUFiO0FBQ0FOLHNCQUFTTSxFQUFUO0FBQ0QsV0FMSDtBQU1FLGlCQUFPLEtBQUtoQyxLQUFMLENBQVdJLFNBTnBCO0FBT0Usb0JBQVV1QjtBQVBaLFdBUU1GLFVBUk47QUFTRSxvQkFBVSxLQUFLUSxpQkFUakI7QUFVRSxtQkFBUyxLQUFLQztBQVZoQjtBQURGLE9BUkY7QUFzQkcsV0FBS2xDLEtBQUwsQ0FBV0MsV0FBWCxJQUNEO0FBQUE7QUFBQTtBQUNFLGdCQUFLLGNBRFA7QUFFRSxxQkFBY3FCLFdBQWQsY0FGRjtBQUdFLGVBQUssYUFBQ1UsRUFBRCxFQUFRO0FBQ1gsbUJBQUtHLGlCQUFMLEdBQXlCSCxFQUF6QjtBQUNEO0FBTEg7QUFPRSw0QkFBQyxTQUFEO0FBQ0UsZUFBSyxhQUFDQSxFQUFELEVBQVE7QUFDWCxtQkFBS25CLFNBQUwsR0FBaUJtQixFQUFqQjtBQUNELFdBSEg7QUFJRSxzQkFBWSxLQUFLSSxjQUpuQjtBQUtFLHdCQUFjLEtBQUtDLFNBTHJCO0FBTUUsdUJBQWEsS0FBSy9CLFdBTnBCO0FBT0UsaUJBQU8sS0FBS04sS0FBTCxDQUFXc0MscUJBUHBCO0FBUUUsMkJBQWlCVixlQVJuQjtBQVNFLDBCQUFnQixLQUFLbkIsaUJBQUwsRUFUbEI7QUFVRSxrQkFBUWMsTUFWVjtBQVdFLDBCQUFnQixLQUFLZ0I7QUFYdkIsV0FZTVYsVUFaTixFQVBGO0FBc0JHTCxnQkFDRCxvQkFBQyxVQUFEO0FBQ0Usb0JBQVUsS0FBS2dCLHNCQURqQjtBQUVFLGlCQUFPNUM7QUFGVDtBQXZCRjtBQXZCRixLQURGO0FBdURELEc7OztFQXpUb0NuQixNQUFNZ0UsUyxVQWFwQ0MsWSxHQUFlO0FBQ3BCOUMsU0FBTyxFQURhO0FBRXBCUyxjQUFZLEdBRlE7QUFHcEJrQixVQUFRLElBSFk7QUFJcEJvQixVQUpvQixzQkFJVCxDQUNWLENBTG1COztBQU1wQmxCLGNBQVksRUFOUTtBQU9wQkMsVUFQb0Isc0JBT1QsQ0FDVixDQVJtQjs7QUFTcEJDLFlBQVUsS0FUVTtBQVVwQkMsbUJBQWlCLElBVkc7QUFXcEJKLFFBQU07QUFYYyxDOzs7T0EwRHRCMUIsZSxHQUFrQixVQUFDOEMsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUksQ0FBQyxPQUFLVCxpQkFBVixFQUE2Qjs7QUFFN0I7QUFDQSxRQUFJLENBQUMsT0FBS0EsaUJBQUwsQ0FBdUJVLFFBQXZCLENBQWdDRCxFQUFFRSxNQUFsQyxDQUFELElBQ0YsT0FBSzlDLEtBQUwsQ0FBV0MsV0FEVCxJQUVGMkMsRUFBRUUsTUFBRixLQUFhLE9BQUtsQyxLQUZwQixFQUUyQjtBQUN6QixhQUFLbUMsWUFBTDtBQUNBNUIsZUFBU0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsT0FBS3RCLGVBQTNDO0FBQ0Q7QUFDRixHOztPQVVESyxPLEdBQVUsVUFBQzZDLElBQUQsRUFBT0MsSUFBUCxFQUFvRDtBQUFBLFFBQXZDNUMsVUFBdUMsdUVBQTFCLE9BQUtaLEtBQUwsQ0FBV1ksVUFBZTs7QUFDNUQsUUFBTVgsYUFBYSxPQUFPc0QsSUFBUCxLQUFnQixRQUFoQixHQUEyQm5FLE9BQU9jLEdBQVAsQ0FBV3FELElBQVgsRUFBaUIzQyxVQUFqQixDQUEzQixHQUEwRDJDLElBQTdFO0FBQ0EsUUFBTUUsdUJBQXVCLFNBQXZCQSxvQkFBdUI7QUFBQSxhQUFPQyxJQUFJQyxPQUFKLENBQVksU0FBWixFQUF1QixFQUF2QixDQUFQO0FBQUEsS0FBN0I7QUFDQSxRQUFJLENBQUMxRCxXQUFXMkQsT0FBWCxFQUFELElBQXlCLENBQUNMLElBQTlCLEVBQW9DLE9BQU8sRUFBUDtBQUNwQyxZQUFRQyxJQUFSO0FBQ0UsV0FBSzdELFFBQVFFLFdBQWI7QUFDRSxlQUFPNEQscUJBQXFCeEQsV0FBVzRELE1BQVgsQ0FBa0JqRCxVQUFsQixDQUFyQixDQUFQO0FBQ0YsV0FBS2pCLFFBQVFDLEdBQWI7QUFDRSxlQUFPNkQscUJBQXFCeEQsV0FBVzZELFdBQVgsRUFBckIsQ0FBUDtBQUNGLFdBQUtuRSxRQUFRRyxXQUFiO0FBQ0E7QUFDRSxlQUFPRyxXQUFXOEQsTUFBWCxFQUFQO0FBUEo7QUFTRCxHOztPQU1EL0MsaUIsR0FBb0I7QUFBQSxXQUFNNUIsT0FBTzZCLFVBQVAsQ0FBa0IsT0FBS2pCLEtBQUwsQ0FBVzhCLE1BQTdCLEVBQXFDWixjQUFyQyxFQUFOO0FBQUEsRzs7T0FNcEJ1QixnQixHQUFtQixVQUFDVSxDQUFELEVBQU87QUFBQSxpQkFDYSxPQUFLNUMsS0FEbEI7QUFBQSxRQUNoQkMsV0FEZ0IsVUFDaEJBLFdBRGdCO0FBQUEsUUFDSEMsV0FERyxVQUNIQSxXQURHOztBQUV4QixXQUFLWSxPQUFMLEdBQWUsSUFBZjs7QUFFQSxXQUFLRyxRQUFMLENBQWM7QUFDWmhCLG1CQUFhO0FBREQsS0FBZCxFQUVHLFlBQU07QUFDUDtBQUNBd0QsaUJBQVcsWUFBTTtBQUNmLFlBQUksQ0FBQ3hELFdBQUQsSUFBZ0IsT0FBS1ksU0FBckIsSUFBa0NYLFdBQXRDLEVBQW1ELE9BQUtXLFNBQUwsQ0FBZTZDLFNBQWYsQ0FBeUJ4RCxXQUF6QjtBQUNwRCxPQUZEO0FBR0QsS0FQRDs7QUFTQWlCLGFBQVN3QyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxPQUFLN0QsZUFBeEM7QUFDQSxRQUFJLE9BQUtMLEtBQUwsQ0FBV2dDLFVBQVgsQ0FBc0JtQyxPQUExQixFQUFtQyxPQUFLbkUsS0FBTCxDQUFXZ0MsVUFBWCxDQUFzQm1DLE9BQXRCLENBQThCaEIsQ0FBOUI7QUFDcEMsRzs7T0FNREcsWSxHQUFlLFVBQUNILENBQUQsRUFBTztBQUNwQixXQUFLOUIsT0FBTCxHQUFlLEtBQWY7O0FBRUEsV0FBS0csUUFBTCxDQUFjO0FBQ1poQixtQkFBYTtBQURELEtBQWQsRUFFRyxZQUFNO0FBQ1AsVUFBSSxPQUFLRCxLQUFMLENBQVdDLFdBQWYsRUFBNEIsT0FBS1csS0FBTCxDQUFXaUQsS0FBWDtBQUM1QixVQUFJLE9BQUtwRSxLQUFMLENBQVdnQyxVQUFYLENBQXNCcUMsTUFBMUIsRUFBa0MsT0FBS3JFLEtBQUwsQ0FBV2dDLFVBQVgsQ0FBc0JxQyxNQUF0QixDQUE2QmxCLENBQTdCO0FBQ25DLEtBTEQ7QUFNRCxHOztPQU1EWCxpQixHQUFvQixVQUFDVyxDQUFELEVBQU87QUFDekIsUUFBTXhDLFlBQVl3QyxFQUFFRSxNQUFGLENBQVNsRCxLQUEzQjtBQUR5QixrQkFFb0IsT0FBS0gsS0FGekI7QUFBQSxRQUVqQlksVUFGaUIsV0FFakJBLFVBRmlCO0FBQUEsUUFFTG9CLFVBRkssV0FFTEEsVUFGSztBQUFBLFFBRU9rQixRQUZQLFdBRU9BLFFBRlA7OztBQUl6QixXQUFLMUIsUUFBTCxDQUFjLEVBQUViLG9CQUFGLEVBQWQ7QUFDQTtBQUNBLFFBQUl2QixPQUFPYyxHQUFQLENBQVdTLFNBQVgsRUFBc0JDLFVBQXRCLEVBQWtDZ0QsT0FBbEMsTUFBK0MsT0FBS1UsYUFBTCxDQUFtQjNELFNBQW5CLENBQW5ELEVBQWtGO0FBQ2hGLGFBQUthLFFBQUwsQ0FBYztBQUNaZixxQkFBYSxPQUFLQyxPQUFMLENBQWFDLFNBQWIsRUFBd0JoQixRQUFRRyxXQUFoQztBQURELE9BQWQsRUFFRyxZQUFNO0FBQ1A7QUFDQSxZQUFJLE9BQUtzQixTQUFULEVBQW9CLE9BQUtBLFNBQUwsQ0FBZTZDLFNBQWYsQ0FBeUIsT0FBSzFELEtBQUwsQ0FBV0UsV0FBcEM7QUFDckIsT0FMRDtBQU1BeUMsZUFBUyxPQUFLeEMsT0FBTCxDQUFhQyxTQUFiLEVBQXdCaEIsUUFBUUMsR0FBaEMsQ0FBVDtBQUNBLFVBQUlvQyxXQUFXa0IsUUFBZixFQUF5QmxCLFdBQVdrQixRQUFYLENBQW9CQyxDQUFwQjtBQUMxQixLQVRELE1BU087QUFDTDtBQUNBRCxlQUFTLElBQVQ7QUFDRDtBQUNGLEc7O09BTURQLGMsR0FBaUIsVUFBQzRCLEdBQUQsRUFBUztBQUN4QixRQUFNQyxZQUFZcEYsT0FBT2MsR0FBUCxDQUFXcUUsR0FBWCxDQUFsQjtBQUNBLFdBQUsvQyxRQUFMLENBQWM7QUFDWmYsbUJBQWE4RCxHQUREO0FBRVovRCxtQkFBYSxLQUZEO0FBR1pHLGlCQUFXLE9BQUtELE9BQUwsQ0FBYThELFNBQWIsRUFBd0I3RSxRQUFRRSxXQUFoQztBQUhDLEtBQWQsRUFJRyxZQUFNO0FBQ1AsYUFBS0csS0FBTCxDQUFXa0QsUUFBWCxDQUFvQixPQUFLeEMsT0FBTCxDQUFhOEQsU0FBYixFQUF3QjdFLFFBQVFDLEdBQWhDLENBQXBCO0FBQ0EsYUFBS3VCLEtBQUwsQ0FBV3NELElBQVg7QUFDRCxLQVBEO0FBUUQsRzs7T0FNRDFCLHNCLEdBQXlCLFVBQUNRLElBQUQsRUFBVTtBQUNqQyxRQUFNdEQsYUFBYWIsT0FBT2MsR0FBUCxDQUFXcUQsSUFBWCxDQUFuQjtBQUNBLFdBQUsvQixRQUFMLENBQWM7QUFDWmIsaUJBQVcsT0FBS0QsT0FBTCxDQUFhVCxVQUFiLEVBQXlCTixRQUFRRSxXQUFqQztBQURDLEtBQWQsRUFFRyxZQUFNO0FBQ1AsYUFBS0csS0FBTCxDQUFXa0QsUUFBWCxDQUFvQkssSUFBcEI7QUFDRCxLQUpEO0FBS0QsRzs7T0FNRG1CLHFCLEdBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQixXQUFLbkQsUUFBTCxDQUFjO0FBQ1pxQiw2QkFBdUI4QjtBQURYLEtBQWQ7QUFHRCxHOztPQU9EL0IsUyxHQUFZO0FBQUEsV0FBT3RELFVBQVVzRCxTQUFWLENBQW9CLE9BQUtyQyxLQUFMLENBQVdFLFdBQS9CLEVBQTRDOEQsR0FBNUMsQ0FBUDtBQUFBLEc7O09BUVpELGEsR0FBZ0IsVUFBQ2YsSUFBRCxFQUFVO0FBQ3hCLFFBQUlxQixVQUFVLDJDQUFkO0FBQ0EsUUFBSSxPQUFLNUUsS0FBTCxDQUFXK0IsSUFBZixFQUFxQjZDLFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFhdEIsS0FBS3VCLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7T0FPRGhDLG9CLEdBQXVCO0FBQUEsUUFBR1MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckIsb0JBQUMsZUFBRDtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLbUIscUJBRmpCO0FBR0UsY0FBUSxPQUFLMUUsS0FBTCxDQUFXOEI7QUFIckIsTUFEcUI7QUFBQSxHOztTQTVPSi9CLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgTG9jYWxlVXRpbHMsXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hhbmdlIHRoaXMgb25lIHRvIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBBU0FQXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gSWYgdmFsdWUgY2hhbmdlcyB3aGVuIGlucHV0IGlzIGJsdXJyZWRcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCAmJiBuZXh0UHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhuZXh0UHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgbmV4dFByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIGdldERhdGUgPSAoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCA9IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICAgIG9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDKSk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXkpID0+IHtcbiAgICBjb25zdCBtb21lbnRPYmogPSBtb21lbnQudXRjKGRheSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuVVRDKSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyXG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxuICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cbiAgICAvPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcbiAgICAgICAgY29uc3RyYWludHM9e1t7XG4gICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgIH1dfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fWB9XG4gICAgICA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0RGF0ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXt0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgbW9udGg9e3RoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRofVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19