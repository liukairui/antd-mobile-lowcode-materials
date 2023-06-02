import {
  IndexBarPanelProps,
  IndexBarProps,
  IndexBarRef,
  IndexBar as OriginalIndexBar
} from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class IndexBar extends React.Component<IndexBarProps> {
  ref = createRef<IndexBarRef>();
  render() {
    return <OriginalIndexBar {...this.props} />;
  }
}

class IndexBarPanel extends React.Component<IndexBarPanelProps> {
  render() {
    return <OriginalIndexBar.Panel {...this.props} />;
  }
}

export { IndexBar, IndexBarPanel };
