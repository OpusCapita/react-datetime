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

    var momentDate = moment(props.value, moment.ISO_8601);

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

    var momentDate = typeof date === 'string' ? moment(date, dateFormat) : date;
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
    if (moment(inputDate, _this3.props.dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
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
    var momentObj = moment(day);
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
    var momentDate = moment(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwicHJvcHMiLCJtb21lbnREYXRlIiwidmFsdWUiLCJJU09fODYwMSIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY2xpY2tlZEluc2lkZSIsImNsaWNrVGltZW91dCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzaG93V2Vla051bWJlcnMiLCJvdGhlclByb3BzIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJoYW5kbGVEYXlDbGljayIsImlzU2FtZURheSIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsImRhdGUiLCJ0eXBlIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJzdHIiLCJyZXBsYWNlIiwiaXNWYWxpZCIsImZvcm1hdCIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJlIiwic2V0U3RhdGUiLCJzaG93TW9udGgiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJ0YXJnZXQiLCJpc1ZhbGlkRm9ybWF0IiwiZGF5IiwibW9tZW50T2JqIiwiYmx1ciIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLFFBQXVDLGlCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxTQUFQLElBQW9CQyxTQUFwQixRQUFxQyxrQkFBckM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsY0FBNUI7QUFDQSxPQUFPLGdDQUFQOztBQUVBO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixxQ0FBdkI7QUFDQSxPQUFPLG1CQUFQOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztBQTJCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBR2pCLFFBQU1DLGFBQWFaLE9BQU9XLE1BQU1FLEtBQWIsRUFBb0JiLE9BQU9jLFFBQTNCLENBQW5COztBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxLQURGO0FBRVg7QUFDQUMsbUJBQWEsTUFBS0MsT0FBTCxDQUFhTixVQUFiLEVBQXlCTixRQUFRRyxXQUFqQyxDQUhGO0FBSVg7QUFDQVUsaUJBQVcsTUFBS0QsT0FBTCxDQUFhTixVQUFiLEVBQXlCTixRQUFRRSxXQUFqQyxFQUE4Q0csTUFBTVMsVUFBcEQ7QUFMQSxLQUFiOztBQVFBLFVBQUtDLFdB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QUQsRUFBVTtBQUN4QixRQUFJb0IsVUFBVSwyQ0FBZDtBQUNBLFFBQUksT0FBS2hFLEtBQUwsQ0FBV3lCLElBQWYsRUFBcUJ1QyxVQUFVLHVFQUFWO0FBQ3JCLFdBQU9BLFFBQVFDLElBQVIsQ0FBYXJCLEtBQUtzQixJQUFMLEVBQWIsQ0FBUDtBQUNELEc7O1NBekxrQm5FLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIG9uQ2hhbmdlKCkge1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudChwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICB9O1xuXG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgZ2V0RGF0ZSA9IChkYXRlLCB0eXBlLCBkYXRlRm9ybWF0ID0gdGhpcy5wcm9wcy5kYXRlRm9ybWF0KSA9PiB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudChkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNvbnRhaW5lck1vdXNlRG93biA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSB0cnVlO1xuICAgIC8vIFRoZSBpbnB1dCdzIG9uQmx1ciBtZXRob2QgaXMgY2FsbGVkIGZyb20gYSBxdWV1ZSByaWdodCBhZnRlciBvbk1vdXNlRG93biBldmVudC5cbiAgICAvLyBzZXRUaW1lb3V0IGFkZHMgYW5vdGhlciBjYWxsYmFjayBpbiB0aGUgcXVldWUsIGJ1dCBpcyBjYWxsZWQgbGF0ZXIgdGhhbiBvbkJsdXIgZXZlbnRcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gdGhpcy5jbGlja2VkSW5zaWRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXksXG4gICAgfSk7XG4gICAgLy8gRm9yY2UgaW5wdXQncyBmb2N1cyBpZiBibHVyIGV2ZW50IHdhcyBjYXVzZWQgYnkgY2xpY2tpbmcgb24gdGhlIGNhbGVuZGFyXG4gICAgaWYgKHNob3dPdmVybGF5KSB7XG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50KGlucHV0RGF0ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMpKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudE9iaiA9IG1vbWVudChkYXkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudE9iaiwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlVUQykpO1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50KGRhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W3tcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgfV19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVDb250YWluZXJNb3VzZURvd259XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICA+XG4gICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXt0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19