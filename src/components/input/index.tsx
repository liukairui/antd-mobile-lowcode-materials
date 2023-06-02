import { InputProps, InputRef, Input as OriginalInput } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class Input extends React.Component<InputProps> {
  ref = createRef<InputRef>();
  render() {
    return <OriginalInput ref={this.ref} {...this.props} />;
  }
}

export { Input };
