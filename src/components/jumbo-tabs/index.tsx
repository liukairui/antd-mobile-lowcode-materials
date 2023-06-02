import { JumboTabProps, JumboTabsProps, JumboTabs as OriginalJumboTabs } from 'antd-mobile';
import React, { createElement } from 'react';

class JumboTabs extends React.Component<JumboTabsProps> {
  render() {
    return <OriginalJumboTabs {...this.props} />;
  }
}

class JumboTab extends React.Component<JumboTabProps> {
  render() {
    return <OriginalJumboTabs.Tab {...this.props} />;
  }
}

export { JumboTabs, JumboTab };
