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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQXVDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV04sTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9JLFFBQS9CLENBQW5CO0FBQ0EsYUFBTztBQUNMSCxtQkFBV0osTUFB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QVdvQztBQUhyQixNQURxQjtBQUFBLEc7O2tCQXJTSnRDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIF0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbG9jYWxlOiAnZW5fR0InLFxuICAgIG9uQ2hhbmdlKCkge1xuICAgIH0sXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgTG9jYWxlVXRpbHMsXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xuICAgIGlmIChtb2RpZmllcnMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlXG4gICAgICAgIC5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpXG4gICAgICAgIC5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG5cbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpLm1vbnRoKHZhbC5nZXRNb250aCgpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcHJldHRpZnlJbnB1dERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyXG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxuICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cbiAgICAvPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNlbGVjdGVkRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICBjb25zdCB0aW1lT2JqID0ge1xuICAgICAgaG91cjogbW9tZW50RGF0ZS5ob3VyKCksXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXG4gICAgfTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfV19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aW1lICYmXG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICB0aW1lPXt0aW1lT2JqfVxuICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XG4gICAgICAgICAgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=