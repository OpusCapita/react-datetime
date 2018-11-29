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
    return (
      <div style={{ width: '250px' }}>
        <h4>DateInput</h4>
        <DateInput
          disabledDays={{ daysOfWeek: [0, 6] }}
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <p>Value: <code>{this.state.date || 'null'}</code></p>
        <button onClick={this.handleButtonClick}>Clear value</button>
      </div>
    );
  }
}
