import {
  ImageViewerProps,
  MultiImageViewerProps,
  MultiImageViewerRef,
  ImageViewer as OriginalImageViewer
} from 'antd-mobile';
import React, { createElement, createRef } from 'react';

class ImageViewer extends React.Component<ImageViewerProps> {
  render() {
    return <OriginalImageViewer {...this.props} />;
  }
}

class MultiImageViewer extends React.Component<MultiImageViewerProps> {
  ref = createRef<MultiImageViewerRef>();
  render() {
    return <OriginalImageViewer.Multi {...this.props} />;
  }
}

export { ImageViewer, MultiImageViewer };
