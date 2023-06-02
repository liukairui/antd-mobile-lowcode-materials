import {
  CascadePickerProps,
  CascadePickerRef,
  DatePickerProps,
  DatePickerRef,
  CascadePicker as OriginalCascadePicker,
  DatePicker as OriginalDatePicker,
  Picker as OriginalPicker,
  PickerProps,
  PickerRef
} from 'antd-mobile';
import { PickerDate } from 'antd-mobile/es/components/date-picker/util';
import { PickerActions, PickerColumnItem } from 'antd-mobile/es/components/picker';
import React, { ReactNode, createElement, createRef } from 'react';

class Picker extends React.Component<
  PickerProps & { render: (items: PickerColumnItem[], actions: PickerActions) => ReactNode }
> {
  ref = createRef<PickerRef>();
  render() {
    const { render, ...restProps } = this.props;
    return (
      <OriginalPicker ref={this.ref} {...restProps}>
        {(items: PickerColumnItem[], actions: PickerActions) => render && render(items, actions)}
      </OriginalPicker>
    );
  }
}

class CascadePicker extends React.Component<
  CascadePickerProps & { render: (items: PickerColumnItem[], actions: PickerActions) => ReactNode }
> {
  ref = createRef<CascadePickerRef>();
  render() {
    const { render, ...restProps } = this.props;
    return (
      <OriginalCascadePicker ref={this.ref} {...restProps}>
        {(items: PickerColumnItem[], actions: PickerActions) => render && render(items, actions)}
      </OriginalCascadePicker>
    );
  }
}

class DatePicker extends React.Component<
  DatePickerProps & { render: (value: PickerDate, actions: PickerActions) => ReactNode }
> {
  ref = createRef<DatePickerRef>();
  render() {
    const { render, ...restProps } = this.props;
    return (
      <OriginalDatePicker ref={this.ref} {...restProps}>
        {(value: PickerDate, actions: PickerActions) => render(value, actions)}
      </OriginalDatePicker>
    );
  }
}

export { Picker, CascadePicker, DatePicker };
