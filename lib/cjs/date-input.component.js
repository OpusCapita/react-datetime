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

var _yearMonthPicker = require('./year-month-picker/year-month-picker.component');

var _yearMonthPicker2 = _interopRequireDefault(_yearMonthPicker);

var _navbar = require('./navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

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

// Used in getTetherComponentAttachmentLocation fn
var DATETIME_POPUP_HEIGHT = 200;
var classPrefix = 'oc-datetime';

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var formatDate = props.formatDate,
        value = props.value;

    if (!state.showOverlay && value !== state.lastValue) {
      var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
      var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);
      return {
        lastValue: value,
        selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT),
        showOverlay: props.showOverlay || state.showOverlay,
        inputDate: inputDate
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
    var momentDate = typeof date === 'string' ? _moment2.default.utc(date, dateFormat) : date;
    if (!momentDate.isValid() || !date) return '';
    switch (type) {
      case FORMATS.PRETTY_DATE:
        return DateInput.removeInvisibleChars(momentDate.format(dateFormat));
      case FORMATS.UTC:
        return DateInput.removeInvisibleChars(momentDate.toISOString());
      case FORMATS.DATE_OBJECT:
      default:
        return momentDate.toDate();
    }
  };

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var formatDate = props.formatDate,
        value = props.value;

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
    var inputDate = formatDate ? formatDate(value)
    // inputDate: Prettified string shown in input field
    : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat);

    _this.state = {
      /* eslint-disable-next-line react/no-unused-state */
      lastValue: null,
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: DateInput.getDate(momentDate, FORMATS.DATE_OBJECT, props.dateFormat),
      inputDate: inputDate
    };

    _this.localeUtils = Object.assign(_moment4.default, {
      getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
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
   * Calculates whether or not popup has space to open below the input field
   * @returns {string} - an "anchor point" in input element
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
   * Clears input value
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

    /* eslint-disable no-unused-vars */
    var _props = this.props,
        className = _props.className,
        locale = _props.locale,
        time = _props.time,
        value = _props.value,
        inputProps = _props.inputProps,
        _inputRef = _props.inputRef,
        disabled = _props.disabled,
        selectedDays = _props.selectedDays,
        showWeekNumbers = _props.showWeekNumbers,
        minutesInterval = _props.minutesInterval,
        showClearValue = _props.showClearValue,
        disabledDays = _props.disabledDays,
        formatDate = _props.formatDate,
        otherProps = _objectWithoutProperties(_props, ['className', 'locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval', 'showClearValue', 'disabledDays', 'formatDate']);

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    var timeObj = {
      hour: momentDate.hour(),
      minute: momentDate.minute()
    };
    var month = this.state.dayPickerVisibleMonth || (typeof this.state.selectedDay === 'string' ? undefined : this.state.selectedDay);

    return _react2.default.createElement(
      _reactTether2.default,
      {
        attachment: this.getTetherComponentAttachmentLocation(),
        constraints: [{
          to: 'scrollParent',
          pin: true
        }, {
          to: 'window',
          attachment: 'together'
        }],
        className: classPrefix + ' ' + className
      },
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { className: classPrefix + '-input-container' },
        _react2.default.createElement(_reactBootstrap.FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          },
          value: this.state.inputDate,
          disabled: disabled,
          readOnly: !!formatDate,
          autoComplete: 'off'
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur
        })),
        showClearValue && value && this.renderClearValueButton()
      ),
      this.state.showOverlay && _react2.default.createElement(
        'div',
        {
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          },
          onMouseDown: this.handleOnOverlayMouseDown
        },
        _react2.default.createElement(_reactDayPicker2.default, _extends({}, otherProps, {
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          disabledDays: disabledDays,
          selectedDays: selectedDays || this.isSameDay,
          localeUtils: this.localeUtils,
          month: month,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement,
          navbarElement: _navbar2.default,
          onDayClick: this.handleDayClick
        })),
        time && _react2.default.createElement(_timePicker2.default, {
          onChange: this.handleTimePickerChange,
          time: timeObj,
          minutesInterval: minutesInterval
        })
      )
    );
  };

  return DateInput;
}(_react2.default.Component), _class.defaultProps = {
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
  minutesInterval: 5
}, _class.removeInvisibleChars = function (str) {
  return str.replace(/\u200E/g, '');
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
    return _moment2.default.localeData(_this3.props.locale).firstDayOfWeek();
  };

  this.getTetherComponentAttachmentLocation = function () {
    var time = _this3.props.time;

    var inputDimensions = _this3.input && _this3.input.getBoundingClientRect();

    // Popup will open below the input by default
    var attachment = 'top center';

    if (inputDimensions) {
      /* If there's time inputs present, the popup will be slightly taller. Height has to be
      hard coded, because we cannot determine the height of the popup before we have opened it */
      var popupHeight = time ? DATETIME_POPUP_HEIGHT + 50 : DATETIME_POPUP_HEIGHT;
      var popupBottomY = popupHeight + inputDimensions.height + inputDimensions.y;
      var windowHeight = window.innerHeight;

      // Popup has no space to open below the input, so..
      if (windowHeight < popupBottomY) attachment = 'bottom center';
    }

    return attachment;
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
    if (_moment2.default.utc(inputDate, dateFormat).isValid() && _this3.isValidFormat(inputDate)) {
      _this3.setState({
        selectedDay: DateInput.getDate(inputDate, FORMATS.DATE_OBJECT, dateFormat)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
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
  };

  this.handleInputBlur = function (e) {
    var onBlur = _this3.props.inputProps.onBlur;

    _this3.prettifyInputDate();

    // We want to close the overlay on blur, unless it was caused by a click on the calendar
    // overlay
    if (!_this3.mouseClickedOnContainer) {
      _this3.setState({
        showOverlay: false
      });
    }
    _this3.mouseClickedOnContainer = false;
    if (onBlur) onBlur(e);
  };

  this.handleDayClick = function (day) {
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (modifiers.disabled) return;

    var _props3 = _this3.props,
        dateFormat = _props3.dateFormat,
        formatDate = _props3.formatDate,
        value = _props3.value,
        time = _props3.time;

    var momentDate = _moment2.default.utc(day);

    var timeAdjustedDate = null;
    var currentMomentDate = (0, _moment2.default)(value, _moment2.default.ISO_8601).utc();
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

    _this3.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: inputDate
    }, function () {
      _this3.props.onChange(DateInput.getDate(timeAdjustedDate, FORMATS.UTC, dateFormat));
      _this3.input.blur();
    });

    _this3.props.onDayClick(day, modifiers);
  };

  this.handleTimePickerChange = function (newTime) {
    var _props4 = _this3.props,
        dateFormat = _props4.dateFormat,
        formatDate = _props4.formatDate,
        value = _props4.value;

    var momentDate = _moment2.default.utc(value);
    momentDate = momentDate.hour(newTime.hour);
    momentDate = momentDate.minutes(newTime.minute);
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    _this3.setState({
      inputDate: inputDate
    }, function () {
      _this3.props.onChange(DateInput.getDate(momentDate, FORMATS.UTC, dateFormat));
    });
  };

  this.handleYearMonthChange = function (val) {
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat,
        formatDate = _props5.formatDate;

    var momentDate = value ? _moment2.default.utc(value, _moment2.default.ISO_8601) : _moment2.default.utc();

    momentDate.year(val.getFullYear()).month(val.getMonth());
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);

    _this3.setState({
      inputDate: inputDate,
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

  this.handleClearClick = function () {
    var onChange = _this3.props.onChange;

    if (!onChange) throw new TypeError('react-datetime: onChange callback is not set');
    _this3.props.onChange('');
  };

  this.isSameDay = function (day) {
    return _reactDayPicker.DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) {
      pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    }
    return pattern.test(date.trim());
  };

  this.prettifyInputDate = function () {
    var _props6 = _this3.props,
        value = _props6.value,
        dateFormat = _props6.dateFormat,
        formatDate = _props6.formatDate;

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    var inputDate = formatDate ? formatDate(value) : DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat);
    _this3.setState({ inputDate: inputDate });
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return _react2.default.createElement(_yearMonthPicker2.default, { date: date, onChange: _this3.handleYearMonthChange, locale: _this3.props.locale });
  };

  this.renderClearValueButton = function () {
    return _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: _this3.props.disabled ? classPrefix + '-clear-value disabled' : classPrefix + '-clear-value',
        onClick: _this3.handleClearClick,
        disabled: _this3.props.disabled
      },
      _react2.default.createElement(
        'span',
        null,
        'x'
      )
    );
  };
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEQVRFVElNRV9QT1BVUF9IRUlHSFQiLCJjbGFzc1ByZWZpeCIsIkRhdGVJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInByb3BzIiwic3RhdGUiLCJmb3JtYXREYXRlIiwidmFsdWUiLCJzaG93T3ZlcmxheSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJJU09fODYwMSIsImlucHV0RGF0ZSIsImdldERhdGUiLCJkYXRlRm9ybWF0Iiwic2VsZWN0ZWREYXkiLCJkYXRlIiwidHlwZSIsImlzVmFsaWQiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwidG9EYXRlIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsImxvY2FsZVV0aWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiTG9jYWxlVXRpbHMiLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwibW91c2VDbGlja2VkT25Db250YWluZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzTmFtZSIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsInNob3dDbGVhclZhbHVlIiwiZGlzYWJsZWREYXlzIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24iLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsInJlbmRlckNsZWFyVmFsdWVCdXR0b24iLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiTmF2YmFyIiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJzdHIiLCJyZXBsYWNlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5IiwiaW5wdXREaW1lbnNpb25zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9wdXBIZWlnaHQiLCJwb3B1cEJvdHRvbVkiLCJoZWlnaHQiLCJ5Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJoYW5kbGVDbGVhckNsaWNrIiwiVHlwZUVycm9yIiwiRGF0ZVV0aWxzIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoi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RFA7QUFFRSxtQkFDRSxPQUFLL0QsS0FBTCxDQUFXMEMsUUFBWCxHQUF5QjdDLFdBQXpCLDZCQUFpRUEsV0FBakUsaUJBSEo7QUFLRSxpQkFBUyxPQUFLd0gsZ0JBTGhCO0FBTUUsa0JBQVUsT0FBS3JILEtBQUwsQ0FBVzBDO0FBTnZCO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLEtBRHVCO0FBQUEsRzs7a0JBcFpONUMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbi8vIFVzZWQgaW4gZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIGZuXG5jb25zdCBEQVRFVElNRV9QT1BVUF9IRUlHSFQgPSAyMDA7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBmb3JtYXREYXRlOiB1bmRlZmluZWQsXG4gICAgbG9jYWxlOiAnZW4tR0InLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIGRpc2FibGVkRGF5czogbnVsbCxcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHNob3dDbGVhclZhbHVlOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgdmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogdmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiBEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtb21lbnREYXRlLnRvRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICBpbnB1dERhdGUsXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUsIHRpbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnNldCgnaG91cicsIGN1cnJlbnRIb3Vycykuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGZvcm1hdERhdGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSk7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGlucHV0IHZhbHVlXG4gICAqL1xuICBoYW5kbGVDbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvbkNoYW5nZSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhY3QtZGF0ZXRpbWU6IG9uQ2hhbmdlIGNhbGxiYWNrIGlzIG5vdCBzZXQnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkge1xuICAgICAgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXIgZGF0ZT17ZGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfSBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfSAvPlxuICApO1xuXG4gIHJlbmRlckNsZWFyVmFsdWVCdXR0b24gPSAoKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVkID8gYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlIGRpc2FibGVkYCA6IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZWBcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJDbGlja31cbiAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgID5cbiAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3RlZERheXMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICBzaG93Q2xlYXJWYWx1ZSxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGZvcm1hdERhdGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG4gICAgY29uc3QgbW9udGggPVxuICAgICAgdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcbiAgICAgICh0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9e3RoaXMuZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uKCl9XG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWlucHV0LWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICByZWFkT25seT17ISFmb3JtYXREYXRlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=