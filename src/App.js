import React, { Component } from 'react';

import DurationPicker from './components/duration-picker';
import Timer from './components/timer';

class App extends Component {
  state = {
    breakDuration: 5,
    sessionDuration: 25,
  }

  handleStepperClick = (event) => {
    const [ action, durationType ] = event.target.id.split('-');
    const stateField = `${durationType}Duration`;
    const { [stateField]: duration } = this.state;
    const nextDuration = action === 'increment' ? duration + 1 : duration - 1;
    this.setState({ [stateField]: nextDuration });
  }

  render() {
    const { breakDuration, sessionDuration } = this.state;
    return (
      <div>
        <h1>Pomodoro Clock</h1>
        <div className="flex-row">
          <DurationPicker
            duration={breakDuration}
            handleStepperClick={this.handleStepperClick}
            type="break"
          />
          <DurationPicker
            duration={sessionDuration}
            handleStepperClick={this.handleStepperClick}
            type="session"
          />
        </div>
        <Timer />
      </div>
    );
  }
}

export default App;
