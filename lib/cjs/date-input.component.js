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
    _this.clickedInside = false;
    _this.clickTimeout = null;
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
    clearTimeout(this.clickTimeout);
  };

  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
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
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur
        }))
      ),
      this.state.showOverlay && _react2.default.createElement(
        'div',
        {
          onMouseDown: this.handleContainerMouseDown,
          role: 'presentation',
          className: classPrefix + '-calendar'
        },
        _react2.default.createElement(_reactDayPicker2.default, _extends({
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: this.isSameDay,
          localeUtils: this.localeUtils,
          showWeekNumbers: showWeekNumbers,
          locale: locale
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

  this.handleContainerMouseDown = function () {
    _this3.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    _this3.clickTimeout = setTimeout(function () {
      _this3.clickedInside = false;
    }, 0);
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
    if (_this3.props.inputProps.onFocus) {
      _this3.props.inputProps.onFocus(e);
    }
  };

  this.handleInputBlur = function (e) {
    var showOverlay = _this3.clickedInside;
    _this3.focused = false;

    _this3.setState({
      showOverlay: showOverlay
    });
    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      _this3.input.focus();
    }
    if (_this3.props.inputProps.onBlur) {
      _this3.props.inputProps.onBlur(e);
    }
  };

  this.handleInputChange = function (e) {
    var inputDate = e.target.value;
    _this3.setState({ inputDate: inputDate });
    // This fires only if the new date is valid in given format
    if (_moment2.default.utc(inputDate, _this3.props.dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
      _this3.setState({
        selectedDay: _this3.getDate(inputDate, FORMATS.DATE_OBJECT)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
      });
      _this3.props.onChange(_this3.getDate(inputDate, FORMATS.UTC));
      if (_this3.props.inputProps.onChange) _this3.props.inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      _this3.props.onChange(null);
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

  this.isSameDay = function (day) {
    return _reactDayPicker.DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwic3RhdGUiLCJzaG93T3ZlcmxheSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0IiwiZm9jdXNlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzaG93V2Vla051bWJlcnMiLCJvdGhlclByb3BzIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsImRhdGUiLCJ0eXBlIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJzdHIiLCJyZXBsYWNlIiwiaXNWYWxpZCIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwidG9EYXRlIiwic2V0VGltZW91dCIsImUiLCJzaG93TW9udGgiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJ0YXJnZXQiLCJpc1ZhbGlkRm9ybWF0IiwiZGF5IiwibW9tZW50T2JqIiwiYmx1ciIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQ0FBQTs7O0FBVUE7OztBQVRBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztBQTJCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBR2pCLFFBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0YsTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9DLFFBQS9CLENBQW5COztBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxLQURGO0FBRVg7QUFDQUMsbUJBQWEsTUFBS0MsT0FBTCxDQUFhUCxVQUFiLEVBQXlCTixRQUFRRyxXQUFqQyxDQUhGO0FBSVg7QUFDQVcsaUJBQVcsTUFBS0QsT0FBTCxDQUFhUCxVQUFiLEVBQXlCTixRQUFRRSxXQUFqQyxFQUE4Q0csTUFBTVUsVUFBcEQ7QUFMQSxLQUFiOztBQVFBLFVBQUtDLFdBQUwsR0FBbUJDLE9BQU9DLE1BQVAsbUJBRWpCLEVBQUVDLG1CQUFtQjtBQUFBLGVBQU0saUJBQU9DLFVBQVAsR0FBb0JDLGNBQXBCLEVBQU47QUFBQSxPQUFyQixFQUZpQixDQUFuQjtBQUlBLFVBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFyQmlC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RSxXQUFqQztBQURDLEtBQWQsRUFFRyxZQUFNO0FBQ1AsYUFBS0csS0FBTCxDQUFXZ0QsUUFBWCxDQUFvQkMsSUFBcEI7QUFDRCxLQUpEO0FBS0QsRzs7T0FPREwsUyxHQUFZO0FBQUEsV0FBTywwQkFBVUEsU0FBVixDQUFvQixPQUFLdkMsS0FBTCxDQUFXRSxXQUEvQixFQUE0QzJELEdBQTVDLENBQVA7QUFBQSxHOztPQVFaRCxhLEdBQWdCLFVBQUNoQixJQUFELEVBQVU7QUFDeEIsUUFBSW9CLFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUtyRSxLQUFMLENBQVc4QixJQUFmLEVBQXFCdUMsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWFyQixLQUFLc0IsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztrQkExTWtCeEUsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoYW5nZSB0aGlzIG9uZSB0byBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgQVNBUFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIElmIHZhbHVlIGNoYW5nZXMgd2hlbiBpbnB1dCBpcyBibHVycmVkXG4gICAgaWYgKCF0aGlzLmZvY3VzZWQgJiYgbmV4dFByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMobmV4dFByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIG5leHRQcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgZ2V0RGF0ZSA9IChkYXRlLCB0eXBlLCBkYXRlRm9ybWF0ID0gdGhpcy5wcm9wcy5kYXRlRm9ybWF0KSA9PiB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGNvbnN0IHJlbW92ZUludmlzaWJsZUNoYXJzID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNvbnRhaW5lck1vdXNlRG93biA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSB0cnVlO1xuICAgIC8vIFRoZSBpbnB1dCdzIG9uQmx1ciBtZXRob2QgaXMgY2FsbGVkIGZyb20gYSBxdWV1ZSByaWdodCBhZnRlciBvbk1vdXNlRG93biBldmVudC5cbiAgICAvLyBzZXRUaW1lb3V0IGFkZHMgYW5vdGhlciBjYWxsYmFjayBpbiB0aGUgcXVldWUsIGJ1dCBpcyBjYWxsZWQgbGF0ZXIgdGhhbiBvbkJsdXIgZXZlbnRcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCBzaG93T3ZlcmxheSA9IHRoaXMuY2xpY2tlZEluc2lkZTtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXksXG4gICAgfSk7XG4gICAgLy8gRm9yY2UgaW5wdXQncyBmb2N1cyBpZiBibHVyIGV2ZW50IHdhcyBjYXVzZWQgYnkgY2xpY2tpbmcgb24gdGhlIGNhbGVuZGFyXG4gICAgaWYgKHNob3dPdmVybGF5KSB7XG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDKSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXkpID0+IHtcbiAgICBjb25zdCBtb21lbnRPYmogPSBtb21lbnQudXRjKGRheSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuVVRDKSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W3tcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgfV19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVDb250YWluZXJNb3VzZURvd259XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXt0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19