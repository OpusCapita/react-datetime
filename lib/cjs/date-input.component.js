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
        locale = _props.locale,
        dateFormat = _props.dateFormat,
        value = _props.value,
        onChange = _props.onChange,
        inputProps = _props.inputProps,
        _inputRef = _props.inputRef,
        disabled = _props.disabled,
        otherProps = _objectWithoutProperties(_props, ['locale', 'dateFormat', 'value', 'onChange', 'inputProps', 'inputRef', 'disabled']);

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
          locale: locale
        }, otherProps))
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

  disabled: false
}, _temp);
exports.default = DateInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRGF0ZUlucHV0IiwicHJvcHMiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Rm9jdXMiLCJlIiwib3JpZ1Nob3ciLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2V0U3RhdGUiLCJkYXlwaWNrZXIiLCJzZWxlY3RlZERheSIsInNob3dNb250aCIsImlucHV0UHJvcHMiLCJvbkZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiaW5wdXQiLCJmb2N1cyIsIm9uQmx1ciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJyZXBsYWNlIiwib25DaGFuZ2UiLCJtb21lbnREYXkiLCJ1dGMiLCJkYXRlRm9ybWF0IiwidGVzdCIsImlzVmFsaWQiLCJ0b0RhdGUiLCJoYW5kbGVEYXlDbGljayIsImRheSIsImZvcm1hdCIsImJsdXIiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJsb2NhbGUiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsIm92ZXJsYXlTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInRvIiwiYXR0YWNobWVudCIsImVsIiwiaXNTYW1lRGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFxQm5CLHFCQUFZQyxLQUFaLEVBQW1C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LFdBTnBCO0FBT0Usa0JBQVFTO0FBUFYsV0FRTUcsVUFSTjtBQUxGO0FBdkJKLEtBREY7QUEyQ0QsRzs7O0VBNUxvQyxnQkFBTVEsUyxVQVdwQ0MsWSxHQUFlO0FBQ3BCbkMsU0FBTyxFQURhO0FBRXBCTSxjQUFZLEdBRlE7QUFHcEJpQixVQUFRLElBSFk7QUFJcEJwQixVQUpvQixzQkFJVCxDQUFFLENBSk87O0FBS3BCVixjQUFZLEVBTFE7QUFNcEIrQixVQU5vQixzQkFNVCxDQUFFLENBTk87O0FBT3BCQyxZQUFVO0FBUFUsQztrQkFYSC9DLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgZGF0ZUZvcm1hdDogJ0wnLFxuICAgIGxvY2FsZTogJ2VuJyxcbiAgICBvbkNoYW5nZSgpIHt9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmKCkge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWREYXk6IG51bGwsXG4gICAgfTtcbiAgICBpZiAocHJvcHMudmFsdWUgIT09ICcnICYmIC9eXFxkezEsMn1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezR9JC8udGVzdChwcm9wcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IG1vbWVudERheSA9IG1vbWVudC51dGMocHJvcHMudmFsdWUsIHByb3BzLmRhdGVGb3JtYXQpO1xuICAgICAgaWYgKG1vbWVudERheS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWREYXkgPSBtb21lbnREYXkudG9EYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmxvY2FsZVV0aWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIExvY2FsZVV0aWxzLFxuICAgICAgeyBnZXRGaXJzdERheU9mV2VlazogKCkgPT4gbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpIH0sXG4gICAgKTtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmRheXBpY2tlciA9IG51bGw7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcbiAgfVxuXG4gIGhhbmRsZUNvbnRhaW5lck1vdXNlRG93biA9ICgpID0+IHtcbiAgICB0aGlzLmNsaWNrZWRJbnNpZGUgPSB0cnVlO1xuICAgIC8vIFRoZSBpbnB1dCdzIG9uQmx1ciBtZXRob2QgaXMgY2FsbGVkIGZyb20gYSBxdWV1ZSByaWdodCBhZnRlciBvbk1vdXNlRG93biBldmVudC5cbiAgICAvLyBzZXRUaW1lb3V0IGFkZHMgYW5vdGhlciBjYWxsYmFjayBpbiB0aGUgcXVldWUsIGJ1dCBpcyBjYWxsZWQgbGF0ZXIgdGhhbiBvbkJsdXIgZXZlbnRcbiAgICB0aGlzLmNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGlja2VkSW5zaWRlID0gZmFsc2U7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dEZvY3VzID0gKGUpID0+IHtcbiAgICBjb25zdCBvcmlnU2hvdyA9IHRoaXMuc3RhdGUuc2hvd092ZXJsYXk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAoIW9yaWdTaG93ICYmIHRoaXMuZGF5cGlja2VyICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpIHtcbiAgICAgICAgdGhpcy5kYXlwaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0UHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBjb25zdCBzaG93T3ZlcmxheSA9IHRoaXMuY2xpY2tlZEluc2lkZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dPdmVybGF5LFxuICAgIH0pO1xuICAgIC8vIEZvcmNlIGlucHV0J3MgZm9jdXMgaWYgYmx1ciBldmVudCB3YXMgY2F1c2VkIGJ5IGNsaWNraW5nIG9uIHRoZSBjYWxlbmRhclxuICAgIGlmIChzaG93T3ZlcmxheSkge1xuICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIC8vIFJlbW92ZSBpbnZpc2JsZSBMUk0gY2hhcnMgZnJvbSBkYXRlc3RyaW5nXG4gICAgaWYgKHZhbHVlLnJlcGxhY2UpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFx1MjAwRS9nLCAnJyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICBjb25zdCBtb21lbnREYXkgPSBtb21lbnQudXRjKHZhbHVlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xuICAgIGlmIChcbiAgICAgIC9eXFxkezEsMn1bLlxcLS9dezF9XFxkezEsMn1bLlxcLS9dezF9XFxkezR9JC8udGVzdCh2YWx1ZSkgJiZcbiAgICAgIG1vbWVudERheS5pc1ZhbGlkKClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZERheTogbW9tZW50RGF5LnRvRGF0ZSgpLFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5kYXlwaWNrZXIpIHtcbiAgICAgICAgICB0aGlzLmRheXBpY2tlci5zaG93TW9udGgodGhpcy5zdGF0ZS5zZWxlY3RlZERheSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLmlucHV0UHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVEYXlDbGljayA9IChkYXkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkRGF5OiBkYXksXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfSk7XG4gICAgLy8gUmVtb3ZlIGludmlzYmxlIExSTSBjaGFycyBmcm9tIGRhdGVzdHJpbmdcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudC51dGMoZGF5KS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKSk7XG4gICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBsb2NhbGUsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG92ZXJsYXlTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYm94U2hhZG93OiAnMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W3tcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgfV19XG4gICAgICA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17b3ZlcmxheVN0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlQ29udGFpbmVyTW91c2VEb3dufVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cGlja2VyID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17ZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KX1cbiAgICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvVGV0aGVyQ29tcG9uZW50PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==