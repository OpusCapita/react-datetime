import React from 'react';
import TimePicker from '../../src/time-picker/time-picker.component';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        hour: 10,
        minute: 30,
      },
    };
  }

  handleTimeChange = (newTimeValue) => {
    this.setState({
      time: newTimeValue,
    });
  };

  render() {
    const { time, time: { hour, minute } } = this.state;
    return (
      <div style={{ width: '250px' }}>
        <h4>TimePickerInput</h4>
        <TimePicker
          time={time}
          onChange={this.handleTimeChange}
          minutesInterval={2}
        />
        <p>
          Value:
          {' '}
          <code>
            {hour}
            :
            {minute}
          </code>
        </p>
      </div>
    );
  }
}
