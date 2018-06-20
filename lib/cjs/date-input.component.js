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
    if (props.value !== state.lastValue) {
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
    _this.focused = false;
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
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'showWeekNumbers', 'minutesInterval']);

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
          onFocus: this.handleInputFocus
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
        _react2.default.createElement(_reactDayPicker2.default, _extends({
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

  this.getFirstDayOfWeek = function () {
    return _moment2.default.localeData(_this3.props.locale).firstDayOfWeek();
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
    _this3.setState({
      dayPickerVisibleMonth: val
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwic2hvd092ZXJsYXkiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJmb2N1c2VkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImRheVBpY2tlclZpc2libGVNb250aCIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztZQTZCWkMsd0IscUNBQXlCQyxLLEVBQU9DLEssRUFBTztBQUM1QyxRQUFJRCxNQUFNRSxLQUFOLEtBQWdCRCxNQUFNRSxTQUExQixFQUFxQztBQUNuQyxVQUFNQyxhQUFhLGlCQUFPQyxHQUFQLENBQVdMLE1BQU1FLEtBQWpCLEVBQXdCLGlCQUFPSSxRQUEvQixDQUFuQjtBQUNBLGFBQU87QUFDTEgsbUJBQVdILE1BQU1FLEtBRFo7QUFFTEsscUJBQWFULFVBQVVVLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCVixRQUFRRyxXQUF0QyxDQUZSO0FBR0xZLG1CQUFXWCxVQUFVVSxPQUFWLENBQWtCSixVQUFsQixFQUE4QlYsUUFBUUUsV0FBdEMsRUFBbURJ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S0FBTCxDQUFXOEQsUUFBWCxDQUFvQmhFLFVBQVVVLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCVixRQUFRQyxHQUF0QyxFQUEyQ2UsVUFBM0MsQ0FBcEI7QUFDRCxLQUpEO0FBS0QsRzs7T0FNRDZFLHFCLEdBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQixXQUFLckIsUUFBTCxDQUFjO0FBQ1pWLDZCQUF1QitCO0FBRFgsS0FBZDtBQUdELEc7O09BT0RoQyxTLEdBQVk7QUFBQSxXQUFPLDBCQUFVQSxTQUFWLENBQW9CLE9BQUt2RCxLQUFMLENBQVdNLFdBQS9CLEVBQTRDb0UsR0FBNUMsQ0FBUDtBQUFBLEc7O09BUVpELGEsR0FBZ0IsVUFBQy9ELElBQUQsRUFBVTtBQUN4QixRQUFJOEUsVUFBVSwyQ0FBZDtBQUNBLFFBQUksT0FBS3pGLEtBQUwsQ0FBV3NDLElBQWYsRUFBcUJtRCxVQUFVLHVFQUFWO0FBQ3JCLFdBQU9BLFFBQVFDLElBQVIsQ0FBYS9FLEtBQUtnRixJQUFMLEVBQWIsQ0FBUDtBQUNELEc7O09BT0RqQyxvQixHQUF1QjtBQUFBLFFBQUcvQyxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUNyQjtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLNEUscUJBRmpCO0FBR0UsY0FBUSxPQUFLdkYsS0FBTCxDQUFXcUM7QUFIckIsTUFEcUI7QUFBQSxHOztrQkF2UUp2QyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBvbkNoYW5nZSgpIHtcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMudmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGNvbnN0IHJlbW92ZUludmlzaWJsZUNoYXJzID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG5cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICB0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3Qgb2YgdGhlIHdlZWsgYmFzZWQgb24gbG9jYWxlICh1c2VkIGJ5IERheVBpY2tlcilcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEZpcnN0RGF5T2ZXZWVrID0gKCkgPT4gbW9tZW50LmxvY2FsZURhdGEodGhpcy5wcm9wcy5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xuXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcblxuICAgIGlmICh0aW1lKSB7XG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGVcbiAgICAgICAgLnNldCgnaG91cicsIGN1cnJlbnRIb3VycylcbiAgICAgICAgLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gbmV3VGltZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyXG4gICAgICBkYXRlPXtkYXRlfVxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxuICAgICAgbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX1cbiAgICAvPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICBjb25zdCB0aW1lT2JqID0ge1xuICAgICAgaG91cjogbW9tZW50RGF0ZS5ob3VyKCksXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcbiAgICAgICAgY29uc3RyYWludHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgICBwaW46IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3dpbmRvdycsXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICAgIH1dfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fWB9XG4gICAgICA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0RGF0ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXt0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgbW9udGg9e3RoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRofVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RpbWUgJiZcbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cbiAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XG4gICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==