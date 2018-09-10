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
        showOverlay: props.showOverlay || state.showOverlay,
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
          month: this.state.dayPickerVisibleMonth || this.state.selectedDay,
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
  showOverlay: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwicHJvcHMiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwidmFsdWUiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiY2FsZW5kYXJDb250YWluZXIiLCJpc1NhbWVEYXkiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwib25EYXlDbGljayIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNob3dNb250aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FBRUE7QUFDQSxPQUFP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QURYO0FBQUEsUUFDaEJHLEtBRGdCLFdBQ2hCQSxLQURnQjtBQUFBLFFBQ1RRLFVBRFMsV0FDVEEsVUFEUzs7QUFFeEIsUUFBTU4sYUFBYWxCLE9BQU9tQixHQUFQLENBQVdILEtBQVgsRUFBa0JoQixPQUFPb0IsUUFBekIsQ0FBbkI7QUFDQSxXQUFLOEQsUUFBTCxDQUFjO0FBQ1ozRCxpQkFBV1osVUFBVVcsT0FBVixDQUFrQkosVUFBbEIsRUFBOEJYLFFBQVFFLFdBQXRDLEVBQW1EZSxVQUFuRDtBQURDLEtBQWQ7QUFHRCxHOztPQU9EK0Msb0IsR0FBdUI7QUFBQSxRQUFHOUMsSUFBSCxRQUFHQSxJQUFIO0FBQUEsV0FDckIsb0JBQUMsZUFBRDtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLOEUscUJBRmpCO0FBR0UsY0FBUSxPQUFLMUYsS0FBTCxDQUFXb0M7QUFIckIsTUFEcUI7QUFBQSxHOztTQXJTSnRDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xyXG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xyXG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XHJcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcclxuXHJcbi8vIEFwcCBpbXBvcnRzXHJcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9kYXRlLWlucHV0LnNjc3MnO1xyXG5cclxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcclxuY29uc3QgRk9STUFUUyA9IHtcclxuICBVVEM6ICdVVEMnLFxyXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxyXG4gIERBVEVfT0JKRUNUOiAnREFURV9PQkpFQ1QnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcclxuICAgIF0pLFxyXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgbWludXRlc0ludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2YWx1ZTogJycsXHJcbiAgICBkYXRlRm9ybWF0OiAnTCcsXHJcbiAgICBsb2NhbGU6ICdlbl9HQicsXHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRheUNsaWNrOiAoKSA9PiB7fSxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgaW5wdXRSZWYoKSB7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxyXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxyXG4gICAgdGltZTogZmFsc2UsXHJcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgcHJvcHMudmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xyXG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXN0VmFsdWU6IHByb3BzLnZhbHVlLFxyXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcclxuICAgICAgICBzaG93T3ZlcmxheTogcHJvcHMuc2hvd092ZXJsYXkgfHwgc3RhdGUuc2hvd092ZXJsYXksXHJcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXHJcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxyXG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxyXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXHJcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxyXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XHJcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XHJcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxyXG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xyXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcclxuICAgICAgLy8gaW5wdXREYXRlOiBQcmV0dGlmaWVkIHN0cmluZyBzaG93biBpbiBpbnB1dCBmaWVsZFxyXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgTG9jYWxlVXRpbHMsXHJcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcclxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICBlLnRhcmdldCAhPT0gdGhpcy5pbnB1dCkge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAvLyBEZWxheXMgdGhlIGV4ZWN1dGlvbiBzbyB0aGF0IHRoZSBkYXlQaWNrZXIgb3BlbnMgYmVmb3JlIHNlbGVjdGluZyBhIGRheVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dPdmVybGF5KSB0aGlzLmlucHV0LmZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XHJcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxyXG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXHJcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XHJcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXHJcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0Qmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XHJcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKGRheSk7XHJcblxyXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xyXG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XHJcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcclxuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcclxuXHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxyXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZVxyXG4gICAgICAgIC5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpXHJcbiAgICAgICAgLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcclxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXHJcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZWxlY3RlZERheTogZGF5LFxyXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIG5ld1RpbWVcclxuICAgKi9cclxuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcclxuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcblxyXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXHJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cclxuICAgKi9cclxuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxyXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XHJcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xyXG4gIH07XHJcblxyXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcclxuICAgIDxZZWFyTW9udGhQaWNrZXJcclxuICAgICAgZGF0ZT17ZGF0ZX1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfVxyXG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBsb2NhbGUsXHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICBpbnB1dFJlZixcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIHNlbGVjdGVkRGF5cyxcclxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxyXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXHJcbiAgICAgIC4uLm90aGVyUHJvcHNcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICBjb25zdCB0aW1lT2JqID0ge1xyXG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcclxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XHJcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxyXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcclxuICAgICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxyXG4gICAgICAgICAgfV19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XHJcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XHJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEYXlQaWNrZXJcclxuICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XHJcbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxyXG4gICAgICAgICAgICBtb250aD17dGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZERheX1cclxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxyXG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cclxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGltZSAmJlxyXG4gICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cclxuICAgICAgICAgICAgdGltZT17dGltZU9ian1cclxuICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19