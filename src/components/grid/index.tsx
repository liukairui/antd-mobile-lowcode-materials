import { GridItemProps, GridProps, Grid as OriginalGrid } from 'antd-mobile';
import React, { createElement } from 'react';

class Grid extends React.Component<GridProps> {
  render() {
    return <OriginalGrid {...this.props} />;
  }
}

class GridItem extends React.Component<GridItemProps> {
  render() {
    return <OriginalGrid.Item {...this.props} />;
  }
}

export { Grid, GridItem };
