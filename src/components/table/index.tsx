import RcTable, { TableProps } from 'rc-table';
import React, { createElement } from 'react';
import styles from './index.module.scss';

class Table extends React.Component<TableProps> {
  render() {
    const { className, ...restProps } = this.props;
    const tableClassName = className === undefined ? styles.table : `${styles.table} ${className}`;
    return <RcTable {...restProps} className={tableClassName} />;
  }
}

export { Table };
