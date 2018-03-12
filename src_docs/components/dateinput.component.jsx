import React from 'react';
import { DateInput } from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  }

  render() {
    return (
      <div style={{ margin: '20px 20px 0 20px', width: '200px' }}>
        <h4>DateInput</h4>
        <DateInput
          value={this.state.date}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}
