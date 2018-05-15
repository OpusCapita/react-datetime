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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwic3RhdGUiLCJzaG93T3ZlcmxheSIsInNlbGVjdGVkRGF5IiwiZ2V0RGF0ZSIsImlucHV0RGF0ZSIsImRhdGVGb3JtYXQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNob3dXZWVrTnVtYmVycyIsIm90aGVyUHJvcHMiLCJ0byIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImhhbmRsZUNvbnRhaW5lck1vdXNlRG93biIsImhhbmRsZURheUNsaWNrIiwiaXNTYW1lRGF5IiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJzZXRUaW1lb3V0IiwiZSIsInNldFN0YXRlIiwic2hvd01vbnRoIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwidGFyZ2V0IiwiaXNWYWxpZEZv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QUFhd0QsR0FERDtBQUVaekQsbUJBQWEsS0FGRDtBQUdaRyxpQkFBVyxPQUFLRCxPQUFMLENBQWF3RCxTQUFiLEVBQXdCckUsUUFBUUUsV0FBaEM7QUFIQyxLQUFkLEVBSUcsWUFBTTtBQUNQLGFBQUtHLEtBQUwsQ0FBVzRDLFFBQVgsQ0FBb0IsT0FBS3BDLE9BQUwsQ0FBYXdELFNBQWIsRUFBd0JyRSxRQUFRQyxHQUFoQyxDQUFwQjtBQUNBLGFBQUtxQixLQUFMLENBQVdnRCxJQUFYO0FBQ0QsS0FQRDtBQVFELEc7O09BTUR4QixzQixHQUF5QixVQUFDSSxJQUFELEVBQVU7QUFDakMsUUFBTTVDLGFBQWEsaUJBQU9DLEdBQVAsQ0FBVzJDLElBQVgsQ0FBbkI7QUFDQSxXQUFLVyxRQUFMLENBQWM7QUFDWi9DLGlCQUFXLE9BQUtELE9BQUwsQ0FBYVAsVUFBYixFQUF5Qk4sUUFBUUUsV0FBakM7QUFEQyxLQUFkLEVBRUcsWUFBTTtBQUNQLGFBQUtHLEtBQUwsQ0FBVzRDLFFBQVgsQ0FBb0JDLElBQXBCO0FBQ0QsS0FKRDtBQUtELEc7O09BT0RMLFMsR0FBWTtBQUFBLFdBQU8sMEJBQVVBLFNBQVYsQ0FBb0IsT0FBS25DLEtBQUwsQ0FBV0UsV0FBL0IsRUFBNEN3RCxHQUE1QyxDQUFQO0FBQUEsRzs7T0FRWkQsYSxHQUFnQixVQUFDakIsSUFBRCxFQUFVO0FBQ3hCLFFBQUlxQixVQUFVLDJDQUFkO0FBQ0EsUUFBSSxPQUFLbEUsS0FBTCxDQUFXMEIsSUFBZixFQUFxQndDLFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFhdEIsS0FBS3VCLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7a0JBekxrQnJFLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xyXG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xyXG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XHJcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcclxuXHJcbi8vIEFwcCBpbXBvcnRzXHJcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XHJcblxyXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxyXG5jb25zdCBGT1JNQVRTID0ge1xyXG4gIFVUQzogJ1VUQycsXHJcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXHJcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2YWx1ZTogJycsXHJcbiAgICBkYXRlRm9ybWF0OiAnTCcsXHJcbiAgICBsb2NhbGU6ICdlbicsXHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgIH0sXHJcbiAgICBpbnB1dFByb3BzOiB7fSxcclxuICAgIGlucHV0UmVmKCkge1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcclxuICAgIHRpbWU6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcclxuICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcclxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxyXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIExvY2FsZVV0aWxzLFxyXG4gICAgICB7IGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkgfSxcclxuICAgICk7XHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcclxuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXHJcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxyXG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxyXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXHJcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxyXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cclxuICAgKi9cclxuICBnZXREYXRlID0gKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQgPSB0aGlzLnByb3BzLmRhdGVGb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcclxuICAgIGNvbnN0IHJlbW92ZUludmlzaWJsZUNoYXJzID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcclxuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVDb250YWluZXJNb3VzZURvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSB0cnVlO1xyXG4gICAgLy8gVGhlIGlucHV0J3Mgb25CbHVyIG1ldGhvZCBpcyBjYWxsZWQgZnJvbSBhIHF1ZXVlIHJpZ2h0IGFmdGVyIG9uTW91c2VEb3duIGV2ZW50LlxyXG4gICAgLy8gc2V0VGltZW91dCBhZGRzIGFub3RoZXIgY2FsbGJhY2sgaW4gdGhlIHF1ZXVlLCBidXQgaXMgY2FsbGVkIGxhdGVyIHRoYW4gb25CbHVyIGV2ZW50XHJcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcclxuICAgIH0sIDApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHtcclxuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gdGhpcy5jbGlja2VkSW5zaWRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5LFxyXG4gICAgfSk7XHJcbiAgICAvLyBGb3JjZSBpbnB1dCdzIGZvY3VzIGlmIGJsdXIgZXZlbnQgd2FzIGNhdXNlZCBieSBjbGlja2luZyBvbiB0aGUgY2FsZW5kYXJcclxuICAgIGlmIChzaG93T3ZlcmxheSkge1xyXG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikge1xyXG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXHJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcclxuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XHJcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcclxuICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMpKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZSkgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxyXG4gICAqL1xyXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSkgPT4ge1xyXG4gICAgY29uc3QgbW9tZW50T2JqID0gbW9tZW50LnV0YyhkYXkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlVUQykpO1xyXG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRhdGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXHJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxyXG4gICAqL1xyXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXHJcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcclxuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuICAgIGNvbnN0IHtcclxuICAgICAgbG9jYWxlLFxyXG4gICAgICB0aW1lLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgaW5wdXRQcm9wcyxcclxuICAgICAgaW5wdXRSZWYsXHJcbiAgICAgIGRpc2FibGVkLFxyXG4gICAgICBzaG93V2Vla051bWJlcnMsXHJcbiAgICAgIC4uLm90aGVyUHJvcHNcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcclxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXHJcbiAgICAgICAgY29uc3RyYWludHM9e1t7XHJcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXHJcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxyXG4gICAgICAgIH1dfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xyXG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUNvbnRhaW5lck1vdXNlRG93bn1cclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXlQaWNrZXJcclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxyXG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e3RoaXMuaXNTYW1lRGF5fVxyXG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cclxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAge3RpbWUgJiZcclxuICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=