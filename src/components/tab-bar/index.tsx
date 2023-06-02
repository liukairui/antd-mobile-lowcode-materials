import { TabBarItemProps, TabBarProps, TabBar as OriginalTabBar } from 'antd-mobile';
import React, { createElement } from 'react';

class TabBar extends React.Component<TabBarProps> {
  render() {
    return <OriginalTabBar {...this.props} />;
  }
}

class TabBarItem extends React.Component<TabBarItemProps> {
  render() {
    return <OriginalTabBar.Item {...this.props} />;
  }
}

export { TabBar, TabBarItem };
