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
    var month = this.state.dayPickerVisibleMonth || (typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay);

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
  locale: 'en-GB',
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

    var momentDate = value ? _moment2.default.utc(value, _moment2.default.ISO_8601) : _moment2.default.utc();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQXVDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNBQWhELEVBQTJEO0FBQ3pELFVBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV04sTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9JLFFBQS9CLENBQW5CO0FBQ0EsYUFBTztBQUNMSCxtQkFBV0osTUFBTUcsS0FEWjtBQUVMSyxxQkFBYVYsVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFHLFdBQXRDLENBRlI7QUFHTEsscUJBQWFGLE1BQU1FLFdBQU4sSUFBcUJELE1BQU1DLFdBSG5DO0FBSUxRLG1CQUFXWixVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QlgsUUFBUUUsV0FBdEMsRUFBbURJLE1BQU1XLFVBQXpEO0FBSk4sT0FBUDtBQU1EO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7QUFFRDs7Ozs7Ozs7OztZQVFPRixPLG9CQUFRRyxJLEVBQU1DLEksRUFBTUYsVSxFQUFZO0FBQ3JDLFFBQU1OLGFBQWEsT0FBT08sSUFBUCxLQUFnQixRQUFoQixHQUEyQixpQkFBT04sR0FBUCxDQUFXTSxJQUFYLEVBQWlCRCxVQUFqQixDQUEzQixHQUEwREMsSUFBN0U7QUFDQSxRQUFNRSx1QkFBdUIsU0FBdkJBLG9CQUF1QjtBQUFBLGFBQU9DLElBQUlDLE9BQUosQ0FBWSxTQUFaLEVBQXVCLEVBQXZCLENBQVA7QUFBQSxLQUE3QjtBQUNBLFFBQUksQ0FBQ1gsV0FBV1ksT0FBWCxFQUFELElBQXlCLENBQUNMLElBQTlCLEVBQW9DLE9BQU8sRUFBUDtBQUNwQyxZQUFRQyxJQUFSO0FBQ0UsV0FBS25CLFFBQVFFLFdBQWI7QUFDRSxlQUFPa0IscUJBQXFCVCxXQUFXYSxNQUFYLENBQWtCUCxVQUFsQixDQUFyQixDQUFQO0FBQ0YsV0FBS2pCLFFBQVFDLEdBQWI7QUFDRSxlQUFPbUIscUJBQXFCVCxXQUFXYyxXQUFYLEVBQXJCLENBQVA7QUFDRixXQUFLekIsUUFBUUcsV0FBYjtBQUNBO0FBQ0UsZUFBT1EsV0FBV2UsTUFBWCxFQUFQO0FBUEo7QUFTRCxHOztBQUVELHFCQUFZcEIsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFHakIsUUFBTUssYUFBYSxpQkFBT0MsR0FBUCxDQUFXTixNQUFNRyxLQUFqQixFQUF3QixpQkFBT0ksUUFBL0IsQ0FBbkI7QUFDQSxVQUFLYyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCOztBQUVBLFVBQUtyQixLQUFMLEdBQWE7QUFDWDtBQUNBRyxpQkFBVyxJQUZBO0FBR1hGLG1CQUFhLEtBSEY7QUFJWDtBQUNBTSxtQkFBYVYsVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFHLFdBQXRDLEVBQW1ERyxNQUFNVyxVQUF6RCxDQUxGO0FBTVg7QUFDQUQsaUJBQVdaLFVBQVVXLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCWCxRQUFRRSxXQUF0QyxFQUFtREksTUFBTVcsVUFBekQ7QUFQQSxLQUFiOztBQVVBLFVBQUtZLFdBQUwsR0FBbUJDLE9BQU9DLE1BQVAsbUJBRWpCLEVBQUVDLG1CQUFtQjtBQUFBLGVBQU0saUJBQU9DLFVBQVAsR0FBb0JDLGNBQXBCLEVBQU47QUFBQSxPQUFyQixFQUZpQixDQUFuQjs7QUFLQSxVQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUF0QmlCO0FBdUJsQjs7c0JBRURDLG9CLG1DQUF1QjtBQUNyQkMsYUFBU0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS1osZUFBM0M7QUFDRCxHOztBQUVEOzs7Ozs7QUFnQkE7Ozs7OztBQU1BOzs7Ozs7QUFvQkE7Ozs7OztBQWFBOzs7Ozs7QUE2QkE7Ozs7OztBQXNDQTs7Ozs7O0FBZ0JBOzs7Ozs7QUFtQkE7Ozs7Ozs7QUFPQTs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7c0JBYUFhLE0scUJBQVM7QUFBQTs7QUFDUCxRQUFNQyxjQUFjLGFBQXBCO0FBQ0E7O0FBRk8saUJBY0gsS0FBS25DLEtBZEY7QUFBQSxRQUlMb0MsTUFKSyxVQUlMQSxNQUpLO0FBQUEsUUFLTEMsSUFMSyxVQUtMQSxJQUxLO0FBQUEsUUFNTGxDLEtBTkssVUFNTEEsS0FOSztBQUFBLFFBT0xtQyxVQVBLLFVBT0xBLFVBUEs7QUFBQSxRQVFMQyxTQVJLLFVBUUxBLFFBUks7QUFBQSxRQVNMQyxRQVRLLFVBU0xBLFFBVEs7QUFBQSxRQVVMQyxZQVZLLFVBVUxBLFlBVks7QUFBQSxRQVdMQyxlQVhLLFVBV0xBLGVBWEs7QUFBQSxRQVlMQyxlQVpLLFVBWUxBLGVBWks7QUFBQSxRQWFGQyxVQWJFOztBQWVQLFFBQU12QyxhQUFhLGlCQUFPQyxHQUFQLENBQVdILEtBQVgsRUFBa0IsaUJBQU9JLFFBQXpCLENBQW5CO0FBQ0EsUUFBTXNDLFVBQVU7QUFDZEMsWUFBTXpDLFdBQVd5QyxJQUFYLEVBRFE7QUFFZEMsY0FBUTFDLFdBQVcwQyxNQUFYO0FBRk0sS0FBaEI7QUFJQSxRQUFNQyxRQUFRLEtBQUsvQyxLQUFMLENBQVdnRCxxQkFBWCxLQUNWLE9BQU8sS0FBS2hELEtBQUwsQ0FBV08sV0FBbEIsS0FBa0MsUUFBbkMsR0FBK0MwQyxTQUEvQyxHQUEyRCxLQUFLakQsS0FBTCxDQUFXTyxXQUQzRCxDQUFkOztBQUdBLFdBQ0U7QUFBQTtBQUFBO0FBQ0Usb0JBQVcsWUFEYjtBQUVFLHFCQUFhLENBQ1g7QUFDRTJDLGNBQUksY0FETjtBQUVFQyxlQUFLO0FBRlAsU0FEVyxFQUtYO0FBQ0VELGNBQUksUUFETjtBQUVFRSxzQkFBWTtBQUZkLFNBTFcsQ0FGZjtBQVdFLHdCQUFjbEI7QUFYaEI7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSxvQkFBVSxrQkFBQ21CLEVBQUQsRUFBUTtBQUNoQixtQkFBS3pCLEtBQUwsR0FBYXlCLEVBQWI7QUFDQWYsc0JBQVNlLEVBQVQ7QUFDRCxXQUxIO0FBTUUsaUJBQU8sS0FBS3JELEtBQUwsQ0FBV1MsU0FOcEI7QUFPRSxvQkFBVThCO0FBUFosV0FRTUYsVUFSTjtBQVNFLG9CQUFVLEtBQUtpQixpQkFUakI7QUFVRSxtQkFBUyxLQUFLQyxnQkFWaEI7QUFXRSxrQkFBUSxLQUFLQztBQVhmO0FBREYsT0FiRjtBQTRCRyxXQUFLeEQsS0FBTCxDQUFXQyxXQUFYLElBQ0Q7QUFBQTtBQUFBO0FBQ0UsZ0JBQUssY0FEUDtBQUVFLHFCQUFjaUMsV0FBZCxjQUZGO0FBR0UsZUFBSyxhQUFDbUIsRUFBRCxFQUFRO0FBQ1gsbUJBQUtJLGlCQUFMLEdBQXlCSixFQUF6QjtBQUNEO0FBTEg7QUFPRSw2RUFDTVYsVUFETjtBQUVFLGVBQUssYUFBQ1UsRUFBRCxFQUFRO0FBQ1gsbUJBQUt4QixTQUFMLEdBQWlCd0IsRUFBakI7QUFDRCxXQUpIO0FBS0Usd0JBQWNiLGdCQUFnQixLQUFLa0IsU0FMckM7QUFNRSx1QkFBYSxLQUFLcEMsV0FOcEI7QUFPRSxpQkFBT3lCLEtBUFQ7QUFRRSwyQkFBaUJOLGVBUm5CO0FBU0UsMEJBQWdCLEtBQUtoQixpQkFBTCxFQVRsQjtBQVVFLGtCQUFRVSxNQVZWO0FBV0UsMEJBQWdCLEtBQUt3QixvQkFYdkI7QUFZRSxzQkFBWSxLQUFLQztBQVpuQixXQVBGO0FBcUJHeEIsZ0JBQ0Q7QUFDRSxvQkFBVSxLQUFLeUIsc0JBRGpCO0FBRUUsZ0JBQU1qQixPQUZSO0FBR0UsMkJBQWlCRjtBQUhuQjtBQXRCRjtBQTdCRixLQURGO0FBNkRELEc7OztFQWpZb0MsZ0JBQU1vQixTLFVBcUJwQ0MsWSxHQUFlO0FBQ3BCN0QsU0FBTyxFQURhO0FBRXBCUSxjQUFZLEdBRlE7QUFHcEJ5QixVQUFRLE9BSFk7QUFJcEI2QixVQUpvQixzQkFJVCxDQUNWLENBTG1COztBQU1wQkMsY0FBWSxzQkFBTSxDQUFFLENBTkE7QUFPcEI1QixjQUFZLEVBUFE7QUFRcEJDLFVBUm9CLHNCQVFULENBQ1YsQ0FUbUI7O0FBVXBCQyxZQUFVLEtBVlU7QUFXcEJDLGdCQUFjLElBWE07QUFZcEJ2QyxlQUFhLEtBWk87QUFhcEJ3QyxtQkFBaUIsSUFiRztBQWNwQkwsUUFBTSxLQWRjO0FBZXBCTSxtQkFBaUI7QUFmRyxDOzs7T0F1RnRCdEIsZSxHQUFrQixVQUFDOEMsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUksQ0FBQyxPQUFLVCxpQkFBVixFQUE2Qjs7QUFFN0I7QUFDQSxRQUFJLENBQUMsT0FBS0EsaUJBQUwsQ0FBdUJVLFFBQXZCLENBQWdDRCxFQUFFRSxNQUFsQyxDQUFELElBQ0YsT0FBS3BFLEtBQUwsQ0FBV0MsV0FEVCxJQUVGaUUsRUFBRUUsTUFBRixLQUFhLE9BQUt4QyxLQUZwQixFQUUyQjtBQUN6QixhQUFLeUMsWUFBTDtBQUNBdEMsZUFBU0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsT0FBS1osZUFBM0M7QUFDRDtBQUNGLEc7O09BTURLLGlCLEdBQW9CO0FBQUEsV0FBTSxpQkFBT0MsVUFBUCxDQUFrQixPQUFLM0IsS0FBTCxDQUFXb0MsTUFBN0IsRUFBcUNSLGNBQXJDLEVBQU47QUFBQSxHOztPQU1wQjRCLGdCLEdBQW1CLFVBQUNXLENBQUQsRUFBTztBQUFBLGlCQUNhLE9BQUtsRSxLQURsQjtBQUFBLFFBQ2hCQyxXQURnQixVQUNoQkEsV0FEZ0I7QUFBQSxRQUNITSxXQURHLFVBQ0hBLFdBREc7OztBQUd4QixXQUFLK0QsUUFBTCxDQUFjO0FBQ1pyRSxtQkFBYTtBQURELEtBQWQsRUFFRyxZQUFNO0FBQ1A7QUFDQXNFLGlCQUFXLFlBQU07QUFDZixZQUFJLENBQUN0RSxXQUFELElBQWdCLE9BQUs0QixTQUFyQixJQUFrQ3RCLFdBQXRDLEVBQW1ELE9BQUtzQixTQUFMLENBQWUyQyxTQUFmLENBQXlCakUsV0FBekI7QUFDcEQsT0FGRDtBQUdELEtBUEQ7O0FBU0F3QixhQUFTMEMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsT0FBS3JELGVBQXhDO0FBQ0EsUUFBSSxPQUFLckIsS0FBTCxDQUFXc0MsVUFBWCxDQUFzQnFDLE9BQTFCLEVBQW1DLE9BQUszRSxLQUFMLENBQVdzQyxVQUFYLENBQXNCcUMsT0FBdEIsQ0FBOEJSLENBQTlCO0FBQ3BDLEc7O09BTURHLFksR0FBZSxVQUFDSCxDQUFELEVBQU87QUFDcEIsV0FBS0ksUUFBTCxDQUFjO0FBQ1pyRSxtQkFBYTtBQURELEtBQWQsRUFFRyxZQUFNO0FBQ1AsVUFBSSxPQUFLRCxLQUFMLENBQVdDLFdBQWYsRUFBNEIsT0FBSzJCLEtBQUwsQ0FBVytDLEtBQVg7QUFDNUIsVUFBSSxPQUFLNUUsS0FBTCxDQUFXc0MsVUFBWCxDQUFzQnVDLE1BQTFCLEVBQWtDLE9BQUs3RSxLQUFMLENBQVdzQyxVQUFYLENBQXNCdUMsTUFBdEIsQ0FBNkJWLENBQTdCO0FBQ25DLEtBTEQ7QUFNRCxHOztPQU1EWixpQixHQUFvQixVQUFDWSxDQUFELEVBQU87QUFDekIsUUFBTXpELFlBQVl5RCxFQUFFRSxNQUFGLENBQVNsRSxLQUEzQjtBQUR5QixrQkFFb0IsT0FBS0gsS0FGekI7QUFBQSxRQUVqQlcsVUFGaUIsV0FFakJBLFVBRmlCO0FBQUEsUUFFTDJCLFVBRkssV0FFTEEsVUFGSztBQUFBLFFBRU8yQixRQUZQLFdBRU9BLFFBRlA7OztBQUl6QixXQUFLTSxRQUFMLENBQWMsRUFBRTdELG9CQUFGLEVBQWQ7QUFDQTtBQUNBLFFBQUksaUJBQU9KLEdBQVAsQ0FBV0ksU0FBWCxFQUFzQkMsVUFBdEIsRUFBa0NNLE9BQWxDLE1BQStDLE9BQUs2RCxhQUFMLENBQW1CcEUsU0FBbkIsQ0FBbkQsRUFBa0Y7QUFDaEYsYUFBSzZELFFBQUwsQ0FBYztBQUNaL0QscUJBQWFWLFVBQVVXLE9BQVYsQ0FBa0JDLFNBQWxCLEVBQTZCaEIsUUFBUUcsV0FBckMsRUFBa0RjLFVBQWxEO0FBREQsT0FBZCxFQUVHLFlBQU07QUFDUDtBQUNBLFlBQUksT0FBS21CLFNBQVQsRUFBb0IsT0FBS0EsU0FBTCxDQUFlMkMsU0FBZixDQUF5QixPQUFLeEUsS0FBTCxDQUFXTyxXQUFwQztBQUNyQixPQUxEO0FBTUF5RCxlQUFTbkUsVUFBVVcsT0FBVixDQUFrQkMsU0FBbEIsRUFBNkJoQixRQUFRQyxHQUFyQyxFQUEwQ2dCLFVBQTFDLENBQVQ7QUFDQSxVQUFJMkIsV0FBVzJCLFFBQWYsRUFBeUIzQixXQUFXMkIsUUFBWCxDQUFvQkUsQ0FBcEI7QUFDMUIsS0FURCxNQVNPO0FBQ0w7QUFDQUYsZUFBUyxJQUFUO0FBQ0Q7QUFDRixHOztPQUVEUixlLEdBQWtCLFlBQU07QUFDdEIsV0FBS3NCLGlCQUFMO0FBQ0QsRzs7T0FNRGxCLGMsR0FBaUIsVUFBQ21CLEdBQUQsRUFBeUI7QUFBQSxRQUFuQkMsU0FBbUIsdUVBQVAsRUFBTzs7QUFDeEMsUUFBSUEsVUFBVXpDLFFBQWQsRUFBd0I7O0FBRGdCLGtCQUdKLE9BQUt4QyxLQUhEO0FBQUEsUUFHaENXLFVBSGdDLFdBR2hDQSxVQUhnQztBQUFBLFFBR3BCUixLQUhvQixXQUdwQkEsS0FIb0I7QUFBQSxRQUdia0MsSUFIYSxXQUdiQSxJQUhhOztBQUl4QyxRQUFNaEMsYUFBYSxpQkFBT0MsR0FBUCxDQUFXMEUsR0FBWCxDQUFuQjs7QUFFQSxRQUFJRSxtQkFBbUIsSUFBdkI7QUFDQSxRQUFNQyxvQkFBb0Isc0JBQU9oRixLQUFQLEVBQWMsaUJBQU9JLFFBQXJCLEVBQStCRCxHQUEvQixFQUExQjtBQUNBLFFBQU04RSxlQUFlRCxrQkFBa0JFLEdBQWxCLENBQXNCLE1BQXRCLENBQXJCO0FBQ0EsUUFBTUMsaUJBQWlCSCxrQkFBa0JFLEdBQWxCLENBQXNCLFFBQXRCLENBQXZCOztBQUVBLFFBQUloRCxJQUFKLEVBQVU7QUFDUjtBQUNBNkMseUJBQW1CN0UsV0FDaEJrRixHQURnQixDQUNaLE1BRFksRUFDSkgsWUFESSxFQUVoQkcsR0FGZ0IsQ0FFWixRQUZZLEVBRUZELGNBRkUsQ0FBbkI7QUFHRCxLQUxELE1BS087QUFDTDtBQUNBO0FBQ0FKLHlCQUFtQjdFLFdBQVdtRixPQUFYLENBQW1CLEtBQW5CLENBQW5CO0FBQ0Q7O0FBRUQsV0FBS2pCLFFBQUwsQ0FBYztBQUNaL0QsbUJBQWF3RSxHQUREO0FBRVo5RSxtQkFBYSxLQUZEO0FBR1pRLGlCQUFXWixVQUFVVyxPQUFWLENBQWtCeUUsZ0JBQWxCLEVBQW9DeEYsUUFBUUUsV0FBNUMsRUFBeURlLFVBQXpEO0FBSEMsS0FBZCxFQUlHLFlBQU07QUFDUCxhQUFLWCxLQUFMLENBQVdpRSxRQUFYLENBQW9CbkUsVUFBVVcsT0FBVixDQUFrQnlFLGdCQUFsQixFQUFvQ3hGLFFBQVFDLEdBQTVDLEVBQWlEZ0IsVUFBakQsQ0FBcEI7QUFDQSxhQUFLa0IsS0FBTCxDQUFXNEQsSUFBWDtBQUNELEtBUEQ7O0FBU0EsV0FBS3pGLEtBQUwsQ0FBV2tFLFVBQVgsQ0FBc0JjLEdBQXRCLEVBQTJCQyxTQUEzQjtBQUNELEc7O09BTURuQixzQixHQUF5QixVQUFDNEIsT0FBRCxFQUFhO0FBQUEsUUFDNUIvRSxVQUQ0QixHQUNiLE9BQUtYLEtBRFEsQ0FDNUJXLFVBRDRCOztBQUVwQyxRQUFJTixhQUFhLGlCQUFPQyxHQUFQLENBQVcsT0FBS04sS0FBTCxDQUFXRyxLQUF0QixDQUFqQjtBQUNBRSxpQkFBYUEsV0FBV3lDLElBQVgsQ0FBZ0I0QyxRQUFRNUMsSUFBeEIsQ0FBYjtBQUNBekMsaUJBQWFBLFdBQVdzRixPQUFYLENBQW1CRCxRQUFRM0MsTUFBM0IsQ0FBYjtBQUNBLFdBQUt3QixRQUFMLENBQWM7QUFDWjdELGlCQUFXWixVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QlgsUUFBUUUsV0FBdEMsRUFBbURlLFVBQW5EO0FBREMsS0FBZCxFQUVHLFlBQU07QUFDUCxhQUFLWCxLQUFMLENBQVdpRSxRQUFYLENBQW9CbkUsVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFDLEdBQXRDLEVBQTJDZ0IsVUFBM0MsQ0FBcEI7QUFDRCxLQUpEO0FBS0QsRzs7T0FNRGlGLHFCLEdBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUFBLGtCQUNELE9BQUs3RixLQURKO0FBQUEsUUFDdkJHLEtBRHVCLFdBQ3ZCQSxLQUR1QjtBQUFBLFFBQ2hCUSxVQURnQixXQUNoQkEsVUFEZ0I7O0FBRS9CLFFBQU1OLGFBQWFGLFFBQVEsaUJBQU9HLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQixpQkFBT0ksUUFBekIsQ0FBUixHQUE2QyxpQkFBT0QsR0FBUCxFQUFoRTs7QUFFQUQsZUFBV3lGLElBQVgsQ0FBZ0JELElBQUlFLFdBQUosRUFBaEIsRUFBbUMvQyxLQUFuQyxDQUF5QzZDLElBQUlHLFFBQUosRUFBekM7O0FBRUEsV0FBS3pCLFFBQUwsQ0FBYztBQUNaN0QsaUJBQVdaLFVBQVVXLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCWCxRQUFRRSxXQUF0QyxFQUFtRGUsVUFBbkQsQ0FEQztBQUVaSCxtQkFBYVYsVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFHLFdBQXRDLEVBQW1EYyxVQUFuRCxDQUZEO0FBR1pzQyw2QkFBdUI0QztBQUhYLEtBQWQsRUFJRyxZQUFNO0FBQ1AsYUFBSzdGLEtBQUwsQ0FBV2lFLFFBQVgsQ0FBb0JuRSxVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QlgsUUFBUUMsR0FBdEMsRUFBMkNnQixVQUEzQyxDQUFwQjtBQUNELEtBTkQ7QUFPRCxHOztPQU9EZ0QsUyxHQUFZO0FBQUEsV0FBTywwQkFBVUEsU0FBVixDQUFvQixPQUFLMUQsS0FBTCxDQUFXTyxXQUEvQixFQUE0Q3dFLEdBQTVDLENBQVA7QUFBQSxHOztPQVFaRixhLEdBQWdCLFVBQUNsRSxJQUFELEVBQVU7QUFDeEIsUUFBSXFGLFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUtqRyxLQUFMLENBQVdxQyxJQUFmLEVBQXFCNEQsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWF0RixLQUFLdUYsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztPQUVEcEIsaUIsR0FBb0IsWUFBTTtBQUFBLGtCQUNNLE9BQUsvRSxLQURYO0FBQUEsUUFDaEJHLEtBRGdCLFdBQ2hCQSxLQURnQjtBQUFBLFFBQ1RRLFVBRFMsV0FDVEEsVUFEUzs7QUFFeEIsUUFBTU4sYUFBYSxpQkFBT0MsR0FBUCxDQUFXSCxLQUFYLEVBQWtCLGlCQUFPSSxRQUF6QixDQUFuQjtBQUNBLFdBQUtnRSxRQUFMLENBQWM7QUFDWjdELGlCQUFXWixVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QlgsUUFBUUUsV0FBdEMsRUFBbURlLFVBQW5EO0FBREMsS0FBZDtBQUdELEc7O09BT0RpRCxvQixHQUF1QjtBQUFBLFFBQUdoRCxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUNyQjtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLZ0YscUJBRmpCO0FBR0UsY0FBUSxPQUFLNUYsS0FBTCxDQUFXb0M7QUFIckIsTUFEcUI7QUFBQSxHOztrQkFyU0p0QyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcclxuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcclxuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xyXG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBBcHAgaW1wb3J0c1xyXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcclxuXHJcbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXHJcbmNvbnN0IEZPUk1BVFMgPSB7XHJcbiAgVVRDOiAnVVRDJyxcclxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcclxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgIFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBdKSxcclxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxyXG4gICAgbG9jYWxlOiAnZW4tR0InLFxyXG4gICAgb25DaGFuZ2UoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXHJcbiAgICBpbnB1dFByb3BzOiB7fSxcclxuICAgIGlucHV0UmVmKCkge1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcclxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcclxuICAgIHRpbWU6IGZhbHNlLFxyXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHByb3BzLnZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcclxuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFzdFZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXHJcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxyXG4gICAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxyXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cclxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcclxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xyXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcclxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xyXG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xyXG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcclxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cclxuICAgICAgbGFzdFZhbHVlOiBudWxsLFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxyXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIExvY2FsZVV0aWxzLFxyXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXHJcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcclxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZmlyc3Qgb2YgdGhlIHdlZWsgYmFzZWQgb24gbG9jYWxlICh1c2VkIGJ5IERheVBpY2tlcilcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEZpcnN0RGF5T2ZXZWVrID0gKCkgPT4gbW9tZW50LmxvY2FsZURhdGEodGhpcy5wcm9wcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXHJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xyXG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcclxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxyXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgb25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxyXG4gICAgICBvbkNoYW5nZShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByZXR0aWZ5SW5wdXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xyXG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xyXG5cclxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xyXG4gICAgY29uc3QgY3VycmVudEhvdXJzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdob3VyJyk7XHJcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XHJcblxyXG4gICAgaWYgKHRpbWUpIHtcclxuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcclxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGVcclxuICAgICAgICAuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKVxyXG4gICAgICAgIC5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXHJcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxyXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vbkRheUNsaWNrKGRheSwgbW9kaWZpZXJzKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxyXG4gICAqIEBwYXJhbSBuZXdUaW1lXHJcbiAgICovXHJcbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModGhpcy5wcm9wcy52YWx1ZSk7XHJcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XHJcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSkgOiBtb21lbnQudXRjKCk7XHJcblxyXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxyXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XHJcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xyXG4gIH07XHJcblxyXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcclxuICAgIDxZZWFyTW9udGhQaWNrZXJcclxuICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxyXG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICBpbnB1dFJlZixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHNlbGVjdGVkRGF5cyxcclxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxyXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXHJcbiAgICAgIC4uLm90aGVyUHJvcHNcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICBjb25zdCB0aW1lT2JqID0ge1xyXG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcclxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcclxuICAgICAgKCh0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycpID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRldGhlckNvbXBvbmVudFxyXG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcclxuICAgICAgICBjb25zdHJhaW50cz17W1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXHJcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcclxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcclxuICAgICAgICAgIH1dfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xyXG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxyXG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGF5UGlja2VyXHJcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxyXG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cclxuICAgICAgICAgICAgbW9udGg9e21vbnRofVxyXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxyXG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aW1lICYmXHJcbiAgICAgICAgICA8VGltZVBpY2tlclxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aW1lPXt0aW1lT2JqfVxyXG4gICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cclxuICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=