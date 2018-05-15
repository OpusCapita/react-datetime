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
    _this.focused = false;
    return _this;
  }

  // TODO: change this one to getDerivedStateFromProps ASAP


  DateInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If value changes when input is blurred
    if (!this.focused && nextProps.value && this.props.value !== nextProps.value) {
      var momentDate = moment.utc(nextProps.value, moment.ISO_8601);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwicHJvcHMiLCJtb21lbnREYXRlIiwidXRjIiwidmFsdWUiLCJJU09fODYwMSIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY2xpY2tlZEluc2lkZSIsImNsaWNrVGltZW91dCIsImZvY3VzZWQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFyVGltZW91dCIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2hvd1dlZWtOdW1iZXJzIiwib3RoZXJQcm9wcyIsInRvIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlQ29udGFpbmVyTW91c2VEb3duIiwiaGFuZGxlRGF5Q2xpY2siLCJpc1NhbWVEYXkiLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJlIiwic2hvd01vbnRoIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwidGFyZ2V0IiwiaXNWYWxpZEZvcm1hdCIsImRheSIsIm1vbWVudE9iaiIsImJsdXIiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxXQUFwQixRQUF1QyxpQkFBdkM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxJQUFvQkMsU0FBcEIsUUFBcUMsa0JBQXJDO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5QkFBeEI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLGNBQTVCO0FBQ0EsT0FBTyxnQ0FBUDs7QUFFQTtBQUNBLE9BQU9DLFVBQVAsTUFBdUIscUNBQXZCO0FBQ0EsT0FBTyxtQkFBUDs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsT0FBSyxLQURTO0FBRWRDLGVBQWEsYUFGQztBQUdkQyxlQUFhO0FBSEMsQ0FBaEI7O0lBTXFCQyxTOzs7QUEyQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUdqQixRQUFNQyxhQUFhWixPQUFPYSxHQUFQLENBQVdGLE1BQU1HLEtBQWpCLEVBQXdCZCxPQUFPZSxRQUEvQixDQUFuQjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsS0FERjtBQUVYO0FBQ0FDLG1CQUFhLE1BQUtDLE9BQUwsQ0FBYVAsVUFBYixFQUF5Qk4sUUFBUUcsV0FBakMsQ0FIRjtBQUlYO0FBQ0FXLGlCQUFXLE1B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QUFDWmpCLG1CQUFhMkQsR0FERDtBQUVaNUQsbUJBQWEsS0FGRDtBQUdaRyxpQkFBVyxPQUFLRCxPQUFMLENBQWEyRCxTQUFiLEVBQXdCeEUsUUFBUUUsV0FBaEM7QUFIQyxLQUFkLEVBSUcsWUFBTTtBQUNQLGFBQUtHLEtBQUwsQ0FBV2dELFFBQVgsQ0FBb0IsT0FBS3hDLE9BQUwsQ0FBYTJELFNBQWIsRUFBd0J4RSxRQUFRQyxHQUFoQyxDQUFwQjtBQUNBLGFBQUtxQixLQUFMLENBQVdtRCxJQUFYO0FBQ0QsS0FQRDtBQVFELEc7O09BTUR2QixzQixHQUF5QixVQUFDSSxJQUFELEVBQVU7QUFDakMsUUFBTWhELGFBQWFaLE9BQU9hLEdBQVAsQ0FBVytDLElBQVgsQ0FBbkI7QUFDQSxXQUFLekIsUUFBTCxDQUFjO0FBQ1pmLGlCQUFXLE9BQUtELE9BQUwsQ0FBYVAsVUFBYixFQUF5Qk4sUUFBUUUsV0FBakM7QUFEQyxLQUFkLEVBRUcsWUFBTTtBQUNQLGFBQUtHLEtBQUwsQ0FBV2dELFFBQVgsQ0FBb0JDLElBQXBCO0FBQ0QsS0FKRDtBQUtELEc7O09BT0RMLFMsR0FBWTtBQUFBLFdBQU9yRCxVQUFVcUQsU0FBVixDQUFvQixPQUFLdkMsS0FBTCxDQUFXRSxXQUEvQixFQUE0QzJELEdBQTVDLENBQVA7QUFBQSxHOztPQVFaRCxhLEdBQWdCLFVBQUNoQixJQUFELEVBQVU7QUFDeEIsUUFBSW9CLFVBQVUsMkNBQWQ7QUFDQSxRQUFJLE9BQUtyRSxLQUFMLENBQVc4QixJQUFmLEVBQXFCdUMsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWFyQixLQUFLc0IsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztTQTFNa0J4RSxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCAnLi9kYXRlLWlucHV0LnNjc3MnO1xuXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxuY29uc3QgRk9STUFUUyA9IHtcbiAgVVRDOiAnVVRDJyxcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXG4gIERBVEVfT0JKRUNUOiAnREFURV9PQkpFQ1QnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBvbkNoYW5nZSgpIHtcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gVE9ETzogY2hhbmdlIHRoaXMgb25lIHRvIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBBU0FQXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gSWYgdmFsdWUgY2hhbmdlcyB3aGVuIGlucHV0IGlzIGJsdXJyZWRcbiAgICBpZiAoIXRoaXMuZm9jdXNlZCAmJiBuZXh0UHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhuZXh0UHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgaW5wdXREYXRlOiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgbmV4dFByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBnZXREYXRlID0gKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQgPSB0aGlzLnByb3BzLmRhdGVGb3JtYXQpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ29udGFpbmVyTW91c2VEb3duID0gKCkgPT4ge1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IHRydWU7XG4gICAgLy8gVGhlIGlucHV0J3Mgb25CbHVyIG1ldGhvZCBpcyBjYWxsZWQgZnJvbSBhIHF1ZXVlIHJpZ2h0IGFmdGVyIG9uTW91c2VEb3duIGV2ZW50LlxuICAgIC8vIHNldFRpbWVvdXQgYWRkcyBhbm90aGVyIGNhbGxiYWNrIGluIHRoZSBxdWV1ZSwgYnV0IGlzIGNhbGxlZCBsYXRlciB0aGFuIG9uQmx1ciBldmVudFxuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNob3dPdmVybGF5ID0gdGhpcy5jbGlja2VkSW5zaWRlO1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheSxcbiAgICB9KTtcbiAgICAvLyBGb3JjZSBpbnB1dCdzIGZvY3VzIGlmIGJsdXIgZXZlbnQgd2FzIGNhdXNlZCBieSBjbGlja2luZyBvbiB0aGUgY2FsZW5kYXJcbiAgICBpZiAoc2hvd092ZXJsYXkpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogdGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMpKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSkgPT4ge1xuICAgIGNvbnN0IG1vbWVudE9iaiA9IG1vbWVudC51dGMoZGF5KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnRPYmosIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5nZXREYXRlKG1vbWVudE9iaiwgRk9STUFUUy5VVEMpKTtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFKSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUNvbnRhaW5lck1vdXNlRG93bn1cbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e3RoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHt0aW1lICYmXG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=