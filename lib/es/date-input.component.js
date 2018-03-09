var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

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

      var momentDay = moment.utc(value, _this.props.dateFormat);
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
      _this.props.onChange(moment.utc(day).format(_this.props.dateFormat).replace(/\u200E/g, ''));
      _this.input.blur();
    };

    var state = {
      showOverlay: false,
      selectedDay: null
    };
    if (props.value !== '' && /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/.test(props.value)) {
      var momentDay = moment.utc(props.value, props.dateFormat);
      if (momentDay.isValid()) {
        state.selectedDay = momentDay.toDate();
      }
    }
    _this.state = state;
    _this.localeUtils = Object.assign(LocaleUtils, { getFirstDayOfWeek: function getFirstDayOfWeek() {
        return moment.localeData().firstDayOfWeek();
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
    return React.createElement(
      TetherComponent,
      {
        attachment: 'top center',
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }]
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
          value: value,
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
          style: overlayStyle,
          onMouseDown: this.handleContainerMouseDown,
          role: 'presentation'
        },
        React.createElement(DayPicker, _extends({
          ref: function ref(el) {
            _this2.daypicker = el;
          },
          onDayClick: this.handleDayClick,
          selectedDays: function selectedDays(day) {
            return DateUtils.isSameDay(_this2.state.selectedDay, day);
          },
          localeUtils: this.localeUtils,
          locale: language
        }, otherProps))
      )
    );
  };

  return DateInput;
}(React.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  language: 'en',
  onChange: function onChange() {},

  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiRGF0ZUlucHV0IiwicHJvcHMiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Rm9jdXMiLCJlIiwib3JpZ1Nob3ciLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2V0U3RhdGUiLCJkYXlwaWNrZXIiLCJzZWxlY3RlZERheSIsInNob3dNb250aCIsImlucHV0UHJvcHMiLCJvbkZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiaW5wdXQiLCJmb2N1cyIsIm9uQmx1ciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJyZXBsYWNlIiwib25DaGFuZ2UiLCJtb21lbnREYXkiLCJ1dGMiLCJkYXRlRm9ybWF0IiwidGVzdCIsImlzVmFsaWQiLCJ0b0RhdGUiLCJoYW5kbGVEYXlDbGljayIsImRheSIsImZvcm1hdCIsImJsdXIiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJsYW5ndWFnZSIsImlucHV0UmVmIiwiZGlzYWJsZWQiLCJvdGhlclByb3BzIiwib3ZlcmxheVN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwidG8iLCJhdHRhY2htZW50IiwiZWwiLCJpc1NhbWVEYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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S0FBS1c7QUFYZjtBQURGLE9BUEY7QUFzQkksV0FBS1IsS0FBTCxDQUFXQyxXQUFYLElBQ0E7QUFBQTtBQUFBO0FBQ0UsaUJBQU91QyxZQURUO0FBRUUsdUJBQWEsS0FBSy9DLHdCQUZwQjtBQUdFLGdCQUFLO0FBSFA7QUFLRSw0QkFBQyxTQUFEO0FBQ0UsZUFBSyxhQUFDb0QsRUFBRCxFQUFRO0FBQ1gsbUJBQUsxQyxTQUFMLEdBQWlCMEMsRUFBakI7QUFDRCxXQUhIO0FBSUUsc0JBQVksS0FBS3RCLGNBSm5CO0FBS0Usd0JBQWM7QUFBQSxtQkFBT25DLFVBQVUwRCxTQUFWLENBQW9CLE9BQUs5QyxLQUFMLENBQVdJLFdBQS9CLEVBQTRDb0IsR0FBNUMsQ0FBUDtBQUFBLFdBTGhCO0FBTUUsdUJBQWEsS0FBS0csV0FOcEI7QUFPRSxrQkFBUVM7QUFQVixXQVFNRyxVQVJOO0FBTEY7QUF2QkosS0FERjtBQTJDRCxHOzs7RUE1TG9DekQsTUFBTWlFLFMsVUFXcENDLFksR0FBZTtBQUNwQm5DLFNBQU8sRUFEYTtBQUVwQk0sY0FBWSxHQUZRO0FBR3BCaUIsWUFBVSxJQUhVO0FBSXBCcEIsVUFKb0Isc0JBSVQsQ0FBRSxDQUpPOztBQUtwQlYsY0FBWSxFQUxRO0FBTXBCK0IsVUFOb0Isc0JBTVQsQ0FBRSxDQU5POztBQU9wQkMsWUFBVTtBQVBVLEM7U0FYSC9DLFMiLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXlQaWNrZXIsIHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5pbXBvcnQgTG9jYWxlVXRpbHMgZnJvbSAncmVhY3QtZGF5LXBpY2tlci9tb21lbnQnO1xuaW1wb3J0IFRldGhlckNvbXBvbmVudCBmcm9tICdyZWFjdC10ZXRoZXInO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBkYXRlRm9ybWF0OiAnTCcsXG4gICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRGF5OiBudWxsLFxuICAgIH07XG4gICAgaWYgKHByb3BzLnZhbHVlICE9PSAnJyAmJiAvXlxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHs0fSQvLnRlc3QocHJvcHMudmFsdWUpKSB7XG4gICAgICBjb25zdCBtb21lbnREYXkgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBwcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIGlmIChtb21lbnREYXkuaXNWYWxpZCgpKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkRGF5ID0gbW9tZW50RGF5LnRvRGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlwaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XG4gIH1cblxuICBoYW5kbGVDb250YWluZXJNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gdHJ1ZTtcbiAgICAvLyBUaGUgaW5wdXQncyBvbkJsdXIgbWV0aG9kIGlzIGNhbGxlZCBmcm9tIGEgcXVldWUgcmlnaHQgYWZ0ZXIgb25Nb3VzZURvd24gZXZlbnQuXG4gICAgLy8gc2V0VGltZW91dCBhZGRzIGFub3RoZXIgY2FsbGJhY2sgaW4gdGhlIHF1ZXVlLCBidXQgaXMgY2FsbGVkIGxhdGVyIHRoYW4gb25CbHVyIGV2ZW50XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIH0sIDApO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ1Nob3cgPSB0aGlzLnN0YXRlLnNob3dPdmVybGF5O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKCFvcmlnU2hvdyAmJiB0aGlzLmRheXBpY2tlciAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KSB7XG4gICAgICAgIHRoaXMuZGF5cGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSB0aGlzLmNsaWNrZWRJbnNpZGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheSxcbiAgICB9KTtcbiAgICAvLyBGb3JjZSBpbnB1dCdzIGZvY3VzIGlmIGJsdXIgZXZlbnQgd2FzIGNhdXNlZCBieSBjbGlja2luZyBvbiB0aGUgY2FsZW5kYXJcbiAgICBpZiAoc2hvd092ZXJsYXkpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAvLyBSZW1vdmUgaW52aXNibGUgTFJNIGNoYXJzIGZyb20gZGF0ZXN0cmluZ1xuICAgIGlmICh2YWx1ZS5yZXBsYWNlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgY29uc3QgbW9tZW50RGF5ID0gbW9tZW50LnV0Yyh2YWx1ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KTtcbiAgICBpZiAoXG4gICAgICAvXlxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHs0fSQvLnRlc3QodmFsdWUpICYmXG4gICAgICBtb21lbnREYXkuaXNWYWxpZCgpXG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IG1vbWVudERheS50b0RhdGUoKSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF5cGlja2VyKSB7XG4gICAgICAgICAgdGhpcy5kYXlwaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0pO1xuICAgIC8vIFJlbW92ZSBpbnZpc2JsZSBMUk0gY2hhcnMgZnJvbSBkYXRlc3RyaW5nXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShtb21lbnQudXRjKGRheSkuZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJykpO1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG92ZXJsYXlTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgYm94U2hhZG93OiAnMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnRcbiAgICAgICAgYXR0YWNobWVudD1cInRvcCBjZW50ZXJcIlxuICAgICAgICBjb25zdHJhaW50cz17W3tcbiAgICAgICAgICB0bzogJ3Njcm9sbFBhcmVudCcsXG4gICAgICAgICAgYXR0YWNobWVudDogJ3RvZ2V0aGVyJyxcbiAgICAgICAgfV19XG4gICAgICA+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17b3ZlcmxheVN0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlQ29udGFpbmVyTW91c2VEb3dufVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERheVBpY2tlclxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cGlja2VyID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRGF5Q2xpY2s9e3RoaXMuaGFuZGxlRGF5Q2xpY2t9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17ZGF5ID0+IERhdGVVdGlscy5pc1NhbWVEYXkodGhpcy5zdGF0ZS5zZWxlY3RlZERheSwgZGF5KX1cbiAgICAgICAgICAgICAgbG9jYWxlVXRpbHM9e3RoaXMubG9jYWxlVXRpbHN9XG4gICAgICAgICAgICAgIGxvY2FsZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9UZXRoZXJDb21wb25lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19