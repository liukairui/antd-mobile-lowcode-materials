import { StepperProps, StepperRef, Stepper as OriginalStepper } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class Stepper extends React.Component<StepperProps> {
  ref = createRef<StepperRef>();
  render() {
    return <OriginalStepper {...this.props} />;
  }
}

export { Stepper };
