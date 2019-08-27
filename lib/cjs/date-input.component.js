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
    if (!state.showOverlay && props.value !== state.lastValue) {
      var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
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

    var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
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
        otherProps = _objectWithoutProperties(_props, ['className', 'locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'selectedDays', 'showWeekNumbers', 'minutesInterval', 'showClearValue', 'disabledDays']);

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

    var momentDate = _moment2.default.utc(_this3.props.value);
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

    var momentDate = value ? _moment2.default.utc(value, _moment2.default.ISO_8601) : _moment2.default.utc();

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
    var _props5 = _this3.props,
        value = _props5.value,
        dateFormat = _props5.dateFormat;

    var momentDate = _moment2.default.utc(value, _moment2.default.ISO_8601);
    _this3.setState({
      inputDate: DateInput.getDate(momentDate, FORMATS.PRETTY_DATE, dateFormat)
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEQVRFVElNRV9QT1BVUF9IRUlHSFQiLCJjbGFzc1ByZWZpeCIsIkRhdGVJbnB1dCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInByb3BzIiwic3RhdGUiLCJzaG93T3ZlcmxheSIsInZhbHVlIiwibGFzdFZhbHVlIiwibW9tZW50RGF0ZSIsIm1vbWVudCIsInV0YyIsIklTT184NjAxIiwic2VsZWN0ZWREYXkiLCJnZXREYXRlIiwiaW5wdXREYXRlIiwiZGF0ZUZvcm1hdCIsImRhdGUiLCJ0eXBlIiwiaXNWYWxpZCIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwiZm9ybWF0IiwidG9JU09TdHJpbmciLCJ0b0RhdGUiLCJvbkRvY3VtZW50Q2xpY2siLCJiaW5kIiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJMb2NhbGVVdGlscyIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiaW5wdXQiLCJkYXlQaWNrZXIiLCJtb3VzZUNsaWNrZWRPbkNvbnRhaW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwibG9jYWxlIiwidGltZSIsImlucHV0UHJvcHMiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwic2VsZWN0ZWREYXlzIiwic2hvd1dlZWtOdW1iZXJzIiwibWludXRlc0ludGVydmFsIiwic2hvd0NsZWFyVmFsdWUiLCJkaXNhYmxlZERheXMiLCJvdGhlclByb3BzIiwidGltZU9iaiIsImhvdXIiLCJtaW51dGUiLCJtb250aCIsImRheVBpY2tlclZpc2libGVNb250aCIsInVuZGVmaW5lZCIsImdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbiIsInRvIiwicGluIiwiYXR0YWNobWVudCIsImVsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwicmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbiIsImNhbGVuZGFyQ29udGFpbmVyIiwiaGFuZGxlT25PdmVybGF5TW91c2VEb3duIiwiaXNTYW1lRGF5IiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJOYXZiYXIiLCJoYW5kbGVEYXlDbGljayIsImhhbmRsZVRpbWVQaWNrZXJDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsIm9uQ2hhbmdlIiwib25EYXlDbGljayIsInN0ciIsInJlcGxhY2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJpbnB1dERpbWVuc2lvbnMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3B1cEhlaWdodCIsInBvcHVwQm90dG9tWSIsImhlaWdodCIsInkiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInNob3dNb250aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkZvY3VzIiwiZm9jdXMiLCJvbkJsdXIiLCJpc1ZhbGlkRm9ybWF0IiwicHJldHRpZnlJbnB1dERhdGUiLCJkYXkiLCJtb2RpZmllcnMiLCJ0aW1lQWRqdXN0ZWREYXRlIiwiY3VycmVudE1vbWVudERhdGUiLCJjdXJyZW50SG91cnMiLCJnZXQiLCJjdXJyZW50TWludXRlcyIsInNldCIsInN0YXJ0T2YiLCJibHVyIiwibmV3VGltZSIsIm1pbnV0ZXMiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImhhbmRsZUNsZWFyQ2xpY2siLCJUeXBlRXJyb3IiLCJEYXRlVXRpbHMiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7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QUFrQkwsVUFBbEIsRUFBOEJiLFFBQVFFLFdBQXRDLEVBQW1Ea0IsVUFBbkQ7QUFEQyxLQUFkO0FBR0QsRzs7T0FPRHNELG9CLEdBQXVCO0FBQUEsUUFBR3JELElBQUgsUUFBR0EsSUFBSDtBQUFBLFdBQ3JCLDhCQUFDLHlCQUFELElBQWlCLE1BQU1BLElBQXZCLEVBQTZCLFVBQVUsT0FBS2tHLHFCQUE1QyxFQUFtRSxRQUFRLE9BQUsvRyxLQUFMLENBQVdxQyxNQUF0RixHQURxQjtBQUFBLEc7O09BSXZCeUIsc0IsR0FBeUI7QUFBQSxXQUN2QjtBQUFBO0FBQUE7QUFDRSxjQUFLLFFBRFA7QUFFRSxtQkFDRSxPQUFLOUQsS0FBTCxDQUFXeUMsUUFBWCxHQUF5QjVDLFdBQXpCLDZCQUFpRUEsV0FBakUsaUJBSEo7QUFLRSxpQkFBUyxPQUFLdUgsZ0JBTGhCO0FBTUUsa0JBQVUsT0FBS3BILEtBQUwsQ0FBV3lDO0FBTnZCO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLEtBRHVCO0FBQUEsRzs7a0JBN1hOM0MsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgWWVhck1vbnRoUGlja2VyIGZyb20gJy4veWVhci1tb250aC1waWNrZXIveWVhci1tb250aC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgJy4vZGF0ZS1pbnB1dC5zY3NzJztcblxuLy8gRGF0ZSBmb3JtYXRzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCAobWFpbmx5IGJ5IHRoZSBnZXREYXRlIG1ldGhvZClcbmNvbnN0IEZPUk1BVFMgPSB7XG4gIFVUQzogJ1VUQycsXG4gIFBSRVRUWV9EQVRFOiAnUFJFVFRZX0RBVEUnLFxuICBEQVRFX09CSkVDVDogJ0RBVEVfT0JKRUNUJyxcbn07XG5cbi8vIFVzZWQgaW4gZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uIGZuXG5jb25zdCBEQVRFVElNRV9QT1BVUF9IRUlHSFQgPSAyMDA7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdvYy1kYXRldGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRheUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgZGlzYWJsZWREYXlzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgc2hvd092ZXJsYXk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dXZWVrTnVtYmVyczogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0NsZWFyVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpbWU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbi1HQicsXG4gICAgb25DaGFuZ2UoKSB7fSxcbiAgICBvbkRheUNsaWNrOiAoKSA9PiB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzZWxlY3RlZERheXM6IG51bGwsXG4gICAgZGlzYWJsZWREYXlzOiBudWxsLFxuICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICBzaG93V2Vla051bWJlcnM6IHRydWUsXG4gICAgc2hvd0NsZWFyVmFsdWU6IHRydWUsXG4gICAgdGltZTogZmFsc2UsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5zaG93T3ZlcmxheSAmJiBwcm9wcy52YWx1ZSAhPT0gc3RhdGUubGFzdFZhbHVlKSB7XG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyhwcm9wcy52YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RWYWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgICAgc2hvd092ZXJsYXk6IHByb3BzLnNob3dPdmVybGF5IHx8IHN0YXRlLnNob3dPdmVybGF5LFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0RGF0ZShkYXRlLCB0eXBlLCBkYXRlRm9ybWF0KSB7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyA/IG1vbWVudC51dGMoZGF0ZSwgZGF0ZUZvcm1hdCkgOiBkYXRlO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSk7XG4gICAgICBjYXNlIEZPUk1BVFMuVVRDOlxuICAgICAgICByZXR1cm4gRGF0ZUlucHV0LnJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgICBjYXNlIEZPUk1BVFMuREFURV9PQkpFQ1Q6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9tZW50RGF0ZS50b0RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlICovXG4gICAgICBsYXN0VmFsdWU6IG51bGwsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICAvLyBzZWxlY3RlZERheTogU2VsZWN0ZWQgZGF5IGluIGNhbGVuZGFyIChkYXRlIG9iamVjdClcbiAgICAgIHNlbGVjdGVkRGF5OiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBwcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgcHJvcHMuZGF0ZUZvcm1hdCksXG4gICAgfTtcblxuICAgIHRoaXMubG9jYWxlVXRpbHMgPSBPYmplY3QuYXNzaWduKExvY2FsZVV0aWxzLCB7XG4gICAgICBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlQaWNrZXIgPSBudWxsO1xuXG4gICAgLy8gVXNlZCBpbiBvbkJsdXIgaGFuZGxlciB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgYmx1ciBoYXBwZW5lZCBiZWNhdXNlIG9mIGEgY2xpY2tcbiAgICAvLyBvbiB0aGUgb3ZlcmxheVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgZS50YXJnZXQgIT09IHRoaXMuaW5wdXRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZpcnN0IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIGxvY2FsZSAodXNlZCBieSBEYXlQaWNrZXIpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRGaXJzdERheU9mV2VlayA9ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKHRoaXMucHJvcHMubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHdoZXRoZXIgb3Igbm90IHBvcHVwIGhhcyBzcGFjZSB0byBvcGVuIGJlbG93IHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFwiYW5jaG9yIHBvaW50XCIgaW4gaW5wdXQgZWxlbWVudFxuICAgKi9cbiAgZ2V0VGV0aGVyQ29tcG9uZW50QXR0YWNobWVudExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dERpbWVuc2lvbnMgPSB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBQb3B1cCB3aWxsIG9wZW4gYmVsb3cgdGhlIGlucHV0IGJ5IGRlZmF1bHRcbiAgICBsZXQgYXR0YWNobWVudCA9ICd0b3AgY2VudGVyJztcblxuICAgIGlmIChpbnB1dERpbWVuc2lvbnMpIHtcbiAgICAgIC8qIElmIHRoZXJlJ3MgdGltZSBpbnB1dHMgcHJlc2VudCwgdGhlIHBvcHVwIHdpbGwgYmUgc2xpZ2h0bHkgdGFsbGVyLiBIZWlnaHQgaGFzIHRvIGJlXG4gICAgICBoYXJkIGNvZGVkLCBiZWNhdXNlIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgYmVmb3JlIHdlIGhhdmUgb3BlbmVkIGl0ICovXG4gICAgICBjb25zdCBwb3B1cEhlaWdodCA9IHRpbWUgPyBEQVRFVElNRV9QT1BVUF9IRUlHSFQgKyA1MCA6IERBVEVUSU1FX1BPUFVQX0hFSUdIVDtcbiAgICAgIGNvbnN0IHBvcHVwQm90dG9tWSA9IHBvcHVwSGVpZ2h0ICsgaW5wdXREaW1lbnNpb25zLmhlaWdodCArIGlucHV0RGltZW5zaW9ucy55O1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBQb3B1cCBoYXMgbm8gc3BhY2UgdG8gb3BlbiBiZWxvdyB0aGUgaW5wdXQsIHNvLi5cbiAgICAgIGlmICh3aW5kb3dIZWlnaHQgPCBwb3B1cEJvdHRvbVkpIGF0dGFjaG1lbnQgPSAnYm90dG9tIGNlbnRlcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgZm9jdXMgZXZlbnQuIFNob3dzIGFuIG92ZXJsYXkgYW5kIGFkZHMgYW4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5LCBzZWxlY3RlZERheSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gRGVsYXlzIHRoZSBleGVjdXRpb24gc28gdGhhdCB0aGUgZGF5UGlja2VyIG9wZW5zIGJlZm9yZSBzZWxlY3RpbmcgYSBkYXlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgb3ZlcmxheS4gQ2FsbGVkIGZyb20gb25Eb2N1bWVudENsaWNrLlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY2xvc2VPdmVybGF5ID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBjaGFuZ2UsIGNoZWNrcyB2YWxpZGl0eSBhbmQgdXBkYXRlcyBtb2RlbCB2YWx1ZSBhbmQgdGhlIGRheSBwaWNrZXJcbiAgICogQHBhcmFtIGUge2V2ZW50fVxuICAgKi9cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgaW5wdXRQcm9wcywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXREYXRlIH0pO1xuICAgIC8vIFRoaXMgZmlyZXMgb25seSBpZiB0aGUgbmV3IGRhdGUgaXMgdmFsaWQgaW4gZ2l2ZW4gZm9ybWF0XG4gICAgaWYgKG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0KS5pc1ZhbGlkKCkgJiYgdGhpcy5pc1ZhbGlkRm9ybWF0KGlucHV0RGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZERheTogRGF0ZUlucHV0LmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNULCBkYXRlRm9ybWF0KSxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIGRheVBpY2tlciBpcyBvcGVuLCB3ZSB3aWxsIHNob3cgdGhlIGNvcnJlY3QgbW9udGhcbiAgICAgICAgICBpZiAodGhpcy5kYXlQaWNrZXIpIHRoaXMuZGF5UGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBpZiAoaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBpbnB1dFByb3BzLm9uQ2hhbmdlKERhdGVJbnB1dC5yZW1vdmVJbnZpc2libGVDaGFycyhpbnB1dERhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2hhbmdlKERhdGVJbnB1dC5nZXREYXRlKGlucHV0RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGludmFsaWQgd2UgcmVzZXQgdGhlIG1vZGVsIHZhbHVlXG4gICAgICBvbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFByb3BzOiB7IG9uQmx1ciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJldHRpZnlJbnB1dERhdGUoKTtcblxuICAgIC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIG92ZXJsYXkgb24gYmx1ciwgdW5sZXNzIGl0IHdhcyBjYXVzZWQgYnkgYSBjbGljayBvbiB0aGUgY2FsZW5kYXJcbiAgICAvLyBvdmVybGF5XG4gICAgaWYgKCF0aGlzLm1vdXNlQ2xpY2tlZE9uQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubW91c2VDbGlja2VkT25Db250YWluZXIgPSBmYWxzZTtcbiAgICBpZiAob25CbHVyKSBvbkJsdXIoZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZGF5UGlja2VyIGNsaWNrXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBoYW5kbGVEYXlDbGljayA9IChkYXksIG1vZGlmaWVycyA9IHt9KSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCB2YWx1ZSwgdGltZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXkpO1xuXG4gICAgbGV0IHRpbWVBZGp1c3RlZERhdGUgPSBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRNb21lbnREYXRlID0gbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpLnV0YygpO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IGN1cnJlbnRNb21lbnREYXRlLmdldCgnaG91cicpO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gY3VycmVudE1vbWVudERhdGUuZ2V0KCdtaW51dGUnKTtcblxuICAgIGlmICh0aW1lKSB7XG4gICAgICAvLyBTZXQgY3VycmVudCAocHJldmlvdXNseSBzZWxlY3RlZCkgdGltZSB0byBuZXdseSBwaWNrZWQgZGF0ZVxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc2V0KCdob3VyJywgY3VycmVudEhvdXJzKS5zZXQoJ21pbnV0ZScsIGN1cnJlbnRNaW51dGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgZG9uJ3QgbmVlZCB0byBib3RoZXIgb3Vyc2VsdmVzIHdpdGggYW4gZXhhY3QgdGltZSxcbiAgICAgIC8vIHdlIGNhbiBzZXQgdGltZSB0byBUMDA6MDA6MDAuMDAwWlxuICAgICAgdGltZUFkanVzdGVkRGF0ZSA9IG1vbWVudERhdGUuc3RhcnRPZignZGF5Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKHRpbWVBZGp1c3RlZERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZSh0aW1lQWRqdXN0ZWREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgICB0aGlzLmlucHV0LmJsdXIoKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHRoaXMucHJvcHMub25EYXlDbGljayhkYXksIG1vZGlmaWVycyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBuZXdUaW1lXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKG5ld1RpbWUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIG1vbWVudERhdGUgPSBtb21lbnREYXRlLmhvdXIobmV3VGltZS5ob3VyKTtcbiAgICBtb21lbnREYXRlID0gbW9tZW50RGF0ZS5taW51dGVzKG5ld1RpbWUubWludXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBpbnB1dERhdGU6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIGRhdGVGb3JtYXQpLFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlVUQywgZGF0ZUZvcm1hdCkpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHllYXItbW9udGggcGlja2VyIChzZWxlY3QgYm94ZXMpIGNoYW5nZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKi9cbiAgaGFuZGxlWWVhck1vbnRoQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKSA6IG1vbWVudC51dGMoKTtcblxuICAgIG1vbWVudERhdGUueWVhcih2YWwuZ2V0RnVsbFllYXIoKSkubW9udGgodmFsLmdldE1vbnRoKCkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXREYXRlOiBEYXRlSW5wdXQuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLlBSRVRUWV9EQVRFLCBkYXRlRm9ybWF0KSxcbiAgICAgICAgc2VsZWN0ZWREYXk6IERhdGVJbnB1dC5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QsIGRhdGVGb3JtYXQpLFxuICAgICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5VVEMsIGRhdGVGb3JtYXQpKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBvdmVybGF5XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBoYW5kbGVPbk92ZXJsYXlNb3VzZURvd24gPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrZWRPbkNvbnRhaW5lciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgaW5wdXQgdmFsdWVcbiAgICovXG4gIGhhbmRsZUNsZWFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9uQ2hhbmdlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWFjdC1kYXRldGltZTogb25DaGFuZ2UgY2FsbGJhY2sgaXMgbm90IHNldCcpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3Qgc2VsZWN0ZWQgZGF5IGlzIHNhbWUgYXMgYSBkYXkgaW4gY2FsZW5kYXJcbiAgICogVXNlZCBieSBkYXlQaWNrZXJcbiAgICogQHBhcmFtIGRheSB7ZGF0ZX1cbiAgICovXG4gIGlzU2FtZURheSA9IGRheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSk7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBnaXZlbiBpcyB2YWxpZCBmb3JtYXQgd2lzZS4gVXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIG1vbWVudCdzIGlzVmFsaWQgbWV0aG9kXG4gICAqIEEgbGl0dGxlIGxlc3Mgc3RyaWN0IHRoYW4gbW9tZW50J3MgaXNWYWxpZCB3aXRoIHN0cmljdCBtb2RlIGVuYWJsZWRcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1ZhbGlkRm9ybWF0ID0gKGRhdGUpID0+IHtcbiAgICBsZXQgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH0kLztcbiAgICBpZiAodGhpcy5wcm9wcy50aW1lKSB7XG4gICAgICBwYXR0ZXJuID0gL15cXGR7MSw0fVsuXFwtL117MX1cXGR7MSwyfVsuXFwtL117MX1cXGR7MSw0fVxcc3swLDF9XFxkezAsMn0oWzouXSk/XFxkezAsMn0kLztcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgcHJldHRpZnlJbnB1dERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh2YWx1ZSwgbW9tZW50LklTT184NjAxKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogRGF0ZUlucHV0LmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5QUkVUVFlfREFURSwgZGF0ZUZvcm1hdCksXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlciBkYXRlPXtkYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyTW9udGhDaGFuZ2V9IGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9IC8+XG4gICk7XG5cbiAgcmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbiA9ICgpID0+IChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgIHRoaXMucHJvcHMuZGlzYWJsZWQgPyBgJHtjbGFzc1ByZWZpeH0tY2xlYXItdmFsdWUgZGlzYWJsZWRgIDogYCR7Y2xhc3NQcmVmaXh9LWNsZWFyLXZhbHVlYFxuICAgICAgfVxuICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckNsaWNrfVxuICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPHNwYW4+eDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBsb2NhbGUsXG4gICAgICB0aW1lLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNlbGVjdGVkRGF5cyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIG1pbnV0ZXNJbnRlcnZhbCxcbiAgICAgIHNob3dDbGVhclZhbHVlLFxuICAgICAgZGlzYWJsZWREYXlzLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgIGNvbnN0IHRpbWVPYmogPSB7XG4gICAgICBob3VyOiBtb21lbnREYXRlLmhvdXIoKSxcbiAgICAgIG1pbnV0ZTogbW9tZW50RGF0ZS5taW51dGUoKSxcbiAgICB9O1xuICAgIGNvbnN0IG1vbnRoID1cbiAgICAgIHRoaXMuc3RhdGUuZGF5UGlja2VyVmlzaWJsZU1vbnRoIHx8XG4gICAgICAodHlwZW9mIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PXt0aGlzLmdldFRldGhlckNvbXBvbmVudEF0dGFjaG1lbnRMb2NhdGlvbigpfVxuICAgICAgICBjb25zdHJhaW50cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICAgIHBpbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRvOiAnd2luZG93JyxcbiAgICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1pbnB1dC1jb250YWluZXJgfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXREYXRlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dDbGVhclZhbHVlICYmIHZhbHVlICYmIHRoaXMucmVuZGVyQ2xlYXJWYWx1ZUJ1dHRvbigpfVxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fS1jYWxlbmRhcmB9XG4gICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlT25PdmVybGF5TW91c2VEb3dufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlQaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZERheXN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17c2VsZWN0ZWREYXlzIHx8IHRoaXMuaXNTYW1lRGF5fVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbW9udGg9e21vbnRofVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgIGNhcHRpb25FbGVtZW50PXt0aGlzLnJlbmRlckNhcHRpb25FbGVtZW50fVxuICAgICAgICAgICAgICBuYXZiYXJFbGVtZW50PXtOYXZiYXJ9XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RpbWUgJiYgKFxuICAgICAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVQaWNrZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdGltZT17dGltZU9ian1cbiAgICAgICAgICAgICAgICBtaW51dGVzSW50ZXJ2YWw9e21pbnV0ZXNJbnRlcnZhbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=