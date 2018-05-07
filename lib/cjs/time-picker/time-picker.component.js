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
        var momentDate = (0, _moment2.default)(_this.props.value);
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
      return (0, _moment2.default)(date).hours();
    };

    _this.getMinutes = function (date) {
      if (!date) return 0;
      return (0, _moment2.default)(date).minutes();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlRpbWVQaWNrZXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwibW9tZW50RGF0ZSIsInNldCIsInN0YXRlIiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsInJlcGxhY2UiLCJnZXRQYWRkZWROdW1iZXIiLCJudW1iZXIiLCJnZXRIb3VyTGlzdFZhbHVlcyIsImkiLCJob3VycyIsInB1c2giLCJnZXRNaW51dGVMaXN0VmFsdWVzIiwiaGlkZGVuIiwibWludXRlcyIsInZpc2libGUiLCJnZXRIb3VycyIsImRhdGUiLCJnZXRNaW51dGVzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsIm1hcCIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7O0FBVW5CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLDRCQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBMEJuQkMsUUExQm1CLEdBMEJSLFVBQUNDLENBQUQsRUFBTztBQUFBOztBQUNoQixZQUFLQyxRQUFMLHNDQUFpQkQsRUFBRUUsTUFBRixDQUFTQyxJQUExQixJQUFpQ0gsRUFBRUUsTUFBRixDQUFTRSxLQUExQyxtQkFBbUQsWUFBTTtBQUN2RDtBQUNBO0FBQ0EsWUFBTUMsYUFBYSxzQkFBTyxNQUFLUCxLQUFMLENBQVdNLEtBQWxCLENBQW5CO0FBQ0FDLG1CQUFXQyxHQUFYLENBQWUsTUFBZixFQUF1QixNQUFLQyxLQUFMLENBQVdDLElBQWxDO0FBQ0FILG1CQUFXQyxH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LE9BQU8sS0FBS0QsS0FBTCxDQUFXRSxNQUFyRSxFQUE2RSxVQUFVLEtBQUtWLFFBQTVGO0FBQ0csYUFBS3FCLE9BQUwsQ0FBYVMsR0FBYixDQUFpQjtBQUFBLGlCQUNoQjtBQUFBO0FBQUE7QUFDRSwrQkFBZXBCLE9BQU9MLEtBRHhCO0FBRUUscUJBQU9LLE9BQU9MLEtBRmhCO0FBR0UscUJBQU8sRUFBRTBCLFNBQVMsQ0FBQ3JCLE9BQU9ZLE9BQVIsR0FBa0IsTUFBbEIsR0FBMkIsRUFBdEM7QUFIVDtBQUtHLG1CQUFLVCxlQUFMLENBQXFCSCxPQUFPTCxLQUE1QjtBQUxILFdBRGdCO0FBQUEsU0FBakI7QUFESDtBQVpGLEtBREY7QUF5QkQsRzs7O0VBekhxQyxnQkFBTTJCLFMsVUFNckNDLFksR0FBZTtBQUNwQjVCLFNBQU82QjtBQURhLEM7a0JBTkhwQyxVIiwiZmlsZSI6InRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICcuL3RpbWUtcGlja2VyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWludXRlOiB0aGlzLmdldE1pbnV0ZXMocHJvcHMudmFsdWUpLFxuICAgICAgaG91cjogdGhpcy5nZXRIb3Vycyhwcm9wcy52YWx1ZSksXG4gICAgfTtcblxuICAgIHRoaXMuaG91cnMgPSBbXTtcbiAgICB0aGlzLm1pbnV0ZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmdldEhvdXJMaXN0VmFsdWVzKCk7XG4gICAgdGhpcy5nZXRNaW51dGVMaXN0VmFsdWVzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUgJiYgbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWludXRlOiB0aGlzLmdldE1pbnV0ZXMobmV4dFByb3BzLnZhbHVlKSxcbiAgICAgICAgaG91cjogdGhpcy5nZXRIb3VycyhuZXh0UHJvcHMudmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0sICgpID0+IHtcbiAgICAgIC8vIE1ha2VzIGEgbW9tZW50IG9iamVjdCBvdXQgb2YgdmFsdWUgKGRhdGUpLCByZXdyaXRlcyBob3VyL21pbnV0ZSB2YWx1ZXNcbiAgICAgIC8vIGFuZCBjYWxscyBwcm9wcy5vbkNoYW5nZVxuICAgICAgY29uc3QgbW9tZW50RGF0ZSA9IG1vbWVudCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIG1vbWVudERhdGUuc2V0KCdob3VyJywgdGhpcy5zdGF0ZS5ob3VyKTtcbiAgICAgIG1vbWVudERhdGUuc2V0KCdtaW51dGUnLCB0aGlzLnN0YXRlLm1pbnV0ZSk7XG5cbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobW9tZW50RGF0ZS5mb3JtYXQoKS5yZXBsYWNlKC9cXHUyMDBFL2csICcnKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYSBudW1iZXIgd2l0aCB0aGF0IDAtcHJlZml4LCBpZiBpdCdzIDwgMTBcbiAgICogQHBhcmFtIG51bWJlclxuICAgKiBAcmV0dXJucyBudW1iZXIge3N0cmluZ31cbiAgICovXG4gIGdldFBhZGRlZE51bWJlciA9IG51bWJlciA9PiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXJ9YCA6IG51bWJlcjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25mdXNpbmctYXJyb3dcblxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyB2YWx1ZXMgZm9yIHRoZSBob3VyIHNlbGVjdCBib3hcbiAgICovXG4gIGdldEhvdXJMaXN0VmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ob3Vycy5wdXNoKGkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgbWludXRlIHNlbGVjdCBib3hcbiAgICovXG4gIGdldE1pbnV0ZUxpc3RWYWx1ZXMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBoaWRkZW4gPSBpICUgNTtcbiAgICAgIHRoaXMubWludXRlcy5wdXNoKHsgdmFsdWU6IGksIHZpc2libGU6ICFoaWRkZW4gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGhvdXJzIGJhc2VkIG9uIGEgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SG91cnMgPSAoZGF0ZSkgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIG1vbWVudChkYXRlKS5ob3VycygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIG1pbnV0ZXMgYmFzZWQgb24gYSBkYXRlXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRNaW51dGVzID0gKGRhdGUpID0+IHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiAwO1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkubWludXRlcygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYy10aW1lLXBpY2tlci1jb250YWluZXJcIj5cbiAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJob3VyXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ob3VyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAge3RoaXMuaG91cnMubWFwKGhvdXIgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2Bob3VyLSR7aG91cn1gfVxuICAgICAgICAgICAgICB2YWx1ZT17aG91cn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKGhvdXIpfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJtaW51dGVcIiBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1pbnV0ZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9PlxuICAgICAgICAgIHt0aGlzLm1pbnV0ZXMubWFwKG1pbnV0ZSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgIGtleT17YG1pbnV0ZS0ke21pbnV0ZS52YWx1ZX1gfVxuICAgICAgICAgICAgICB2YWx1ZT17bWludXRlLnZhbHVlfVxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAhbWludXRlLnZpc2libGUgPyAnbm9uZScgOiAnJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGhpcy5nZXRQYWRkZWROdW1iZXIobWludXRlLnZhbHVlKX1cbiAgICAgICAgICAgIDwvb3B0aW9uPikpfVxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19