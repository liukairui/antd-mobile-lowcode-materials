import { Skeleton as OriginalSkeleton, SkeletonProps, SkeletonTitleProps } from 'antd-mobile';
import { SkeletonParagraphProps } from 'antd-mobile/es/components/skeleton/skeleton';
import React, { createElement } from 'react';

class Skeleton extends React.Component<SkeletonProps> {
  render() {
    return <OriginalSkeleton {...this.props} />;
  }
}

class SkeletonTitle extends React.Component<SkeletonTitleProps> {
  render() {
    return <OriginalSkeleton.Title {...this.props} />;
  }
}

class SkeletonParagraph extends React.Component<SkeletonParagraphProps> {
  render() {
    return <OriginalSkeleton.Paragraph {...this.props} />;
  }
}

export { Skeleton, SkeletonTitle, SkeletonParagraph };
