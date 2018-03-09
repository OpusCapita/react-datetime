/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment';
import TetherComponent from 'react-tether';
import 'react-day-picker/lib/style.css';

export default class DateInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    language: PropTypes.string,
    dateFormat: PropTypes.string,
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: '',
    dateFormat: 'L',
    language: 'en',
    onChange() {},
    inputProps: {},
    inputRef() {},
    disabled: false,
  };

  constructor(props) {
    super(props);
    const state = {
      showOverlay: false,
      selectedDay: null,
    };
    if (props.value !== '' && /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/.test(props.value)) {
      const momentDay = moment.utc(props.value, props.dateFormat);
      if (momentDay.isValid()) {
        state.selectedDay = momentDay.toDate();
      }
    }
    this.state = state;
    this.localeUtils = Object.assign(
      LocaleUtils,
      { getFirstDayOfWeek: () => moment.localeData().firstDayOfWeek() },
    );
    this.input = null;
    this.daypicker = null;
    this.clickedInside = false;
    this.clickTimeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
  }

  handleContainerMouseDown = () => {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }

  handleInputFocus = (e) => {
    const origShow = this.state.showOverlay;
    this.setState({
      showOverlay: true,
    }, () => {
      if (!origShow && this.daypicker && this.state.selectedDay) {
        this.daypicker.showMonth(this.state.selectedDay);
      }
    });
    if (this.props.inputProps.onFocus) {
      this.props.inputProps.onFocus(e);
    }
  }

  handleInputBlur = (e) => {
    const showOverlay = this.clickedInside;
    this.setState({
      showOverlay,
    });
    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      this.input.focus();
    }
    if (this.props.inputProps.onBlur) {
      this.props.inputProps.onBlur(e);
    }
  }

  handleInputChange = (e) => {
    let { value } = e.target;
    // Remove invisble LRM chars from datestring
    if (value.replace) {
      value = value.replace(/\u200E/g, '');
    }
    if (value === '') {
      this.setState({
        selectedDay: null,
      });
      this.props.onChange(null);
      return;
    }
    this.props.onChange(value);

    const momentDay = moment.utc(value, this.props.dateFormat);
    if (
      /^\d{1,2}[.\-/]{1}\d{1,2}[.\-/]{1}\d{4}$/.test(value) &&
      momentDay.isValid()
    ) {
      this.setState({
        selectedDay: momentDay.toDate(),
      }, () => {
        if (this.daypicker) {
          this.daypicker.showMonth(this.state.selectedDay);
        }
      });
    }
    if (this.props.inputProps.onChange) {
      this.props.inputProps.onChange(e);
    }
  }


  handleDayClick = (day) => {
    this.setState({
      selectedDay: day,
      showOverlay: false,
    });
    // Remove invisble LRM chars from datestring
    this.props.onChange(moment.utc(day).format(this.props.dateFormat).replace(/\u200E/g, ''));
    this.input.blur();
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      language,
      dateFormat,
      value,
      onChange,
      inputProps,
      inputRef,
      disabled,
      ...otherProps
    } = this.props;
    const overlayStyle = {
      backgroundColor: '#fff',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    };
    return (
      <TetherComponent
        attachment="top center"
        constraints={[{
          to: 'scrollParent',
          attachment: 'together',
        }]}
      >
        <FormGroup>
          <FormControl
            type="text"
            inputRef={(el) => {
              this.input = el;
              inputRef(el);
            }}
            value={value}
            disabled={disabled}
            {...inputProps}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        </FormGroup>
        { this.state.showOverlay &&
          <div
            style={overlayStyle}
            onMouseDown={this.handleContainerMouseDown}
            role="presentation"
          >
            <DayPicker
              ref={(el) => {
                this.daypicker = el;
              }}
              onDayClick={this.handleDayClick}
              selectedDays={day => DateUtils.isSameDay(this.state.selectedDay, day)}
              localeUtils={this.localeUtils}
              locale={language}
              {...otherProps}
            />
          </div>
        }
      </TetherComponent>
    );
  }
}
