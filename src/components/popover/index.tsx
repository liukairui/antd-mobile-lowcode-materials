import {
  Popover as OriginalPopover,
  PopoverMenuProps,
  PopoverProps,
  PopoverRef
} from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class Popover extends React.Component<PopoverProps> {
  ref = createRef<PopoverRef>();
  render() {
    const { children, ...restProps } = this.props;
    if (Array.isArray(children) && children.length > 1) console.warn('气泡弹出框仅可传入一个元素');
    return <OriginalPopover {...restProps} children={this.props.children[0]} />;
  }
}

class PopoverMenu extends React.Component<PopoverMenuProps> {
  ref = createRef<PopoverRef>();
  render() {
    const { children, ...restProps } = this.props;
    if (Array.isArray(children) && children.length > 1) console.warn('气泡弹出框仅可传入一个元素');
    return <OriginalPopover.Menu {...restProps} children={this.props.children[0]} />;
  }
}

export { Popover, PopoverMenu };
