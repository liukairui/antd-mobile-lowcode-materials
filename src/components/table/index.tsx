import RcTable, { TableProps } from 'rc-table';
import React, { createElement } from 'react';
import styles from './index.module.scss';

class Table extends React.Component<TableProps> {
  render() {
    const { className, ...restProps } = this.props;
    return <RcTable {...restProps} className={`${styles.table} ${className}`} />;
  }
}

export { Table };
