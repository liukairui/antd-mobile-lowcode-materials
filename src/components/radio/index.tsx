import { Radio as OriginalRadio, RadioGroupProps, RadioProps } from 'antd-mobile';
import React, { createElement } from 'react';

class Radio extends React.Component<RadioProps> {
  render() {
    return <OriginalRadio {...this.props} />;
  }
}

class RadioGroup extends React.Component<RadioGroupProps> {
  render() {
    return <OriginalRadio.Group {...this.props} />;
  }
}

export { Radio, RadioGroup };
