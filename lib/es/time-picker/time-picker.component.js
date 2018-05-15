var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import './time-picker.scss';

var TimePicker = (_temp = _class = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onChange = function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState), function () {
        // Makes a moment object out of value (date), rewrites hour/minute values
        // and calls props.onChange
        var momentDate = moment.utc(_this.props.value);
        momentDate.set('hour', _this.state.hour);
        momentDate.set('minute', _this.state.minute);

        _this.props.onChange(momentDate.format().replace(/\u200E/g, ''));
      });
    };

    _this.getPaddedNumber = function (number) {
      return number < 10 ? '0' + number : number;
    };

    _this.getHourListValues = function () {
      for (var i = 0; i < 23; i += 1) {
        _this.hours.push(i);
      }
    };

    _this.getMinuteListValues = function () {
      for (var i = 0; i < 60; i += 1) {
        var hidden = i % 5;
        _this.minutes.push({ value: i, visible: !hidden });
      }
    };

    _this.getHours = function (date) {
      if (!date) return 0;
      return moment.utc(date).hours();
    };

    _this.getMinutes = function (date) {
      if (!date) return 0;
      return moment.utc(date).minutes();
    };

    _this.state = {
      minute: _this.getMinutes(props.value),
      hour: _this.getHours(props.value)
    };

    _this.hours = [];
    _this.minutes = [];
    return _this;
  }

  TimePicker.prototype.componentWillMount = function componentWillMount() {
    this.getHourListValues();
    this.getMinuteListValues();
  };

  TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value && nextProps.value) {
      this.setState({
        minute: this.getMinutes(nextProps.value),
        hour: this.getHours(nextProps.value)
      });
    }
  };

  /**
   * Gets a number with that 0-prefix, if it's < 10
   * @param number
   * @returns number {string}
   */
  // eslint-disable-line no-confusing-arrow


  /**
   * Provides values for the hour select box
   */


  /**
   * Provides values for the minute select box
   */


  /**
   * Gets hours based on a date
   * @param date
   * @returns {number}
   */


  /**
   * Gets minutes based on a date
   * @param date
   * @returns {number}
   */


  TimePicker.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { className: 'oc-time-picker-container' },
      React.createElement(
        FormControl,
        { name: 'hour', componentClass: 'select', value: this.state.hour, onChange: this.onChange },
        this.hours.map(function (hour) {
          return React.createElement(
            'option',
            {
              key: 'hour-' + hour,
              value: hour
            },
            _this2.getPaddedNumber(hour)
          );
        })
      ),
      React.createElement(
        FormControl,
        { name: 'minute', componentClass: 'select', value: this.state.minute, onChange: this.onChange },
        this.minutes.map(function (minute) {
          return React.createElement(
            'option',
            {
              key: 'minute-' + minute.value,
              value: minute.value,
              style: { display: !minute.visible ? 'none' : '' }
            },
            _this2.getPaddedNumber(minute.value)
          );
        })
      )
    );
  };

  return TimePicker;
}(React.Component), _class.defaultProps = {
  value: undefined
}, _temp);
export { TimePicker as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybUNvbnRyb2wiLCJQcm9wVHlwZXMiLCJtb21lbnQiLCJUaW1lUGlja2VyIiwicHJvcHMiLCJvbkNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm1vbWVudERhdGUiLCJ1dGMiLCJzZXQiLCJzdGF0ZSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJyZXBsYWNlIiwiZ2V0UGFkZGVkTnVtYmVyIiwibnVtYmVyIiwiZ2V0SG91ckxpc3RWYWx1ZXMiLCJpIiwiaG91cnMiLCJwdXNoIiwiZ2V0TWludXRlTGlzdFZhbHVlcyIsImhpZGRlbiIsIm1pbnV0ZXMiLCJ2aXNpYmxlIiwiZ2V0SG91cnMiLCJkYXRlIiwiZ2V0TWludXRlcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJyZW5kZXIiLCJtYXAiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBTyxvQkFBUDs7SUFFcUJDLFU7OztBQVVuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQSxVQTBCbkJDLFFBMUJtQixHQTBCUixVQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDaEIsWUFBS0MsUUFBTCxzQ0FBaUJELEVBQUVFLE1BQUYsQ0FBU0MsSUFBMUIsSUFBaUNILEVBQUVFLE1BQUYsQ0FBU0UsS0FBMUMsbUJBQW1ELFlB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V2EsR0FBWCxDQUFlO0FBQUEsaUJBQ2Q7QUFBQTtBQUFBO0FBQ0UsNkJBQWFyQixJQURmO0FBRUUscUJBQU9BO0FBRlQ7QUFJRyxtQkFBS0ksZUFBTCxDQUFxQkosSUFBckI7QUFKSCxXQURjO0FBQUEsU0FBZjtBQURILE9BREY7QUFZRTtBQUFDLG1CQUFEO0FBQUEsVUFBYSxNQUFLLFFBQWxCLEVBQTJCLGdCQUFlLFFBQTFDLEVBQW1ELE9BQU8sS0FBS0QsS0FBTCxDQUFXRSxNQUFyRSxFQUE2RSxVQUFVLEtBQUtYLFFBQTVGO0FBQ0csYUFBS3NCLE9BQUwsQ0FBYVMsR0FBYixDQUFpQjtBQUFBLGlCQUNoQjtBQUFBO0FBQUE7QUFDRSwrQkFBZXBCLE9BQU9OLEtBRHhCO0FBRUUscUJBQU9NLE9BQU9OLEtBRmhCO0FBR0UscUJBQU8sRUFBRTJCLFNBQVMsQ0FBQ3JCLE9BQU9ZLE9BQVIsR0FBa0IsTUFBbEIsR0FBMkIsRUFBdEM7QUFIVDtBQUtHLG1CQUFLVCxlQUFMLENBQXFCSCxPQUFPTixLQUE1QjtBQUxILFdBRGdCO0FBQUEsU0FBakI7QUFESDtBQVpGLEtBREY7QUF5QkQsRzs7O0VBekhxQ1gsTUFBTXVDLFMsVUFNckNDLFksR0FBZTtBQUNwQjdCLFNBQU84QjtBQURhLEM7U0FOSHJDLFUiLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnLi90aW1lLXBpY2tlci5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWludXRlOiB0aGlzLmdldE1pbnV0ZXMocHJvcHMudmFsdWUpLFxyXG4gICAgICBob3VyOiB0aGlzLmdldEhvdXJzKHByb3BzLnZhbHVlKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3VycyA9IFtdO1xyXG4gICAgdGhpcy5taW51dGVzID0gW107XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldEhvdXJMaXN0VmFsdWVzKCk7XHJcbiAgICB0aGlzLmdldE1pbnV0ZUxpc3RWYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtaW51dGU6IHRoaXMuZ2V0TWludXRlcyhuZXh0UHJvcHMudmFsdWUpLFxyXG4gICAgICAgIGhvdXI6IHRoaXMuZ2V0SG91cnMobmV4dFByb3BzLnZhbHVlKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIE1ha2VzIGEgbW9tZW50IG9iamVjdCBvdXQgb2YgdmFsdWUgKGRhdGUpLCByZXdyaXRlcyBob3VyL21pbnV0ZSB2YWx1ZXNcclxuICAgICAgLy8gYW5kIGNhbGxzIHByb3BzLm9uQ2hhbmdlXHJcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xyXG4gICAgICBtb21lbnREYXRlLnNldCgnaG91cicsIHRoaXMuc3RhdGUuaG91cik7XHJcbiAgICAgIG1vbWVudERhdGUuc2V0KCdtaW51dGUnLCB0aGlzLnN0YXRlLm1pbnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudERhdGUuZm9ybWF0KCkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJykpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIG51bWJlciB3aXRoIHRoYXQgMC1wcmVmaXgsIGlmIGl0J3MgPCAxMFxyXG4gICAqIEBwYXJhbSBudW1iZXJcclxuICAgKiBAcmV0dXJucyBudW1iZXIge3N0cmluZ31cclxuICAgKi9cclxuICBnZXRQYWRkZWROdW1iZXIgPSBudW1iZXIgPT4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZnVzaW5nLWFycm93XHJcblxyXG5cclxuICAvKipcclxuICAgKiBQcm92aWRlcyB2YWx1ZXMgZm9yIHRoZSBob3VyIHNlbGVjdCBib3hcclxuICAgKi9cclxuICBnZXRIb3VyTGlzdFZhbHVlcyA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkgKz0gMSkge1xyXG4gICAgICB0aGlzLmhvdXJzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgbWludXRlIHNlbGVjdCBib3hcclxuICAgKi9cclxuICBnZXRNaW51dGVMaXN0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbiA9IGkgJSA1O1xyXG4gICAgICB0aGlzLm1pbnV0ZXMucHVzaCh7IHZhbHVlOiBpLCB2aXNpYmxlOiAhaGlkZGVuIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgaG91cnMgYmFzZWQgb24gYSBkYXRlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEhvdXJzID0gKGRhdGUpID0+IHtcclxuICAgIGlmICghZGF0ZSkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0YyhkYXRlKS5ob3VycygpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgbWludXRlcyBiYXNlZCBvbiBhIGRhdGVcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TWludXRlcyA9IChkYXRlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGUpIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGMoZGF0ZSkubWludXRlcygpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtdGltZS1waWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJob3VyXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ob3VyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XHJcbiAgICAgICAgICB7dGhpcy5ob3Vycy5tYXAoaG91ciA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBrZXk9e2Bob3VyLSR7aG91cn1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtob3VyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKGhvdXIpfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwibWludXRlXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5taW51dGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cclxuICAgICAgICAgIHt0aGlzLm1pbnV0ZXMubWFwKG1pbnV0ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBrZXk9e2BtaW51dGUtJHttaW51dGUudmFsdWV9YH1cclxuICAgICAgICAgICAgICB2YWx1ZT17bWludXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICFtaW51dGUudmlzaWJsZSA/ICdub25lJyA6ICcnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5nZXRQYWRkZWROdW1iZXIobWludXRlLnZhbHVlKX1cclxuICAgICAgICAgICAgPC9vcHRpb24+KSl9XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=