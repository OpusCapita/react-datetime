import React from 'react';
import PropTypes from 'prop-types';
import LocaleUtils from 'react-day-picker/moment';
import { FormControl } from 'react-bootstrap';

// App imports
import './year-month-picker.scss';


export default class YearMonthPicker extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
    locale: PropTypes.string,
  };

  static defaultProps = {
    date: null,
    locale: 'en_GB',
  };

  constructor(props) {
    super(props);
    this.months = [];
    this.years = [];

    const currentYear = new Date().getFullYear();
    const fromMonth = new Date(currentYear - 10, 0);
    const toMonth = new Date(currentYear + 10, 11);

    this.months = LocaleUtils.getMonths(props.locale);
    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
      this.years.push(i);
    }
  }


  /**
   * On select box change
   * @param event
   */
  onChange = (event) => {
    const { year, month } = event.target.form;
    this.props.onChange(new Date(year.value, month.value));
  };


  /**
   * Gets years based on a date
   * @param date
   * @returns {number}
   */
  getYears = (date) => {
    if (!date) return 0;
    return date.getYear();
  };

  /**
   * Gets months based on a date
   * @param date
   * @returns {number}
   */
  getMonths = (date) => {
    if (!date) return 0;
    return date.getMonth();
  };

  render() {
    return (
      <form className="DayPicker-Caption oc-year-month-picker-container">
        <FormControl
          name="year"
          componentClass="select"
          value={this.props.date.getFullYear()}
          onChange={this.onChange}
          className="year"
        >
          {this.years.map(year => (
            <option key={`year-${year}`} value={year}>{year}</option>
          ))}
        </FormControl>

        <FormControl
          name="month"
          componentClass="select"
          value={this.props.date.getMonth()}
          onChange={this.onChange}
          className="month"
        >
          {this.months.map((month, index) => (
            <option key={`month-${month}`} value={index}>{month}</option>
          ))}
        </FormControl>
      </form>
    );
  }
}
