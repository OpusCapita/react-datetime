import React from 'react';
import TimePicker from '../../src/time-picker/time-picker.component';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00Z',
    };
  }

  handleTimeChange = (time) => {
    this.setState({
      time,
    });
  };

  render() {
    return (
      <div style={{ margin: '20px 20px 0 20px', width: '250px' }}>
        <h4>TimePickerInput</h4>
        <TimePicker
          value={this.state.time}
          onChange={this.handleTimeChange}
        />
        <p>Value: <code>{this.state.time || 'null'}</code></p>
      </div>
    );
  }
}
