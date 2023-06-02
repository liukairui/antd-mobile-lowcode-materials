import { CapsuleTabProps, CapsuleTabsProps, CapsuleTabs as OriginalCapsuleTabs } from 'antd-mobile';
import React, { createElement } from 'react';

class CapsuleTabs extends React.Component<CapsuleTabsProps> {
  render() {
    return <OriginalCapsuleTabs {...this.props} />;
  }
}

class CapsuleTab extends React.Component<CapsuleTabProps> {
  render() {
    return <OriginalCapsuleTabs.Tab {...this.props} />;
  }
}

export { CapsuleTabs, CapsuleTab };
