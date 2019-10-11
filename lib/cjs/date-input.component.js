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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEQVRFVElNRV9QT1BVUF9IRUlHSFQiLCJjbGFzc1ByZWZpeCIsIkRhdGVJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInByb3BzIiwic3RhdGUiLCJmb3JtYXREYXRlIiwidmFsdWUiLCJzaG93T3ZlcmxheSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJJU09fODYwMSIsImlucHV0RGF0ZSIsImdldERhdGUiLCJkYXRlRm9ybWF0Iiwic2VsZWN0ZWREYXkiLCJkYXRlIiwidHlwZSIsImlzVmFsaWQiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwidG9EYXRlIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsImxvY2FsZVV0aWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiTG9jYWxlVXRpbHMiLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwibW91c2VDbGlja2VkT25Db250YWluZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNsYXNzTmFtZSIsImxvY2FsZSIsInRpbWUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInNlbGVjdGVkRGF5cyIsInNob3dXZWVrTnVtYmVycyIsIm1pbnV0ZXNJbnRlcnZhbCIsInNob3dDbGVhclZhbHVlIiwiZGlzYWJsZWREYXlzIiwib3RoZXJQcm9wcyIsInRpbWVPYmoiLCJob3VyIiwibWludXRlIiwibW9udGgiLCJkYXlQaWNrZXJWaXNpYmxlTW9udGgiLCJ1bmRlZmluZWQiLCJnZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24iLCJ0byIsInBpbiIsImF0dGFjaG1lbnQiLCJlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlSW5wdXRGb2N1cyIsImhhbmRsZUlucHV0Qmx1ciIsInJlbmRlckNsZWFyVmFsdWVCdXR0b24iLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biIsImlzU2FtZURheSIsInJlbmRlckNhcHRpb25FbGVtZW50IiwiTmF2YmFyIiwiaGFuZGxlRGF5Q2xpY2siLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsIm9uRGF5Q2xpY2siLCJzdHIiLCJyZXBsYWNlIiwiZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VPdmVybGF5IiwiaW5wdXREaW1lbnNpb25zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9wdXBIZWlnaHQiLCJwb3B1cEJvdHRvbVkiLCJoZWlnaHQiLCJ5Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsInByZXR0aWZ5SW5wdXREYXRlIiwiZGF5IiwibW9kaWZpZXJzIiwidGltZUFkanVzdGVkRGF0ZSIsImN1cnJlbnRNb21lbnREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0IiwiY3VycmVudE1pbnV0ZXMiLCJzZXQiLCJzdGFydE9mIiwiYmx1ciIsIm5ld1RpbWUiLCJtaW51dGVzIiwiaGFuZGxlWWVhck1vbnRoQ2hhbmdlIiwidmFsIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJoYW5kbGVDbGVhckNsaWNrIiwiVHlwZUVycm9yIiwiRGF0ZVV0aWxzIiwicGF0dGVybiIsInRlc3QiLCJ0cmltIl0sIm1hcHBpbmdzIjoi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O0FBRUUsbUJBQ0UsT0FBSy9ELEtBQUwsQ0FBVzBDLFFBQVgsR0FBeUI3QyxXQUF6Qiw2QkFBaUVBLFdBQWpFLGlCQUhKO0FBS0UsaUJBQVMsT0FBS3dILGdCQUxoQjtBQU1FLGtCQUFVLE9BQUtySCxLQUFMLENBQVcwQztBQU52QjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixLQUR1QjtBQUFBLEc7O2tCQWxaTjVDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG4vLyBVc2VkIGluIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiBmblxuY29uc3QgREFURVRJTUVfUE9QVVBfSEVJR0hUID0gMjAwO1xuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0RGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDbGVhclZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgZm9ybWF0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGxvY2FsZTogJ2VuLUdCJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBkaXNhYmxlZERheXM6IG51bGwsXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICBzaG93Q2xlYXJWYWx1ZTogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgaW5wdXREYXRlLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihMb2NhbGVVdGlscywge1xuICAgICAgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcblxuICAgIC8vIFVzZWQgaW4gb25CbHVyIGhhbmRsZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGJsdXIgaGFwcGVuZWQgYmVjYXVzZSBvZiBhIGNsaWNrXG4gICAgLy8gb24gdGhlIG92ZXJsYXlcbiAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcbiAgICBpZiAoXG4gICAgICAhdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0XG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB3aGV0aGVyIG9yIG5vdCBwb3B1cCBoYXMgc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQgZmllbGRcbiAgICogQHJldHVybnMge3N0cmluZ30gLSBhbiBcImFuY2hvciBwb2ludFwiIGluIGlucHV0IGVsZW1lbnRcbiAgICovXG4gIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXREaW1lbnNpb25zID0gdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gUG9wdXAgd2lsbCBvcGVuIGJlbG93IHRoZSBpbnB1dCBieSBkZWZhdWx0XG4gICAgbGV0IGF0dGFjaG1lbnQgPSAndG9wIGNlbnRlcic7XG5cbiAgICBpZiAoaW5wdXREaW1lbnNpb25zKSB7XG4gICAgICAvKiBJZiB0aGVyZSdzIHRpbWUgaW5wdXRzIHByZXNlbnQsIHRoZSBwb3B1cCB3aWxsIGJlIHNsaWdodGx5IHRhbGxlci4gSGVpZ2h0IGhhcyB0byBiZVxuICAgICAgaGFyZCBjb2RlZCwgYmVjYXVzZSB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGJlZm9yZSB3ZSBoYXZlIG9wZW5lZCBpdCAqL1xuICAgICAgY29uc3QgcG9wdXBIZWlnaHQgPSB0aW1lID8gREFURVRJTUVfUE9QVVBfSEVJR0hUICsgNTAgOiBEQVRFVElNRV9QT1BVUF9IRUlHSFQ7XG4gICAgICBjb25zdCBwb3B1cEJvdHRvbVkgPSBwb3B1cEhlaWdodCArIGlucHV0RGltZW5zaW9ucy5oZWlnaHQgKyBpbnB1dERpbWVuc2lvbnMueTtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgLy8gUG9wdXAgaGFzIG5vIHNwYWNlIHRvIG9wZW4gYmVsb3cgdGhlIGlucHV0LCBzby4uXG4gICAgICBpZiAod2luZG93SGVpZ2h0IDwgcG9wdXBCb3R0b21ZKSBhdHRhY2htZW50ID0gJ2JvdHRvbSBjZW50ZXInO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cbiAgICovXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgaW5wdXRQcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMoaW5wdXREYXRlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaW5wdXRQcm9wczogeyBvbkJsdXIgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByZXR0aWZ5SW5wdXREYXRlKCk7XG5cbiAgICAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBvdmVybGF5IG9uIGJsdXIsIHVubGVzcyBpdCB3YXMgY2F1c2VkIGJ5IGEgY2xpY2sgb24gdGhlIGNhbGVuZGFyXG4gICAgLy8gb3ZlcmxheVxuICAgIGlmICghdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gZmFsc2U7XG4gICAgaWYgKG9uQmx1cikgb25CbHVyKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xuICAgIGlmIChtb2RpZmllcnMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUsIHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMoZGF5KTtcblxuICAgIGxldCB0aW1lQWRqdXN0ZWREYXRlID0gbnVsbDtcbiAgICBjb25zdCBjdXJyZW50TW9tZW50RGF0ZSA9IG1vbWVudCh2YWx1ZSwgbW9tZW50LklTT184NjAxKS51dGMoKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnbWludXRlJyk7XG5cbiAgICBpZiAodGltZSkge1xuICAgICAgLy8gU2V0IGN1cnJlbnQgKHByZXZpb3VzbHkgc2VsZWN0ZWQpIHRpbWUgdG8gbmV3bHkgcGlja2VkIGRhdGVcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnNldCgnaG91cicsIGN1cnJlbnRIb3Vycykuc2V0KCdtaW51dGUnLCBjdXJyZW50TWludXRlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGRvbid0IG5lZWQgdG8gYm90aGVyIG91cnNlbHZlcyB3aXRoIGFuIGV4YWN0IHRpbWUsXG4gICAgICAvLyB3ZSBjYW4gc2V0IHRpbWUgdG8gVDAwOjAwOjAwLjAwMFpcbiAgICAgIHRpbWVBZGp1c3RlZERhdGUgPSBtb21lbnREYXRlLnN0YXJ0T2YoJ2RheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGZvcm1hdERhdGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSk7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUuaG91cihuZXdUaW1lLmhvdXIpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLm1pbnV0ZXMobmV3VGltZS5taW51dGUpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgZGF5UGlja2VyVmlzaWJsZU1vbnRoOiB2YWwsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgYSBjbGljayBvbiB0aGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlT25PdmVybGF5TW91c2VEb3duID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXJzIGlucHV0IHZhbHVlXG4gICAqL1xuICBoYW5kbGVDbGVhckNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvbkNoYW5nZSkgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVhY3QtZGF0ZXRpbWU6IG9uQ2hhbmdlIGNhbGxiYWNrIGlzIG5vdCBzZXQnKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKCcnKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkge1xuICAgICAgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZGF0ZS50cmltKCkpO1xuICB9O1xuXG4gIHByZXR0aWZ5SW5wdXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHNlbGVjdCBib3hlcyBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW5kZXJDYXB0aW9uRWxlbWVudCA9ICh7IGRhdGUgfSkgPT4gKFxuICAgIDxZZWFyTW9udGhQaWNrZXIgZGF0ZT17ZGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhck1vbnRoQ2hhbmdlfSBsb2NhbGU9e3RoaXMucHJvcHMubG9jYWxlfSAvPlxuICApO1xuXG4gIHJlbmRlckNsZWFyVmFsdWVCdXR0b24gPSAoKSA9PiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICB0aGlzLnByb3BzLmRpc2FibGVkID8gYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlIGRpc2FibGVkYCA6IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZWBcbiAgICAgIH1cbiAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJDbGlja31cbiAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgID5cbiAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzZWxlY3RlZERheXMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICBtaW51dGVzSW50ZXJ2YWwsXG4gICAgICBzaG93Q2xlYXJWYWx1ZSxcbiAgICAgIGRpc2FibGVkRGF5cyxcbiAgICAgIGZvcm1hdERhdGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgY29uc3QgdGltZU9iaiA9IHtcbiAgICAgIGhvdXI6IG1vbWVudERhdGUuaG91cigpLFxuICAgICAgbWludXRlOiBtb21lbnREYXRlLm1pbnV0ZSgpLFxuICAgIH07XG4gICAgY29uc3QgbW9udGggPVxuICAgICAgdGhpcy5zdGF0ZS5kYXlQaWNrZXJWaXNpYmxlTW9udGggfHxcbiAgICAgICh0eXBlb2YgdGhpcy5zdGF0ZS5zZWxlY3RlZERheSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9e3RoaXMuZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uKCl9XG4gICAgICAgIGNvbnN0cmFpbnRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgcGluOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWlucHV0LWNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICByZWFkT25seT17ISFmb3JtYXREYXRlfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=