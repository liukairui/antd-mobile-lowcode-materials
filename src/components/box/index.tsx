import React, { MouseEvent, createElement } from 'react';

interface IBoxProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

class Box extends React.Component<IBoxProps> {
  render() {
    return createElement('div', {
      ...this.props
    });
  }
}

export { Box };
