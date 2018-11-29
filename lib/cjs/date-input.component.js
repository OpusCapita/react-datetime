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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJJU09fODYwMSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJtb3VzZUNsaWNrZWRPbkNvbnRhaW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzZWxlY3RlZERheXMiLCJzaG93V2Vla051bWJlcnMiLCJtaW51dGVzSW50ZXJ2YWwiLCJvdGhlclByb3BzIiwidGltZU9iaiIsImhvdXIiLCJtaW51dGUiLCJtb250aCIsImRheVBpY2tlclZpc2libGVNb250aCIsInVuZGVmaW5lZCIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24iLCJpc1NhbWVEYXkiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwib25EYXlDbGljayIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNob3dNb250aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQ0FBQTs7O0FBVUE7OztBQVRBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxVQUFVO0FBQ2RDLE9BQUssS0FEUztBQUVkQyxlQUFhLGFBRkM7QUFHZEMsZUFBYTtBQUhDLENBQWhCOztJQU1xQkMsUzs7O1lBd0NaQyx3QixxQ0FBeUJDLEssRUFBT0MsSyxFQUFPO0FBQzVDLFFBQUksQ0FBQ0EsTUFBTUMsV0FBUCxJQUFzQkYsTUFBTUcsS0FBTixLQUFnQkYsTUFBTUcsU0FBaEQsRUFBMkQ7QUFDekQsVUFBTUMsYUFBYSxpQkFBT0MsR0FBUCxDQUFXTixNQUFNRyxLQUFq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S3lGLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7T0FFRHBCLGlCLEdBQW9CLFlBQU07QUFBQSxrQkFDTSxPQUFLakYsS0FEWDtBQUFBLFFBQ2hCRyxLQURnQixXQUNoQkEsS0FEZ0I7QUFBQSxRQUNUUSxVQURTLFdBQ1RBLFVBRFM7O0FBRXhCLFFBQU1OLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQixpQkFBT0ksUUFBekIsQ0FBbkI7QUFDQSxXQUFLa0UsUUFBTCxDQUFjO0FBQ1ovRCxpQkFBV1osVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFFLFdBQXRDLEVBQW1EZSxVQUFuRDtBQURDLEtBQWQ7QUFHRCxHOztPQU9EbUQsb0IsR0FBdUI7QUFBQSxRQUFHbEQsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckI7QUFDRSxZQUFNQSxJQURSO0FBRUUsZ0JBQVUsT0FBS2tGLHFCQUZqQjtBQUdFLGNBQVEsT0FBSzlGLEtBQUwsQ0FBV3FDO0FBSHJCLE1BRHFCO0FBQUEsRzs7a0JBclVKdkMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XHJcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XHJcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcclxuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XHJcblxyXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxyXG5jb25zdCBGT1JNQVRTID0ge1xyXG4gIFVUQzogJ1VUQycsXHJcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXHJcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgXSksXHJcbiAgICBzaG93T3ZlcmxheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcclxuICAgIGxvY2FsZTogJ2VuLUdCJyxcclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgfSxcclxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHtcclxuICAgIH0sXHJcbiAgICBpbnB1dFByb3BzOiB7fSxcclxuICAgIGlucHV0UmVmKCkge1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcclxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcclxuICAgIHRpbWU6IGZhbHNlLFxyXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHByb3BzLnZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcclxuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFzdFZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXHJcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxyXG4gICAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxyXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cclxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcclxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xyXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcclxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xyXG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xyXG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcclxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cclxuICAgICAgbGFzdFZhbHVlOiBudWxsLFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxyXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIExvY2FsZVV0aWxzLFxyXG4gICAgICB7XHJcbiAgICAgICAgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKClcclxuICAgICAgICAgIC5maXJzdERheU9mV2VlaygpLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcclxuXHJcbiAgICAvLyBVc2VkIGluIG9uQmx1ciBoYW5kbGVyIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBibHVyIGhhcHBlbmVkIGJlY2F1c2Ugb2YgYSBjbGlja1xyXG4gICAgLy8gb24gdGhlIG92ZXJsYXlcclxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSlcclxuICAgIC5maXJzdERheU9mV2VlaygpO1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cclxuICAgKi9cclxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcclxuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XHJcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpXHJcbiAgICAgIC5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXHJcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0Qmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcclxuXHJcbiAgICAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBvdmVybGF5IG9uIGJsdXIsIHVubGVzcyBpdCB3YXMgY2F1c2VkIGJ5IGEgY2xpY2sgb24gdGhlIGNhbGVuZGFyXHJcbiAgICAvLyBvdmVybGF5XHJcbiAgICBpZiAoIXRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xyXG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xyXG5cclxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcclxuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpXHJcbiAgICAgIC51dGMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xyXG4gICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ21pbnV0ZScpO1xyXG5cclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIC8vIFNldCBjdXJyZW50IChwcmV2aW91c2x5IHNlbGVjdGVkKSB0aW1lIHRvIG5ld2x5IHBpY2tlZCBkYXRlXHJcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlXHJcbiAgICAgICAgLnNldCgnaG91cicsIGN1cnJlbnRIb3VycylcclxuICAgICAgICAuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxyXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcclxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcclxuICAgKiBAcGFyYW0gbmV3VGltZVxyXG4gICAqL1xyXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xyXG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xyXG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcclxuXHJcbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgIC5tb250aCh2YWwuZ2V0TW9udGgoKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcclxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcclxuICB9O1xyXG5cclxuICBwcmV0dGlmeUlucHV0RGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cclxuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxyXG4gICAgPFllYXJNb250aFBpY2tlclxyXG4gICAgICBkYXRlPXtkYXRlfVxyXG4gICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9XHJcbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxvY2FsZSxcclxuICAgICAgdGltZSxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGlucHV0UHJvcHMsXHJcbiAgICAgIGlucHV0UmVmLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgc2VsZWN0ZWREYXlzLFxyXG4gICAgICBzaG93V2Vla051bWJlcnMsXHJcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcclxuICAgICAgLi4ub3RoZXJQcm9wc1xyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgIGNvbnN0IHRpbWVPYmogPSB7XHJcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxyXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9udGggPSB0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aCB8fFxyXG4gICAgICAoKHR5cGVvZiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5ID09PSAnc3RyaW5nJykgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XHJcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxyXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcclxuICAgICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxyXG4gICAgICAgICAgfV19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XHJcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXlQaWNrZXJcclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XHJcbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxyXG4gICAgICAgICAgICBtb250aD17bW9udGh9XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RpbWUgJiZcclxuICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XHJcbiAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==