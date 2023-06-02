import { Steps as OriginalSteps, StepProps, StepsProps } from 'antd-mobile';
import React, { createElement } from 'react';

class Steps extends React.Component<StepsProps> {
  render() {
    return <OriginalSteps {...this.props} />;
  }
}

class Step extends React.Component<StepProps> {
  render() {
    return <OriginalSteps.Step {...this.props} />;
  }
}

export { Steps, Step };
