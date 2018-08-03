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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJjYWxlbmRhckNvbnRhaW5lciIsImlzU2FtZURheSIsImRheVBpY2tlclZpc2libGVNb250aCIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQXFDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV04sTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9JLFFBQS9CLENBQW5CO0FBQ0EsYUFBTztBQUNMSCxtQkFBV0osTUFBTUcsS0FEWjtBQUVM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QVFDLEdBQXRDLEVBQTJDZ0IsVUFBM0MsQ0FBcEI7QUFDRCxLQU5EO0FBT0QsRzs7T0FPRDZDLFMsR0FBWTtBQUFBLFdBQU8sMEJBQVVBLFNBQVYsQ0FBb0IsT0FBS3ZELEtBQUwsQ0FBV08sV0FBL0IsRUFBNENzRSxHQUE1QyxDQUFQO0FBQUEsRzs7T0FRWkYsYSxHQUFnQixVQUFDaEUsSUFBRCxFQUFVO0FBQ3hCLFFBQUlvRixVQUFVLDJDQUFkO0FBQ0EsUUFBSSxPQUFLaEcsS0FBTCxDQUFXcUMsSUFBZixFQUFxQjJELFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFhckYsS0FBS3NGLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7T0FFRHJCLGlCLEdBQW9CLFlBQU07QUFBQSxrQkFDTSxPQUFLN0UsS0FEWDtBQUFBLFFBQ2hCRyxLQURnQixXQUNoQkEsS0FEZ0I7QUFBQSxRQUNUUSxVQURTLFdBQ1RBLFVBRFM7O0FBRXhCLFFBQU1OLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQixpQkFBT0ksUUFBekIsQ0FBbkI7QUFDQSxXQUFLOEQsUUFBTCxDQUFjO0FBQ1ozRCxpQkFBV1osVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFFLFdBQXRDLEVBQW1EZSxVQUFuRDtBQURDLEtBQWQ7QUFHRCxHOztPQU9EK0Msb0IsR0FBdUI7QUFBQSxRQUFHOUMsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckI7QUFDRSxZQUFNQSxJQURSO0FBRUUsZ0JBQVUsT0FBSzhFLHFCQUZqQjtBQUdFLGNBQVEsT0FBSzFGLEtBQUwsQ0FBV29DO0FBSHJCLE1BRHFCO0FBQUEsRzs7a0JBbFNKdEMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCAnLi9kYXRlLWlucHV0LnNjc3MnO1xuXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxuY29uc3QgRk9STUFUUyA9IHtcbiAgVVRDOiAnVVRDJyxcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXG4gIERBVEVfT0JKRUNUOiAnREFURV9PQkpFQ1QnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgXSksXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuX0dCJyxcbiAgICBvbkNoYW5nZSgpIHtcbiAgICB9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcblxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0KSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxuICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgICAgb25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIGlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUlucHV0Qmx1ciA9ICgpID0+IHtcbiAgICB0aGlzLnByZXR0aWZ5SW5wdXREYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSwgbW9kaWZpZXJzID0ge30pID0+IHtcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIHZhbHVlLCB0aW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRheSk7XG5cbiAgICBsZXQgdGltZUFkanVzdGVkRGF0ZSA9IG51bGw7XG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XG4gICAgY29uc3QgY3VycmVudEhvdXJzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdob3VyJyk7XG4gICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ21pbnV0ZScpO1xuXG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIC8vIFNldCBjdXJyZW50IChwcmV2aW91c2x5IHNlbGVjdGVkKSB0aW1lIHRvIG5ld2x5IHBpY2tlZCBkYXRlXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZVxuICAgICAgICAuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKVxuICAgICAgICAuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gbmV3VGltZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlclxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XG4gICAgLz5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3RlZERheXMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWNhbGVuZGFyYH1cbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgIG1vbnRoPXt0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aH1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RpbWUgJiZcbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cbiAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XG4gICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==