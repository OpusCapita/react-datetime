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
    var month = this.state.dayPickerVisibleMonth || typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiRGF0ZUlucHV0IiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwicHJvcHMiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwidmFsdWUiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsInN0ciIsInJlcGxhY2UiLCJpc1ZhbGlkIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc1ByZWZpeCIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwidW5kZWZpbmVkIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJjYWxlbmRhckNvbnRhaW5lciIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMsV0FBcEIsUUFBdUMsaUJBQXZDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLFNBQVAsSUFBb0JDLFNBQXBCLFFBQXFDLGtCQUFyQztBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixjQUE1QjtBQUNBLE9BQU8sZ0NBQVA7O0FB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O0FBQ3JCLFdBQU9BLFFBQVFDLElBQVIsQ0FBYXRGLEtBQUt1RixJQUFMLEVBQWIsQ0FBUDtBQUNELEc7O09BRURwQixpQixHQUFvQixZQUFNO0FBQUEsa0JBQ00sT0FBSy9FLEtBRFg7QUFBQSxRQUNoQkcsS0FEZ0IsV0FDaEJBLEtBRGdCO0FBQUEsUUFDVFEsVUFEUyxXQUNUQSxVQURTOztBQUV4QixRQUFNTixhQUFhbEIsT0FBT21CLEdBQVAsQ0FBV0gsS0FBWCxFQUFrQmhCLE9BQU9vQixRQUF6QixDQUFuQjtBQUNBLFdBQUtnRSxRQUFMLENBQWM7QUFDWjdELGlCQUFXWixVQUFVVyxPQUFWLENBQWtCSixVQUFsQixFQUE4QlgsUUFBUUUsV0FBdEMsRUFBbURlLFVBQW5EO0FBREMsS0FBZDtBQUdELEc7O09BT0RpRCxvQixHQUF1QjtBQUFBLFFBQUdoRCxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUNyQixvQkFBQyxlQUFEO0FBQ0UsWUFBTUEsSUFEUjtBQUVFLGdCQUFVLE9BQUtnRixxQkFGakI7QUFHRSxjQUFRLE9BQUs1RixLQUFMLENBQVdvQztBQUhyQixNQURxQjtBQUFBLEc7O1NBclNKdEMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XHJcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XHJcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcclxuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XHJcblxyXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxyXG5jb25zdCBGT1JNQVRTID0ge1xyXG4gIFVUQzogJ1VUQycsXHJcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXHJcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgXSksXHJcbiAgICBzaG93T3ZlcmxheTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgdGltZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcclxuICAgIGxvY2FsZTogJ2VuX0dCJyxcclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgfSxcclxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxyXG4gICAgaW5wdXRQcm9wczoge30sXHJcbiAgICBpbnB1dFJlZigpIHtcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBzZWxlY3RlZERheXM6IG51bGwsXHJcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXHJcbiAgICB0aW1lOiBmYWxzZSxcclxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXHJcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxyXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcclxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcclxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XHJcbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXHJcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcclxuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXHJcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcclxuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcclxuICAgIGNvbnN0IHJlbW92ZUludmlzaWJsZUNoYXJzID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXHUyMDBFL2csICcnKTtcclxuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcclxuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcclxuICAgICAgICByZXR1cm4gcmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcclxuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXHJcbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcclxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIHByb3BzLmRhdGVGb3JtYXQpLFxyXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXHJcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBMb2NhbGVVdGlscyxcclxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxyXG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBvdmVybGF5LiBDYWxsZWQgZnJvbSBvbkRvY3VtZW50Q2xpY2suXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbG9zZU92ZXJsYXkgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVzIGlucHV0IGNoYW5nZSwgY2hlY2tzIHZhbGlkaXR5IGFuZCB1cGRhdGVzIG1vZGVsIHZhbHVlIGFuZCB0aGUgZGF5IHBpY2tlclxyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cclxuICAgKi9cclxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcclxuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XHJcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcclxuICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcclxuICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcclxuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIGlucHV0UHJvcHMub25DaGFuZ2UoZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgaW52YWxpZCB3ZSByZXNldCB0aGUgbW9kZWwgdmFsdWVcclxuICAgICAgb25DaGFuZ2UobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXRCbHVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcmV0dGlmeUlucHV0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxyXG4gICAqL1xyXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSwgbW9kaWZpZXJzID0ge30pID0+IHtcclxuICAgIGlmIChtb2RpZmllcnMuZGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIHZhbHVlLCB0aW1lIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcclxuXHJcbiAgICBsZXQgdGltZUFkanVzdGVkRGF0ZSA9IG51bGw7XHJcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xyXG4gICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ21pbnV0ZScpO1xyXG5cclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIC8vIFNldCBjdXJyZW50IChwcmV2aW91c2x5IHNlbGVjdGVkKSB0aW1lIHRvIG5ld2x5IHBpY2tlZCBkYXRlXHJcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlXHJcbiAgICAgICAgLnNldCgnaG91cicsIGN1cnJlbnRIb3VycylcclxuICAgICAgICAuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxyXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcclxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgICB0aGlzLmlucHV0LmJsdXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcclxuICAgKiBAcGFyYW0gbmV3VGltZVxyXG4gICAqL1xyXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xyXG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xyXG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuXHJcbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpLm1vbnRoKHZhbC5nZXRNb250aCgpKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxyXG4gICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXHJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxyXG4gICAqL1xyXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXHJcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcclxuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJldHRpZnlJbnB1dERhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cclxuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxyXG4gICAgPFllYXJNb250aFBpY2tlclxyXG4gICAgICBkYXRlPXtkYXRlfVxyXG4gICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9XHJcbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxvY2FsZSxcclxuICAgICAgdGltZSxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGlucHV0UHJvcHMsXHJcbiAgICAgIGlucHV0UmVmLFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgc2VsZWN0ZWREYXlzLFxyXG4gICAgICBzaG93V2Vla051bWJlcnMsXHJcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcclxuICAgICAgLi4ub3RoZXJQcm9wc1xyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcclxuICAgIGNvbnN0IHRpbWVPYmogPSB7XHJcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxyXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9udGggPSB0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aCB8fFxyXG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcclxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXHJcbiAgICAgICAgY29uc3RyYWludHM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxyXG4gICAgICAgICAgICBwaW46IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0bzogJ3dpbmRvdycsXHJcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXHJcbiAgICAgICAgICB9XX1cclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcclxuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0RGF0ZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cclxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWNhbGVuZGFyYH1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERheVBpY2tlclxyXG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5cyB8fCB0aGlzLmlzU2FtZURheX1cclxuICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XHJcbiAgICAgICAgICAgIG1vbnRoPXttb250aH1cclxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XHJcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxyXG4gICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cclxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGltZSAmJlxyXG4gICAgICAgICAgPFRpbWVQaWNrZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cclxuICAgICAgICAgICAgdGltZT17dGltZU9ian1cclxuICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19