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
        return new Date(momentDate.format('L'));
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

    var momentDate = _moment2.default.utc((0, _moment2.default)(day).format('L'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEQVRFVElNRV9QT1BVUF9IRUlHSFQiLCJjbGFzc1ByZWZpeCIsIkRhdGVJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInByb3BzIiwic3RhdGUiLCJmb3JtYXREYXRlIiwidmFsdWUiLCJzaG93T3ZlcmxheSIsImxhc3RWYWx1ZSIsIm1vbWVudERhdGUiLCJtb21lbnQiLCJ1dGMiLCJJU09fODYwMSIsImlucHV0RGF0ZSIsImdldERhdGUiLCJkYXRlRm9ybWF0Iiwic2VsZWN0ZWREYXkiLCJkYXRlIiwidHlwZSIsImlzVmFsaWQiLCJyZW1vdmVJbnZpc2libGVDaGFycyIsImZvcm1hdCIsInRvSVNPU3RyaW5nIiwiRGF0ZSIsIm9uRG9jdW1lbnRDbGljayIsImJpbmQiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsIkxvY2FsZVV0aWxzIiwiZ2V0Rmlyc3REYXlPZldlZWsiLCJsb2NhbGVEYXRhIiwiZmlyc3REYXlPZldlZWsiLCJpbnB1dCIsImRheVBpY2tlciIsIm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzZWxlY3RlZERheXMiLCJzaG93V2Vla051bWJlcnMiLCJtaW51dGVzSW50ZXJ2YWwiLCJzaG93Q2xlYXJWYWx1ZSIsImRpc2FibGVkRGF5cyIsIm90aGVyUHJvcHMiLCJ0aW1lT2JqIiwiaG91ciIsIm1pbnV0ZSIsIm1vbnRoIiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwidW5kZWZpbmVkIiwiZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIiwidG8iLCJwaW4iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVJbnB1dEJsdXIiLCJyZW5kZXJDbGVhclZhbHVlQnV0dG9uIiwiY2FsZW5kYXJDb250YWluZXIiLCJoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24iLCJpc1NhbWVEYXkiLCJyZW5kZXJDYXB0aW9uRWxlbWVudCIsIk5hdmJhciIsImhhbmRsZURheUNsaWNrIiwiaGFuZGxlVGltZVBpY2tlckNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJvbkRheUNsaWNrIiwic3RyIiwicmVwbGFjZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlT3ZlcmxheSIsImlucHV0RGltZW5zaW9ucyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvcHVwSGVpZ2h0IiwicG9wdXBCb3R0b21ZIiwiaGVpZ2h0IiwieSIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic2hvd01vbnRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRm9jdXMiLCJmb2N1cyIsIm9uQmx1ciIsImlzVmFsaWRGb3JtYXQiLCJwcmV0dGlmeUlucHV0RGF0ZSIsImRheSIsIm1vZGlmaWVycyIsInRpbWVBZGp1c3RlZERhdGUiLCJjdXJyZW50TW9tZW50RGF0ZSIsImN1cnJlbnRIb3VycyIsImdldCIsImN1cnJlbnRNaW51dGVzIiwic2V0Iiwic3RhcnRPZiIsImJsdXIiLCJuZXdUaW1lIiwibWludXRlcyIsImhhbmRsZVllYXJNb250aENoYW5nZSIsInZhbCIsInllYXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaGFuZGxlQ2xlYXJDbGljayIsIlR5cGVFcnJvciIsIkRhdGVVdGlscyIsInBhdHRlcm4iLCJ0ZXN0IiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7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QUFRLE9BQUtoSCxLQUFMLENBQVdzQyxNQUF0RixHQURxQjtBQUFBLEc7O09BSXZCeUIsc0IsR0FBeUI7QUFBQSxXQUN2QjtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxtQkFDRSxPQUFLL0QsS0FBTCxDQUFXMEMsUUFBWCxHQUF5QjdDLFdBQXpCLDZCQUFpRUEsV0FBakUsaUJBSEo7QUFLRSxpQkFBUyxPQUFLd0gsZ0JBTGhCO0FBTUUsa0JBQVUsT0FBS3JILEtBQUwsQ0FBVzBDO0FBTnZCO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLEtBRHVCO0FBQUEsRzs7a0JBdlpONUMsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbi8vIFVzZWQgaW4gZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIGZuXG5jb25zdCBEQVRFVElNRV9QT1BVUF9IRUlHSFQgPSAyMDA7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBmb3JtYXREYXRlOiB1bmRlZmluZWQsXG4gICAgbG9jYWxlOiAnZW4tR0InLFxuICAgIG9uQ2hhbmdlKCkge30sXG4gICAgb25EYXlDbGljazogKCkgPT4ge30sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWREYXlzOiBudWxsLFxuICAgIGRpc2FibGVkRGF5czogbnVsbCxcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHNob3dDbGVhclZhbHVlOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGlmICghc3RhdGUuc2hvd092ZXJsYXkgJiYgdmFsdWUgIT09IHN0YXRlLmxhc3RWYWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGModmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICAgID8gZm9ybWF0RGF0ZSh2YWx1ZSlcbiAgICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBwcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogdmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVJbnZpc2libGVDaGFycyA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGdpdmVuIGRhdGUgaW50byB3YW50ZWQgdHlwZSAoc3RyaW5nL2RhdGUgb2JqZWN0KVxuICAgKiBAcGFyYW0gZGF0ZSAtIHtzdHJpbmcsIG1vbWVudCBvYmplY3R9XG4gICAqIEBwYXJhbSB0eXBlIC0ge3N0cmluZywgZGF0ZSBvYmplY3R9IHR5cGUgb2YgdGhlIHJldHVybiB2YWx1ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdCB7c3RyaW5nfSBkYXRlIGZvcm1hdCwgZGVmYXVsdHMgdG8gJ00vRC9ZWVlZJ1xuICAgKiAoJ00vRC9ZWVlZJyBoOm1tIHdoZW4gdXNpbmcgRGF0ZVRpbWUpXG4gICAqICogQHJldHVybnMge3N0cmluZywgZGF0ZX1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQpIHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgaWYgKCFtb21lbnREYXRlLmlzVmFsaWQoKSB8fCAhZGF0ZSkgcmV0dXJuICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBGT1JNQVRTLlBSRVRUWV9EQVRFOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiBEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMobW9tZW50RGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5EQVRFX09CSkVDVDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFVUQyBkYXkgbWlnaHQgZGlmZmVyIGZyb20gbG9jYWwgZGF5LCB0aGVyZWZvcmUgVVRDIG9mZnNldFxuICAgICAgICAvLyBtdXN0IGJlIGRpc2NvdW50ZWQuXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShtb21lbnREYXRlLmZvcm1hdCgnTCcpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICAvLyBpbnB1dERhdGU6IFByZXR0aWZpZWQgc3RyaW5nIHNob3duIGluIGlucHV0IGZpZWxkXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbiAgICAgIGxhc3RWYWx1ZTogbnVsbCxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgaW5wdXREYXRlLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihMb2NhbGVVdGlscywge1xuICAgICAgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcblxuICAgIC8vIFVzZWQgaW4gb25CbHVyIGhhbmRsZXIgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGJsdXIgaGFwcGVuZWQgYmVjYXVzZSBvZiBhIGNsaWNrXG4gICAgLy8gb24gdGhlIG92ZXJsYXlcbiAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gZmFsc2U7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVyeSB0aW1lIGRheVBpY2tlciBpcyBvcGVuIGFuZCBkb2N1bWVudCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBvbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgLy8gQ2xvc2VzIG92ZXJsYXkgaWYgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgY2FsZW5kYXIgKGFuZCBpbnB1dCBmaWVsZClcbiAgICBpZiAoXG4gICAgICAhdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0XG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB3aGV0aGVyIG9yIG5vdCBwb3B1cCBoYXMgc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQgZmllbGRcbiAgICogQHJldHVybnMge3N0cmluZ30gLSBhbiBcImFuY2hvciBwb2ludFwiIGluIGlucHV0IGVsZW1lbnRcbiAgICovXG4gIGdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRpbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXREaW1lbnNpb25zID0gdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gUG9wdXAgd2lsbCBvcGVuIGJlbG93IHRoZSBpbnB1dCBieSBkZWZhdWx0XG4gICAgbGV0IGF0dGFjaG1lbnQgPSAndG9wIGNlbnRlcic7XG5cbiAgICBpZiAoaW5wdXREaW1lbnNpb25zKSB7XG4gICAgICAvKiBJZiB0aGVyZSdzIHRpbWUgaW5wdXRzIHByZXNlbnQsIHRoZSBwb3B1cCB3aWxsIGJlIHNsaWdodGx5IHRhbGxlci4gSGVpZ2h0IGhhcyB0byBiZVxuICAgICAgaGFyZCBjb2RlZCwgYmVjYXVzZSB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGJlZm9yZSB3ZSBoYXZlIG9wZW5lZCBpdCAqL1xuICAgICAgY29uc3QgcG9wdXBIZWlnaHQgPSB0aW1lID8gREFURVRJTUVfUE9QVVBfSEVJR0hUICsgNTAgOiBEQVRFVElNRV9QT1BVUF9IRUlHSFQ7XG4gICAgICBjb25zdCBwb3B1cEJvdHRvbVkgPSBwb3B1cEhlaWdodCArIGlucHV0RGltZW5zaW9ucy5oZWlnaHQgKyBpbnB1dERpbWVuc2lvbnMueTtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgLy8gUG9wdXAgaGFzIG5vIHNwYWNlIHRvIG9wZW4gYmVsb3cgdGhlIGlucHV0LCBzby4uXG4gICAgICBpZiAod2luZG93SGVpZ2h0IDwgcG9wdXBCb3R0b21ZKSBhdHRhY2htZW50ID0gJ2JvdHRvbSBjZW50ZXInO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGlucHV0IGZvY3VzIGV2ZW50LiBTaG93cyBhbiBvdmVybGF5IGFuZCBhZGRzIGFuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghc2hvd092ZXJsYXkgJiYgdGhpcy5kYXlQaWNrZXIgJiYgc2VsZWN0ZWREYXkpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aChzZWxlY3RlZERheSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd092ZXJsYXkpIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cbiAgICovXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCwgZGF0ZUZvcm1hdCksXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgICAgaWYgKHRoaXMuZGF5UGlja2VyKSB0aGlzLmRheVBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgaW5wdXRQcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQucmVtb3ZlSW52aXNpYmxlQ2hhcnMoaW5wdXREYXRlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaW5wdXRQcm9wczogeyBvbkJsdXIgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByZXR0aWZ5SW5wdXREYXRlKCk7XG5cbiAgICAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBvdmVybGF5IG9uIGJsdXIsIHVubGVzcyBpdCB3YXMgY2F1c2VkIGJ5IGEgY2xpY2sgb24gdGhlIGNhbGVuZGFyXG4gICAgLy8gb3ZlcmxheVxuICAgIGlmICghdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyID0gZmFsc2U7XG4gICAgaWYgKG9uQmx1cikgb25CbHVyKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5LCBtb2RpZmllcnMgPSB7fSkgPT4ge1xuICAgIGlmIChtb2RpZmllcnMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHtcbiAgICAgIGRhdGVGb3JtYXQsIGZvcm1hdERhdGUsIHZhbHVlLCB0aW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIFVUQyBkYXkgbWlnaHQgZGlmZmVyIGZyb20gbG9jYWwgZGF0ZSB0aGVyZWZvcmUgVVRDIG9mZnNldCBtdXN0IGJlIGRpc2NvdW50ZWQuXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMobW9tZW50KGRheSkuZm9ybWF0KCdMJykpO1xuXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcblxuICAgIGlmICh0aW1lKSB7XG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKS5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHRpbWVBZGp1c3RlZERhdGUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgICBpbnB1dERhdGUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgdGhpcy5wcm9wcy5vbkRheUNsaWNrKGRheSwgbW9kaWZpZXJzKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aW1lIHBpY2tlciAoc2VsZWN0IGJveGVzKSBjaGFuZ2VcbiAgICogQHBhcmFtIG5ld1RpbWVcbiAgICovXG4gIGhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UgPSAobmV3VGltZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5ob3VyKG5ld1RpbWUuaG91cik7XG4gICAgbW9tZW50RGF0ZSA9IG1vbWVudERhdGUubWludXRlcyhuZXdUaW1lLm1pbnV0ZSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGUsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuVVRDLCBkYXRlRm9ybWF0KSk7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gdmFsdWUgPyBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpIDogbW9tZW50LnV0YygpO1xuXG4gICAgbW9tZW50RGF0ZS55ZWFyKHZhbC5nZXRGdWxsWWVhcigpKS5tb250aCh2YWwuZ2V0TW9udGgoKSk7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZm9ybWF0RGF0ZVxuICAgICAgPyBmb3JtYXREYXRlKHZhbHVlKVxuICAgICAgOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGlucHV0RGF0ZSxcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgaW5wdXQgdmFsdWVcbiAgICovXG4gIGhhbmRsZUNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9uQ2hhbmdlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWFjdC1kYXRldGltZTogb25DaGFuZ2UgY2FsbGJhY2sgaXMgbm90IHNldCcpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSB7XG4gICAgICBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcHJldHRpZnlJbnB1dERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCwgZm9ybWF0RGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBmb3JtYXREYXRlXG4gICAgICA/IGZvcm1hdERhdGUodmFsdWUpXG4gICAgICA6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dERhdGUgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlciBkYXRlPXtkYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9IGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9IC8+XG4gICk7XG5cbiAgcmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbiA9ICgpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgPyBgJHtjbGFzc1ByZWZpeH0tY2xlYXItdmFsdWUgZGlzYWJsZWRgIDogYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlYFxuICAgICAgfVxuICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckNsaWNrfVxuICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPHNwYW4+eDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNlbGVjdGVkRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIHNob3dDbGVhclZhbHVlLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgZm9ybWF0RGF0ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICBjb25zdCB0aW1lT2JqID0ge1xuICAgICAgaG91cjogbW9tZW50RGF0ZS5ob3VyKCksXG4gICAgICBtaW51dGU6IG1vbWVudERhdGUubWludXRlKCksXG4gICAgfTtcbiAgICBjb25zdCBtb250aCA9XG4gICAgICB0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aCB8fFxuICAgICAgKHR5cGVvZiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5ID09PSAnc3RyaW5nJyA/IHVuZGVmaW5lZCA6IHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD17dGhpcy5nZXRUZXRoZXJDb21wb25lbnRBdHRhY2htZW50TG9jYXRpb24oKX1cbiAgICAgICAgY29uc3RyYWludHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgICBwaW46IFsndG9wJ10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0bzogJ3dpbmRvdycsXG4gICAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0taW5wdXQtY29udGFpbmVyYH0+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0RGF0ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHJlYWRPbmx5PXshIWZvcm1hdERhdGV9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2hvd0NsZWFyVmFsdWUgJiYgdmFsdWUgJiYgdGhpcy5yZW5kZXJDbGVhclZhbHVlQnV0dG9uKCl9XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9LWNhbGVuZGFyYH1cbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXIgPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVPbk92ZXJsYXlNb3VzZURvd259XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRheVBpY2tlciA9IGVsO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRGF5c31cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtzZWxlY3RlZERheXMgfHwgdGhpcy5pc1NhbWVEYXl9XG4gICAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgICBtb250aD17bW9udGh9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICBmaXJzdERheU9mV2Vlaz17dGhpcy5nZXRGaXJzdERheU9mV2VlaygpfVxuICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XG4gICAgICAgICAgICAgIG5hdmJhckVsZW1lbnQ9e05hdmJhcn1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGltZSAmJiAoXG4gICAgICAgICAgICAgIDxUaW1lUGlja2VyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cbiAgICAgICAgICAgICAgICB0aW1lPXt0aW1lT2JqfVxuICAgICAgICAgICAgICAgIG1pbnV0ZXNJbnRlcnZhbD17bWludXRlc0ludGVydmFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==