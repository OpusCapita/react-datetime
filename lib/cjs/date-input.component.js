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

    _this.localeUtils = Object.assign(_moment4.default, {
      getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
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
        otherProps = _objectWithoutProperties(_props, ['className', 'locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval']);

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
        className: classPrefix + ' ' + className
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
          },
          onMouseDown: this.handleOnOverlayMouseDown
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
  className: '',
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

    // We want to close the overlay on blur, unless it was caused by a click on the calendar
    // overlay
    if (!_this3.mouseClickedOnContainer) {
      _this3.setState({
        showOverlay: false
      });
    }
    _this3.mouseClickedOnContainer = false;
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

  this.handleOnOverlayMouseDown = function (e) {
    if (_this3.calendarContainer.contains(e.target)) {
      _this3.mouseClickedOnContainer = true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsIkxvY2FsZVV0aWxzIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsIm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImNsYXNzTmFtZSIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwidW5kZWZpbmVkIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJEYXRlVXRpbHMiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQTBDWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJLENBQUNBLE1BQU1DLFdBQVAsSUFBc0JGLE1BQU1HLEtBQU4sS0FBZ0JGLE1BQU1HLFNB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U0FBVixDQUFvQixPQUFLL0QsS0FBTCxDQUFXUSxXQUEvQixFQUE0QzZFLEdBQTVDLENBQVA7QUFBQSxHOztPQVFaRixhLEdBQWdCLFVBQUN2RSxJQUFELEVBQVU7QUFDeEIsUUFBSTJGLFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUt4RyxLQUFMLENBQVd5QyxJQUFmLEVBQXFCK0QsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWE1RixLQUFLNkYsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztPQUVEckIsaUIsR0FBb0IsWUFBTTtBQUFBLGtCQUNNLE9BQUtyRixLQURYO0FBQUEsUUFDaEJHLEtBRGdCLFdBQ2hCQSxLQURnQjtBQUFBLFFBQ1RTLFVBRFMsV0FDVEEsVUFEUzs7QUFFeEIsUUFBTVAsYUFBYUMsaUJBQU9DLEdBQVAsQ0FBV0osS0FBWCxFQUFrQkcsaUJBQU9FLFFBQXpCLENBQW5CO0FBQ0EsV0FBS3FFLFFBQUwsQ0FBYztBQUNabEUsaUJBQVdiLFVBQVVZLE9BQVYsQ0FBa0JMLFVBQWxCLEVBQThCWCxRQUFRRSxXQUF0QyxFQUFtRGdCLFVBQW5EO0FBREMsS0FBZDtBQUdELEc7O09BT0RxRCxvQixHQUF1QjtBQUFBLFFBQUdwRCxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUNyQiw4QkFBQyx5QkFBRDtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLcUYscUJBRmpCO0FBR0UsY0FBUSxPQUFLbEcsS0FBTCxDQUFXd0M7QUFIckIsTUFEcUI7QUFBQSxHOztrQkF2VUoxQyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgXSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWludXRlc0ludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuLUdCJyxcbiAgICBvbkNoYW5nZSgpIHtcbiAgICB9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHtcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgcHJvcHMudmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAge1xuICAgICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKVxuICAgICAgICAgIC5maXJzdERheU9mV2VlaygpLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0KSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSlcbiAgICAuZmlyc3REYXlPZldlZWsoKTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KVxuICAgICAgLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSwgbW9kaWZpZXJzID0ge30pID0+IHtcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIHZhbHVlLCB0aW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRheSk7XG5cbiAgICBsZXQgdGltZUFkanVzdGVkRGF0ZSA9IG51bGw7XG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSlcbiAgICAgIC51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlXG4gICAgICAgIC5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpXG4gICAgICAgIC5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gdmFsdWUgPyBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpIDogbW9tZW50LnV0YygpO1xuXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKVxuICAgICAgLm1vbnRoKHZhbC5nZXRNb250aCgpKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICBwcmV0dGlmeUlucHV0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyXG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxuICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cbiAgICAvPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNlbGVjdGVkRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICBjb25zdCB0aW1lT2JqID0ge1xuICAgICAgaG91cjogbW9tZW50RGF0ZS5ob3VyKCksXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXG4gICAgfTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICAoKHR5cGVvZiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5ID09PSAnc3RyaW5nJykgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcbiAgICAgICAgY29uc3RyYWludHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3dpbmRvdycsXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICAgIH1dfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWNhbGVuZGFyYH1cbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHt0aW1lICYmXG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICB0aW1lPXt0aW1lT2JqfVxuICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XG4gICAgICAgICAgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=