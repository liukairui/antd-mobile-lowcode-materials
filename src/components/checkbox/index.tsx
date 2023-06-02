import {
  CheckboxGroupProps,
  CheckboxProps,
  CheckboxRef,
  Checkbox as OriginalCheckbox
} from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class Checkbox extends React.Component<CheckboxProps> {
  ref = createRef<CheckboxRef>();
  render() {
    return <OriginalCheckbox {...this.props} />;
  }
}

class CheckboxGroup extends React.Component<CheckboxGroupProps> {
  render() {
    return <OriginalCheckbox.Group {...this.props} />;
  }
}

export { Checkbox, CheckboxGroup };
