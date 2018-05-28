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
        { name: 'hour', componentClass: 'select', value: this.props.time.hour, onChange: this.onChange },
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
        { name: 'minute', componentClass: 'select', value: this.props.time.minute, onChange: this.onChange },
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
  minutesInterval: 5
}, _temp);
export { TimePicker as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybUNvbnRyb2wiLCJQcm9wVHlwZXMiLCJUaW1lUGlja2VyIiwicHJvcHMiLCJvbkNoYW5nZSIsImUiLCJvbGRUaW1lIiwidGltZSIsIm5ld1RpbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJuYW1lIiwiTnVtYmVyIiwidmFsdWUiLCJnZXRQYWRkZWROdW1iZXIiLCJudW1iZXIiLCJnZXRIb3VyTGlzdFZhbHVlcyIsImkiLCJob3VycyIsInB1c2giLCJnZXRNaW51dGVMaXN0VmFsdWVzIiwibWludXRlc0ludGVydmFsIiwibWludXRlcyIsImNvbXBvbmVudFdpbGxNb3VudCIsInJlbmRlciIsImhvdXIiLCJtYXAiLCJtaW51dGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBTyxvQkFBUDs7SUFFcUJDLFU7OztBQWtCbkIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsNEJBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFZbkJDLFFBWm1CLEdBWVIsVUFBQ0MsQ0FBRCxFQUFPO0FBQUE7O0FBQ2hCLFVBQU1DLHVCQUFlLE1BQUtILEtBQUwsQ0FBV0ksSUFBMUIsQ0FBTjtBQUNBLFVBQU1DLFVBQVVDLE9BQU9DLE1BQVAsQ0FBY0osT0FBZCx1Q0FDYkQsRUFBRU0sTUFBRixDQUFTQyxJQURJLElBQ0dDLE9BQU9SLEVBQUVNLE1BQUYsQ0FBU0csS0FBaEIsQ0FESCxrQkFBaEI7QUFHQSxZQUFLWCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JJLE9BQXBCO0FBQ0QsS0FsQmtCOztBQUFBLFVBeUJuQk8sZUF6Qm1CLEdBeUJEO0FBQUEsYUFBVUMsU0FBUyxFQUFULFNBQWtCQSxNQUFsQixHQUE2QkEsTUFBdkM7QUFBQSxLQXpCQzs7QUFBQSxVQStCbkJDLGlCQS9CbUIsR0ErQkMsWUFBTTtBQUN4QixXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsS0FBSyxDQUE3QixFQUFnQztBQUM5QixjQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0JGLENBQWhCO0FBQ0Q7QUFDRixLQW5Da0I7O0FBQUEsVUF3Q25CRyxtQkF4Q21CLEdBd0NHLFlBQU07QUFDMUIsV0FBSyxJQUFJSCxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEtBQUssTUFBS2YsS0FBTCxDQUFXbUIsZUFBeEMsRUFBeUQ7QUFDdkQsY0FBS0MsT0FBTCxDQUFhSCxJQUFiLENBQWtCRixDQUFsQjtBQUNEO0FBQ0YsS0E1Q2tCOztBQUdqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUtJLE9BQUwsR0FBZSxFQUFmO0FBSmlCO0FBS2xCOzt1QkFFREMsa0IsaUNBQXFCO0FBQ25CLFNBQUtQLGlCQUFMO0FBQ0EsU0FBS0ksbUJBQUw7QUFDRCxHOztBQVVEOzs7OztBQUtpRTs7O0FBR2pFOzs7OztBQVNBOzs7Ozt1QkFTQUksTSxxQkFBUztBQUFBOztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwwQkFBZjtBQUNFO0FBQUMsbUJBQUQ7QUFBQSxVQUFhLE1BQUssTUFBbEIsRUFBeUIsZ0JBQWUsUUFBeEMsRUFBaUQsT0FBTyxLQUFLdEIsS0FBTCxDQUFXSSxJQUFYLENBQWdCbUIsSUFBeEUsRUFBOEUsVUFBVSxLQUFLdEIsUUFBN0Y7QUFDRyxhQUFLZSxLQUFMLENBQVdRLEdBQVgsQ0FBZTtBQUFBLGlCQUNkO0FBQUE7QUFBQTtBQUNFLDZCQUFhRCxJQURmO0FBRUUscUJBQU9BO0FBRlQ7QUFJRyxtQkFBS1gsZUFBTCxDQUFxQlcsSUFBckI7QUFKSCxXQURjO0FBQUEsU0FBZjtBQURILE9BREY7QUFZRTtBQUFDLG1CQUFEO0FBQUEsVUFBYSxNQUFLLFFBQWxCLEVBQTJCLGdCQUFlLFFBQTFDLEVBQW1ELE9BQU8sS0FBS3ZCLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQnFCLE1BQTFFLEVBQWtGLFVBQVUsS0FBS3hCLFFBQWpHO0FBQ0csYUFBS21CLE9BQUwsQ0FBYUksR0FBYixDQUFpQjtBQUFBLGlCQUNoQjtBQUFBO0FBQUE7QUFDRSwrQkFBZUMsTUFEakI7QUFFRSxxQkFBT0E7QUFGVDtBQUlHLG1CQUFLYixlQUFMLENBQXFCYSxNQUFyQjtBQUpILFdBRGdCO0FBQUEsU0FBakI7QUFESDtBQVpGLEtBREY7QUF3QkQsRzs7O0VBekZxQzdCLE1BQU04QixTLFVBVXJDQyxZLEdBQWU7QUFDcEJ2QixRQUFNO0FBQ0ptQixVQUFNLENBREY7QUFFSkUsWUFBUTtBQUZKLEdBRGM7QUFLcEJOLG1CQUFpQjtBQUxHLEM7U0FWSHBCLFUiLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJy4vdGltZS1waWNrZXIuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRpbWU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBob3VyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWludXRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIH0pLFxuICAgIG1pbnV0ZXNJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpbWU6IHtcbiAgICAgIGhvdXI6IDAsXG4gICAgICBtaW51dGU6IDAsXG4gICAgfSxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IDUsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhvdXJzID0gW107XG4gICAgdGhpcy5taW51dGVzID0gW107XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5nZXRIb3VyTGlzdFZhbHVlcygpO1xuICAgIHRoaXMuZ2V0TWludXRlTGlzdFZhbHVlcygpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG9sZFRpbWUgPSB7IC4uLnRoaXMucHJvcHMudGltZSB9O1xuICAgIGNvbnN0IG5ld1RpbWUgPSBPYmplY3QuYXNzaWduKG9sZFRpbWUsIHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1RpbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbnVtYmVyIHdpdGggdGhhdCAwLXByZWZpeCwgaWYgaXQncyA8IDEwXG4gICAqIEBwYXJhbSBudW1iZXJcbiAgICogQHJldHVybnMgbnVtYmVyIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQYWRkZWROdW1iZXIgPSBudW1iZXIgPT4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBudW1iZXI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uZnVzaW5nLWFycm93XG5cblxuICAvKipcbiAgICogUHJvdmlkZXMgdmFsdWVzIGZvciB0aGUgaG91ciBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRIb3VyTGlzdFZhbHVlcyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICAgIHRoaXMuaG91cnMucHVzaChpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIHZhbHVlcyBmb3IgdGhlIG1pbnV0ZSBzZWxlY3QgYm94XG4gICAqL1xuICBnZXRNaW51dGVMaXN0VmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gdGhpcy5wcm9wcy5taW51dGVzSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubWludXRlcy5wdXNoKGkpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2MtdGltZS1waWNrZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxGb3JtQ29udHJvbCBuYW1lPVwiaG91clwiIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCIgdmFsdWU9e3RoaXMucHJvcHMudGltZS5ob3VyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAge3RoaXMuaG91cnMubWFwKGhvdXIgPT4gKFxuICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICBrZXk9e2Bob3VyLSR7aG91cn1gfVxuICAgICAgICAgICAgICB2YWx1ZT17aG91cn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UGFkZGVkTnVtYmVyKGhvdXIpfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgICAgPEZvcm1Db250cm9sIG5hbWU9XCJtaW51dGVcIiBjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiIHZhbHVlPXt0aGlzLnByb3BzLnRpbWUubWludXRlfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAge3RoaXMubWludXRlcy5tYXAobWludXRlID0+IChcbiAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAga2V5PXtgbWludXRlLSR7bWludXRlfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXttaW51dGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aGlzLmdldFBhZGRlZE51bWJlcihtaW51dGUpfVxuICAgICAgICAgICAgPC9vcHRpb24+KSl9XG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=