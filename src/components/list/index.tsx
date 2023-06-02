import { ListItemProps, ListProps, ListRef, List as OriginalList } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class List extends React.Component<ListProps> {
  ref = createRef<ListRef>();
  render() {
    return <OriginalList {...this.props} />;
  }
}

class ListItem extends React.Component<ListItemProps> {
  render() {
    return <OriginalList.Item {...this.props} />;
  }
}

export { List, ListItem };
