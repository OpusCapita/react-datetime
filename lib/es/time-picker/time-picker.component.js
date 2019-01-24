var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './time-picker.scss';

var TimePicker = (_temp = _class = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onChange = function (e) {
      var _Object$assign;

      var oldTime = _extends({}, _this.props.time);
      var newTime = Object.assign(oldTime, (_Object$assign = {}, _Object$assign[e.target.name] = Number(e.target.value), _Object$assign));
      _this.props.onChange(newTime);
    };

    _this.getPaddedNumber = function (number) {
      return number < 10 ? '0' + number : number;
    };

    _this.getHourListValues = function () {
      for (var i = 0; i < 24; i += 1) {
        _this.hours.push(i);
      }
    };

    _this.getMinuteListValues = function () {
      for (var i = 0; i < 60; i += _this.props.minutesInterval) {
        _this.minutes.push(i);
      }
    };

    _this.hours = [];
    _this.minutes = [];
    return _this;
  }

  TimePicker.prototype.componentWillMount = function componentWillMount() {
    this.getHourListValues();
    this.getMinuteListValues();
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


  TimePicker.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { className: 'oc-time-picker-container' },
      React.createElement(
        FormControl,
        {
          name: 'hour',
          componentClass: 'select',
          value: this.props.time.hour,
          onChange: this.onChange,
          disabled: this.props.disabled
        },
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
        {
          name: 'minute',
          componentClass: 'select',
          value: this.props.time.minute,
          onChange: this.onChange,
          disabled: this.props.disabled
        },
        this.minutes.map(function (minute) {
          return React.createElement(
            'option',
            {
              key: 'minute-' + minute,
              value: minute
            },
            _this2.getPaddedNumber(minute)
          );
        })
      )
    );
  };

  return TimePicker;
}(React.Component), _class.defaultProps = {
  time: {
    hour: 0,
    minute: 0
  },
  minutesInterval: 5,
  disabled: false
}, _temp);
export { TimePicker as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybUNvbnRyb2wiLCJQcm9wVHlwZXMiLCJUaW1lUGlja2VyIiwicHJvcHMiLCJvbkNoYW5nZSIsImUiLCJvbGRUaW1lIiwidGltZSIsIm5ld1RpbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJuYW1lIiwiTnVtYmVyIiwidmFsdWUiLCJnZXRQYWRkZWROdW1iZXIiLCJudW1iZXIiLCJnZXRIb3VyTGlzdFZhbHVlcyIsImkiLCJob3VycyIsInB1c2giLCJnZXRNaW51dGVMaXN0VmFsdWVzIiwibWludXRlc0ludGVydmFsIiwibWludXRlcyIsImNvbXBvbmVudFdpbGxNb3VudCIsInJlbmRlciIsImhvdXIiLCJkaXNhYmxlZCIsIm1hcCIsIm1pbnV0ZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPLG9CQUFQOztJQUVxQkMsVTs7O0FBb0JuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQiw0QkFBTUEsS0FBTixDQURpQjs7QUFBQSxVQVluQkMsUUFabUIsR0FZUixVQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDaEIsVUFBTUMsdUJBQWUsTUFBS0gsS0FBTCxDQUFXSSxJQUExQixDQUFOO0FBQ0EsVUFBTUMsVUFBVUMsT0FBT0MsTUFBUCxDQUFjSixPQUFkLHVDQUNiRCxFQUFFTSxNQUFGLENBQVNDLElBREksSUFDR0MsT0FBT1IsRUFBRU0sTUFBRixDQUFTRyxLQUFoQixDQURILGtCQUFoQjtBQUdBLFlBQUtYLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkksT0FBcEI7QUFDRCxLQWxCa0I7O0FBQUEsVUF5Qm5CTyxlQXpCbUIsR0F5QkQ7QUFBQSxhQUFVQyxTQUFTLEVBQVQsU0FBa0JBLE1BQWxCLEdBQTZCQSxNQUF2QztBQUFBLEtBekJDOztBQUFBLFVBK0JuQkMsaUJBL0JtQixHQStCQyxZQUFNO0FBQ3hCLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxLQUFLLENBQTdCLEVBQWdDO0FBQzlCLGNBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsQ0FBaEI7QUFDRDtBQUNGLEtBbkNrQjs7QUFBQSxVQXdDbkJHLG1CQXhDbUIsR0F3Q0csWUFBTTtBQUMxQixXQUFLLElBQUlILElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsS0FBSyxNQUFLZixLQUFMLENBQVdtQixlQUF4QyxFQUF5RDtBQUN2RCxjQUFLQyxPQUFMLENBQWFILElBQWIsQ0FBa0JGLENBQWxCO0FBQ0Q7QUFDRixLQTVDa0I7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0ksT0FBTCxHQUFlLEVBQWY7QUFKaUI7QUFLbEI7O3VCQUVEQyxrQixpQ0FBcUI7QUFDbkIsU0FBS1AsaUJBQUw7QUFDQSxTQUFLSSxtQkFBTDtBQUNELEc7O0FBVUQ7Ozs7O0FBS2lFOzs7QUFHakU7Ozs7O0FBU0E7Ozs7O3VCQVNBSSxNLHFCQUFTO0FBQUE7O0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQyxtQkFBRDtBQUFBO0FBQ0UsZ0JBQUssTUFEUDtBQUVFLDBCQUFlLFFBRmpCO0FBR0UsaUJBQU8sS0FBS3RCLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQm1CLElBSHpCO0FBSUUsb0JBQVUsS0FBS3RCLFFBSmpCO0FBS0Usb0JBQVUsS0FBS0QsS0FBTCxDQUFXd0I7QUFMdkI7QUFPRyxhQUFLUixLQUFMLENBQVdTLEdBQVgsQ0FBZTtBQUFBLGlCQUNkO0FBQUE7QUFBQTtBQUNFLDZCQUFhRixJQURmO0FBRUUscUJBQU9BO0FBRlQ7QUFJRyxtQkFBS1gsZUFBTCxDQUFxQlcsSUFBckI7QUFKSCxXQURjO0FBQUEsU0FBZjtBQVBILE9BREY7QUFrQkU7QUFBQyxtQkFBRDtBQUFBO0FBQ0UsZ0JBQUssUUFEUDtBQUVFLDBCQUFlLFFBRmpCO0FBR0UsaUJBQU8sS0FBS3ZCLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQnNCLE1BSHpCO0FBSUUsb0JBQVUsS0FBS3pCLFFBSmpCO0FBS0Usb0JBQVUsS0FBS0QsS0FBTCxDQUFXd0I7QUFMdkI7QUFPRyxhQUFLSixPQUFMLENBQWFLLEdBQWIsQ0FBaUI7QUFBQSxpQkFDaEI7QUFBQTtBQUFBO0FBQ0UsK0JBQWVDLE1BRGpCO0FBRUUscUJBQU9BO0FBRlQ7QUFJRyxtQkFBS2QsZUFBTCxDQUFxQmMsTUFBckI7QUFKSCxXQURnQjtBQUFBLFNBQWpCO0FBUEg7QUFsQkYsS0FERjtBQW9DRCxHOzs7RUF2R3FDOUIsTUFBTStCLFMsVUFXckNDLFksR0FBZTtBQUNwQnhCLFFBQU07QUFDSm1CLFVBQU0sQ0FERjtBQUVKRyxZQUFRO0FBRkosR0FEYztBQUtwQlAsbUJBQWlCLENBTEc7QUFNcEJLLFlBQVU7QUFOVSxDO1NBWEh6QixVIiwiZmlsZSI6InRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL3RpbWUtcGlja2VyLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0aW1lOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaG91cjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1pbnV0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB9KSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGltZToge1xuICAgICAgaG91cjogMCxcbiAgICAgIG1pbnV0ZTogMCxcbiAgICB9LFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogNSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhvdXJzID0gW107XG4gICAgdGhpcy5taW51dGVzID0gW107XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5nZXRIb3VyTGlzdFZhbHVlcygpO1xuICAgIHRoaXMuZ2V0TWludXRlTGlzdFZhbHVlcygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG9sZFRpbWUgPSB7IC4uLnRoaXMucHJvcHMudGltZSB9O1xuICAgIGNvbnN0IG5ld1RpbWUgPSBPYmplY3QuYXNzaWduKG9sZFRpbWUsIHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1RpbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbnVtYmVyIHdpdGggdGhhdCAwLXByZWZpeCwgaWYgaXQncyA8IDEwXG4gICAqIEBwYXJhbSBudW1iZXJcbiAgICogQHJldHVybnMgbnVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQYWRkZWROdW1iZXIgPSBudW1iZXIgPT4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZnVzaW5nLWFycm93XG5cblxuICAvKipcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgaG91ciBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRIb3VyTGlzdFZhbHVlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICAgIHRoaXMuaG91cnMucHVzaChpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIHZhbHVlcyBmb3IgdGhlIG1pbnV0ZSBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRNaW51dGVMaXN0VmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gdGhpcy5wcm9wcy5taW51dGVzSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubWludXRlcy5wdXNoKGkpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtdGltZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgIG5hbWU9XCJob3VyXCJcbiAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudGltZS5ob3VyfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuaG91cnMubWFwKGhvdXIgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2Bob3VyLSR7aG91cn1gfVxuICAgICAgICAgICAgICB2YWx1ZT17aG91cn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKGhvdXIpfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgbmFtZT1cIm1pbnV0ZVwiXG4gICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIlxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnRpbWUubWludXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMubWludXRlcy5tYXAobWludXRlID0+IChcbiAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAga2V5PXtgbWludXRlLSR7bWludXRlfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXttaW51dGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLmdldFBhZGRlZE51bWJlcihtaW51dGUpfVxuICAgICAgICAgICAgPC9vcHRpb24+KSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=