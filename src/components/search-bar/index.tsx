import { SearchBarProps, SearchBarRef, SearchBar as OriginalSearchBar } from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class SearchBar extends React.Component<SearchBarProps> {
  ref = createRef<SearchBarRef>();
  render() {
    return <OriginalSearchBar {...this.props} />;
  }
}

export { SearchBar };
