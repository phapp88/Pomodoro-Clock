import React from 'react';

// length-stepper onclick transform
// style-lint

const DurationPicker = ({ duration, handleStepperClick, type }) => (
  <div>
    <p className="duration-picker-label">{type.toUpperCase()} LENGTH</p>
    <div className="flex-row">
      <button
        className="duration-stepper"
        id={`decrement-${type}-duration`}
        onClick={handleStepperClick}
      >
        -
      </button>
      <p className="duration">{duration}</p>
      <button
        className="duration-stepper"
        id={`increment-${type}-duration`}
        onClick={handleStepperClick}
      >
        +
      </button>
    </div>
  </div>
);

export default DurationPicker;
