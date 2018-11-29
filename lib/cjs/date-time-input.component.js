'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /* eslint-disable react/forbid-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateInput = require('./date-input.component');

var _dateInput2 = _interopRequireDefault(_dateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimeInput = (_temp = _class = function (_React$Component) {
  _inherits(DateTimeInput, _React$Component);

  function DateTimeInput() {
    _classCallCheck(this, DateTimeInput);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DateTimeInput.prototype.render = function render() {
    return _react2.default.createElement(_dateInput2.default, _extends({
      time: true,
      dateFormat: this.props.dateFormat
    }, this.props));
  };

  return DateTimeInput;
}(_react2.default.Component), _class.defaultProps = {
  dateFormat: 'L LT',
  minutesInterval: 5
}, _temp);
exports.default = DateTimeInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXRpbWUtaW5wdXQuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJEYXRlVGltZUlucHV0IiwicmVuZGVyIiwicHJvcHMiLCJkYXRlRm9ybWF0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwibWludXRlc0ludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O21CQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7OzBCQVduQkMsTSxxQkFBUztBQUNQLFdBQ0U7QUFDRSxnQkFERjtBQUVFLGtCQUFZLEtBQUtDLEtBQUwsQ0FBV0M7QUFGekIsT0FHTSxLQUFLRCxLQUhYLEVBREY7QUFPRCxHOzs7RUFuQndDLGdCQUFNRSxTLFVBTXhDQyxZLEdBQWU7QUFDcEJGLGNBQVksTUFEUTtBQUVwQkcsbUJBQWlCO0FBRkcsQztrQkFOSE4sYSIsImZpbGUiOiJkYXRlLXRpbWUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuL2RhdGUtaW5wdXQuY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtaW51dGVzSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRlRm9ybWF0OiAnTCBMVCcsXG4gICAgbWludXRlc0ludGVydmFsOiA1LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVJbnB1dFxuICAgICAgICB0aW1lXG4gICAgICAgIGRhdGVGb3JtYXQ9e3RoaXMucHJvcHMuZGF0ZUZvcm1hdH1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==