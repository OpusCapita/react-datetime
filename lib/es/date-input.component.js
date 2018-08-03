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
import YearMonthPicker from './year-month-picker/year-month-picker.component';
import './date-input.scss';

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
      var momentDate = moment.utc(props.value, moment.ISO_8601);
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

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = moment.utc(props.value, moment.ISO_8601);
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

    _this.localeUtils = Object.assign(LocaleUtils, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
      } });

    _this.input = null;
    _this.dayPicker = null;
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
        selectedDays = _props.selectedDays,
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval']);

    var momentDate = moment.utc(value, moment.ISO_8601);
    var timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute()
    };

    return React.createElement(
      TetherComponent,
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
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          }
        },
        React.createElement(DayPicker, _extends({}, otherProps, {
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          selectedDays: selectedDays || this.isSameDay,
          localeUtils: this.localeUtils,
          month: this.state.dayPickerVisibleMonth,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement,
          onDayClick: this.handleDayClick
        })),
        time && React.createElement(TimePicker, {
          onChange: this.handleTimePickerChange,
          time: timeObj,
          minutesInterval: minutesInterval
        })
      )
    );
  };

  return DateInput;
}(React.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  locale: 'en_GB',
  onChange: function onChange() {},

  onDayClick: function onDayClick() {},
  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false,
  selectedDays: null,
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
    return moment.localeData(_this3.props.locale).firstDayOfWeek();
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
    if (moment.utc(inputDate, dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
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
  };

  this.handleDayClick = function (day) {
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (modifiers.disabled) return;

    var _props3 = _this3.props,
        dateFormat = _props3.dateFormat,
        value = _props3.value,
        time = _props3.time;

    var momentDate = moment.utc(day);

    var timeAdjustedDate = null;
    var currentMomentDate = moment(value, moment.ISO_8601).utc();
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

    var momentDate = moment.utc(_this3.props.value);
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

    var momentDate = moment.utc(value, moment.ISO_8601);

    momentDate.year(val.getFullYear()).month(val.getMonth());

    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat),
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
      dayPickerVisibleMonth: val
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
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

  this.prettifyInputDate = function () {
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat;

    var momentDate = moment.utc(value, moment.ISO_8601);
    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat)
    });
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return React.createElement(YearMonthPicker, {
      date: date,
      onChange: _this3.handleYearMonthChange,
      locale: _this3.props.locale
    });
  };
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwicHJvcHMiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwidmFsdWUiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiY2FsZW5kYXJDb250YWluZXIiLCJpc1NhbWVEYXkiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwib25EYXlDbGljayIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNob3dNb250aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FBRUE7QUFDQSxPQUFP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UCxDQUFXSCxLQUFYLEVBQWtCaEIsT0FBT29CLFFBQXpCLENBQW5CO0FBQ0EsV0FBSzhELFFBQUwsQ0FBYztBQUNaM0QsaUJBQVdaLFVBQVVXLE9BQVYsQ0FBa0JKLFVBQWxCLEVBQThCWCxRQUFRRSxXQUF0QyxFQUFtRGUsVUFBbkQ7QUFEQyxLQUFkO0FBR0QsRzs7T0FPRCtDLG9CLEdBQXVCO0FBQUEsUUFBRzlDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFdBQ3JCLG9CQUFDLGVBQUQ7QUFDRSxZQUFNQSxJQURSO0FBRUUsZ0JBQVUsT0FBSzhFLHFCQUZqQjtBQUdFLGNBQVEsT0FBSzFGLEtBQUwsQ0FBV29DO0FBSHJCLE1BRHFCO0FBQUEsRzs7U0FsU0p0QyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcclxuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcclxuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xyXG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBBcHAgaW1wb3J0c1xyXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcclxuXHJcbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXHJcbmNvbnN0IEZPUk1BVFMgPSB7XHJcbiAgVVRDOiAnVVRDJyxcclxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcclxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgIFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICBdKSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxyXG4gICAgbG9jYWxlOiAnZW5fR0InLFxyXG4gICAgb25DaGFuZ2UoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXHJcbiAgICBpbnB1dFByb3BzOiB7fSxcclxuICAgIGlucHV0UmVmKCkge1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcclxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcclxuICAgIHRpbWU6IGZhbHNlLFxyXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHByb3BzLnZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcclxuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFzdFZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXHJcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXHJcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxyXG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxyXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXHJcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxyXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XHJcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XHJcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xyXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgTG9jYWxlVXRpbHMsXHJcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XHJcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxyXG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXHJcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0Qmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XHJcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRheSk7XHJcblxyXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xyXG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XHJcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcclxuXHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxyXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZVxyXG4gICAgICAgIC5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpXHJcbiAgICAgICAgLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcclxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXHJcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZERheTogZGF5LFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIG5ld1RpbWVcclxuICAgKi9cclxuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcblxyXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxyXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XHJcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xyXG4gIH07XHJcblxyXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcclxuICAgIDxZZWFyTW9udGhQaWNrZXJcclxuICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxyXG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICBpbnB1dFJlZixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHNlbGVjdGVkRGF5cyxcclxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxyXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXHJcbiAgICAgIC4uLm90aGVyUHJvcHNcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICBjb25zdCB0aW1lT2JqID0ge1xyXG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcclxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XHJcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxyXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcclxuICAgICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxyXG4gICAgICAgICAgfV19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XHJcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXlQaWNrZXJcclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XHJcbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxyXG4gICAgICAgICAgICBtb250aD17dGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGh9XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxyXG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XHJcbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RpbWUgJiZcclxuICAgICAgICAgIDxUaW1lUGlja2VyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XHJcbiAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==