'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable react/forbid-prop-types */


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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = (_temp = _class = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleContainerMouseDown = function () {
      _this.clickedInside = true;
      // The input's onBlur method is called from a queue right after onMouseDown event.
      // setTimeout adds another callback in the queue, but is called later than onBlur event
      _this.clickTimeout = setTimeout(function () {
        _this.clickedInside = false;
      }, 0);
    };

    _this.handleInputFocus = function (e) {
      var origShow = _this.state.showOverlay;
      _this.setState({
        showOverlay: true
      }, function () {
        if (!origShow && _this.daypicker && _this.state.selectedDay) {
          _this.daypicker.showMonth(_this.state.selectedDay);
        }
      });
      if (_this.props.inputProps.onFocus) {
        _this.props.inputProps.onFocus(e);
      }
    };

    _this.handleInputBlur = function (e) {
      var showOverlay = _this.clickedInside;
      _this.setState({
        showOverlay: showOverlay
      });
      // Force input's focus if blur event was caused by clicking on the calendar
      if (showOverlay) {
        _this.input.focus();
      }
      if (_this.props.inputProps.onBlur) {
        _this.props.inputProps.onBlur(e);
      }
    };

    _this.handleInputChange = function (e) {
      var value = e.target.value;
      // Remove invisble LRM chars from datestring

      if (value.replace) {
        value = value.replace(/\u200E/g, '');
      }
      if (value === '') {
        _this.setState({
          selectedDay: null
        });
        _this.props.onChange(null);
        return;
      }
      _this.props.onChange(value);

      var momentDay = _moment2.default.utc(value, _this.props.dateFormat);
      if (/^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/.test(value) && momentDay.isValid()) {
        _this.setState({
          selectedDay: momentDay.toDate()
        }, function () {
          if (_this.daypicker) {
            _this.daypicker.showMonth(_this.state.selectedDay);
          }
        });
      }
      if (_this.props.inputProps.onChange) {
        _this.props.inputProps.onChange(e);
      }
    };

    _this.handleDayClick = function (day) {
      _this.setState({
        selectedDay: day,
        showOverlay: false
      });
      // Remove invisble LRM chars from datestring
      _this.props.onChange(_moment2.default.utc(day).format(_this.props.dateFormat).replace(/\u200E/g, ''));
      _this.input.blur();
    };

    var state = {
      showOverlay: false,
      selectedDay: null
    };
    if (props.value !== '' && /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/.test(props.value)) {
      var momentDay = _moment2.default.utc(props.value, props.dateFormat);
      if (momentDay.isValid()) {
        state.selectedDay = momentDay.toDate();
      }
    }
    _this.state = state;
    _this.localeUtils = Object.assign(_moment4.default, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return _moment2.default.localeData().firstDayOfWeek();
      } });
    _this.input = null;
    _this.daypicker = null;
    _this.clickedInside = false;
    _this.clickTimeout = null;
    return _this;
  }

  DateInput.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.clickTimeout);
  };

  DateInput.prototype.render = function render() {
    var _this2 = this;

    /* eslint-disable no-unused-vars */
    var _props = this.props,
        language = _props.language,
        dateFormat = _props.dateFormat,
        value = _props.value,
        onChange = _props.onChange,
        inputProps = _props.inputProps,
        _inputRef = _props.inputRef,
        disabled = _props.disabled,
        otherProps = _objectWithoutProperties(_props, ['language', 'dateFormat', 'value', 'onChange', 'inputProps', 'inputRef', 'disabled']);

    var overlayStyle = {
      backgroundColor: '#fff',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
    };
    return _react2.default.createElement(
      _reactTether2.default,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }]
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
          value: value,
          disabled: disabled
        }, inputProps, {
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          onBlur: this.handleInputBlur
        }))
      ),
      this.state.showOverlay && _react2.default.createElement(
        'div',
        {
          style: overlayStyle,
          onMouseDown: this.handleContainerMouseDown,
          role: 'presentation'
        },
        _react2.default.createElement(_reactDayPicker2.default, _extends({
          ref: function ref(el) {
            _this2.daypicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: function selectedDays(day) {
            return _reactDayPicker.DateUtils.isSameDay(_this2.state.selectedDay, day);
          },
          localeUtils: this.localeUtils,
          locale: language
        }, otherProps))
      )
    );
  };

  return DateInput;
}(_react2.default.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  language: 'en',
  onChange: function onChange() {},

  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRGF0ZUlucHV0IiwicHJvcHMiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Rm9jdXMiLCJlIiwib3JpZ1Nob3ciLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2V0U3RhdGUiLCJkYXlwaWNrZXIiLCJzZWxlY3RlZERheSIsInNob3dNb250aCIsImlucHV0UHJvcHMiLCJvbkZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiaW5wdXQiLCJmb2N1cyIsIm9uQmx1ciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJyZXBsYWNlIiwib25DaGFuZ2UiLCJtb21lbnREYXkiLCJ1dGMiLCJkYXRlRm9ybWF0IiwidGVzdCIsImlzVmFsaWQiLCJ0b0RhdGUiLCJoYW5kbGVEYXlDbGljayIsImRheSIsImZvcm1hdCIsImJsdXIiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJsYW5ndWFnZSIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwib3ZlcmxheVN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJpc1NhbWVEYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7bUJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQXFCbkIscUJBQVlDLEtBQVosRUFB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S0csV0FOcEI7QUFPRSxrQkFBUVM7QUFQVixXQVFNRyxVQVJOO0FBTEY7QUF2QkosS0FERjtBQTJDRCxHOzs7RUE1TG9DLGdCQUFNUSxTLFVBV3BDQyxZLEdBQWU7QUFDcEJuQyxTQUFPLEVBRGE7QUFFcEJNLGNBQVksR0FGUTtBQUdwQmlCLFlBQVUsSUFIVTtBQUlwQnBCLFVBSm9CLHNCQUlULENBQUUsQ0FKTzs7QUFLcEJWLGNBQVksRUFMUTtBQU1wQitCLFVBTm9CLHNCQU1ULENBQUUsQ0FOTzs7QUFPcEJDLFlBQVU7QUFQVSxDO2tCQVhIL0MsUyIsImZpbGUiOiJkYXRlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERheVBpY2tlciwgeyBEYXRlVXRpbHMgfSBmcm9tICdyZWFjdC1kYXktcGlja2VyJztcbmltcG9ydCBMb2NhbGVVdGlscyBmcm9tICdyZWFjdC1kYXktcGlja2VyL21vbWVudCc7XG5pbXBvcnQgVGV0aGVyQ29tcG9uZW50IGZyb20gJ3JlYWN0LXRldGhlcic7XG5pbXBvcnQgJ3JlYWN0LWRheS1waWNrZXIvbGliL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXk6IG51bGwsXG4gICAgfTtcbiAgICBpZiAocHJvcHMudmFsdWUgIT09ICcnICYmIC9eXFxkezEsMn1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezR9JC8udGVzdChwcm9wcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1vbWVudERheSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIHByb3BzLmRhdGVGb3JtYXQpO1xuICAgICAgaWYgKG1vbWVudERheS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWREYXkgPSBtb21lbnREYXkudG9EYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheXBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcbiAgfVxuXG4gIGhhbmRsZUNvbnRhaW5lck1vdXNlRG93biA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSB0cnVlO1xuICAgIC8vIFRoZSBpbnB1dCdzIG9uQmx1ciBtZXRob2QgaXMgY2FsbGVkIGZyb20gYSBxdWV1ZSByaWdodCBhZnRlciBvbk1vdXNlRG93biBldmVudC5cbiAgICAvLyBzZXRUaW1lb3V0IGFkZHMgYW5vdGhlciBjYWxsYmFjayBpbiB0aGUgcXVldWUsIGJ1dCBpcyBjYWxsZWQgbGF0ZXIgdGhhbiBvbkJsdXIgZXZlbnRcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCBvcmlnU2hvdyA9IHRoaXMuc3RhdGUuc2hvd092ZXJsYXk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAoIW9yaWdTaG93ICYmIHRoaXMuZGF5cGlja2VyICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpIHtcbiAgICAgICAgdGhpcy5kYXlwaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCBzaG93T3ZlcmxheSA9IHRoaXMuY2xpY2tlZEluc2lkZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5LFxuICAgIH0pO1xuICAgIC8vIEZvcmNlIGlucHV0J3MgZm9jdXMgaWYgYmx1ciBldmVudCB3YXMgY2F1c2VkIGJ5IGNsaWNraW5nIG9uIHRoZSBjYWxlbmRhclxuICAgIGlmIChzaG93T3ZlcmxheSkge1xuICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIC8vIFJlbW92ZSBpbnZpc2JsZSBMUk0gY2hhcnMgZnJvbSBkYXRlc3RyaW5nXG4gICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICBjb25zdCBtb21lbnREYXkgPSBtb21lbnQudXRjKHZhbHVlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xuICAgIGlmIChcbiAgICAgIC9eXFxkezEsMn1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezR9JC8udGVzdCh2YWx1ZSkgJiZcbiAgICAgIG1vbWVudERheS5pc1ZhbGlkKClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogbW9tZW50RGF5LnRvRGF0ZSgpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kYXlwaWNrZXIpIHtcbiAgICAgICAgICB0aGlzLmRheXBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVEYXlDbGljayA9IChkYXkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSk7XG4gICAgLy8gUmVtb3ZlIGludmlzYmxlIExSTSBjaGFycyBmcm9tIGRhdGVzdHJpbmdcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudC51dGMoZGF5KS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKSk7XG4gICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBsYW5ndWFnZSxcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3ZlcmxheVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3hTaGFkb3c6ICcwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRldGhlckNvbXBvbmVudFxuICAgICAgICBhdHRhY2htZW50PVwidG9wIGNlbnRlclwiXG4gICAgICAgIGNvbnN0cmFpbnRzPXtbe1xuICAgICAgICAgIHRvOiAnc2Nyb2xsUGFyZW50JyxcbiAgICAgICAgICBhdHRhY2htZW50OiAndG9nZXRoZXInLFxuICAgICAgICB9XX1cbiAgICAgID5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXtvdmVybGF5U3R5bGV9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVDb250YWluZXJNb3VzZURvd259XG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF5UGlja2VyXG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlwaWNrZXIgPSBlbDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25EYXlDbGljaz17dGhpcy5oYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtkYXkgPT4gRGF0ZVV0aWxzLmlzU2FtZURheSh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5LCBkYXkpfVxuICAgICAgICAgICAgICBsb2NhbGVVdGlscz17dGhpcy5sb2NhbGVVdGlsc31cbiAgICAgICAgICAgICAgbG9jYWxlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=