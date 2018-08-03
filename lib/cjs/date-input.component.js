'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /* eslint-disable react/forbid-prop-types */


// App imports


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

var _moment3 = require('react-day-picker/moment');

var _moment4 = _interopRequireDefault(_moment3);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

require('react-day-picker/lib/style.css');

var _timePicker = require('./time-picker/time-picker.component');

var _timePicker2 = _interopRequireDefault(_timePicker);

var _yearMonthPicker = require('./year-month-picker/year-month-picker.component');

var _yearMonthPicker2 = _interopRequireDefault(_yearMonthPicker);

require('./date-input.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Date formats used by the component (mainly by the getDate method)
var FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT'
};

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!state.showOverlay && props.value !== state.lastValue) {
      var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
      return {
        lastValue: props.value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
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
    var momentDate = typeof date === 'string' ? _moment2.default.utc(date, dateFormat) : date;
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

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
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

    _this.localeUtils = Object.assign(_moment4.default, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
      } });

    _this.input = null;
    _this.dayPicker = null;
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
        selectedDays = _props.selectedDays,
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval']);

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    var timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute()
    };

    return _react2.default.createElement(
      _reactTether2.default,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          pin: true
        }, {
          to: 'window',
          attachment: 'together'
        }],
        className: '' + classPrefix
      },
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(_reactBootstrap.FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          },
          value: this.state.inputDate,
          disabled: disabled
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur
        }))
      ),
      this.state.showOverlay && _react2.default.createElement(
        'div',
        {
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          }
        },
        _react2.default.createElement(_reactDayPicker2.default, _extends({}, otherProps, {
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          selectedDays: selectedDays || this.isSameDay,
          localeUtils: this.localeUtils,
          month: this.state.dayPickerVisibleMonth,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement,
          onDayClick: this.handleDayClick
        })),
        time && _react2.default.createElement(_timePicker2.default, {
          onChange: this.handleTimePickerChange,
          time: timeObj,
          minutesInterval: minutesInterval
        })
      )
    );
  };

  return DateInput;
}(_react2.default.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  locale: 'en_GB',
  onChange: function onChange() {},

  onDayClick: function onDayClick() {},
  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false,
  selectedDays: null,
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

  this.getFirstDayOfWeek = function () {
    return _moment2.default.localeData(_this3.props.locale).firstDayOfWeek();
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
    if (_moment2.default.utc(inputDate, dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
      _this3.setState({
        selectedDay: DateInput.getDate(inputDate, FORMATS.DATE_OBJECT, dateFormat)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
      });
      onChange(DateInput.getDate(inputDate, FORMATS.UTC, dateFormat));
      if (inputProps.onChange) inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      onChange(null);
    }
  };

  this.handleInputBlur = function () {
    _this3.prettifyInputDate();
  };

  this.handleDayClick = function (day) {
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (modifiers.disabled) return;

    var _props3 = _this3.props,
        dateFormat = _props3.dateFormat,
        value = _props3.value,
        time = _props3.time;

    var momentDate = _moment2.default.utc(day);

    var timeAdjustedDate = null;
    var currentMomentDate = (0, _moment2.default)(value, _moment2.default.ISO_8601).utc();
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

    var momentDate = _moment2.default.utc(_this3.props.value);
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

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);

    momentDate.year(val.getFullYear()).month(val.getMonth());

    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat),
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
      dayPickerVisibleMonth: val
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.isSameDay = function (day) {
    return _reactDayPicker.DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };

  this.prettifyInputDate = function () {
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat;

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat)
    });
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return _react2.default.createElement(_yearMonthPicker2.default, {
      date: date,
      onChange: _this3.handleYearMonthChange,
      locale: _this3.props.locale
    });
  };
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJjYWxlbmRhckNvbnRhaW5lciIsImlzU2FtZURheSIsImRheVBpY2tlclZpc2libGVNb250aCIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQXFDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV04sTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9JLFFBQS9CLENBQW5CO0FBQ0EsYUFBTztBQUNMSCxtQkFBV0osTUFBTUcsS0FEWjtBQUVM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QVFDLEdBQXRDLEVBQTJDZ0IsVUFBM0MsQ0FBcEI7QUFDRCxLQU5EO0FBT0QsRzs7T0FPRDZDLFMsR0FBWTtBQUFBLFdBQU8sMEJBQVVBLFNBQVYsQ0FBb0IsT0FBS3ZELEtBQUwsQ0FBV08sV0FBL0IsRUFBNENzRSxHQUE1QyxDQUFQO0FBQUEsRzs7T0FRWkYsYSxHQUFnQixVQUFDaEUsSUFBRCxFQUFVO0FBQ3hCLFFBQUlvRixVQUFVLDJDQUFkO0FBQ0EsUUFBSSxPQUFLaEcsS0FBTCxDQUFXcUMsSUFBZixFQUFxQjJELFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFhckYsS0FBS3NGLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7T0FFRHJCLGlCLEdBQW9CLFlBQU07QUFBQSxrQkFDTSxPQUFLN0UsS0FEWDtBQUFBLFFBQ2hCRyxLQURnQixXQUNoQkEsS0FEZ0I7QUFBQSxRQUNUUSxVQURTLFdBQ1RBLFVBRFM7O0FBRXhCLFFBQU1OLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQixpQkFBT0ksUUFBekIsQ0FBbkI7QUFDQSxXQUFLOEQsUUFBTCxDQUFjO0FBQ1ozRCxpQkFBV1osVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFFLFdBQXRDLEVBQW1EZSxVQUFuRDtBQURDLEtBQWQ7QUFHRCxHOztPQU9EK0Msb0IsR0FBdUI7QUFBQSxRQUFHOUMsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckI7QUFDRSxZQUFNQSxJQURSO0FBRUUsZ0JBQVUsT0FBSzhFLHFCQUZqQjtBQUdFLGNBQVEsT0FBSzFGLEtBQUwsQ0FBV29DO0FBSHJCLE1BRHFCO0FBQUEsRzs7a0JBbFNKdEMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XHJcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XHJcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcclxuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XHJcblxyXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxyXG5jb25zdCBGT1JNQVRTID0ge1xyXG4gIFVUQzogJ1VUQycsXHJcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXHJcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgXSksXHJcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcclxuICAgIGxvY2FsZTogJ2VuX0dCJyxcclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgfSxcclxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxyXG4gICAgaW5wdXRQcm9wczoge30sXHJcbiAgICBpbnB1dFJlZigpIHtcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZERheXM6IG51bGwsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXHJcbiAgICB0aW1lOiBmYWxzZSxcclxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxyXG4gICAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxyXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cclxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcclxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xyXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcclxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xyXG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xyXG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcclxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cclxuICAgICAgbGFzdFZhbHVlOiBudWxsLFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxyXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIExvY2FsZVV0aWxzLFxyXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXHJcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcclxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZmlyc3Qgb2YgdGhlIHdlZWsgYmFzZWQgb24gbG9jYWxlICh1c2VkIGJ5IERheVBpY2tlcilcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEZpcnN0RGF5T2ZXZWVrID0gKCkgPT4gbW9tZW50LmxvY2FsZURhdGEodGhpcy5wcm9wcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXHJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xyXG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcclxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxyXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgb25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxyXG4gICAgICBvbkNoYW5nZShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByZXR0aWZ5SW5wdXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xyXG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xyXG5cclxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xyXG4gICAgY29uc3QgY3VycmVudEhvdXJzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdob3VyJyk7XHJcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XHJcblxyXG4gICAgaWYgKHRpbWUpIHtcclxuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcclxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGVcclxuICAgICAgICAuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKVxyXG4gICAgICAgIC5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXHJcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxyXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkRheUNsaWNrKGRheSwgbW9kaWZpZXJzKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxyXG4gICAqIEBwYXJhbSBuZXdUaW1lXHJcbiAgICovXHJcbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModGhpcy5wcm9wcy52YWx1ZSk7XHJcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XHJcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG5cclxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcclxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcclxuICB9O1xyXG5cclxuICBwcmV0dGlmeUlucHV0RGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xyXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXHJcbiAgICA8WWVhck1vbnRoUGlja2VyXHJcbiAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cclxuICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIGNvbnN0IHtcclxuICAgICAgbG9jYWxlLFxyXG4gICAgICB0aW1lLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgaW5wdXRQcm9wcyxcclxuICAgICAgaW5wdXRSZWYsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICBzZWxlY3RlZERheXMsXHJcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcclxuICAgICAgbWludXRlc0ludGVydmFsLFxyXG4gICAgICAuLi5vdGhlclByb3BzXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgY29uc3QgdGltZU9iaiA9IHtcclxuICAgICAgaG91cjogbW9tZW50RGF0ZS5ob3VyKCksXHJcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRldGhlckNvbXBvbmVudFxyXG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcclxuICAgICAgICBjb25zdHJhaW50cz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXHJcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcclxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcclxuICAgICAgICAgIH1dfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xyXG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGF5UGlja2VyXHJcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxyXG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cclxuICAgICAgICAgICAgbW9udGg9e3RoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRofVxyXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxyXG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aW1lICYmXHJcbiAgICAgICAgICA8VGltZVBpY2tlclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aW1lPXt0aW1lT2JqfVxyXG4gICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cclxuICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=