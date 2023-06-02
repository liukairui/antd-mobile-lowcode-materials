import { SwipeAction as OriginalSwipeAction, SwipeActionProps, SwipeActionRef } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class SwipeAction extends React.Component<SwipeActionProps> {
  ref = createRef<SwipeActionRef>();
  render() {
    return <OriginalSwipeAction {...this.props} />;
  }
}

export { SwipeAction };
