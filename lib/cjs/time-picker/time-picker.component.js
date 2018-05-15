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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlRpbWVQaWNrZXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibW9tZW50RGF0ZSIsInV0YyIsInNldCIsInN0YXRlIiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsInJlcGxhY2UiLCJnZXRQYWRkZWROdW1iZXIiLCJudW1iZXIiLCJnZXRIb3VyTGlzdFZhbHVlcyIsImkiLCJob3VycyIsInB1c2giLCJnZXRNaW51dGVMaXN0VmFsdWVzIiwiaGlkZGVuIiwibWludXRlcyIsInZpc2libGUiLCJnZXRIb3VycyIsImRhdGUiLCJnZXRNaW51dGVzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsIm1hcCIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7O0FBVW5CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBMEJuQkMsUUExQm1CLEdBMEJSLFVBQUNDLENBQUQsRUFBTztBQUFBOztBQUNoQixZQUFLQyxRQUFMLHNDQUFpQkQsRUFBRUUsTUFBRixDQUFTQyxJQUExQixJQUFpQ0gsRUFBRUUsTUFBRixDQUFTRSxLQUExQyxtQkFBbUQsWUFBTTtBQUN2RDtBQUNBO0FBQ0EsWUFBTUMsYUFBYSxpQkFBT0MsR0FBUCxDQUFXLE1BQUtSLEtBQUwsQ0FBV00sS0FBdEIsQ0FBbkI7QUFDQUMsbUJBQVdFLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLE1BQUtDLEtBQUwsQ0FBV0MsSUFB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QUE7QUFBQSxVQUFhLE1BQUssUUFBbEIsRUFBMkIsZ0JBQWUsUUFBMUMsRUFBbUQsT0FBTyxLQUFLRCxLQUFMLENBQVdFLE1BQXJFLEVBQTZFLFVBQVUsS0FBS1gsUUFBNUY7QUFDRyxhQUFLc0IsT0FBTCxDQUFhUyxHQUFiLENBQWlCO0FBQUEsaUJBQ2hCO0FBQUE7QUFBQTtBQUNFLCtCQUFlcEIsT0FBT04sS0FEeEI7QUFFRSxxQkFBT00sT0FBT04sS0FGaEI7QUFHRSxxQkFBTyxFQUFFMkIsU0FBUyxDQUFDckIsT0FBT1ksT0FBUixHQUFrQixNQUFsQixHQUEyQixFQUF0QztBQUhUO0FBS0csbUJBQUtULGVBQUwsQ0FBcUJILE9BQU9OLEtBQTVCO0FBTEgsV0FEZ0I7QUFBQSxTQUFqQjtBQURIO0FBWkYsS0FERjtBQXlCRCxHOzs7RUF6SHFDLGdCQUFNNEIsUyxVQU1yQ0MsWSxHQUFlO0FBQ3BCN0IsU0FBTzhCO0FBRGEsQztrQkFOSHJDLFUiLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJy4vdGltZS1waWNrZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW51dGU6IHRoaXMuZ2V0TWludXRlcyhwcm9wcy52YWx1ZSksXG4gICAgICBob3VyOiB0aGlzLmdldEhvdXJzKHByb3BzLnZhbHVlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5ob3VycyA9IFtdO1xuICAgIHRoaXMubWludXRlcyA9IFtdO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZ2V0SG91ckxpc3RWYWx1ZXMoKTtcbiAgICB0aGlzLmdldE1pbnV0ZUxpc3RWYWx1ZXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSAmJiBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtaW51dGU6IHRoaXMuZ2V0TWludXRlcyhuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgICBob3VyOiB0aGlzLmdldEhvdXJzKG5leHRQcm9wcy52YWx1ZSksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSwgKCkgPT4ge1xuICAgICAgLy8gTWFrZXMgYSBtb21lbnQgb2JqZWN0IG91dCBvZiB2YWx1ZSAoZGF0ZSksIHJld3JpdGVzIGhvdXIvbWludXRlIHZhbHVlc1xuICAgICAgLy8gYW5kIGNhbGxzIHByb3BzLm9uQ2hhbmdlXG4gICAgICBjb25zdCBtb21lbnREYXRlID0gbW9tZW50LnV0Yyh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIG1vbWVudERhdGUuc2V0KCdob3VyJywgdGhpcy5zdGF0ZS5ob3VyKTtcbiAgICAgIG1vbWVudERhdGUuc2V0KCdtaW51dGUnLCB0aGlzLnN0YXRlLm1pbnV0ZSk7XG5cbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobW9tZW50RGF0ZS5mb3JtYXQoKS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYSBudW1iZXIgd2l0aCB0aGF0IDAtcHJlZml4LCBpZiBpdCdzIDwgMTBcbiAgICogQHBhcmFtIG51bWJlclxuICAgKiBAcmV0dXJucyBudW1iZXIge3N0cmluZ31cbiAgICovXG4gIGdldFBhZGRlZE51bWJlciA9IG51bWJlciA9PiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXJ9YCA6IG51bWJlcjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25mdXNpbmctYXJyb3dcblxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyB2YWx1ZXMgZm9yIHRoZSBob3VyIHNlbGVjdCBib3hcbiAgICovXG4gIGdldEhvdXJMaXN0VmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ob3Vycy5wdXNoKGkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgbWludXRlIHNlbGVjdCBib3hcbiAgICovXG4gIGdldE1pbnV0ZUxpc3RWYWx1ZXMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBoaWRkZW4gPSBpICUgNTtcbiAgICAgIHRoaXMubWludXRlcy5wdXNoKHsgdmFsdWU6IGksIHZpc2libGU6ICFoaWRkZW4gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGhvdXJzIGJhc2VkIG9uIGEgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SG91cnMgPSAoZGF0ZSkgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIG1vbWVudC51dGMoZGF0ZSkuaG91cnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBtaW51dGVzIGJhc2VkIG9uIGEgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0TWludXRlcyA9IChkYXRlKSA9PiB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbW9tZW50LnV0YyhkYXRlKS5taW51dGVzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9jLXRpbWUtcGlja2VyLWNvbnRhaW5lclwiPlxuICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cImhvdXJcIiBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmhvdXJ9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cbiAgICAgICAgICB7dGhpcy5ob3Vycy5tYXAoaG91ciA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17YGhvdXItJHtob3VyfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtob3VyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5nZXRQYWRkZWROdW1iZXIoaG91cil9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICA8Rm9ybUNvbnRyb2wgbmFtZT1cIm1pbnV0ZVwiIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUubWludXRlfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAge3RoaXMubWludXRlcy5tYXAobWludXRlID0+IChcbiAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAga2V5PXtgbWludXRlLSR7bWludXRlLnZhbHVlfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXttaW51dGUudmFsdWV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICFtaW51dGUudmlzaWJsZSA/ICdub25lJyA6ICcnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLmdldFBhZGRlZE51bWJlcihtaW51dGUudmFsdWUpfVxuICAgICAgICAgICAgPC9vcHRpb24+KSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=