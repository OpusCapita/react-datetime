'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('./time-picker.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        var momentDate = _moment2.default.utc(_this.props.value);
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
      return _moment2.default.utc(date).hours();
    };

    _this.getMinutes = function (date) {
      if (!date) return 0;
      return _moment2.default.utc(date).minutes();
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

    return _react2.default.createElement(
      'div',
      { className: 'oc-time-picker-container' },
      _react2.default.createElement(
        _reactBootstrap.FormControl,
        { name: 'hour', componentClass: 'select', value: this.state.hour, onChange: this.onChange },
        this.hours.map(function (hour) {
          return _react2.default.createElement(
            'option',
            {
              key: 'hour-' + hour,
              value: hour
            },
            _this2.getPaddedNumber(hour)
          );
        })
      ),
      _react2.default.createElement(
        _reactBootstrap.FormControl,
        { name: 'minute', componentClass: 'select', value: this.state.minute, onChange: this.onChange },
        this.minutes.map(function (minute) {
          return _react2.default.createElement(
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
}(_react2.default.Component), _class.defaultProps = {
  value: undefined
}, _temp);
exports.default = TimePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlRpbWVQaWNrZXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibW9tZW50RGF0ZSIsInV0YyIsInNldCIsInN0YXRlIiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsInJlcGxhY2UiLCJnZXRQYWRkZWROdW1iZXIiLCJudW1iZXIiLCJnZXRIb3VyTGlzdFZhbHVlcyIsImkiLCJob3VycyIsInB1c2giLCJnZXRNaW51dGVMaXN0VmFsdWVzIiwiaGlkZGVuIiwibWludXRlcyIsInZpc2libGUiLCJnZXRIb3VycyIsImRhdGUiLCJnZXRNaW51dGVzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsIm1hcCIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7O0FBVW5CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBMEJuQkMsUUExQm1CLEdBMEJSLFVBQUNDLENBQUQsRUFBTztBQUFBOztBQUNoQixZQUFLQyxRQUFMLHNDQUFpQkQsRUFBRUUsTUFBRixDQUFTQyxJQUExQixJQUFpQ0gsRUFBRUUsTUFBRixDQUFTRSxLQUExQyxtQkFBbUQsWUFBTTtBQUN2RDtBQUNBO0FBQ0EsWUFBTUMsYUFBYSxpQkFBT0MsR0FBUCxDQUFXLE1BQUtSLEtBQUwsQ0FBV00sS0FBdEIsQ0FBbkI7QUFDQUMsbUJBQVdFLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLE1BQUtDLEtBQUwsQ0FBV0MsSUFB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QUE7QUFBQSxVQUFhLE1BQUssUUFBbEIsRUFBMkIsZ0JBQWUsUUFBMUMsRUFBbUQsT0FBTyxLQUFLRCxLQUFMLENBQVdFLE1BQXJFLEVBQTZFLFVBQVUsS0FBS1gsUUFBNUY7QUFDRyxhQUFLc0IsT0FBTCxDQUFhUyxHQUFiLENBQWlCO0FBQUEsaUJBQ2hCO0FBQUE7QUFBQTtBQUNFLCtCQUFlcEIsT0FBT04sS0FEeEI7QUFFRSxxQkFBT00sT0FBT04sS0FGaEI7QUFHRSxxQkFBTyxFQUFFMkIsU0FBUyxDQUFDckIsT0FBT1ksT0FBUixHQUFrQixNQUFsQixHQUEyQixFQUF0QztBQUhUO0FBS0csbUJBQUtULGVBQUwsQ0FBcUJILE9BQU9OLEtBQTVCO0FBTEgsV0FEZ0I7QUFBQSxTQUFqQjtBQURIO0FBWkYsS0FERjtBQXlCRCxHOzs7RUF6SHFDLGdCQUFNNEIsUyxVQU1yQ0MsWSxHQUFlO0FBQ3BCN0IsU0FBTzhCO0FBRGEsQztrQkFOSHJDLFUiLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnLi90aW1lLXBpY2tlci5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWludXRlOiB0aGlzLmdldE1pbnV0ZXMocHJvcHMudmFsdWUpLFxyXG4gICAgICBob3VyOiB0aGlzLmdldEhvdXJzKHByb3BzLnZhbHVlKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3VycyA9IFtdO1xyXG4gICAgdGhpcy5taW51dGVzID0gW107XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldEhvdXJMaXN0VmFsdWVzKCk7XHJcbiAgICB0aGlzLmdldE1pbnV0ZUxpc3RWYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtaW51dGU6IHRoaXMuZ2V0TWludXRlcyhuZXh0UHJvcHMudmFsdWUpLFxyXG4gICAgICAgIGhvdXI6IHRoaXMuZ2V0SG91cnMobmV4dFByb3BzLnZhbHVlKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIE1ha2VzIGEgbW9tZW50IG9iamVjdCBvdXQgb2YgdmFsdWUgKGRhdGUpLCByZXdyaXRlcyBob3VyL21pbnV0ZSB2YWx1ZXNcclxuICAgICAgLy8gYW5kIGNhbGxzIHByb3BzLm9uQ2hhbmdlXHJcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQudXRjKHRoaXMucHJvcHMudmFsdWUpO1xyXG4gICAgICBtb21lbnREYXRlLnNldCgnaG91cicsIHRoaXMuc3RhdGUuaG91cik7XHJcbiAgICAgIG1vbWVudERhdGUuc2V0KCdtaW51dGUnLCB0aGlzLnN0YXRlLm1pbnV0ZSk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudERhdGUuZm9ybWF0KCkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJykpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIG51bWJlciB3aXRoIHRoYXQgMC1wcmVmaXgsIGlmIGl0J3MgPCAxMFxyXG4gICAqIEBwYXJhbSBudW1iZXJcclxuICAgKiBAcmV0dXJucyBudW1iZXIge3N0cmluZ31cclxuICAgKi9cclxuICBnZXRQYWRkZWROdW1iZXIgPSBudW1iZXIgPT4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZnVzaW5nLWFycm93XHJcblxyXG5cclxuICAvKipcclxuICAgKiBQcm92aWRlcyB2YWx1ZXMgZm9yIHRoZSBob3VyIHNlbGVjdCBib3hcclxuICAgKi9cclxuICBnZXRIb3VyTGlzdFZhbHVlcyA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkgKz0gMSkge1xyXG4gICAgICB0aGlzLmhvdXJzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgbWludXRlIHNlbGVjdCBib3hcclxuICAgKi9cclxuICBnZXRNaW51dGVMaXN0VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGhpZGRlbiA9IGkgJSA1O1xyXG4gICAgICB0aGlzLm1pbnV0ZXMucHVzaCh7IHZhbHVlOiBpLCB2aXNpYmxlOiAhaGlkZGVuIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgaG91cnMgYmFzZWQgb24gYSBkYXRlXHJcbiAgICogQHBhcmFtIGRhdGVcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIGdldEhvdXJzID0gKGRhdGUpID0+IHtcclxuICAgIGlmICghZGF0ZSkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0YyhkYXRlKS5ob3VycygpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgbWludXRlcyBiYXNlZCBvbiBhIGRhdGVcclxuICAgKiBAcGFyYW0gZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0TWludXRlcyA9IChkYXRlKSA9PiB7XHJcbiAgICBpZiAoIWRhdGUpIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGMoZGF0ZSkubWludXRlcygpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtdGltZS1waWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJob3VyXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ob3VyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XHJcbiAgICAgICAgICB7dGhpcy5ob3Vycy5tYXAoaG91ciA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBrZXk9e2Bob3VyLSR7aG91cn1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtob3VyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKGhvdXIpfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwibWludXRlXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5taW51dGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cclxuICAgICAgICAgIHt0aGlzLm1pbnV0ZXMubWFwKG1pbnV0ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBrZXk9e2BtaW51dGUtJHttaW51dGUudmFsdWV9YH1cclxuICAgICAgICAgICAgICB2YWx1ZT17bWludXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICFtaW51dGUudmlzaWJsZSA/ICdub25lJyA6ICcnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5nZXRQYWRkZWROdW1iZXIobWludXRlLnZhbHVlKX1cclxuICAgICAgICAgICAgPC9vcHRpb24+KSl9XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=