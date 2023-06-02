import { CollapsePanelProps, CollapseProps, Collapse as OriginalCollapse } from 'antd-mobile';
import React, { createElement } from 'react';

class Collapse extends React.Component<CollapseProps> {
  render() {
    return <OriginalCollapse {...this.props} />;
  }
}

class CollapsePanel extends React.Component<CollapsePanelProps> {
  render() {
    return <OriginalCollapse.Panel {...this.props} />;
  }
}

export { Collapse, CollapsePanel };
