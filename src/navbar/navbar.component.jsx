import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SPACE, ENTER } from '../keys';
import './navbar.component.scss';

export default class Navbar extends Component {
  static propTypes = {
    showPreviousButton: PropTypes.bool,
    showNextButton: PropTypes.bool,
    onPreviousClick: PropTypes.func,
    onNextClick: PropTypes.func,
    dir: PropTypes.string,
    labels: PropTypes.shape({
      previousMonth: PropTypes.string.isRequired,
      nextMonth: PropTypes.string.isRequired,
    }),
  }

  static defaultProps = {
    dir: 'ltr',
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    showPreviousButton: true,
    showNextButton: true,
    onPreviousClick: null,
    onNextClick: null,
  }

  shouldComponentUpdate(nextProps) {
    const {
      labels,
      dir,
      showPreviousButton,
      showNextButton,
    } = this.props;
    return (
      nextProps.labels !== labels
      || nextProps.dir !== dir
      || showPreviousButton !== nextProps.showPreviousButton
      || showNextButton !== nextProps.showNextButton
    );
  }

  handleNextClick = () => {
    const { onNextClick } = this.props;
    if (onNextClick) onNextClick();
  }

  handlePreviousClick = () => {
    const { onPreviousClick } = this.props;
    if (onPreviousClick) onPreviousClick();
  }

  handleNextKeyDown = (e) => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) return;
    e.preventDefault();
    this.handleNextClick();
  }

  handlePreviousKeyDown = (e) => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) return;
    e.preventDefault();
    this.handlePreviousClick();
  }

  render() {
    const {
      showPreviousButton,
      showNextButton,
      labels,
      dir,
    } = this.props;

    let previousClickHandler;
    let nextClickHandler;
    let previousKeyDownHandler;
    let nextKeyDownHandler;
    let shouldShowPrevious;
    let shouldShowNext;

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

    const previousClassName = shouldShowPrevious
      ? 'DayPicker-NavButton prev'
      : 'DayPicker-NavButton--interactionDisabled';

    const nextClassName = shouldShowNext
      ? 'DayPicker-NavButton next'
      : 'DayPicker-NavButton--interactionDisabled';

    const previousButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.previousMonth}
        key="previous"
        className={previousClassName}
        onKeyDown={shouldShowPrevious ? previousKeyDownHandler : undefined}
        onClick={shouldShowPrevious ? previousClickHandler : undefined}
      >
        ◀
      </span>
    );

    const nextButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.nextMonth}
        key="right"
        className={nextClassName}
        onKeyDown={shouldShowNext ? nextKeyDownHandler : undefined}
        onClick={shouldShowNext ? nextClickHandler : undefined}
      >
        ▶
      </span>
    );

    return (
      <div className="DayPicker-NavBar">
        {dir === 'rtl'
          ? [nextButton, previousButton]
          : [previousButton, nextButton]}
      </div>
    );
  }
}
