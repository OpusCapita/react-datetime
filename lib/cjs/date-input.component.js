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
    var month = this.state.dayPickerVisibleMonth || typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay;

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
          month: month,
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
  showOverlay: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQXVDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV04sTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9JLFFBQS9CLENBQW5CO0FBQ0EsYUFBTztBQUNMSCxtQkFBV0osTUFB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QVdvQztBQUhyQixNQURxQjtBQUFBLEc7O2tCQXJTSnRDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xyXG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xyXG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XHJcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcclxuXHJcbi8vIEFwcCBpbXBvcnRzXHJcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9kYXRlLWlucHV0LnNjc3MnO1xyXG5cclxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcclxuY29uc3QgRk9STUFUUyA9IHtcclxuICBVVEM6ICdVVEMnLFxyXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxyXG4gIERBVEVfT0JKRUNUOiAnREFURV9PQkpFQ1QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcclxuICAgIF0pLFxyXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWludXRlc0ludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2YWx1ZTogJycsXHJcbiAgICBkYXRlRm9ybWF0OiAnTCcsXHJcbiAgICBsb2NhbGU6ICdlbl9HQicsXHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRheUNsaWNrOiAoKSA9PiB7fSxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgaW5wdXRSZWYoKSB7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxyXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxyXG4gICAgdGltZTogZmFsc2UsXHJcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgcHJvcHMudmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xyXG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXN0VmFsdWU6IHByb3BzLnZhbHVlLFxyXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcclxuICAgICAgICBzaG93T3ZlcmxheTogcHJvcHMuc2hvd092ZXJsYXkgfHwgc3RhdGUuc2hvd092ZXJsYXksXHJcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXHJcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxyXG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxyXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXHJcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxyXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XHJcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XHJcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xyXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgTG9jYWxlVXRpbHMsXHJcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XHJcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxyXG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXHJcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0Qmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XHJcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRheSk7XHJcblxyXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xyXG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XHJcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcclxuXHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxyXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZVxyXG4gICAgICAgIC5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpXHJcbiAgICAgICAgLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcclxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXHJcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZERheTogZGF5LFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIG5ld1RpbWVcclxuICAgKi9cclxuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcblxyXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxyXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XHJcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xyXG4gIH07XHJcblxyXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcclxuICAgIDxZZWFyTW9udGhQaWNrZXJcclxuICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxyXG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICBpbnB1dFJlZixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHNlbGVjdGVkRGF5cyxcclxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxyXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXHJcbiAgICAgIC4uLm90aGVyUHJvcHNcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICBjb25zdCB0aW1lT2JqID0ge1xyXG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcclxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcclxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XHJcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxyXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcclxuICAgICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxyXG4gICAgICAgICAgfV19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XHJcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXlQaWNrZXJcclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XHJcbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxyXG4gICAgICAgICAgICBtb250aD17bW9udGh9XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RpbWUgJiZcclxuICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XHJcbiAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==