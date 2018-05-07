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

    var momentDate = (0, _moment2.default)(props.value, _moment2.default.ISO_8601);

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
    return _this;
  }

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

    var momentDate = typeof date === 'string' ? (0, _moment2.default)(date, dateFormat) : date;
    var removeInvisibleChars = function removeInvisibleChars(str) {
      return str.replace(/\u200E/g, '');
    };
    if (!momentDate.isValid() || !date) return '';

    switch (type) {
      case FORMATS.PRETTY_DATE:
        return removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return removeInvisibleChars(momentDate.format());
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
    if ((0, _moment2.default)(inputDate, _this3.props.dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
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
    var momentObj = (0, _moment2.default)(day);
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
    var momentDate = (0, _moment2.default)(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJ2YWx1ZSIsIklTT184NjAxIiwic3RhdGUiLCJzaG93T3ZlcmxheSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNob3dXZWVrTnVtYmVycyIsIm90aGVyUHJvcHMiLCJ0byIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImhhbmRsZUNvbnRhaW5lck1vdXNlRG93biIsImhhbmRsZURheUNsaWNrIiwiaXNTYW1lRGF5IiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9EYXRlIiwic2V0VGltZW91dCIsImUiLCJzZXRTdGF0ZSIsInNob3dNb250aCIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsInRhcmdldCIsImlzVmFsaWRGb3JtYXQiLCJkYXkiLCJtb21lbnRP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LFFBQVFFLFdBQWhDO0FBSEMsS0FBZCxFQUlHLFlBQU07QUFDUCxhQUFLRyxLQUFMLENBQVcyQyxRQUFYLENBQW9CLE9BQUtwQyxPQUFMLENBQWF1RCxTQUFiLEVBQXdCbkUsUUFBUUMsR0FBaEMsQ0FBcEI7QUFDQSxhQUFLb0IsS0FBTCxDQUFXK0MsSUFBWDtBQUNELEtBUEQ7QUFRRCxHOztPQU1EdkIsc0IsR0FBeUIsVUFBQ0ksSUFBRCxFQUFVO0FBQ2pDLFFBQU0zQyxhQUFhLHNCQUFPMkMsSUFBUCxDQUFuQjtBQUNBLFdBQUtVLFFBQUwsQ0FBYztBQUNaOUMsaUJBQVcsT0FBS0QsT0FBTCxDQUFhTixVQUFiLEVBQXlCTixRQUFRRSxXQUFqQztBQURDLEtBQWQsRUFFRyxZQUFNO0FBQ1AsYUFBS0csS0FBTCxDQUFXMkMsUUFBWCxDQUFvQkMsSUFBcEI7QUFDRCxLQUpEO0FBS0QsRzs7T0FPREwsUyxHQUFZO0FBQUEsV0FBTywwQkFBVUEsU0FBVixDQUFvQixPQUFLbkMsS0FBTCxDQUFXRSxXQUEvQixFQUE0Q3VELEdBQTVDLENBQVA7QUFBQSxHOztPQVFaRCxhLEdBQWdCLFVBQUNoQixJQUFELEVBQVU7QUFDeEIsUUFBSW9CLFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUtoRSxLQUFMLENBQVd5QixJQUFmLEVBQXFCdUMsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWFyQixLQUFLc0IsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztrQkF6TGtCbkUsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7XG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50KHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBnZXREYXRlID0gKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQgPSB0aGlzLnByb3BzLmRhdGVGb3JtYXQpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50KGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ29udGFpbmVyTW91c2VEb3duID0gKCkgPT4ge1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XG4gICAgLy8gVGhlIGlucHV0J3Mgb25CbHVyIG1ldGhvZCBpcyBjYWxsZWQgZnJvbSBhIHF1ZXVlIHJpZ2h0IGFmdGVyIG9uTW91c2VEb3duIGV2ZW50LlxuICAgIC8vIHNldFRpbWVvdXQgYWRkcyBhbm90aGVyIGNhbGxiYWNrIGluIHRoZSBxdWV1ZSwgYnV0IGlzIGNhbGxlZCBsYXRlciB0aGFuIG9uQmx1ciBldmVudFxuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSB0aGlzLmNsaWNrZWRJbnNpZGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheSxcbiAgICB9KTtcbiAgICAvLyBGb3JjZSBpbnB1dCdzIGZvY3VzIGlmIGJsdXIgZXZlbnQgd2FzIGNhdXNlZCBieSBjbGlja2luZyBvbiB0aGUgY2FsZW5kYXJcbiAgICBpZiAoc2hvd092ZXJsYXkpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQoaW5wdXREYXRlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxuICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQykpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZSkgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XG4gICAgY29uc3QgbW9tZW50T2JqID0gbW9tZW50KGRheSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuVVRDKSk7XG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQoZGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUNvbnRhaW5lck1vdXNlRG93bn1cbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e3RoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHt0aW1lICYmXG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=