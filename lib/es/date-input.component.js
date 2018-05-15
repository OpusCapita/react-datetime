var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import TetherComponent from 'react-tether';
import 'react-day-picker/lib/style.css';

// App imports
import TimePicker from './time-picker/time-picker.component';
import './date-input.scss';

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

    var momentDate = moment.utc(props.value, moment.ISO_8601);

    _this.state = {
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: _this.getDate(momentDate, FORMATS.DATE_OBJECT),
      // inputDate: Prettified string shown in input field
      inputDate: _this.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
    };

    _this.localeUtils = Object.assign(LocaleUtils, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
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

    return React.createElement(
      TetherComponent,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        className: '' + classPrefix
      },
      React.createElement(
        FormGroup,
        null,
        React.createElement(FormControl, _extends({
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
      this.state.showOverlay && React.createElement(
        'div',
        {
          onMouseDown: this.handleContainerMouseDown,
          role: 'presentation',
          className: classPrefix + '-calendar'
        },
        React.createElement(DayPicker, _extends({
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: this.isSameDay,
          localeUtils: this.localeUtils,
          showWeekNumbers: showWeekNumbers,
          locale: locale
        }, otherProps)),
        time && React.createElement(TimePicker, {
          onChange: this.handleTimePickerChange,
          value: value
        })
      )
    );
  };

  return DateInput;
}(React.Component), _class.defaultProps = {
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

    var momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
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
    if (moment.utc(inputDate, _this3.props.dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
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
    var momentObj = moment.utc(day);
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
    var momentDate = moment.utc(date);
    _this3.setState({
      inputDate: _this3.getDate(momentDate, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(date);
    });
  };

  this.isSameDay = function (day) {
    return DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwicHJvcHMiLCJtb21lbnREYXRlIiwidXRjIiwidmFsdWUiLCJJU09fODYwMSIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY2xpY2tlZEluc2lkZSIsImNsaWNrVGltZW91dCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzaG93V2Vla051bWJlcnMiLCJvdGhlclByb3BzIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsImRhdGUiLCJ0eXBlIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJzdHIiLCJyZXBsYWNlIiwiaXNWYWxpZCIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwidG9EYXRlIiwic2V0VGltZW91dCIsImUiLCJzZXRTdGF0ZSIsInNob3dNb250aCIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsInRhcmdldCIsImlzVmFsaWRGb3JtYXQiLCJkYXkiLCJtb21lbnRPYmoiLCJibHVyIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FBRUE7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHFDQUF2QjtBQUNBLE9BQU8sbUJBQVA7O0FBRUE7QUFDQSxJQUFNQyxVQUFVO0FBQ2RDLE9BQUssS0FEUztBQUVkQyxlQUFhLGFBRkM7QUFHZEMsZUFBYTtBQUhDLENBQWhCOztJQU1xQkMsUzs7O0FBMkJuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFHakIsUUFBTUMsYUFBYVosT0FBT2EsR0FBUCxDQUFXRixNQUFNRyxLQUFqQixFQUF3QmQsT0FBT2UsUUFBL0IsQ0FBbkI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEtBREY7QUFFWDtBQUNBQyxtQkFBYSxNQUFLQyxPQUFMLENBQWFQLFVBQWIsRUFBeUJOLFFBQVFHLFdBQWpDLENBSEY7QUFJWDtBQUNBVyxpQkFBVyxNQUFLRCxPQUFMLENBQWFQLFVBQWIsRUFBeUJOLFFBQVFFLFdBQWpDLEVBQThDRyxNQUFN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b0IsT0FBS25DLEtBQUwsQ0FBV0UsV0FBL0IsRUFBNEN3RCxHQUE1QyxDQUFQO0FBQUEsRzs7T0FRWkQsYSxHQUFnQixVQUFDakIsSUFBRCxFQUFVO0FBQ3hCLFFBQUlxQixVQUFVLDJDQUFkO0FBQ0EsUUFBSSxPQUFLbEUsS0FBTCxDQUFXMEIsSUFBZixFQUFxQndDLFVBQVUsdUVBQVY7QUFDckIsV0FBT0EsUUFBUUMsSUFBUixDQUFhdEIsS0FBS3VCLElBQUwsRUFBYixDQUFQO0FBQ0QsRzs7U0F6TGtCckUsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XHJcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XHJcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcclxuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcclxuXHJcbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXHJcbmNvbnN0IEZPUk1BVFMgPSB7XHJcbiAgVVRDOiAnVVRDJyxcclxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcclxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcclxuICAgIGxvY2FsZTogJ2VuJyxcclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgfSxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgaW5wdXRSZWYoKSB7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxyXG4gICAgdGltZTogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxyXG4gICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxyXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXHJcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgTG9jYWxlVXRpbHMsXHJcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxyXG4gICAgKTtcclxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xyXG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcclxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XHJcbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXHJcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcclxuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXHJcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxyXG4gICAqL1xyXG4gIGdldERhdGUgPSAoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCA9IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xyXG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xyXG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcclxuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcclxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcclxuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNvbnRhaW5lck1vdXNlRG93biA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XHJcbiAgICAvLyBUaGUgaW5wdXQncyBvbkJsdXIgbWV0aG9kIGlzIGNhbGxlZCBmcm9tIGEgcXVldWUgcmlnaHQgYWZ0ZXIgb25Nb3VzZURvd24gZXZlbnQuXHJcbiAgICAvLyBzZXRUaW1lb3V0IGFkZHMgYW5vdGhlciBjYWxsYmFjayBpbiB0aGUgcXVldWUsIGJ1dCBpcyBjYWxsZWQgbGF0ZXIgdGhhbiBvbkJsdXIgZXZlbnRcclxuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xyXG4gICAgfSwgMCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykge1xyXG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSB0aGlzLmNsaWNrZWRJbnNpZGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXksXHJcbiAgICB9KTtcclxuICAgIC8vIEZvcmNlIGlucHV0J3MgZm9jdXMgaWYgYmx1ciBldmVudCB3YXMgY2F1c2VkIGJ5IGNsaWNraW5nIG9uIHRoZSBjYWxlbmRhclxyXG4gICAgaWYgKHNob3dPdmVybGF5KSB7XHJcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xyXG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcclxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxyXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQykpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UoZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XHJcbiAgICBjb25zdCBtb21lbnRPYmogPSBtb21lbnQudXRjKGRheSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuVVRDKSk7XHJcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGF0ZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XHJcbiAgICovXHJcbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcclxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XHJcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICBpbnB1dFJlZixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcclxuICAgICAgLi4ub3RoZXJQcm9wc1xyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRldGhlckNvbXBvbmVudFxyXG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcclxuICAgICAgICBjb25zdHJhaW50cz17W3tcclxuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcclxuICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXHJcbiAgICAgICAgfV19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XHJcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlQ29udGFpbmVyTW91c2VEb3dufVxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERheVBpY2tlclxyXG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17dGhpcy5pc1NhbWVEYXl9XHJcbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxyXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cclxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7dGltZSAmJlxyXG4gICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==