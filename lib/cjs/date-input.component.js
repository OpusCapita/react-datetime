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

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);

    _this.state = {
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: _this.getDate(momentDate, FORMATS.DATE_OBJECT),
      // inputDate: Prettified string shown in input field
      inputDate: _this.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
    };

    _this.localeUtils = Object.assign(_moment4.default, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
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
      var momentDate = _moment2.default.utc(nextProps.value, _moment2.default.ISO_8601);
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

  this.getDate = function (date, type) {
    var dateFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this3.props.dateFormat;

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
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (modifiers.disabled) {
      return;
    }
    var momentObj = _moment2.default.utc(day);
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
    var momentDate = _moment2.default.utc(_this3.props.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJMb2NhbGVVdGlscyIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJmb2N1c2VkIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsInRvIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImRheVBpY2tlclZpc2libGVNb250aCIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsImRheSIsIm1vZGlmaWVycyIsIm1vbWVudE9iaiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsIkRhdGVVdGlscyIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQ0FBQTs7O0FBVUE7OztBQVRBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxVQUFVO0FBQ2RDLE9BQUssS0FEUztBQUVkQyxlQUFhLGFBRkM7QUFHZEMsZUFBYTtBQUhDLENBQWhCOztJQU1xQkMsUzs7O0FBNkJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFHakIsUUFBTUMsYUFBYUMsaUJBQU9DLEdBQVAsQ0FBV0gsTUFBTUksS0FBakIsRUFBd0JGLGlCQUFPRyxRQUEvQixDQUFuQjtBQUNBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEtBREY7QUFFWDtBQUNBQyxtQkFBYSxNQUFLQyxPQUFMLENBQWFWLFVBQWIsRUFBeUJOLFFBQVFHLFdBQWpDLENBSEY7QUFJWDtBQUNBYyxpQkFBVyxNQUFLRCxPQUFMLENBQWFWLFVBQWIsRUFBeUJOLFFBQVFFLFdBQWpD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QUFBQSxHOztrQkFuUEpqQyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBvbkNoYW5nZSgpIHtcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgTG9jYWxlVXRpbHMsXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hhbmdlIHRoaXMgb25lIHRvIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBBU0FQXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gSWYgdmFsdWUgY2hhbmdlcyB3aGVuIGlucHV0IGlzIGJsdXJyZWRcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCAmJiBuZXh0UHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhuZXh0UHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgbmV4dFByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIGdldERhdGUgPSAoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCA9IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICAgIG9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDKSk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkgaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb21lbnRPYmogPSBtb21lbnQudXRjKGRheSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuVVRDKSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIG5ld1RpbWVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQykpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXJcbiAgICAgIGRhdGU9e2RhdGV9XG4gICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9XG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxuICAgIC8+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgbWludXRlc0ludGVydmFsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W3tcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgfV19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWNhbGVuZGFyYH1cbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17dGhpcy5pc1NhbWVEYXl9XG4gICAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgICBtb250aD17dGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGh9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxuICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3RpbWUgJiZcbiAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XG4gICAgICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XG4gICAgICAgICAgICAgIC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=