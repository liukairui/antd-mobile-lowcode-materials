import { SideBarItemProps, SideBarProps, SideBar as OriginalSideBar } from 'antd-mobile';
import React, { createElement } from 'react';

class SideBar extends React.Component<SideBarProps> {
  render() {
    return <OriginalSideBar {...this.props} />;
  }
}

class SideBarItem extends React.Component<SideBarItemProps> {
  render() {
    return <OriginalSideBar.Item {...this.props} />;
  }
}

export { SideBar, SideBarItem };
