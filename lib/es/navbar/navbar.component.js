var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SPACE, ENTER } from '../keys';
import './navbar.component.scss';

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
      if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
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

    var previousButton = React.createElement(
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

    var nextButton = React.createElement(
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

    return React.createElement(
      'div',
      { className: 'DayPicker-NavBar' },
      dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
    );
  };

  return Navbar;
}(Component), _class.defaultProps = {
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
export { Navbar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJTUEFDRSIsIkVOVEVSIiwiTmF2YmFyIiwiaGFuZGxlTmV4dENsaWNrIiwicHJvcHMiLCJvbk5leHRDbGljayIsImhhbmRsZVByZXZpb3VzQ2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJoYW5kbGVOZXh0S2V5RG93biIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVQcmV2aW91c0tleURvd24iLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJsYWJlbHMiLCJkaXIiLCJzaG93UHJldmlvdXNCdXR0b24iLCJzaG93TmV4dEJ1dHRvbiIsInJlbmRlciIsInByZXZpb3VzQ2xpY2tIYW5kbGVyIiwibmV4dENsaWNrSGFuZGxlciIsInByZXZpb3VzS2V5RG93bkhhbmRsZXIiLCJuZXh0S2V5RG93bkhhbmRsZXIiLCJzaG91bGRTaG93UHJldmlvdXMiLCJzaG91bGRTaG93TmV4dCIsInByZXZpb3VzQ2xhc3NOYW1lIiwibmV4dENsYXNzTmFtZSIsInByZXZpb3VzQnV0dG9uIiwicHJldmlvdXNNb250aCIsInVuZGVmaW5lZCIsIm5leHRCdXR0b24iLCJuZXh0TW9udGgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsU0FBaEIsUUFBaUMsT0FBakM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsS0FBVCxFQUFnQkMsS0FBaEIsUUFBNkIsU0FBN0I7QUFDQSxPQUFPLHlCQUFQOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7OzRJQWtDbkJDLGUsR0FBa0IsWUFBTTtBQUN0QixVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUMxQixjQUFLRCxLQUFMLENBQVdDLFdBQVg7QUFDRDtBQUNG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RyxDQUFDZSxVQUFELEVBQWFILGNBQWIsQ0FESCxHQUVHLENBQUNBLGNBQUQsRUFBaUJHLFVBQWpCO0FBSE4sS0FERjtBQU9ELEc7OztFQXhJaUNqQyxTLFVBYTNCbUMsWSxHQUFlO0FBQ3BCakIsT0FBSyxLQURlO0FBRXBCRCxVQUFRO0FBQ05jLG1CQUFlLGdCQURUO0FBRU5HLGVBQVc7QUFGTCxHQUZZO0FBTXBCZixzQkFBb0IsSUFOQTtBQU9wQkMsa0JBQWdCLElBUEk7QUFRcEJYLG1CQUFpQixJQVJHO0FBU3BCRixlQUFhO0FBVE8sQztTQWJISCxNIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFNQQUNFLCBFTlRFUiB9IGZyb20gJy4uL2tleXMnO1xuaW1wb3J0ICcuL25hdmJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2hvd1ByZXZpb3VzQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93TmV4dEJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25QcmV2aW91c0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk5leHRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHByZXZpb3VzTW9udGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIG5leHRNb250aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXI6ICdsdHInLFxuICAgIGxhYmVsczoge1xuICAgICAgcHJldmlvdXNNb250aDogJ1ByZXZpb3VzIE1vbnRoJyxcbiAgICAgIG5leHRNb250aDogJ05leHQgTW9udGgnLFxuICAgIH0sXG4gICAgc2hvd1ByZXZpb3VzQnV0dG9uOiB0cnVlLFxuICAgIHNob3dOZXh0QnV0dG9uOiB0cnVlLFxuICAgIG9uUHJldmlvdXNDbGljazogbnVsbCxcbiAgICBvbk5leHRDbGljazogbnVsbCxcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV4dFByb3BzLmxhYmVscyAhPT0gdGhpcy5wcm9wcy5sYWJlbHNcbiAgICAgIHx8IG5leHRQcm9wcy5kaXIgIT09IHRoaXMucHJvcHMuZGlyXG4gICAgICB8fCB0aGlzLnByb3BzLnNob3dQcmV2aW91c0J1dHRvbiAhPT0gbmV4dFByb3BzLnNob3dQcmV2aW91c0J1dHRvblxuICAgICAgfHwgdGhpcy5wcm9wcy5zaG93TmV4dEJ1dHRvbiAhPT0gbmV4dFByb3BzLnNob3dOZXh0QnV0dG9uXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk5leHRDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbk5leHRDbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25QcmV2aW91c0NsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUHJldmlvdXNDbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5leHRLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICE9PSBFTlRFUiAmJiBlLmtleUNvZGUgIT09IFNQQUNFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhhbmRsZU5leHRDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlUHJldmlvdXNLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlICE9PSBFTlRFUiAmJiBlLmtleUNvZGUgIT09IFNQQUNFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhhbmRsZVByZXZpb3VzQ2xpY2soKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzaG93UHJldmlvdXNCdXR0b24sXG4gICAgICBzaG93TmV4dEJ1dHRvbixcbiAgICAgIGxhYmVscyxcbiAgICAgIGRpcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBwcmV2aW91c0NsaWNrSGFuZGxlcjtcbiAgICBsZXQgbmV4dENsaWNrSGFuZGxlcjtcbiAgICBsZXQgcHJldmlvdXNLZXlEb3duSGFuZGxlcjtcbiAgICBsZXQgbmV4dEtleURvd25IYW5kbGVyO1xuICAgIGxldCBzaG91bGRTaG93UHJldmlvdXM7XG4gICAgbGV0IHNob3VsZFNob3dOZXh0O1xuXG4gICAgaWYgKGRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIHByZXZpb3VzQ2xpY2tIYW5kbGVyID0gdGhpcy5oYW5kbGVOZXh0Q2xpY2s7XG4gICAgICBuZXh0Q2xpY2tIYW5kbGVyID0gdGhpcy5oYW5kbGVQcmV2aW91c0NsaWNrO1xuICAgICAgcHJldmlvdXNLZXlEb3duSGFuZGxlciA9IHRoaXMuaGFuZGxlTmV4dEtleURvd247XG4gICAgICBuZXh0S2V5RG93bkhhbmRsZXIgPSB0aGlzLmhhbmRsZVByZXZpb3VzS2V5RG93bjtcbiAgICAgIHNob3VsZFNob3dOZXh0ID0gc2hvd1ByZXZpb3VzQnV0dG9uO1xuICAgICAgc2hvdWxkU2hvd1ByZXZpb3VzID0gc2hvd05leHRCdXR0b247XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzQ2xpY2tIYW5kbGVyID0gdGhpcy5oYW5kbGVQcmV2aW91c0NsaWNrO1xuICAgICAgbmV4dENsaWNrSGFuZGxlciA9IHRoaXMuaGFuZGxlTmV4dENsaWNrO1xuICAgICAgcHJldmlvdXNLZXlEb3duSGFuZGxlciA9IHRoaXMuaGFuZGxlUHJldmlvdXNLZXlEb3duO1xuICAgICAgbmV4dEtleURvd25IYW5kbGVyID0gdGhpcy5oYW5kbGVOZXh0S2V5RG93bjtcbiAgICAgIHNob3VsZFNob3dOZXh0ID0gc2hvd05leHRCdXR0b247XG4gICAgICBzaG91bGRTaG93UHJldmlvdXMgPSBzaG93UHJldmlvdXNCdXR0b247XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXNDbGFzc05hbWUgPSBzaG91bGRTaG93UHJldmlvdXNcbiAgICAgID8gJ0RheVBpY2tlci1OYXZCdXR0b24gcHJldidcbiAgICAgIDogJ0RheVBpY2tlci1OYXZCdXR0b24tLWludGVyYWN0aW9uRGlzYWJsZWQnO1xuXG4gICAgY29uc3QgbmV4dENsYXNzTmFtZSA9IHNob3VsZFNob3dOZXh0XG4gICAgICA/ICdEYXlQaWNrZXItTmF2QnV0dG9uIG5leHQnXG4gICAgICA6ICdEYXlQaWNrZXItTmF2QnV0dG9uLS1pbnRlcmFjdGlvbkRpc2FibGVkJztcblxuICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gKFxuICAgICAgPHNwYW5cbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9e2xhYmVscy5wcmV2aW91c01vbnRofVxuICAgICAgICBrZXk9XCJwcmV2aW91c1wiXG4gICAgICAgIGNsYXNzTmFtZT17cHJldmlvdXNDbGFzc05hbWV9XG4gICAgICAgIG9uS2V5RG93bj17c2hvdWxkU2hvd1ByZXZpb3VzID8gcHJldmlvdXNLZXlEb3duSGFuZGxlciA6IHVuZGVmaW5lZH1cbiAgICAgICAgb25DbGljaz17c2hvdWxkU2hvd1ByZXZpb3VzID8gcHJldmlvdXNDbGlja0hhbmRsZXIgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIOKXgFxuICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBuZXh0QnV0dG9uID0gKFxuICAgICAgPHNwYW5cbiAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9e2xhYmVscy5uZXh0TW9udGh9XG4gICAgICAgIGtleT1cInJpZ2h0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtuZXh0Q2xhc3NOYW1lfVxuICAgICAgICBvbktleURvd249e3Nob3VsZFNob3dOZXh0ID8gbmV4dEtleURvd25IYW5kbGVyIDogdW5kZWZpbmVkfVxuICAgICAgICBvbkNsaWNrPXtzaG91bGRTaG93TmV4dCA/IG5leHRDbGlja0hhbmRsZXIgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIOKWtlxuICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJEYXlQaWNrZXItTmF2QmFyXCI+XG4gICAgICAgIHtkaXIgPT09ICdydGwnXG4gICAgICAgICAgPyBbbmV4dEJ1dHRvbiwgcHJldmlvdXNCdXR0b25dXG4gICAgICAgICAgOiBbcHJldmlvdXNCdXR0b24sIG5leHRCdXR0b25dfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19