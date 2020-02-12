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
    const { date } = this.state;
    return (
      <div style={{ width: '250px' }}>
        <h4>DateTimeInput (Finnish locale)</h4>
        <DateTime
          value={date}
          onChange={this.handleDateChange}
          time
          locale="fi"
        />
        <p>
          Value:
          {' '}
          <code>
            {date || 'null'}
          </code>
        </p>
      </div>
    );
  }
}
