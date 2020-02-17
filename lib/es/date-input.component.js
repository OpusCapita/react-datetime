function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import TetherComponent from 'react-tether';
import 'react-day-picker/lib/style.css'; // App imports

import TimePicker from './time-picker/time-picker.component';
import YearMonthPicker from './year-month-picker/year-month-picker.component';
import Navbar from './navbar/navbar.component';
import './date-input.scss'; // Date formats used by the component (mainly by the getDate method)

var FORMATS = {
  UTC: 'UTC',
  PRETTY_DATE: 'PRETTY_DATE',
  DATE_OBJECT: 'DATE_OBJECT'
}; // Used in getTetherComponentAttachmentLocation fn

var DATETIME_POPUP_HEIGHT = 200;
var classPrefix = 'oc-datetime';

var DateInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DateInput, _React$Component);

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var formatDate = props.formatDate,
        value = props.value;

    if (!state.showOverlay && value !== state.lastValue) {
      var momentDate = moment.utc(value, moment.ISO_8601);
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);
      return {
        lastValue: value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
        showOverlay: props.showOverlay || state.showOverlay,
        inputDate: inputDate
      };
    }

    return null;
  }
  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
   */
  ;

  DateInput.getDate = function getDate(date, type, dateFormat) {
    var momentDate = typeof date === 'string' ? moment.utc(date, dateFormat) : date;
    if (!momentDate.isValid() || !date) return '';

    switch (type) {
      case FORMATS.PRETTY_DATE:
        return DateInput.removeInvisibleChars(momentDate.format(dateFormat));

      case FORMATS.UTC:
        return DateInput.removeInvisibleChars(momentDate.toISOString());

      case FORMATS.DATE_OBJECT:
      default:
        // UTC day might differ from local day, therefore UTC offset
        // must be discounted.
        return new Date(moment(momentDate.format('L'), 'L'));
    }
  };

  function DateInput(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (e) {
      if (!_this.calendarContainer) return;
      var showOverlay = _this.state.showOverlay; // Closes overlay if user clicks outside the calendar (and input field)

      if (!_this.calendarContainer.contains(e.target) && showOverlay && e.target !== _this.input) {
        _this.closeOverlay();

        document.removeEventListener('click', _this.onDocumentClick);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getFirstDayOfWeek", function () {
      var locale = _this.props.locale;
      return moment.localeData(locale).firstDayOfWeek();
    });

    _defineProperty(_assertThisInitialized(_this), "getTetherComponentAttachmentLocation", function () {
      var time = _this.props.time;

      var inputDimensions = _this.input && _this.input.getBoundingClientRect(); // Popup will open below the input by default


      var attachment = 'top center';

      if (inputDimensions) {
        /* If there's time inputs present, the popup will be slightly taller. Height has to be
        hard coded, because we cannot determine the height of the popup before we have opened it */
        var popupHeight = time ? DATETIME_POPUP_HEIGHT + 50 : DATETIME_POPUP_HEIGHT;
        var popupBottomY = popupHeight + inputDimensions.height + inputDimensions.y;
        var windowHeight = window.innerHeight; // Popup has no space to open below the input, so..

        if (windowHeight < popupBottomY) attachment = 'bottom center';
      }

      return attachment;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (e) {
      var onFocus = _this.props.inputProps.onFocus;
      var _this$state = _this.state,
          showOverlay = _this$state.showOverlay,
          selectedDay = _this$state.selectedDay;

      _this.setState({
        showOverlay: true
      }, function () {
        // Delays the execution so that the dayPicker opens before selecting a day
        setTimeout(function () {
          if (!showOverlay && _this.dayPicker && selectedDay) _this.dayPicker.showMonth(selectedDay);
        });
      });

      document.addEventListener('click', _this.onDocumentClick);
      if (onFocus) onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "closeOverlay", function (e) {
      var showOverlay = _this.state.showOverlay;
      var onBlur = _this.props.inputProps.onBlur;

      _this.setState({
        showOverlay: false
      }, function () {
        if (showOverlay) _this.input.focus();
        if (onBlur) onBlur(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      var inputDate = e.target.value;
      var selectedDay = _this.state.selectedDay;
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          inputProps = _this$props.inputProps,
          onChange = _this$props.onChange;

      _this.setState({
        inputDate: inputDate
      }); // This fires only if the new date is valid in given format


      if (moment.utc(inputDate, dateFormat).isValid() && _this.isValidFormat(inputDate)) {
        _this.setState({
          selectedDay: DateInput.getDate(inputDate, FORMATS.DATE_OBJECT, dateFormat)
        }, function () {
          // If dayPicker is open, we will show the correct month
          if (_this.dayPicker) _this.dayPicker.showMonth(selectedDay);
        });

        if (inputProps.onChange) {
          inputProps.onChange(DateInput.removeInvisibleChars(inputDate));
        } else {
          onChange(DateInput.getDate(inputDate, FORMATS.UTC, dateFormat));
        }
      } else {
        // If the value is invalid we reset the model value
        onChange(null);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (e) {
      var onBlur = _this.props.inputProps.onBlur;

      _this.prettifyInputDate(); // We want to close the overlay on blur, unless it was caused by a click on the calendar
      // overlay


      if (!_this.mouseClickedOnContainer) {
        _this.setState({
          showOverlay: false
        });
      }

      _this.mouseClickedOnContainer = false;
      if (onBlur) onBlur(e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDayClick", function (day, modifiers) {
      if (modifiers === void 0) {
        modifiers = {};
      }

      if (modifiers.disabled) return;
      var _this$props2 = _this.props,
          dateFormat = _this$props2.dateFormat,
          formatDate = _this$props2.formatDate,
          value = _this$props2.value,
          time = _this$props2.time,
          onChange = _this$props2.onChange,
          onDayClick = _this$props2.onDayClick; // UTC day might differ from local date therefore UTC offset must be discounted.

      var momentDate = moment.utc(moment(day).format('L'), 'L');
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

      var inputDate = formatDate ? formatDate(timeAdjustedDate) : DateInput.getDate(timeAdjustedDate, FORMATS.PRETTY_DATE, dateFormat);

      _this.setState({
        selectedDay: day,
        showOverlay: false,
        inputDate: inputDate
      }, function () {
        onChange(DateInput.getDate(timeAdjustedDate, FORMATS.UTC, dateFormat));

        _this.input.blur();
      });

      onDayClick(day, modifiers);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimePickerChange", function (newTime) {
      var _this$props3 = _this.props,
          dateFormat = _this$props3.dateFormat,
          formatDate = _this$props3.formatDate,
          value = _this$props3.value,
          onChange = _this$props3.onChange;
      var momentDate = moment.utc(value);
      momentDate = momentDate.hour(newTime.hour);
      momentDate = momentDate.minutes(newTime.minute);
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

      _this.setState({
        inputDate: inputDate
      }, function () {
        onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleYearMonthChange", function (val) {
      var _this$props4 = _this.props,
          value = _this$props4.value,
          dateFormat = _this$props4.dateFormat,
          formatDate = _this$props4.formatDate,
          onChange = _this$props4.onChange;
      var momentDate = value ? moment.utc(value, moment.ISO_8601) : moment.utc();
      momentDate.year(val.getFullYear()).month(val.getMonth());
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

      _this.setState({
        inputDate: inputDate,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, dateFormat),
        dayPickerVisibleMonth: val
      }, function () {
        onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnOverlayMouseDown", function (e) {
      if (_this.calendarContainer.contains(e.target)) {
        _this.mouseClickedOnContainer = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearClick", function () {
      var onChange = _this.props.onChange;
      if (!onChange) throw new TypeError('react-datetime: onChange callback is not set');
      onChange('');
    });

    _defineProperty(_assertThisInitialized(_this), "isSameDay", function (day) {
      var selectedDay = _this.state.selectedDay;
      return DateUtils.isSameDay(selectedDay, day);
    });

    _defineProperty(_assertThisInitialized(_this), "isValidFormat", function (date) {
      var time = _this.props.time;
      var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;

      if (time) {
        pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
      }

      return pattern.test(date.trim());
    });

    _defineProperty(_assertThisInitialized(_this), "prettifyInputDate", function () {
      var _this$props5 = _this.props,
          value = _this$props5.value,
          dateFormat = _this$props5.dateFormat,
          formatDate = _this$props5.formatDate;
      var momentDate = moment.utc(value, moment.ISO_8601);
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

      _this.setState({
        inputDate: inputDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCaptionElement", function (_ref) {
      var date = _ref.date;
      var locale = _this.props.locale;
      return React.createElement(YearMonthPicker, {
        date: date,
        onChange: _this.handleYearMonthChange,
        locale: locale
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderClearValueButton", function () {
      var disabled = _this.props.disabled;
      var className = classPrefix + "-clear-value" + (disabled ? ' disabled' : '');
      return React.createElement("button", {
        type: "button",
        className: className,
        onClick: _this.handleClearClick,
        disabled: disabled
      }, React.createElement("span", null, "x"));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDateInput", function () {
      var _this$props6 = _this.props,
          _inputRef = _this$props6.inputRef,
          disabled = _this$props6.disabled,
          formatDate = _this$props6.formatDate,
          inputProps = _this$props6.inputProps,
          showClearValue = _this$props6.showClearValue,
          value = _this$props6.value;
      var inputDate = _this.state.inputDate;
      return React.createElement(FormGroup, {
        className: classPrefix + "-input-container"
      }, React.createElement(FormControl, _extends({
        type: "text",
        inputRef: function inputRef(el) {
          _this.input = el;

          _inputRef(el);
        },
        value: inputDate,
        disabled: disabled,
        readOnly: !!formatDate,
        autoComplete: "off"
      }, inputProps, {
        onChange: _this.handleInputChange,
        onFocus: _this.handleInputFocus,
        onBlur: _this.handleInputBlur
      })), showClearValue && value && _this.renderClearValueButton());
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendar", function () {
      var _this$props7 = _this.props,
          className = _this$props7.className,
          locale = _this$props7.locale,
          time = _this$props7.time,
          value = _this$props7.value,
          inputProps = _this$props7.inputProps,
          inputRef = _this$props7.inputRef,
          disabled = _this$props7.disabled,
          selectedDays = _this$props7.selectedDays,
          showWeekNumbers = _this$props7.showWeekNumbers,
          minutesInterval = _this$props7.minutesInterval,
          showClearValue = _this$props7.showClearValue,
          disabledDays = _this$props7.disabledDays,
          formatDate = _this$props7.formatDate,
          calendarType = _this$props7.calendarType,
          otherProps = _objectWithoutPropertiesLoose(_this$props7, ["className", "locale", "time", "value", "inputProps", "inputRef", "disabled", "selectedDays", "showWeekNumbers", "minutesInterval", "showClearValue", "disabledDays", "formatDate", "calendarType"]);

      var _this$state2 = _this.state,
          dayPickerVisibleMonth = _this$state2.dayPickerVisibleMonth,
          selectedDay = _this$state2.selectedDay;
      var momentDate = moment.utc(value, moment.ISO_8601);
      var timeObj = {
        hour: momentDate.hour(),
        minute: momentDate.minute()
      };
      var month = dayPickerVisibleMonth || (typeof selectedDay === 'string' ? undefined : selectedDay);
      return React.createElement("div", {
        role: "presentation",
        className: classPrefix + "-calendar",
        ref: function ref(el) {
          _this.calendarContainer = el;
        },
        onMouseDown: _this.handleOnOverlayMouseDown
      }, React.createElement(DayPicker, _extends({}, otherProps, {
        ref: function ref(el) {
          _this.dayPicker = el;
        },
        disabledDays: disabledDays,
        selectedDays: selectedDays || _this.isSameDay,
        localeUtils: _this.localeUtils,
        month: month,
        showWeekNumbers: showWeekNumbers,
        firstDayOfWeek: _this.getFirstDayOfWeek(),
        locale: locale,
        captionElement: _this.renderCaptionElement,
        navbarElement: Navbar,
        onDayClick: _this.handleDayClick
      })), time && React.createElement(TimePicker, {
        onChange: _this.handleTimePickerChange,
        time: timeObj,
        minutesInterval: minutesInterval
      }));
    });

    var _formatDate = props.formatDate,
        _value = props.value;

    var _momentDate = moment.utc(_value, moment.ISO_8601);

    _this.onDocumentClick = _this.onDocumentClick.bind(_assertThisInitialized(_this));

    var _inputDate = _formatDate ? _formatDate(_value) // inputDate: Prettified string shown in input field
    : DateInput.getDate(_momentDate, FORMATS.PRETTY_DATE, props.dateFormat);

    _this.state = {
      /* eslint-disable-next-line react/no-unused-state */
      lastValue: null,
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: DateInput.getDate(_momentDate, FORMATS.DATE_OBJECT, props.dateFormat),
      inputDate: _inputDate
    };
    _this.localeUtils = Object.assign(LocaleUtils, {
      getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
      }
    });
    _this.input = null;
    _this.dayPicker = null; // Used in onBlur handler to determine whether or not blur happened because of a click
    // on the overlay

    _this.mouseClickedOnContainer = false;
    return _this;
  }

  var _proto = DateInput.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }
  /**
   * Fires every time dayPicker is open and document is clicked
   * @param e
   */
  ;

  _proto.render = function render() {
    var _this$props8 = this.props,
        className = _this$props8.className,
        calendarType = _this$props8.calendarType;
    var showOverlay = this.state.showOverlay;

    if (calendarType === 'popup') {
      return React.createElement(TetherComponent, {
        attachment: this.getTetherComponentAttachmentLocation(),
        constraints: [{
          to: 'scrollParent',
          pin: ['top']
        }, {
          to: 'window',
          attachment: 'together'
        }],
        className: classPrefix + " " + className + " " + classPrefix + "-popup-container"
      }, this.renderDateInput(), showOverlay && this.renderCalendar());
    }

    return React.createElement("div", null, this.renderDateInput(), React.createElement("div", {
      className: classPrefix + " " + className + " " + classPrefix + "-static-container"
    }, this.renderCalendar()));
  };

  return DateInput;
}(React.Component);

_defineProperty(DateInput, "removeInvisibleChars", function (str) {
  return str.replace(/\u200E/g, '');
});

_defineProperty(DateInput, "defaultProps", {
  className: '',
  value: '',
  dateFormat: 'L',
  formatDate: undefined,
  locale: 'en-GB',
  onChange: function onChange() {},
  onDayClick: function onDayClick() {},
  inputProps: {},
  inputRef: function inputRef() {},
  disabled: false,
  selectedDays: null,
  disabledDays: null,
  showOverlay: false,
  showWeekNumbers: true,
  showClearValue: true,
  time: false,
  minutesInterval: 5,
  calendarType: 'popup'
});

export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiVGltZVBpY2tlciIsIlllYXJNb250aFBpY2tlciIsIk5hdmJhciIsIkZPUk1BVFMiLCJVVEMiLCJQUkVUVFlfREFURSIsIkRBVEVfT0JKRUNUIiwiREFURVRJTUVfUE9QVVBfSEVJR0hUIiwiY2xhc3NQcmVmaXgiLCJEYXRlSW5wdXQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJwcm9wcyIsInN0YXRlIiwiZm9ybWF0RGF0ZSIsInZhbHVlIiwic2hvd092ZXJsYXkiLCJsYXN0VmFsdWUiLCJtb21lbnREYXRlIiwidXRjIiwiSVNPXzg2MDEiLCJpbnB1dERhdGUiLCJnZXREYXRlIiwiZGF0ZUZvcm1hdCIsInNlbGVjdGVkRGF5IiwiZGF0ZSIsInR5cGUiLCJpc1ZhbGlkIiwicmVtb3ZlSW52aXNpYmxlQ2hhcnMiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsIkRhdGUiLCJlIiwiY2FsZW5kYXJDb250YWluZXIiLCJjb250YWlucyIsInRhcmdldCIsImlucHV0IiwiY2xvc2VPdmVybGF5IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Eb2N1bWVudENsaWNrIiwibG9jYWxlIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwidGltZSIsImlucHV0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImF0dGFjaG1lbnQiLCJwb3B1cEhlaWdodCIsInBvcHVwQm90dG9tWSIsImhlaWdodCIsInkiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm9uRm9jdXMiLCJpbnB1dFByb3BzIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiZGF5UGlja2VyIiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQmx1ciIsImZvY3VzIiwib25DaGFuZ2UiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJtb3VzZUNsaWNrZWRPbkNvbnRhaW5lciIsImRheSIsIm1vZGlmaWVycyIsImRpc2FibGVkIiwib25EYXlDbGljayIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwiaG91ciIsIm1pbnV0ZXMiLCJtaW51dGUiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwiVHlwZUVycm9yIiwiaXNTYW1lRGF5IiwicGF0dGVybiIsInRlc3QiLCJ0cmltIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwiY2xhc3NOYW1lIiwiaGFuZGxlQ2xlYXJDbGljayIsImlucHV0UmVmIiwic2hvd0NsZWFyVmFsdWUiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsInJlbmRlckNsZWFyVmFsdWVCdXR0b24iLCJzZWxlY3RlZERheXMiLCJzaG93V2Vla051bWJlcnMiLCJtaW51dGVzSW50ZXJ2YWwiLCJkaXNhYmxlZERheXMiLCJjYWxlbmRhclR5cGUiLCJvdGhlclByb3BzIiwidGltZU9iaiIsInVuZGVmaW5lZCIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImxvY2FsZVV0aWxzIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsImJpbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiIsInRvIiwicGluIiwicmVuZGVyRGF0ZUlucHV0IiwicmVuZGVyQ2FsZW5kYXIiLCJDb21wb25lbnQiLCJzdHIiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLFdBQXBCLFFBQXVDLGlCQUF2QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxTQUFQLElBQW9CQyxTQUFwQixRQUFxQyxrQkFBckM7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHlCQUF4QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsY0FBNUI7QUFDQSxPQUFPLGdDQUFQLEMsQ0FFQTs7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHFDQUF2QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIsaURBQTVCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwyQkFBbkI7QUFDQSxPQUFPLG1CQUFQLEMsQ0FFQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7QUFFZEMsRUFBQUEsV0FBVyxFQUFFLGFBRkM7QUFHZEMsRUFBQUEsV0FBVyxFQUFFO0FBSEMsQ0FBaEIsQyxDQU1BOztBQUNBLElBQU1DLHFCQUFxQixHQUFHLEdBQTlCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCOztJQUVxQkMsUzs7Ozs7WUE2Q1pDLHdCLEdBQVAsa0NBQWdDQyxLQUFoQyxFQUF1Q0MsS0FBdkMsRUFBOEM7QUFBQSxRQUNwQ0MsVUFEb0MsR0FDZEYsS0FEYyxDQUNwQ0UsVUFEb0M7QUFBQSxRQUN4QkMsS0FEd0IsR0FDZEgsS0FEYyxDQUN4QkcsS0FEd0I7O0FBRTVDLFFBQUksQ0FBQ0YsS0FBSyxDQUFDRyxXQUFQLElBQXNCRCxLQUFLLEtBQUtGLEtBQUssQ0FBQ0ksU0FBMUMsRUFBcUQ7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QUFBLElBQUksRUFBRSxLQWhCYztBQWlCcEIrRCxFQUFBQSxlQUFlLEVBQUUsQ0FqQkc7QUFrQnBCRSxFQUFBQSxZQUFZLEVBQUU7QUFsQk0sQzs7U0F4QkhuRyxTIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCAnLi9kYXRlLWlucHV0LnNjc3MnO1xuXG4vLyBEYXRlIGZvcm1hdHMgdXNlZCBieSB0aGUgY29tcG9uZW50IChtYWlubHkgYnkgdGhlIGdldERhdGUgbWV0aG9kKVxuY29uc3QgRk9STUFUUyA9IHtcbiAgVVRDOiAnVVRDJyxcbiAgUFJFVFRZX0RBVEU6ICdQUkVUVFlfREFURScsXG4gIERBVEVfT0JKRUNUOiAnREFURV9PQkpFQ1QnLFxufTtcblxuLy8gVXNlZCBpbiBnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24gZm5cbmNvbnN0IERBVEVUSU1FX1BPUFVQX0hFSUdIVCA9IDIwMDtcbmNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWRhdGV0aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHJlbW92ZUludmlzaWJsZUNoYXJzID0gKHN0cikgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjYWxlbmRhclR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3BvcHVwJywgJ3N0YXRpYyddKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBmb3JtYXREYXRlOiB1bmRlZmluZWQsXG4gICAgbG9jYWxlOiAnZW4tR0InLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIGRpc2FibGVkRGF5czogbnVsbCxcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHNob3dDbGVhclZhbHVlOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgICBjYWxlbmRhclR5cGU6ICdwb3B1cCcsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgZ2l2ZW4gZGF0ZSBpbnRvIHdhbnRlZCB0eXBlIChzdHJpbmcvZGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSBkYXRlIC0ge3N0cmluZywgbW9tZW50IG9iamVjdH1cbiAgICogQHBhcmFtIHR5cGUgLSB7c3RyaW5nLCBkYXRlIG9iamVjdH0gdHlwZSBvZiB0aGUgcmV0dXJuIHZhbHVlXG4gICAqIEBwYXJhbSBkYXRlRm9ybWF0IHtzdHJpbmd9IGRhdGUgZm9ybWF0LCBkZWZhdWx0cyB0byAnTS9EL1lZWVknXG4gICAqICgnTS9EL1lZWVknIGg6bW0gd2hlbiB1c2luZyBEYXRlVGltZSlcbiAgICogKiBAcmV0dXJucyB7c3RyaW5nLCBkYXRlfVxuICAgKi9cbiAgc3RhdGljIGdldERhdGUoZGF0ZSwgdHlwZSwgZGF0ZUZvcm1hdCkge1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgPyBtb21lbnQudXRjKGRhdGUsIGRhdGVGb3JtYXQpIDogZGF0ZTtcbiAgICBpZiAoIW1vbWVudERhdGUuaXNWYWxpZCgpIHx8ICFkYXRlKSByZXR1cm4gJyc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEZPUk1BVFMuUFJFVFRZX0RBVEU6XG4gICAgICAgIHJldHVybiBEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLlVUQzpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVVRDIGRheSBtaWdodCBkaWZmZXIgZnJvbSBsb2NhbCBkYXksIHRoZXJlZm9yZSBVVEMgb2Zmc2V0XG4gICAgICAgIC8vIG11c3QgYmUgZGlzY291bnRlZC5cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG1vbWVudChtb21lbnREYXRlLmZvcm1hdCgnTCcpLCAnTCcpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgaW5wdXREYXRlLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihMb2NhbGVVdGlscywge1xuICAgICAgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcblxuICAgIC8vIFVzZWQgaW4gb25CbHVyIGhhbmRsZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGJsdXIgaGFwcGVuZWQgYmVjYXVzZSBvZiBhIGNsaWNrXG4gICAgLy8gb24gdGhlIG92ZXJsYXlcbiAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KVxuICAgICAgJiYgc2hvd092ZXJsYXlcbiAgICAgICYmIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0XG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvY2FsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gbW9tZW50LmxvY2FsZURhdGEobG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgd2hldGhlciBvciBub3QgcG9wdXAgaGFzIHNwYWNlIHRvIG9wZW4gYmVsb3cgdGhlIGlucHV0IGZpZWxkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gXCJhbmNob3IgcG9pbnRcIiBpbiBpbnB1dCBlbGVtZW50XG4gICAqL1xuICBnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0RGltZW5zaW9ucyA9IHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIFBvcHVwIHdpbGwgb3BlbiBiZWxvdyB0aGUgaW5wdXQgYnkgZGVmYXVsdFxuICAgIGxldCBhdHRhY2htZW50ID0gJ3RvcCBjZW50ZXInO1xuXG4gICAgaWYgKGlucHV0RGltZW5zaW9ucykge1xuICAgICAgLyogSWYgdGhlcmUncyB0aW1lIGlucHV0cyBwcmVzZW50LCB0aGUgcG9wdXAgd2lsbCBiZSBzbGlnaHRseSB0YWxsZXIuIEhlaWdodCBoYXMgdG8gYmVcbiAgICAgIGhhcmQgY29kZWQsIGJlY2F1c2Ugd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBiZWZvcmUgd2UgaGF2ZSBvcGVuZWQgaXQgKi9cbiAgICAgIGNvbnN0IHBvcHVwSGVpZ2h0ID0gdGltZSA/IERBVEVUSU1FX1BPUFVQX0hFSUdIVCArIDUwIDogREFURVRJTUVfUE9QVVBfSEVJR0hUO1xuICAgICAgY29uc3QgcG9wdXBCb3R0b21ZID0gcG9wdXBIZWlnaHQgKyBpbnB1dERpbWVuc2lvbnMuaGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLnk7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIC8vIFBvcHVwIGhhcyBubyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCwgc28uLlxuICAgICAgaWYgKHdpbmRvd0hlaWdodCA8IHBvcHVwQm90dG9tWSkgYXR0YWNobWVudCA9ICdib3R0b20gY2VudGVyJztcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNobWVudDtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wczogeyBvbkZvY3VzIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IHRydWUgfSwgKCkgPT4ge1xuICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXNob3dPdmVybGF5ICYmIHRoaXMuZGF5UGlja2VyICYmIHNlbGVjdGVkRGF5KSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgoc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAob25Gb2N1cykgb25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGlucHV0UHJvcHM6IHsgb25CbHVyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICBpZiAoc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIGlmIChvbkJsdXIpIG9uQmx1cihlKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBpbnB1dFByb3BzLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gICAgLy8gVGhpcyBmaXJlcyBvbmx5IGlmIHRoZSBuZXcgZGF0ZSBpcyB2YWxpZCBpbiBnaXZlbiBmb3JtYXRcbiAgICBpZiAobW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQpLmlzVmFsaWQoKSAmJiB0aGlzLmlzVmFsaWRGb3JtYXQoaW5wdXREYXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gSWYgZGF5UGlja2VyIGlzIG9wZW4sIHdlIHdpbGwgc2hvdyB0aGUgY29ycmVjdCBtb250aFxuICAgICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGlucHV0UHJvcHM6IHsgb25CbHVyIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcmV0dGlmeUlucHV0RGF0ZSgpO1xuXG4gICAgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgb3ZlcmxheSBvbiBibHVyLCB1bmxlc3MgaXQgd2FzIGNhdXNlZCBieSBhIGNsaWNrIG9uIHRoZSBjYWxlbmRhclxuICAgIC8vIG92ZXJsYXlcbiAgICBpZiAoIXRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IGZhbHNlO1xuICAgIGlmIChvbkJsdXIpIG9uQmx1cihlKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBkYXlQaWNrZXIgY2xpY2tcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGhhbmRsZURheUNsaWNrID0gKGRheSwgbW9kaWZpZXJzID0ge30pID0+IHtcbiAgICBpZiAobW9kaWZpZXJzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB7XG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgZm9ybWF0RGF0ZSxcbiAgICAgIHZhbHVlLFxuICAgICAgdGltZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25EYXlDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBVVEMgZGF5IG1pZ2h0IGRpZmZlciBmcm9tIGxvY2FsIGRhdGUgdGhlcmVmb3JlIFVUQyBvZmZzZXQgbXVzdCBiZSBkaXNjb3VudGVkLlxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKG1vbWVudChkYXkpLmZvcm1hdCgnTCcpLCAnTCcpO1xuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnNldCgnaG91cicsIGN1cnJlbnRIb3Vycykuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIGlucHV0RGF0ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICBvbkRheUNsaWNrKGRheSwgbW9kaWZpZXJzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIG5ld1RpbWVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBmb3JtYXREYXRlLFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSwgKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBmb3JtYXREYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZSxcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGlucHV0IHZhbHVlXG4gICAqL1xuICBoYW5kbGVDbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvbkNoYW5nZSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhY3QtZGF0ZXRpbWU6IG9uQ2hhbmdlIGNhbGxiYWNrIGlzIG5vdCBzZXQnKTtcbiAgICBvbkNoYW5nZSgnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gKGRheSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIERhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXksIGRheSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGltZSkge1xuICAgICAgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IHsgbG9jYWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8WWVhck1vbnRoUGlja2VyXG4gICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cbiAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDbGVhclZhbHVlQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlJHtkaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJyd9YDtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJDbGlja31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj54PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRhdGVJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZm9ybWF0RGF0ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBzaG93Q2xlYXJWYWx1ZSxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0RGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1pbnB1dC1jb250YWluZXJgfT5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXtpbnB1dERhdGV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHJlYWRPbmx5PXshIWZvcm1hdERhdGV9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNhbGVuZGFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2VsZWN0ZWREYXlzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgbWludXRlc0ludGVydmFsLFxuICAgICAgc2hvd0NsZWFyVmFsdWUsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBmb3JtYXREYXRlLFxuICAgICAgY2FsZW5kYXJUeXBlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRheVBpY2tlclZpc2libGVNb250aCxcbiAgICAgIHNlbGVjdGVkRGF5LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID0gZGF5UGlja2VyVmlzaWJsZU1vbnRoXG4gICAgICB8fCAodHlwZW9mIHNlbGVjdGVkRGF5ID09PSAnc3RyaW5nJyA/IHVuZGVmaW5lZCA6IHNlbGVjdGVkRGF5KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgPlxuICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRGF5c31cbiAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5cyB8fCB0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgLz5cbiAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjYWxlbmRhclR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChjYWxlbmRhclR5cGUgPT09ICdwb3B1cCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgICBhdHRhY2htZW50PXt0aGlzLmdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbigpfVxuICAgICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiBbJ3RvcCddLFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfV19XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9ICR7Y2xhc3NQcmVmaXh9LXBvcHVwLWNvbnRhaW5lcmB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEYXRlSW5wdXQoKX1cbiAgICAgICAgICB7c2hvd092ZXJsYXkgJiYgdGhpcy5yZW5kZXJDYWxlbmRhcigpfVxuICAgICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJEYXRlSW5wdXQoKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX0gJHtjbGFzc1ByZWZpeH0tc3RhdGljLWNvbnRhaW5lcmB9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckNhbGVuZGFyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19