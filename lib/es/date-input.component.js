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
          locale: locale
        }, otherProps))
      )
    );
  };

  return DateInput;
}(React.Component), _class.defaultProps = {
  value: '',
  dateFormat: 'L',
  locale: 'en',
  onChange: function onChange() {},

  inputProps: {},
  inputRef: function inputRef() {},

  disabled: false
}, _temp);
export { DateInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIm1vbWVudCIsIkRheVBpY2tlciIsIkRhdGVVdGlscyIsIkxvY2FsZVV0aWxzIiwiVGV0aGVyQ29tcG9uZW50IiwiRGF0ZUlucHV0IiwicHJvcHMiLCJoYW5kbGVDb250YWluZXJNb3VzZURvd24iLCJjbGlja2VkSW5zaWRlIiwiY2xpY2tUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Rm9jdXMiLCJlIiwib3JpZ1Nob3ciLCJzdGF0ZSIsInNob3dPdmVybGF5Iiwic2V0U3RhdGUiLCJkYXlwaWNrZXIiLCJzZWxlY3RlZERheSIsInNob3dNb250aCIsImlucHV0UHJvcHMiLCJvbkZvY3VzIiwiaGFuZGxlSW5wdXRCbHVyIiwiaW5wdXQiLCJmb2N1cyIsIm9uQmx1ciIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJyZXBsYWNlIiwib25DaGFuZ2UiLCJtb21lbnREYXkiLCJ1dGMiLCJkYXRlRm9ybWF0IiwidGVzdCIsImlzVmFsaWQiLCJ0b0RhdGUiLCJoYW5kbGVEYXlDbGljayIsImRheSIsImZvcm1hdCIsImJsdXIiLCJsb2NhbGVVdGlscyIsIk9iamVjdCIsImFzc2lnbiIsImdldEZpcnN0RGF5T2ZXZWVrIiwibG9jYWxlRGF0YSIsImZpcnN0RGF5T2ZXZWVrIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXIiLCJsb2NhbGUiLCJpbnB1dFJlZiIsImRpc2FibGVkIiwib3RoZXJQcm9wcyIsIm92ZXJsYXlTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInRvIiwiYXR0YWNobWVudCIsImVsIiwiaXNTYW1lRGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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QUtXO0FBWGY7QUFERixPQVBGO0FBc0JJLFdBQUtSLEtBQUwsQ0FBV0MsV0FBWCxJQUNBO0FBQUE7QUFBQTtBQUNFLGlCQUFPdUMsWUFEVDtBQUVFLHVCQUFhLEtBQUsvQyx3QkFGcEI7QUFHRSxnQkFBSztBQUhQO0FBS0UsNEJBQUMsU0FBRDtBQUNFLGVBQUssYUFBQ29ELEVBQUQsRUFBUTtBQUNYLG1CQUFLMUMsU0FBTCxHQUFpQjBDLEVBQWpCO0FBQ0QsV0FISDtBQUlFLHNCQUFZLEtBQUt0QixjQUpuQjtBQUtFLHdCQUFjO0FBQUEsbUJBQU9uQyxVQUFVMEQsU0FBVixDQUFvQixPQUFLOUMsS0FBTCxDQUFXSSxXQUEvQixFQUE0Q29CLEdBQTVDLENBQVA7QUFBQSxXQUxoQjtBQU1FLHVCQUFhLEtBQUtHLFdBTnBCO0FBT0Usa0JBQVFTO0FBUFYsV0FRTUcsVUFSTjtBQUxGO0FBdkJKLEtBREY7QUEyQ0QsRzs7O0VBNUxvQ3pELE1BQU1pRSxTLFVBV3BDQyxZLEdBQWU7QUFDcEJuQyxTQUFPLEVBRGE7QUFFcEJNLGNBQVksR0FGUTtBQUdwQmlCLFVBQVEsSUFIWTtBQUlwQnBCLFVBSm9CLHNCQUlULENBQUUsQ0FKTzs7QUFLcEJWLGNBQVksRUFMUTtBQU1wQitCLFVBTm9CLHNCQU1ULENBQUUsQ0FOTzs7QUFPcEJDLFlBQVU7QUFQVSxDO1NBWEgvQyxTIiwiZmlsZSI6ImRhdGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF5UGlja2VyLCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuaW1wb3J0IExvY2FsZVV0aWxzIGZyb20gJ3JlYWN0LWRheS1waWNrZXIvbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGRhdGVGb3JtYXQ6ICdMJyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgb25DaGFuZ2UoKSB7fSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZigpIHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkRGF5OiBudWxsLFxuICAgIH07XG4gICAgaWYgKHByb3BzLnZhbHVlICE9PSAnJyAmJiAvXlxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHs0fSQvLnRlc3QocHJvcHMudmFsdWUpKSB7XG4gICAgICBjb25zdCBtb21lbnREYXkgPSBtb21lbnQudXRjKHByb3BzLnZhbHVlLCBwcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIGlmIChtb21lbnREYXkuaXNWYWxpZCgpKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkRGF5ID0gbW9tZW50RGF5LnRvRGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5sb2NhbGVVdGlscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBMb2NhbGVVdGlscyxcbiAgICAgIHsgZ2V0Rmlyc3REYXlPZldlZWs6ICgpID0+IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKSB9LFxuICAgICk7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5kYXlwaWNrZXIgPSBudWxsO1xuICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XG4gIH1cblxuICBoYW5kbGVDb250YWluZXJNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5jbGlja2VkSW5zaWRlID0gdHJ1ZTtcbiAgICAvLyBUaGUgaW5wdXQncyBvbkJsdXIgbWV0aG9kIGlzIGNhbGxlZCBmcm9tIGEgcXVldWUgcmlnaHQgYWZ0ZXIgb25Nb3VzZURvd24gZXZlbnQuXG4gICAgLy8gc2V0VGltZW91dCBhZGRzIGFub3RoZXIgY2FsbGJhY2sgaW4gdGhlIHF1ZXVlLCBidXQgaXMgY2FsbGVkIGxhdGVyIHRoYW4gb25CbHVyIGV2ZW50XG4gICAgdGhpcy5jbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xpY2tlZEluc2lkZSA9IGZhbHNlO1xuICAgIH0sIDApO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRGb2N1cyA9IChlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ1Nob3cgPSB0aGlzLnN0YXRlLnNob3dPdmVybGF5O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd092ZXJsYXk6IHRydWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKCFvcmlnU2hvdyAmJiB0aGlzLmRheXBpY2tlciAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KSB7XG4gICAgICAgIHRoaXMuZGF5cGlja2VyLnNob3dNb250aCh0aGlzLnN0YXRlLnNlbGVjdGVkRGF5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2hvd092ZXJsYXkgPSB0aGlzLmNsaWNrZWRJbnNpZGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93T3ZlcmxheSxcbiAgICB9KTtcbiAgICAvLyBGb3JjZSBpbnB1dCdzIGZvY3VzIGlmIGJsdXIgZXZlbnQgd2FzIGNhdXNlZCBieSBjbGlja2luZyBvbiB0aGUgY2FsZW5kYXJcbiAgICBpZiAoc2hvd092ZXJsYXkpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAvLyBSZW1vdmUgaW52aXNibGUgTFJNIGNoYXJzIGZyb20gZGF0ZXN0cmluZ1xuICAgIGlmICh2YWx1ZS5yZXBsYWNlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuXG4gICAgY29uc3QgbW9tZW50RGF5ID0gbW9tZW50LnV0Yyh2YWx1ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KTtcbiAgICBpZiAoXG4gICAgICAvXlxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHsxLDJ9Wy5cXC0vXXsxfVxcZHs0fSQvLnRlc3QodmFsdWUpICYmXG4gICAgICBtb21lbnREYXkuaXNWYWxpZCgpXG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWREYXk6IG1vbWVudERheS50b0RhdGUoKSxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF5cGlja2VyKSB7XG4gICAgICAgICAgdGhpcy5kYXlwaWNrZXIuc2hvd01vbnRoKHRoaXMuc3RhdGUuc2VsZWN0ZWREYXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dFByb3BzLm9uQ2hhbmdlKGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlRGF5Q2xpY2sgPSAoZGF5KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZERheTogZGF5LFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH0pO1xuICAgIC8vIFJlbW92ZSBpbnZpc2JsZSBMUk0gY2hhcnMgZnJvbSBkYXRlc3RyaW5nXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShtb21lbnQudXRjKGRheSkuZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJykpO1xuICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvdmVybGF5U3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIGJveFNoYWRvdzogJzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8VGV0aGVyQ29tcG9uZW50XG4gICAgICAgIGF0dGFjaG1lbnQ9XCJ0b3AgY2VudGVyXCJcbiAgICAgICAgY29uc3RyYWludHM9e1t7XG4gICAgICAgICAgdG86ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgIGF0dGFjaG1lbnQ6ICd0b2dldGhlcicsXG4gICAgICAgIH1dfVxuICAgICAgPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e292ZXJsYXlTdHlsZX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZUNvbnRhaW5lck1vdXNlRG93bn1cbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXlQaWNrZXJcbiAgICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRheXBpY2tlciA9IGVsO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkRheUNsaWNrPXt0aGlzLmhhbmRsZURheUNsaWNrfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e2RheSA9PiBEYXRlVXRpbHMuaXNTYW1lRGF5KHRoaXMuc3RhdGUuc2VsZWN0ZWREYXksIGRheSl9XG4gICAgICAgICAgICAgIGxvY2FsZVV0aWxzPXt0aGlzLmxvY2FsZVV0aWxzfVxuICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iXX0=