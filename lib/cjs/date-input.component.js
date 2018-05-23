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

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var momentDate = _moment2.default.utc(props.value, _moment2.default.ISO_8601);
    _this.onDocumentClick = _this.onDocumentClick.bind(_this);

    _this.state = {
      showOverlay: false,
      // selectedDay: Selected day in calendar (date object)
      selectedDay: _this.getDate(momentDate, FORMATS.DATE_OBJECT),
      // inputDate: Prettified string shown in input field
      inputDate: _this.getDate(momentDate, FORMATS.PRETTY_DATE, props.dateFormat)
    };

    _this.localeUtils = Object.assign(_moment4.default, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
      } });

    _this.input = null;
    _this.dayPicker = null;
    _this.focused = false;
    return _this;
  }

  // TODO: change this one to getDerivedStateFromProps ASAP


  DateInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If value changes when input is blurred
    if (!this.focused && nextProps.value && this.props.value !== nextProps.value) {
      var momentDate = _moment2.default.utc(nextProps.value, _moment2.default.ISO_8601);
      this.setState({
        selectedDay: this.getDate(momentDate, FORMATS.DATE_OBJECT),
        inputDate: this.getDate(momentDate, FORMATS.PRETTY_DATE, nextProps.dateFormat)
      });
    }
  };

  DateInput.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  };

  /**
   * Fires every time dayPicker is open and document is clicked
   * @param e
   */


  /**
   * Converts given date into wanted type (string/date object)
   * @param date - {string, moment object}
   * @param type - {string, date object} type of the return value
   * @param dateFormat {string} date format, defaults to 'M/D/YYYY'
   * ('M/D/YYYY' h:mm when using DateTime)
   * * @returns {string, date}
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
   * @param date
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
        showWeekNumbers = _props.showWeekNumbers,
        otherProps = _objectWithoutProperties(_props, ['locale', 'time', 'value', 'inputProps', 'inputRef', 'disabled', 'showWeekNumbers']);

    return _react2.default.createElement(
      _reactTether2.default,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        className: '' + classPrefix
      },
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(_reactBootstrap.FormControl, _extends({
          type: 'text',
          inputRef: function inputRef(el) {
            _this2.input = el;
            _inputRef(el);
          },
          value: this.state.inputDate,
          disabled: disabled
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus
        }))
      ),
      this.state.showOverlay && _react2.default.createElement(
        'div',
        {
          role: 'presentation',
          className: classPrefix + '-calendar',
          ref: function ref(el) {
            _this2.calendarContainer = el;
          }
        },
        _react2.default.createElement(_reactDayPicker2.default, _extends({
          ref: function ref(el) {
            _this2.dayPicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: this.isSameDay,
          localeUtils: this.localeUtils,
          month: this.state.dayPickerVisibleMonth,
          showWeekNumbers: showWeekNumbers,
          firstDayOfWeek: this.getFirstDayOfWeek(),
          locale: locale,
          captionElement: this.renderCaptionElement
        }, otherProps)),
        time && _react2.default.createElement(_timePicker2.default, {
          onChange: this.handleTimePickerChange,
          value: value
        })
      )
    );
  };

  return DateInput;
}(_react2.default.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  locale: 'en',
  onChange: function onChange() {},

  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false,
  showWeekNumbers: true,
  time: false
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

  this.getDate = function (date, type) {
    var dateFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this3.props.dateFormat;

    var momentDate = typeof date === 'string' ? _moment2.default.utc(date, dateFormat) : date;
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

  this.getFirstDayOfWeek = function () {
    return _moment2.default.localeData(_this3.props.locale).firstDayOfWeek();
  };

  this.handleInputFocus = function (e) {
    var _state = _this3.state,
        showOverlay = _state.showOverlay,
        selectedDay = _state.selectedDay;

    _this3.focused = true;

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
    _this3.focused = false;

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
        selectedDay: _this3.getDate(inputDate, FORMATS.DATE_OBJECT)
      }, function () {
        // If dayPicker is open, we will show the correct month
        if (_this3.dayPicker) _this3.dayPicker.showMonth(_this3.state.selectedDay);
      });
      onChange(_this3.getDate(inputDate, FORMATS.UTC));
      if (inputProps.onChange) inputProps.onChange(e);
    } else {
      // If the value is invalid we reset the model value
      onChange(null);
    }
  };

  this.handleDayClick = function (day) {
    var momentObj = _moment2.default.utc(day);
    _this3.setState({
      selectedDay: day,
      showOverlay: false,
      inputDate: _this3.getDate(momentObj, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(_this3.getDate(momentObj, FORMATS.UTC));
      _this3.input.blur();
    });
  };

  this.handleTimePickerChange = function (date) {
    var momentDate = _moment2.default.utc(date);
    _this3.setState({
      inputDate: _this3.getDate(momentDate, FORMATS.PRETTY_DATE)
    }, function () {
      _this3.props.onChange(date);
    });
  };

  this.handleYearMonthChange = function (val) {
    _this3.setState({
      dayPickerVisibleMonth: val
    });
  };

  this.isSameDay = function (day) {
    return _reactDayPicker.DateUtils.isSameDay(_this3.state.selectedDay, day);
  };

  this.isValidFormat = function (date) {
    var pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}$/;
    if (_this3.props.time) pattern = /^\d{1,4}[.\-/]{1}\d{1,2}[.\-/]{1}\d{1,4}\s{0,1}\d{0,2}([:.])?\d{0,2}$/;
    return pattern.test(date.trim());
  };

  this.renderCaptionElement = function (_ref) {
    var date = _ref.date;
    return _react2.default.createElement(_yearMonthPicker2.default, {
      date: date,
      onChange: _this3.handleYearMonthChange,
      locale: _this3.props.locale
    });
  };
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRk9STUFUUyIsIlVUQyIsIlBSRVRUWV9EQVRFIiwiREFURV9PQkpFQ1QiLCJEYXRlSW5wdXQiLCJwcm9wcyIsIm1vbWVudERhdGUiLCJ1dGMiLCJ2YWx1ZSIsIklTT184NjAxIiwib25Eb2N1bWVudENsaWNrIiwiYmluZCIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZERheSIsImdldERhdGUiLCJpbnB1dERhdGUiLCJkYXRlRm9ybWF0IiwibG9jYWxlVXRpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRGaXJzdERheU9mV2VlayIsImxvY2FsZURhdGEiLCJmaXJzdERheU9mV2VlayIsImlucHV0IiwiZGF5UGlja2VyIiwiZm9jdXNlZCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2xhc3NQcmVmaXgiLCJsb2NhbGUiLCJ0aW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJzaG93V2Vla051bWJlcnMiLCJvdGhlclByb3BzIiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJjYWxlbmRhckNvbnRhaW5lciIsImhhbmRsZURheUNsaWNrIiwiaXNTYW1lRGF5IiwiZGF5UGlja2VyVmlzaWJsZU1vbnRoIiwicmVuZGVyQ2FwdGlvbkVsZW1lbnQiLCJoYW5kbGVUaW1lUGlja2VyQ2hhbmdlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZU92ZXJsYXkiLCJkYXRlIiwidHlwZSIsInJlbW92ZUludmlzaWJsZUNoYXJzIiwic3RyIiwicmVwbGFjZSIsImlzVmFsaWQiLCJmb3JtYXQiLCJ0b0lTT1N0cmluZyIsInRvRGF0ZSIsInNldFRpbWVvdXQiLCJzaG93TW9udGgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Gb2N1cyIsImZvY3VzIiwib25CbHVyIiwiaXNWYWxpZEZvcm1hdCIsImRheSIsIm1vbWVudE9iaiIsImJsdXIiLCJoYW5kbGVZZWFyTW9udGhDaGFuZ2UiLCJ2YWwiLCJwYXR0ZXJuIiwidGVzdCIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUNBQUE7OztBQVVBOzs7QUFUQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsVUFBVTtBQUNkQyxPQUFLLEtBRFM7QUFFZEMsZUFBYSxhQUZDO0FBR2RDLGVBQWE7QUFIQyxDQUFoQjs7SUFNcUJDLFM7OztBQTJCbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBR2pCLFFBQU1DLGFBQWEsaUJBQU9DLEdBQVAsQ0FBV0YsTUFBTUcsS0FBakIsRUFBd0IsaUJBQU9DLFFBQS9CLENBQW5CO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2Qjs7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsS0FERjtBQUVYO0FBQ0FDLG1CQUFhLE1BQUtDLE9BQUwsQ0FBYVQsVUFBYixFQUF5Qk4sUUFBUUcsV0FBakMsQ0FIRjtBQUlYO0FBQ0FhLGlCQUFXLE1BQUtELE9BQUwsQ0FBYVQsVUFBYixFQUF5Qk4sUUFBUUUsV0FBakMsRUFBOENHLE1BQU1ZLFVBQXBEO0FBTEEsS0FBYjs7QUFRQSxVQUFLQyxXQUFMLEdBQW1CQyxPQUFPQyxNQUFQLG1CQUVqQixFQUFFQyxtQkFBbUI7QUFBQSxlQUFNLGlCQUFPQyxVQUFQLEdBQW9CQyxjQUFwQixF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LE9BQUs1RSxLQUFMLENBQVcrQixJQUFmLEVBQXFCNkMsVUFBVSx1RUFBVjtBQUNyQixXQUFPQSxRQUFRQyxJQUFSLENBQWF0QixLQUFLdUIsSUFBTCxFQUFiLENBQVA7QUFDRCxHOztPQU9EaEMsb0IsR0FBdUI7QUFBQSxRQUFHUyxJQUFILFFBQUdBLElBQUg7QUFBQSxXQUNyQjtBQUNFLFlBQU1BLElBRFI7QUFFRSxnQkFBVSxPQUFLbUIscUJBRmpCO0FBR0UsY0FBUSxPQUFLMUUsS0FBTCxDQUFXOEI7QUFIckIsTUFEcUI7QUFBQSxHOztrQkE1T0ovQixTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCBZZWFyTW9udGhQaWNrZXIgZnJvbSAnLi95ZWFyLW1vbnRoLXBpY2tlci95ZWFyLW1vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0ICcuL2RhdGUtaW5wdXQuc2Nzcyc7XG5cbi8vIERhdGUgZm9ybWF0cyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgKG1haW5seSBieSB0aGUgZ2V0RGF0ZSBtZXRob2QpXG5jb25zdCBGT1JNQVRTID0ge1xuICBVVEM6ICdVVEMnLFxuICBQUkVUVFlfREFURTogJ1BSRVRUWV9EQVRFJyxcbiAgREFURV9PQkpFQ1Q6ICdEQVRFX09CSkVDVCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIG9uQ2hhbmdlKCkge1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWYoKSB7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc2hvd1dlZWtOdW1iZXJzOiB0cnVlLFxuICAgIHRpbWU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIG1vbWVudC5JU09fODYwMSk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdGVkRGF5OiBTZWxlY3RlZCBkYXkgaW4gY2FsZW5kYXIgKGRhdGUgb2JqZWN0KVxuICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShtb21lbnREYXRlLCBGT1JNQVRTLkRBVEVfT0JKRUNUKSxcbiAgICAgIC8vIGlucHV0RGF0ZTogUHJldHRpZmllZCBzdHJpbmcgc2hvd24gaW4gaW5wdXQgZmllbGRcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIHByb3BzLmRhdGVGb3JtYXQpLFxuICAgIH07XG5cbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcblxuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuZGF5UGlja2VyID0gbnVsbDtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoYW5nZSB0aGlzIG9uZSB0byBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgQVNBUFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIElmIHZhbHVlIGNoYW5nZXMgd2hlbiBpbnB1dCBpcyBibHVycmVkXG4gICAgaWYgKCF0aGlzLmZvY3VzZWQgJiYgbmV4dFByb3BzLnZhbHVlICYmIHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudC51dGMobmV4dFByb3BzLnZhbHVlLCBtb21lbnQuSVNPXzg2MDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkRGF5OiB0aGlzLmdldERhdGUobW9tZW50RGF0ZSwgRk9STUFUUy5EQVRFX09CSkVDVCksXG4gICAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUsIG5leHRQcm9wcy5kYXRlRm9ybWF0KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGV2ZXJ5IHRpbWUgZGF5UGlja2VyIGlzIG9wZW4gYW5kIGRvY3VtZW50IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIG9uRG9jdW1lbnRDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAvLyBDbG9zZXMgb3ZlcmxheSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBjYWxlbmRhciAoYW5kIGlucHV0IGZpZWxkKVxuICAgIGlmICghdGhpcy5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgIGUudGFyZ2V0ICE9PSB0aGlzLmlucHV0KSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBnaXZlbiBkYXRlIGludG8gd2FudGVkIHR5cGUgKHN0cmluZy9kYXRlIG9iamVjdClcbiAgICogQHBhcmFtIGRhdGUgLSB7c3RyaW5nLCBtb21lbnQgb2JqZWN0fVxuICAgKiBAcGFyYW0gdHlwZSAtIHtzdHJpbmcsIGRhdGUgb2JqZWN0fSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWVcbiAgICogQHBhcmFtIGRhdGVGb3JtYXQge3N0cmluZ30gZGF0ZSBmb3JtYXQsIGRlZmF1bHRzIHRvICdNL0QvWVlZWSdcbiAgICogKCdNL0QvWVlZWScgaDptbSB3aGVuIHVzaW5nIERhdGVUaW1lKVxuICAgKiAqIEByZXR1cm5zIHtzdHJpbmcsIGRhdGV9XG4gICAqL1xuICBnZXREYXRlID0gKGRhdGUsIHR5cGUsIGRhdGVGb3JtYXQgPSB0aGlzLnByb3BzLmRhdGVGb3JtYXQpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gdHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnID8gbW9tZW50LnV0YyhkYXRlLCBkYXRlRm9ybWF0KSA6IGRhdGU7XG4gICAgY29uc3QgcmVtb3ZlSW52aXNpYmxlQ2hhcnMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIGlmICghbW9tZW50RGF0ZS5pc1ZhbGlkKCkgfHwgIWRhdGUpIHJldHVybiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgRk9STUFUUy5QUkVUVFlfREFURTpcbiAgICAgICAgcmV0dXJuIHJlbW92ZUludmlzaWJsZUNoYXJzKG1vbWVudERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpKTtcbiAgICAgIGNhc2UgRk9STUFUUy5VVEM6XG4gICAgICAgIHJldHVybiByZW1vdmVJbnZpc2libGVDaGFycyhtb21lbnREYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY2FzZSBGT1JNQVRTLkRBVEVfT0JKRUNUOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vbWVudERhdGUudG9EYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBvZiB0aGUgd2VlayBiYXNlZCBvbiBsb2NhbGUgKHVzZWQgYnkgRGF5UGlja2VyKVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Rmlyc3REYXlPZldlZWsgPSAoKSA9PiBtb21lbnQubG9jYWxlRGF0YSh0aGlzLnByb3BzLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcblxuICAvKipcbiAgICogSGFuZGxlcyBpbnB1dCBmb2N1cyBldmVudC4gU2hvd3MgYW4gb3ZlcmxheSBhbmQgYWRkcyBhbiBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXksIHNlbGVjdGVkRGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgIH0sICgpID0+IHtcbiAgICAgIC8vIERlbGF5cyB0aGUgZXhlY3V0aW9uIHNvIHRoYXQgdGhlIGRheVBpY2tlciBvcGVucyBiZWZvcmUgc2VsZWN0aW5nIGEgZGF5XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93T3ZlcmxheSAmJiB0aGlzLmRheVBpY2tlciAmJiBzZWxlY3RlZERheSkgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHNlbGVjdGVkRGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKSB0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cyhlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2VzIG92ZXJsYXkuIENhbGxlZCBmcm9tIG9uRG9jdW1lbnRDbGljay5cbiAgICogQHBhcmFtIGVcbiAgICovXG4gIGNsb3NlT3ZlcmxheSA9IChlKSA9PiB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93T3ZlcmxheSkgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgaW5wdXQgY2hhbmdlLCBjaGVja3MgdmFsaWRpdHkgYW5kIHVwZGF0ZXMgbW9kZWwgdmFsdWUgYW5kIHRoZSBkYXkgcGlja2VyXG4gICAqIEBwYXJhbSBlIHtldmVudH1cbiAgICovXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBpbnB1dERhdGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIGlucHV0UHJvcHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0RGF0ZSB9KTtcbiAgICAvLyBUaGlzIGZpcmVzIG9ubHkgaWYgdGhlIG5ldyBkYXRlIGlzIHZhbGlkIGluIGdpdmVuIGZvcm1hdFxuICAgIGlmIChtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCkuaXNWYWxpZCgpICYmIHRoaXMuaXNWYWxpZEZvcm1hdChpbnB1dERhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IHRoaXMuZ2V0RGF0ZShpbnB1dERhdGUsIEZPUk1BVFMuREFURV9PQkpFQ1QpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBJZiBkYXlQaWNrZXIgaXMgb3Blbiwgd2Ugd2lsbCBzaG93IHRoZSBjb3JyZWN0IG1vbnRoXG4gICAgICAgIGlmICh0aGlzLmRheVBpY2tlcikgdGhpcy5kYXlQaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZSh0aGlzLmdldERhdGUoaW5wdXREYXRlLCBGT1JNQVRTLlVUQykpO1xuICAgICAgaWYgKGlucHV0UHJvcHMub25DaGFuZ2UpIGlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkIHdlIHJlc2V0IHRoZSBtb2RlbCB2YWx1ZVxuICAgICAgb25DaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGRheVBpY2tlciBjbGlja1xuICAgKiBAcGFyYW0gZGF5IHtkYXRlfVxuICAgKi9cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XG4gICAgY29uc3QgbW9tZW50T2JqID0gbW9tZW50LnV0YyhkYXkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWREYXk6IGRheSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudE9iaiwgRk9STUFUUy5QUkVUVFlfREFURSksXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmdldERhdGUobW9tZW50T2JqLCBGT1JNQVRTLlVUQykpO1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGltZSBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVUaW1lUGlja2VyQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0YyhkYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0RGF0ZTogdGhpcy5nZXREYXRlKG1vbWVudERhdGUsIEZPUk1BVFMuUFJFVFRZX0RBVEUpLFxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZGF0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgeWVhci1tb250aCBwaWNrZXIgKHNlbGVjdCBib3hlcykgY2hhbmdlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqL1xuICBoYW5kbGVZZWFyTW9udGhDaGFuZ2UgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXlQaWNrZXJWaXNpYmxlTW9udGg6IHZhbCxcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHNlbGVjdGVkIGRheSBpcyBzYW1lIGFzIGEgZGF5IGluIGNhbGVuZGFyXG4gICAqIFVzZWQgYnkgZGF5UGlja2VyXG4gICAqIEBwYXJhbSBkYXkge2RhdGV9XG4gICAqL1xuICBpc1NhbWVEYXkgPSBkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZ2l2ZW4gaXMgdmFsaWQgZm9ybWF0IHdpc2UuIFVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBtb21lbnQncyBpc1ZhbGlkIG1ldGhvZFxuICAgKiBBIGxpdHRsZSBsZXNzIHN0cmljdCB0aGFuIG1vbWVudCdzIGlzVmFsaWQgd2l0aCBzdHJpY3QgbW9kZSBlbmFibGVkXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNWYWxpZEZvcm1hdCA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHBhdHRlcm4gPSAvXlxcZHsxLDR9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDR9JC87XG4gICAgaWYgKHRoaXMucHJvcHMudGltZSkgcGF0dGVybiA9IC9eXFxkezEsNH1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezEsNH1cXHN7MCwxfVxcZHswLDJ9KFs6Ll0pP1xcZHswLDJ9JC87XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChkYXRlLnRyaW0oKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgc2VsZWN0IGJveGVzIGFib3ZlIHRoZSBjYWxlbmRhclxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbmRlckNhcHRpb25FbGVtZW50ID0gKHsgZGF0ZSB9KSA9PiAoXG4gICAgPFllYXJNb250aFBpY2tlclxuICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJNb250aENoYW5nZX1cbiAgICAgIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGV9XG4gICAgLz5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtZGF0ZXRpbWUnO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgdGltZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1gfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dERhdGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH0tY2FsZW5kYXJgfVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyQ29udGFpbmVyID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZGF5UGlja2VyID0gZWw7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17dGhpcy5pc1NhbWVEYXl9XG4gICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgIG1vbnRoPXt0aGlzLnN0YXRlLmRheVBpY2tlclZpc2libGVNb250aH1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs9e3RoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKX1cbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgY2FwdGlvbkVsZW1lbnQ9e3RoaXMucmVuZGVyQ2FwdGlvbkVsZW1lbnR9XG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge3RpbWUgJiZcbiAgICAgICAgICA8VGltZVBpY2tlclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZVBpY2tlckNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==