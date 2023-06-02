import { CheckListItemProps, CheckListProps, CheckList as OriginalCheckList } from 'antd-mobile';
import React, { createElement } from 'react';

class CheckList extends React.Component<CheckListProps> {
  render() {
    return <OriginalCheckList {...this.props} />;
  }
}

class CheckListItem extends React.Component<CheckListItemProps> {
  render() {
    return <OriginalCheckList.Item {...this.props} />;
  }
}

export { CheckList, CheckListItem };
