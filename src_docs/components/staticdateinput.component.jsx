import React from 'react';
import { DateInput } from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        date: '2013-04-22T00:00:00.000Z',
      });
    }, 1000);
  };

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  };

  handleButtonClick = () => {
    this.setState({
      date: '',
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div style={{ width: '262px' }}>
        <h4>DateInput static calendar</h4>
        <DateInput
          value={date}
          onChange={this.handleDateChange}
          calendarType="static"
        />
        <p>
          Value:
          {' '}
          <code>
            {date || 'null'}
          </code>
        </p>
        <button type="button" onClick={this.handleButtonClick}>Clear value</button>
      </div>
    );
  }
}
