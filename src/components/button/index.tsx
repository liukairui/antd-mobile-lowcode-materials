import { ButtonProps, ButtonRef, Button as OriginalButton } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class Button extends React.Component<ButtonProps> {
  ref = createRef<ButtonRef>();
  render() {
    return <OriginalButton {...this.props} />;
  }
}

export { Button };
