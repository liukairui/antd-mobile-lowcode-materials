import {
  FloatingPanelProps,
  FloatingPanelRef,
  FloatingPanel as OriginalFloatingPanel
} from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class FloatingPanel extends React.Component<FloatingPanelProps> {
  ref = createRef<FloatingPanelRef>();
  render() {
    return <OriginalFloatingPanel {...this.props} />;
  }
}

export { FloatingPanel };
