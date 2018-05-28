var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DateInput from './date-input.component';

var DateTimeInput = (_temp = _class = function (_React$Component) {
  _inherits(DateTimeInput, _React$Component);

  function DateTimeInput() {
    _classCallCheck(this, DateTimeInput);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DateTimeInput.prototype.render = function render() {
    return React.createElement(DateInput, _extends({
      time: true,
      dateFormat: this.props.dateFormat
    }, this.props));
  };

  return DateTimeInput;
}(React.Component), _class.defaultProps = {
  dateFormat: 'L LT',
  minutesInterval: 5
}, _temp);
export { DateTimeInput as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXRpbWUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkRhdGVJbnB1dCIsIkRhdGVUaW1lSW5wdXQiLCJyZW5kZXIiLCJwcm9wcyIsImRhdGVGb3JtYXQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJtaW51dGVzSW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQix3QkFBdEI7O0lBRXFCQyxhOzs7Ozs7Ozs7MEJBV25CQyxNLHFCQUFTO0FBQ1AsV0FDRSxvQkFBQyxTQUFEO0FBQ0UsZ0JBREY7QUFFRSxrQkFBWSxLQUFLQyxLQUFMLENBQVdDO0FBRnpCLE9BR00sS0FBS0QsS0FIWCxFQURGO0FBT0QsRzs7O0VBbkJ3Q0wsTUFBTU8sUyxVQU14Q0MsWSxHQUFlO0FBQ3BCRixjQUFZLE1BRFE7QUFFcEJHLG1CQUFpQjtBQUZHLEM7U0FOSE4sYSIsImZpbGUiOiJkYXRlLXRpbWUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuL2RhdGUtaW5wdXQuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlRm9ybWF0OiAnTCBMVCcsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVJbnB1dFxuICAgICAgICB0aW1lXG4gICAgICAgIGRhdGVGb3JtYXQ9e3RoaXMucHJvcHMuZGF0ZUZvcm1hdH1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==