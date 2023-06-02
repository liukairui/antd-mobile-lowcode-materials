import { Swiper as OriginalSwiper, SwiperProps, SwiperRef } from 'antd-mobile';
import React, { createElement, createRef } from 'react';
import { ElementProps } from '../../types';

class Swiper extends React.Component<SwiperProps> {
  ref = createRef<SwiperRef>();
  render() {
    return <OriginalSwiper {...this.props} />;
  }
}

class SwiperItem extends React.Component<ElementProps> {
  render() {
    return <OriginalSwiper.Item {...this.props} />;
  }
}

export { Swiper, SwiperItem };
