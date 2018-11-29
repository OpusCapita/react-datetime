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

    _this.localeUtils = Object.assign(LocaleUtils, {
      getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
      }
    });

    _this.input = null;
    _this.dayPicker = null;

    // Used in onBlur handler to determine whether or not blur happened because of a click
    // on the overlay
    _this.mouseClickedOnContainer = false;
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
   * Handles a click on the overlay
   * @param e
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
    var month = this.state.dayPickerVisibleMonth || (typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay);

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
          },
          onMouseDown: this.handleOnOverlayMouseDown
        },
        React.createElement(DayPicker, _extends({}, otherProps, {
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          selectedDays: selectedDays || this.isSameDay,
          localeUtils: this.localeUtils,
          month: month,
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
  locale: 'en-GB',
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

    // We want to close the overlay on blur, unless it was caused by a click on the calendar
    // overlay
    if (!_this3.mouseClickedOnContainer) {
      _this3.setState({
        showOverlay: false
      });
    }
    _this3.mouseClickedOnContainer = false;
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

    var momentDate = value ? moment.utc(value, moment.ISO_8601) : moment.utc();

    momentDate.year(val.getFullYear()).month(val.getMonth());

    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat),
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
      dayPickerVisibleMonth: val
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.handleOnOverlayMouseDown = function (e) {
    if (_this3.calendarContainer.contains(e.target)) {
      _this3.mouseClickedOnContainer = true;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwicHJvcHMiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwidmFsdWUiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwibW91c2VDbGlja2VkT25Db250YWluZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzUHJlZml4IiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsImNhbGVuZGFyQ29udGFpbmVyIiwiaGFuZGxlT25PdmVybGF5TW91c2VEb3duIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxXQUFwQixRQUF1QyxpQkFBdkM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxJQUFvQkMsU0FBcEIsUUFBcUMsa0JBQXJDO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5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QUFXcUM7QUFIckIsTUFEcUI7QUFBQSxHOztTQXJVSnZDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIF0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbG9jYWxlOiAnZW4tR0InLFxuICAgIG9uQ2hhbmdlKCkge1xuICAgIH0sXG4gICAgb25EYXlDbGljazogKCkgPT4ge1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBjb25zdCByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgTG9jYWxlVXRpbHMsXG4gICAgICB7XG4gICAgICAgIGdldEZpcnN0RGF5T2ZXZWVrOiAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSgpXG4gICAgICAgICAgLmZpcnN0RGF5T2ZXZWVrKCksXG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheVBpY2tlciA9IG51bGw7XG5cbiAgICAvLyBVc2VkIGluIG9uQmx1ciBoYW5kbGVyIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBibHVyIGhhcHBlbmVkIGJlY2F1c2Ugb2YgYSBjbGlja1xuICAgIC8vIG9uIHRoZSBvdmVybGF5XG4gICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IGZhbHNlO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgZXZlcnkgdGltZSBkYXlQaWNrZXIgaXMgb3BlbiBhbmQgZG9jdW1lbnQgaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgb25Eb2N1bWVudENsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcblxuICAgIC8vIENsb3NlcyBvdmVybGF5IGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGNhbGVuZGFyIChhbmQgaW5wdXQgZmllbGQpXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXQpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKVxuICAgIC5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25CbHVyKGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxuICAgKiBAcGFyYW0gZSB7ZXZlbnR9XG4gICAqL1xuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpXG4gICAgICAuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICB9KTtcbiAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIGlmIChpbnB1dFByb3BzLm9uQ2hhbmdlKSBpbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcmV0dGlmeUlucHV0RGF0ZSgpO1xuXG4gICAgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgb3ZlcmxheSBvbiBibHVyLCB1bmxlc3MgaXQgd2FzIGNhdXNlZCBieSBhIGNsaWNrIG9uIHRoZSBjYWxlbmRhclxuICAgIC8vIG92ZXJsYXlcbiAgICBpZiAoIXRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xuICAgIGlmIChtb2RpZmllcnMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKVxuICAgICAgLnV0YygpO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcblxuICAgIGlmICh0aW1lKSB7XG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGVcbiAgICAgICAgLnNldCgnaG91cicsIGN1cnJlbnRIb3VycylcbiAgICAgICAgLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkRheUNsaWNrKGRheSwgbW9kaWZpZXJzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIG5ld1RpbWVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgfSk7XG4gIH07XG5cblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSkgOiBtb21lbnQudXRjKCk7XG5cbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpXG4gICAgICAubW9udGgodmFsLmdldE1vbnRoKCkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIG92ZXJsYXlcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXJcbiAgICAgIGRhdGU9e2RhdGV9XG4gICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9XG4gICAgICBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfVxuICAgIC8+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2VsZWN0ZWREYXlzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgbWludXRlc0ludGVydmFsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID0gdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcbiAgICAgICgodHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnKSA/IHVuZGVmaW5lZCA6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfV19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU9uT3ZlcmxheU1vdXNlRG93bn1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5cyB8fCB0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGltZSAmJlxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxuICAgICAgICAgIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19