import React from 'react';
import DateTime from '../../src/date-time-input.component';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: '2013-04-22T00:00:00.000Z',
    };
  }

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  };

  render() {
    return (
      <div style={{ margin: '20px 20px 0 20px', width: '250px' }}>
        <h4>DateTimeInput</h4>
        <DateTime
          value={this.state.date}
          onChange={this.handleDateChange}
          time
        />
        <p>Value: <code>{this.state.date || 'null'}</code></p>
      </div>
    );
  }
}
