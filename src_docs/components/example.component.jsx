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
      <DateInput
        value={this.state.date}
        onChange={this.handleDateChange}
      />
    );
  }
}
