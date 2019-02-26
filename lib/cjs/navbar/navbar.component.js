'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keys = require('../keys');

require('./navbar.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_temp2 = _class = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Navbar.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
  };

  Navbar.prototype.render = function render() {
    var _props = this.props,
        showPreviousButton = _props.showPreviousButton,
        showNextButton = _props.showNextButton,
        labels = _props.labels,
        dir = _props.dir;


    var previousClickHandler = void 0;
    var nextClickHandler = void 0;
    var previousKeyDownHandler = void 0;
    var nextKeyDownHandler = void 0;
    var shouldShowPrevious = void 0;
    var shouldShowNext = void 0;

    if (dir === 'rtl') {
      previousClickHandler = this.handleNextClick;
      nextClickHandler = this.handlePreviousClick;
      previousKeyDownHandler = this.handleNextKeyDown;
      nextKeyDownHandler = this.handlePreviousKeyDown;
      shouldShowNext = showPreviousButton;
      shouldShowPrevious = showNextButton;
    } else {
      previousClickHandler = this.handlePreviousClick;
      nextClickHandler = this.handleNextClick;
      previousKeyDownHandler = this.handlePreviousKeyDown;
      nextKeyDownHandler = this.handleNextKeyDown;
      shouldShowNext = showNextButton;
      shouldShowPrevious = showPreviousButton;
    }

    var previousClassName = shouldShowPrevious ? 'DayPicker-NavButton prev' : 'DayPicker-NavButton--interactionDisabled';

    var nextClassName = shouldShowNext ? 'DayPicker-NavButton next' : 'DayPicker-NavButton--interactionDisabled';

    var previousButton = _react2.default.createElement(
      'span',
      {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous',
        className: previousClassName,
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      },
      '\u25C0'
    );

    var nextButton = _react2.default.createElement(
      'span',
      {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right',
        className: nextClassName,
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      },
      '\u25B6'
    );

    return _react2.default.createElement(
      'div',
      { className: 'DayPicker-NavBar' },
      dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
    );
  };

  return Navbar;
}(_react.Component), _class.defaultProps = {
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true,
  onPreviousClick: null,
  onNextClick: null
}, _temp2);
exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTmF2YmFyIiwiaGFuZGxlTmV4dENsaWNrIiwicHJvcHMiLCJvbk5leHRDbGljayIsImhhbmRsZVByZXZpb3VzQ2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJoYW5kbGVOZXh0S2V5RG93biIsImUiLCJrZXlDb2RlIiwiRU5URVIiLCJTUEFDRSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlUHJldmlvdXNLZXlEb3duIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibGFiZWxzIiwiZGlyIiwic2hvd1ByZXZpb3VzQnV0dG9uIiwic2hvd05leHRCdXR0b24iLCJyZW5kZXIiLCJwcmV2aW91c0NsaWNrSGFuZGxlciIsIm5leHRDbGlja0hhbmRsZXIiLCJwcmV2aW91c0tleURvd25IYW5kbGVyIiwibmV4dEtleURvd25IYW5kbGVyIiwic2hvdWxkU2hvd1ByZXZpb3VzIiwic2hvdWxkU2hvd05leHQiLCJwcmV2aW91c0NsYXNzTmFtZSIsIm5leHRDbGFzc05hbWUiLCJwcmV2aW91c0J1dHRvbiIsInByZXZpb3VzTW9udGgiLCJ1bmRlZmluZWQiLCJuZXh0QnV0dG9uIiwibmV4dE1vbnRoIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7NElBa0NuQkMsZSxHQUFrQixZQUFNO0FBQ3RCLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxXQUFmLEVBQTRCO0FBQzFCLGNBQUtELEtBQUwsQ0FBV0MsV0FBWDtBQUNEO0FBQ0YsSyxRQUVEQyxtQixHQUFzQixZQUFNO0FBQzFCLFVBQUksTUFBS0YsS0FBTCxDQUFXRyxlQUFmLEVBQWdDO0FBQzlCLGNBQUtILEtBQUwsQ0FBV0csZUFBWDtBQUNEO0FBQ0YsSyxRQUVEQyxpQixH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Q3BCbEIsT0FBSyxLQURlO0FBRXBCRCxVQUFRO0FBQ05jLG1CQUFlLGdCQURUO0FBRU5HLGVBQVc7QUFGTCxHQUZZO0FBTXBCZixzQkFBb0IsSUFOQTtBQU9wQkMsa0JBQWdCLElBUEk7QUFRcEJiLG1CQUFpQixJQVJHO0FBU3BCRixlQUFhO0FBVE8sQztrQkFiSEgsTSIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBTUEFDRSwgRU5URVIgfSBmcm9tICcuLi9rZXlzJztcbmltcG9ydCAnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNob3dQcmV2aW91c0J1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd05leHRCdXR0b246IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUHJldmlvdXNDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25OZXh0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBwcmV2aW91c01vbnRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KSxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyOiAnbHRyJyxcbiAgICBsYWJlbHM6IHtcbiAgICAgIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBNb250aCcsXG4gICAgICBuZXh0TW9udGg6ICdOZXh0IE1vbnRoJyxcbiAgICB9LFxuICAgIHNob3dQcmV2aW91c0J1dHRvbjogdHJ1ZSxcbiAgICBzaG93TmV4dEJ1dHRvbjogdHJ1ZSxcbiAgICBvblByZXZpb3VzQ2xpY2s6IG51bGwsXG4gICAgb25OZXh0Q2xpY2s6IG51bGwsXG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5leHRQcm9wcy5sYWJlbHMgIT09IHRoaXMucHJvcHMubGFiZWxzXG4gICAgICB8fCBuZXh0UHJvcHMuZGlyICE9PSB0aGlzLnByb3BzLmRpclxuICAgICAgfHwgdGhpcy5wcm9wcy5zaG93UHJldmlvdXNCdXR0b24gIT09IG5leHRQcm9wcy5zaG93UHJldmlvdXNCdXR0b25cbiAgICAgIHx8IHRoaXMucHJvcHMuc2hvd05leHRCdXR0b24gIT09IG5leHRQcm9wcy5zaG93TmV4dEJ1dHRvblxuICAgICk7XG4gIH1cblxuICBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25OZXh0Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25OZXh0Q2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQcmV2aW91c0NsaWNrID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUHJldmlvdXNDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblByZXZpb3VzQ2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOZXh0S2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAhPT0gRU5URVIgJiYgZS5rZXlDb2RlICE9PSBTUEFDRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5oYW5kbGVOZXh0Q2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSAhPT0gRU5URVIgJiYgZS5rZXlDb2RlICE9PSBTUEFDRSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5oYW5kbGVQcmV2aW91c0NsaWNrKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd1ByZXZpb3VzQnV0dG9uLFxuICAgICAgc2hvd05leHRCdXR0b24sXG4gICAgICBsYWJlbHMsXG4gICAgICBkaXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgcHJldmlvdXNDbGlja0hhbmRsZXI7XG4gICAgbGV0IG5leHRDbGlja0hhbmRsZXI7XG4gICAgbGV0IHByZXZpb3VzS2V5RG93bkhhbmRsZXI7XG4gICAgbGV0IG5leHRLZXlEb3duSGFuZGxlcjtcbiAgICBsZXQgc2hvdWxkU2hvd1ByZXZpb3VzO1xuICAgIGxldCBzaG91bGRTaG93TmV4dDtcblxuICAgIGlmIChkaXIgPT09ICdydGwnKSB7XG4gICAgICBwcmV2aW91c0NsaWNrSGFuZGxlciA9IHRoaXMuaGFuZGxlTmV4dENsaWNrO1xuICAgICAgbmV4dENsaWNrSGFuZGxlciA9IHRoaXMuaGFuZGxlUHJldmlvdXNDbGljaztcbiAgICAgIHByZXZpb3VzS2V5RG93bkhhbmRsZXIgPSB0aGlzLmhhbmRsZU5leHRLZXlEb3duO1xuICAgICAgbmV4dEtleURvd25IYW5kbGVyID0gdGhpcy5oYW5kbGVQcmV2aW91c0tleURvd247XG4gICAgICBzaG91bGRTaG93TmV4dCA9IHNob3dQcmV2aW91c0J1dHRvbjtcbiAgICAgIHNob3VsZFNob3dQcmV2aW91cyA9IHNob3dOZXh0QnV0dG9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0NsaWNrSGFuZGxlciA9IHRoaXMuaGFuZGxlUHJldmlvdXNDbGljaztcbiAgICAgIG5leHRDbGlja0hhbmRsZXIgPSB0aGlzLmhhbmRsZU5leHRDbGljaztcbiAgICAgIHByZXZpb3VzS2V5RG93bkhhbmRsZXIgPSB0aGlzLmhhbmRsZVByZXZpb3VzS2V5RG93bjtcbiAgICAgIG5leHRLZXlEb3duSGFuZGxlciA9IHRoaXMuaGFuZGxlTmV4dEtleURvd247XG4gICAgICBzaG91bGRTaG93TmV4dCA9IHNob3dOZXh0QnV0dG9uO1xuICAgICAgc2hvdWxkU2hvd1ByZXZpb3VzID0gc2hvd1ByZXZpb3VzQnV0dG9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzQ2xhc3NOYW1lID0gc2hvdWxkU2hvd1ByZXZpb3VzXG4gICAgICA/ICdEYXlQaWNrZXItTmF2QnV0dG9uIHByZXYnXG4gICAgICA6ICdEYXlQaWNrZXItTmF2QnV0dG9uLS1pbnRlcmFjdGlvbkRpc2FibGVkJztcblxuICAgIGNvbnN0IG5leHRDbGFzc05hbWUgPSBzaG91bGRTaG93TmV4dFxuICAgICAgPyAnRGF5UGlja2VyLU5hdkJ1dHRvbiBuZXh0J1xuICAgICAgOiAnRGF5UGlja2VyLU5hdkJ1dHRvbi0taW50ZXJhY3Rpb25EaXNhYmxlZCc7XG5cbiAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IChcbiAgICAgIDxzcGFuXG4gICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbHMucHJldmlvdXNNb250aH1cbiAgICAgICAga2V5PVwicHJldmlvdXNcIlxuICAgICAgICBjbGFzc05hbWU9e3ByZXZpb3VzQ2xhc3NOYW1lfVxuICAgICAgICBvbktleURvd249e3Nob3VsZFNob3dQcmV2aW91cyA/IHByZXZpb3VzS2V5RG93bkhhbmRsZXIgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uQ2xpY2s9e3Nob3VsZFNob3dQcmV2aW91cyA/IHByZXZpb3VzQ2xpY2tIYW5kbGVyIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICDil4BcbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IChcbiAgICAgIDxzcGFuXG4gICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbHMubmV4dE1vbnRofVxuICAgICAgICBrZXk9XCJyaWdodFwiXG4gICAgICAgIGNsYXNzTmFtZT17bmV4dENsYXNzTmFtZX1cbiAgICAgICAgb25LZXlEb3duPXtzaG91bGRTaG93TmV4dCA/IG5leHRLZXlEb3duSGFuZGxlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25DbGljaz17c2hvdWxkU2hvd05leHQgPyBuZXh0Q2xpY2tIYW5kbGVyIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICDilrZcbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGF5UGlja2VyLU5hdkJhclwiPlxuICAgICAgICB7ZGlyID09PSAncnRsJ1xuICAgICAgICAgID8gW25leHRCdXR0b24sIHByZXZpb3VzQnV0dG9uXVxuICAgICAgICAgIDogW3ByZXZpb3VzQnV0dG9uLCBuZXh0QnV0dG9uXX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==