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
          locale: locale,
          captionElement: this.renderCaptionElement
        }, otherProps)),
        time && _react2.default.createElement(_timePicker2.default, {
          onChange: this.handleTimePickerChange,
          value: value
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

  this.handleTimePickerChange = function (date) {
    var momentDate = _moment2.default.utc(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiZm9jdXNlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzaG93V2Vla051bWJlcnMiLCJvdGhlclByb3BzIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZURheUNsaWNrIiwiaXNTYW1lRGF5IiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsImRheSIsIm1vbWVudE9iaiIsImJsdXIiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztBQTJCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBR2pCLFFBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0YsTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9DLFFBQS9CLENBQW5CO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2Qjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsS0FERjtBQUVYO0FBQ0FDLG1CQUFhLE1BQUtDLE9BQUwsQ0FBYVQsVUFBYixFQUF5Qk4sUUFBUUcsV0FBakMsQ0FIRjtBQUlYO0FBQ0FhLGlCQUFXLE1BQUtELE9BQUwsQ0FBYVQsVUFBYixFQUF5Qk4sUUFBUUUsV0FBakMsRUFBOENHLE1BQU1ZLFVBQXBEO0FBTEEsS0FBYjs7QUFRQSxVQUFLQyxXQUFMLEdBQW1CQyxPQUFPQyxNQUFQLG1CQUVqQixFQUFFQyxtQkFBbUI7QUFBQSxlQUFNLGlCQUFPQyxVQUFQLEdBQW9CQyxjQUFwQixF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UUFBR0EsSUFBSDtBQUFBLFdBQ3JCO0FBQ0UsWUFBTUEsSUFEUjtBQUVFLGdCQUFVLE9BQUttQixxQkFGakI7QUFHRSxjQUFRLE9BQUsxRSxLQUFMLENBQVc4QjtBQUhyQixNQURxQjtBQUFBLEc7O2tCQXZPSi9CLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgTG9jYWxlVXRpbHMsXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hhbmdlIHRoaXMgb25lIHRvIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBBU0FQXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gSWYgdmFsdWUgY2hhbmdlcyB3aGVuIGlucHV0IGlzIGJsdXJyZWRcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCAmJiBuZXh0UHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhuZXh0UHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgbmV4dFByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIGdldERhdGUgPSAoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCA9IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cbiAgICovXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZSh0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQykpO1xuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIGlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XG4gICAgY29uc3QgbW9tZW50T2JqID0gbW9tZW50LnV0YyhkYXkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudE9iaiwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlVUQykpO1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGF0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlclxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XG4gICAgLz5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17dGhpcy5pc1NhbWVEYXl9XG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgIG1vbnRoPXt0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aH1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19