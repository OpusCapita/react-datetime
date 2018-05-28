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
    return (
      <div style={{ margin: '20px 20px 0 20px', width: '250px' }}>
        <h4>TimePickerInput</h4>
        <TimePicker
          time={this.state.time}
          onChange={this.handleTimeChange}
          minutesInterval={2}
        />
        <p>Value: <code>{this.state.time.hour}:{this.state.time.minute}</code></p>
      </div>
    );
  }
}
