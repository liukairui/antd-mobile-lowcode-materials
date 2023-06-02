import { TabProps, TabsProps, Tabs as OriginalTabs } from 'antd-mobile';
import React, { createElement } from 'react';

class Tabs extends React.Component<TabsProps> {
  render() {
    return <OriginalTabs {...this.props} />;
  }
}

class Tab extends React.Component<TabProps> {
  render() {
    return <OriginalTabs.Tab {...this.props} />;
  }
}

export { Tabs, Tab };
