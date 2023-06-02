import { CascaderProps, CascaderRef, Cascader as OriginalCascader } from 'antd-mobile';
import { CascaderActions, CascaderOption } from 'antd-mobile/es/components/cascader';
import React, { ReactNode, createElement, createRef } from 'react';

class Cascader extends React.Component<
  CascaderProps & { render: (items: CascaderOption[], actions: CascaderActions) => ReactNode }
> {
  ref = createRef<CascaderRef>();
  render() {
    const { render, ...restProps } = this.props;
    return (
      <OriginalCascader ref={this.ref} {...restProps}>
        {(items: CascaderOption[], actions: CascaderActions) => render && render(items, actions)}
      </OriginalCascader>
    );
  }
}

export { Cascader };
