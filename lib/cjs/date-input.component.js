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
        // UTC day might differ from local day, therefore UTC offset
        // must be discounted.
        return new Date((0, _moment2.default)(momentDate.format('L'), 'L'));
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
          pin: ['top']
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
    // UTC day might differ from local date therefore UTC offset must be discounted.

    var momentDate = _moment2.default.utc((0, _moment2.default)(day).format('L'), 'L');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEQVRFVElNRV9QT1BVUF9IRUlHSFQiLCJjbGFzc1ByZWZpeCIsIkRhdGVJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInByb3BzIiwic3RhdGUiLCJmb3JtYXREYXRlIiwidmFsdWUiLCJzaG93T3ZlcmxheSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJJU09fODYwMSIsImlucHV0RGF0ZSIsImdldERhdGUiLCJkYXRlRm9ybWF0Iiwic2VsZWN0ZWREYXkiLCJkYXRlIiwidHlwZSIsImlzVmFsaWQiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwiRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsIkxvY2FsZVV0aWxzIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsIm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzZWxlY3RlZERheXMiLCJzaG93V2Vla051bWJlcnMiLCJtaW51dGVzSW50ZXJ2YWwiLCJzaG93Q2xlYXJWYWx1ZSIsImRpc2FibGVkRGF5cyIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwidW5kZWZpbmVkIiwiZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJyZW5kZXJDbGVhclZhbHVlQnV0dG9uIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24iLCJpc1NhbWVEYXkiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsIk5hdmJhciIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwic3RyIiwicmVwbGFjZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsImlucHV0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcHVwSGVpZ2h0IiwicG9wdXBCb3R0b21ZIiwiaGVpZ2h0IiwieSIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaGFuZGxlQ2xlYXJDbGljayIsIlR5cGVFcnJvciIsIkRhdGVVdGlscyIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7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QixFQUE2QixVQUFVLE9BQUtrRyxxQkFBNUMsRUFBbUUsUUFBUSxPQUFLaEgsS0FBTCxDQUFXc0MsTUFBdEYsR0FEcUI7QUFBQSxHOztPQUl2QnlCLHNCLEdBQXlCO0FBQUEsV0FDdkI7QUFBQTtBQUFBO0FBQ0UsY0FBSyxRQURQO0FBRUUsbUJBQ0UsT0FBSy9ELEtBQUwsQ0FBVzBDLFFBQVgsR0FBeUI3QyxXQUF6Qiw2QkFBaUVBLFdBQWpFLGlCQUhKO0FBS0UsaUJBQVMsT0FBS3dILGdCQUxoQjtBQU1FLGtCQUFVLE9BQUtySCxLQUFMLENBQVcwQztBQU52QjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRixLQUR1QjtBQUFBLEc7O2tCQXRaTjVDLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IFllYXJNb250aFBpY2tlciBmcm9tICcuL3llYXItbW9udGgtcGlja2VyL3llYXItbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG4vLyBVc2VkIGluIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiBmblxuY29uc3QgREFURVRJTUVfUE9QVVBfSEVJR0hUID0gMjAwO1xuY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EYXlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0RGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIGRpc2FibGVkRGF5czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIHNob3dPdmVybGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93V2Vla051bWJlcnM6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDbGVhclZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgZm9ybWF0RGF0ZTogdW5kZWZpbmVkLFxuICAgIGxvY2FsZTogJ2VuLUdCJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIG9uRGF5Q2xpY2s6ICgpID0+IHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkRGF5czogbnVsbCxcbiAgICBkaXNhYmxlZERheXM6IG51bGwsXG4gICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIHNob3dXZWVrTnVtYmVyczogdHJ1ZSxcbiAgICBzaG93Q2xlYXJWYWx1ZTogdHJ1ZSxcbiAgICB0aW1lOiBmYWxzZSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBjb25zdCB7IGZvcm1hdERhdGUsIHZhbHVlIH0gPSBwcm9wcztcbiAgICBpZiAoIXN0YXRlLnNob3dPdmVybGF5ICYmIHZhbHVlICE9PSBzdGF0ZS5sYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXN0VmFsdWU6IHZhbHVlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIHNob3dPdmVybGF5OiBwcm9wcy5zaG93T3ZlcmxheSB8fCBzdGF0ZS5zaG93T3ZlcmxheSxcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBVVEMgZGF5IG1pZ2h0IGRpZmZlciBmcm9tIGxvY2FsIGRheSwgdGhlcmVmb3JlIFVUQyBvZmZzZXRcbiAgICAgICAgLy8gbXVzdCBiZSBkaXNjb3VudGVkLlxuICAgICAgICByZXR1cm4gbmV3IERhdGUobW9tZW50KG1vbWVudERhdGUuZm9ybWF0KCdMJyksICdMJykpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xuICAgICAgbGFzdFZhbHVlOiBudWxsLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgLy8gc2VsZWN0ZWREYXk6IFNlbGVjdGVkIGRheSBpbiBjYWxlbmRhciAoZGF0ZSBvYmplY3QpXG4gICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgICBpbnB1dERhdGUsXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qge1xuICAgICAgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUsIHRpbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gVVRDIGRheSBtaWdodCBkaWZmZXIgZnJvbSBsb2NhbCBkYXRlIHRoZXJlZm9yZSBVVEMgb2Zmc2V0IG11c3QgYmUgZGlzY291bnRlZC5cbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhtb21lbnQoZGF5KS5mb3JtYXQoJ0wnKSwgJ0wnKTtcbiAgICBsZXQgdGltZUFkanVzdGVkRGF0ZSA9IG51bGw7XG4gICAgY29uc3QgY3VycmVudE1vbWVudERhdGUgPSBtb21lbnQodmFsdWUsIG1vbWVudC5JU09fODYwMSkudXRjKCk7XG4gICAgY29uc3QgY3VycmVudEhvdXJzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdob3VyJyk7XG4gICAgY29uc3QgY3VycmVudE1pbnV0ZXMgPSBjdXJyZW50TW9tZW50RGF0ZS5nZXQoJ21pbnV0ZScpO1xuXG4gICAgaWYgKHRpbWUpIHtcbiAgICAgIC8vIFNldCBjdXJyZW50IChwcmV2aW91c2x5IHNlbGVjdGVkKSB0aW1lIHRvIG5ld2x5IHBpY2tlZCBkYXRlXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zZXQoJ2hvdXInLCBjdXJyZW50SG91cnMpLnNldCgnbWludXRlJywgY3VycmVudE1pbnV0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBkb24ndCBuZWVkIHRvIGJvdGhlciBvdXJzZWx2ZXMgd2l0aCBhbiBleGFjdCB0aW1lLFxuICAgICAgLy8gd2UgY2FuIHNldCB0aW1lIHRvIFQwMDowMDowMC4wMDBaXG4gICAgICB0aW1lQWRqdXN0ZWREYXRlID0gbW9tZW50RGF0ZS5zdGFydE9mKCdkYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodGltZUFkanVzdGVkRGF0ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAgIGlucHV0RGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUodGltZUFkanVzdGVkRGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICB0aGlzLnByb3BzLm9uRGF5Q2xpY2soZGF5LCBtb2RpZmllcnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRpbWUgcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gbmV3VGltZVxuICAgKi9cbiAgaGFuZGxlVGltZVBpY2tlckNoYW5nZSA9IChuZXdUaW1lKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBmb3JtYXREYXRlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGlucHV0RGF0ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB5ZWFyLW1vbnRoIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIGRhdGVcbiAgICovXG4gIGhhbmRsZVllYXJNb250aENoYW5nZSA9ICh2YWwpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0LCBmb3JtYXREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSkgOiBtb21lbnQudXRjKCk7XG5cbiAgICBtb21lbnREYXRlLnllYXIodmFsLmdldEZ1bGxZZWFyKCkpLm1vbnRoKHZhbC5nZXRNb250aCgpKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlLFxuICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICAgIGRheVBpY2tlclZpc2libGVNb250aDogdmFsLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIG92ZXJsYXlcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZU9uT3ZlcmxheU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFycyBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgaGFuZGxlQ2xlYXJDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghb25DaGFuZ2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlYWN0LWRhdGV0aW1lOiBvbkNoYW5nZSBjYWxsYmFjayBpcyBub3Qgc2V0Jyk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSgnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBzZWxlY3RlZCBkYXkgaXMgc2FtZSBhcyBhIGRheSBpbiBjYWxlbmRhclxuICAgKiBVc2VkIGJ5IGRheVBpY2tlclxuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaXNTYW1lRGF5ID0gZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGdpdmVuIGlzIHZhbGlkIGZvcm1hdCB3aXNlLiBVc2VkIGluIGNvbWJpbmF0aW9uIHdpdGggbW9tZW50J3MgaXNWYWxpZCBtZXRob2RcbiAgICogQSBsaXR0bGUgbGVzcyBzdHJpY3QgdGhhbiBtb21lbnQncyBpc1ZhbGlkIHdpdGggc3RyaWN0IG1vZGUgZW5hYmxlZFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVmFsaWRGb3JtYXQgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fSQvO1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWUpIHtcbiAgICAgIHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9XFxzezAsMX1cXGR7MCwyfShbOi5dKT9cXGR7MCwyfSQvO1xuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KGRhdGUudHJpbSgpKTtcbiAgfTtcblxuICBwcmV0dGlmeUlucHV0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBkYXRlRm9ybWF0LCBmb3JtYXREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGZvcm1hdERhdGVcbiAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgIDogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBzZWxlY3QgYm94ZXMgYWJvdmUgdGhlIGNhbGVuZGFyXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgcmVuZGVyQ2FwdGlvbkVsZW1lbnQgPSAoeyBkYXRlIH0pID0+IChcbiAgICA8WWVhck1vbnRoUGlja2VyIGRhdGU9e2RhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX0gbG9jYWxlPXt0aGlzLnByb3BzLmxvY2FsZX0gLz5cbiAgKTtcblxuICByZW5kZXJDbGVhclZhbHVlQnV0dG9uID0gKCkgPT4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlZCA/IGAke2NsYXNzUHJlZml4fS1jbGVhci12YWx1ZSBkaXNhYmxlZGAgOiBgJHtjbGFzc1ByZWZpeH0tY2xlYXItdmFsdWVgXG4gICAgICB9XG4gICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyQ2xpY2t9XG4gICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICA+XG4gICAgICA8c3Bhbj54PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHRpbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgc2VsZWN0ZWREYXlzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgbWludXRlc0ludGVydmFsLFxuICAgICAgc2hvd0NsZWFyVmFsdWUsXG4gICAgICBkaXNhYmxlZERheXMsXG4gICAgICBmb3JtYXREYXRlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID1cbiAgICAgIHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICAodHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PXt0aGlzLmdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbigpfVxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogWyd0b3AnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1pbnB1dC1jb250YWluZXJgfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgcmVhZE9ubHk9eyEhZm9ybWF0RGF0ZX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtzaG93Q2xlYXJWYWx1ZSAmJiB2YWx1ZSAmJiB0aGlzLnJlbmRlckNsZWFyVmFsdWVCdXR0b24oKX1cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNvbnRhaW5lciA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU9uT3ZlcmxheU1vdXNlRG93bn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWREYXlzfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e3NlbGVjdGVkRGF5cyB8fCB0aGlzLmlzU2FtZURheX1cbiAgICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICAgIG1vbnRoPXttb250aH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrPXt0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCl9XG4gICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICBjYXB0aW9uRWxlbWVudD17dGhpcy5yZW5kZXJDYXB0aW9uRWxlbWVudH1cbiAgICAgICAgICAgICAgbmF2YmFyRWxlbWVudD17TmF2YmFyfVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aW1lICYmIChcbiAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRpbWU9e3RpbWVPYmp9XG4gICAgICAgICAgICAgICAgbWludXRlc0ludGVydmFsPXttaW51dGVzSW50ZXJ2YWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19