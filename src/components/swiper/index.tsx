import { Swiper as OriginalSwiper, SwiperProps, SwiperRef } from 'antd-mobile';
import React, { Key, ReactNode, createElement, createRef } from 'react';

interface ISwiperItemProps {
  children?: ReactNode;
  key?: Key;
  onClick?: () => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface ISwiperProps extends SwiperProps {
  items?: ISwiperItemProps[];
}

class Swiper extends React.Component<ISwiperProps> {
  ref = createRef<SwiperRef>();

  render() {
    let { children, items, ...restProps } = this.props;
    return (
      <OriginalSwiper {...restProps}>
        {items?.map((itemProps) => (
          <OriginalSwiper.Item {...itemProps} />
        ))}
      </OriginalSwiper>
    );
  }
}

export { Swiper };
