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
        var momentDate = moment(_this.props.value);
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
      return moment(date).hours();
    };

    _this.getMinutes = function (date) {
      if (!date) return 0;
      return moment(date).minutes();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybUNvbnRyb2wiLCJQcm9wVHlwZXMiLCJtb21lbnQiLCJUaW1lUGlja2VyIiwicHJvcHMiLCJvbkNoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm1vbWVudERhdGUiLCJzZXQiLCJzdGF0ZSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJyZXBsYWNlIiwiZ2V0UGFkZGVkTnVtYmVyIiwibnVtYmVyIiwiZ2V0SG91ckxpc3RWYWx1ZXMiLCJpIiwiaG91cnMiLCJwdXNoIiwiZ2V0TWludXRlTGlzdFZhbHVlcyIsImhpZGRlbiIsIm1pbnV0ZXMiLCJ2aXNpYmxlIiwiZ2V0SG91cnMiLCJkYXRlIiwiZ2V0TWludXRlcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJyZW5kZXIiLCJtYXAiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBTyxvQkFBUDs7SUFFcUJDLFU7OztBQVVuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQSxVQTBCbkJDLFFBMUJtQixHQTBCUixVQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDaEIsWUFBS0MsUUFBTCxzQ0FBaUJELEVBQUVFLE1BQUYsQ0FBU0MsSUFBMUIsSUFBaUNILEVBQUVFLE1BQUYsQ0FBU0UsS0FBMUMsbUJBQW1ELFlBQU07QUFD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YXJCLElBRGY7QUFFRSxxQkFBT0E7QUFGVDtBQUlHLG1CQUFLSSxlQUFMLENBQXFCSixJQUFyQjtBQUpILFdBRGM7QUFBQSxTQUFmO0FBREgsT0FERjtBQVlFO0FBQUMsbUJBQUQ7QUFBQSxVQUFhLE1BQUssUUFBbEIsRUFBMkIsZ0JBQWUsUUFBMUMsRUFBbUQsT0FBTyxLQUFLRCxLQUFMLENBQVdFLE1BQXJFLEVBQTZFLFVBQVUsS0FBS1YsUUFBNUY7QUFDRyxhQUFLcUIsT0FBTCxDQUFhUyxHQUFiLENBQWlCO0FBQUEsaUJBQ2hCO0FBQUE7QUFBQTtBQUNFLCtCQUFlcEIsT0FBT0wsS0FEeEI7QUFFRSxxQkFBT0ssT0FBT0wsS0FGaEI7QUFHRSxxQkFBTyxFQUFFMEIsU0FBUyxDQUFDckIsT0FBT1ksT0FBUixHQUFrQixNQUFsQixHQUEyQixFQUF0QztBQUhUO0FBS0csbUJBQUtULGVBQUwsQ0FBcUJILE9BQU9MLEtBQTVCO0FBTEgsV0FEZ0I7QUFBQSxTQUFqQjtBQURIO0FBWkYsS0FERjtBQXlCRCxHOzs7RUF6SHFDWCxNQUFNc0MsUyxVQU1yQ0MsWSxHQUFlO0FBQ3BCNUIsU0FBTzZCO0FBRGEsQztTQU5IcEMsVSIsImZpbGUiOiJ0aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAnLi90aW1lLXBpY2tlci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1pbnV0ZTogdGhpcy5nZXRNaW51dGVzKHByb3BzLnZhbHVlKSxcbiAgICAgIGhvdXI6IHRoaXMuZ2V0SG91cnMocHJvcHMudmFsdWUpLFxuICAgIH07XG5cbiAgICB0aGlzLmhvdXJzID0gW107XG4gICAgdGhpcy5taW51dGVzID0gW107XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5nZXRIb3VyTGlzdFZhbHVlcygpO1xuICAgIHRoaXMuZ2V0TWludXRlTGlzdFZhbHVlcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlICYmIG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZTogdGhpcy5nZXRNaW51dGVzKG5leHRQcm9wcy52YWx1ZSksXG4gICAgICAgIGhvdXI6IHRoaXMuZ2V0SG91cnMobmV4dFByb3BzLnZhbHVlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7XG4gICAgICAvLyBNYWtlcyBhIG1vbWVudCBvYmplY3Qgb3V0IG9mIHZhbHVlIChkYXRlKSwgcmV3cml0ZXMgaG91ci9taW51dGUgdmFsdWVzXG4gICAgICAvLyBhbmQgY2FsbHMgcHJvcHMub25DaGFuZ2VcbiAgICAgIGNvbnN0IG1vbWVudERhdGUgPSBtb21lbnQodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICBtb21lbnREYXRlLnNldCgnaG91cicsIHRoaXMuc3RhdGUuaG91cik7XG4gICAgICBtb21lbnREYXRlLnNldCgnbWludXRlJywgdGhpcy5zdGF0ZS5taW51dGUpO1xuXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG1vbWVudERhdGUuZm9ybWF0KCkucmVwbGFjZSgvXFx1MjAwRS9nLCAnJykpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbnVtYmVyIHdpdGggdGhhdCAwLXByZWZpeCwgaWYgaXQncyA8IDEwXG4gICAqIEBwYXJhbSBudW1iZXJcbiAgICogQHJldHVybnMgbnVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQYWRkZWROdW1iZXIgPSBudW1iZXIgPT4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZnVzaW5nLWFycm93XG5cblxuICAvKipcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgaG91ciBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRIb3VyTGlzdFZhbHVlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuaG91cnMucHVzaChpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIHZhbHVlcyBmb3IgdGhlIG1pbnV0ZSBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRNaW51dGVMaXN0VmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaGlkZGVuID0gaSAlIDU7XG4gICAgICB0aGlzLm1pbnV0ZXMucHVzaCh7IHZhbHVlOiBpLCB2aXNpYmxlOiAhaGlkZGVuIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBob3VycyBiYXNlZCBvbiBhIGRhdGVcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEhvdXJzID0gKGRhdGUpID0+IHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiAwO1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuaG91cnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyBtaW51dGVzIGJhc2VkIG9uIGEgZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0TWludXRlcyA9IChkYXRlKSA9PiB7XG4gICAgaWYgKCFkYXRlKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLm1pbnV0ZXMoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtdGltZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwiaG91clwiIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuaG91cn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9PlxuICAgICAgICAgIHt0aGlzLmhvdXJzLm1hcChob3VyID0+IChcbiAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAga2V5PXtgaG91ci0ke2hvdXJ9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e2hvdXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLmdldFBhZGRlZE51bWJlcihob3VyKX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwibWludXRlXCIgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5taW51dGV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cbiAgICAgICAgICB7dGhpcy5taW51dGVzLm1hcChtaW51dGUgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2BtaW51dGUtJHttaW51dGUudmFsdWV9YH1cbiAgICAgICAgICAgICAgdmFsdWU9e21pbnV0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogIW1pbnV0ZS52aXNpYmxlID8gJ25vbmUnIDogJycgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKG1pbnV0ZS52YWx1ZSl9XG4gICAgICAgICAgICA8L29wdGlvbj4pKX1cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==