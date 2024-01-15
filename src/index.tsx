import {
  ButtonRef,
  CascadePickerRef,
  CascaderRef,
  CheckboxRef,
  DatePickerRef,
  FloatingPanelRef,
  IndexBarRef,
  InputRef,
  ListRef,
  MultiImageViewerRef,
  PickerRef,
  PopoverRef,
  SearchBarRef,
  StepperRef,
  SwipeActionRef,
  SwiperRef,
  ActionSheet as _ActionSheet,
  AutoCenter as _AutoCenter,
  Avatar as _Avatar,
  Badge as _Badge,
  Button as _Button,
  CapsuleTabs as _CapsuleTabs,
  Card as _Card,
  CascadePicker as _CascadePicker,
  CascadePickerView as _CascadePickerView,
  Cascader as _Cascader,
  CascaderView as _CascaderView,
  CenterPopup as _CenterPopup,
  CheckList as _CheckList,
  Checkbox as _Checkbox,
  Collapse as _Collapse,
  DatePicker as _DatePicker,
  DatePickerView as _DatePickerView,
  Dialog as _Dialog,
  Divider as _Divider,
  DotLoading as _DotLoading,
  Ellipsis as _Ellipsis,
  ErrorBlock as _ErrorBlock,
  FloatingPanel as _FloatingPanel,
  Footer as _Footer,
  Form as _Form,
  Grid as _Grid,
  Image as _Image,
  ImageViewer as _ImageViewer,
  IndexBar as _IndexBar,
  InfiniteScroll as _InfiniteScroll,
  Input as _Input,
  JumboTabs as _JumboTabs,
  List as _List,
  Mask as _Mask,
  Modal as _Modal,
  NavBar as _NavBar,
  NoticeBar as _NoticeBar,
  PageIndicator as _PageIndicator,
  Picker as _Picker,
  PickerView as _PickerView,
  Popover as _Popover,
  Popup as _Popup,
  ProgressBar as _ProgressBar,
  ProgressCircle as _ProgressCircle,
  PullToRefresh as _PullToRefresh,
  Radio as _Radio,
  Rate as _Rate,
  Result as _Result,
  SafeArea as _SafeArea,
  SearchBar as _SearchBar,
  Selector as _Selector,
  SideBar as _SideBar,
  Skeleton as _Skeleton,
  Slider as _Slider,
  Space as _Space,
  SpinLoading as _SpinLoading,
  Stepper as _Stepper,
  Steps as _Steps,
  SwipeAction as _SwipeAction,
  Swiper as _Swiper,
  Switch as _Switch,
  TabBar as _TabBar,
  Tabs as _Tabs,
  Tag as _Tag,
  TextArea as _TextArea,
  WaterMark as _WaterMark
} from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form';
import { ComponentProps as CP, Component, MouseEvent, createElement, createRef } from 'react';
import { defaultValidateMessages } from './utils/default-validate-messages';

/* 按钮 */
export class Button extends Component<CP<typeof _Button>> {
  ref = createRef<ButtonRef>();
  render = () => <_Button ref={this.ref} {...this.props} />;
}

/* 指令式调用 */
export { CommandInvocation } from './components/command-invocation';

/* 文本 */
export { Text } from './components/text';

/* 自动居中 */
export class AutoCenter extends Component<CP<typeof _AutoCenter>> {
  render = () => <_AutoCenter {...this.props} />;
}

/* 容器 */
export class Box extends Component<{ onClick?: (event: MouseEvent<HTMLDivElement>) => void }> {
  render = () => createElement('div', this.props);
}

/* 分割线 */
export class Divider extends Component<CP<typeof _Divider>> {
  render = () => <_Divider {...this.props} />;
}

/* 栅格 */
export class Grid extends Component<CP<typeof _Grid>> {
  render = () => <_Grid {...this.props} />;
}
export class GridItem extends Component<CP<typeof _Grid.Item>> {
  render = () => <_Grid.Item {...this.props} />;
}

/* 安全区 */
export class SafeArea extends Component<CP<typeof _SafeArea>> {
  render = () => <_SafeArea {...this.props} />;
}

/* 间距 */
export class Space extends Component<CP<typeof _Space>> {
  render = () => <_Space {...this.props} />;
}

/* 胶囊选项卡 */
export class CapsuleTabs extends Component<CP<typeof _CapsuleTabs>> {
  render = () => <_CapsuleTabs {...this.props} />;
}
export class CapsuleTab extends Component<CP<typeof _CapsuleTabs.Tab>> {
  render = () => <_CapsuleTabs.Tab {...this.props} />;
}

/* 序列 */
export class IndexBar extends Component<CP<typeof _IndexBar>> {
  ref = createRef<IndexBarRef>();
  render = () => <_IndexBar ref={this.ref} {...this.props} />;
}
export class IndexBarPanel extends Component<CP<typeof _IndexBar.Panel>> {
  render = () => <_IndexBar.Panel {...this.props} />;
}

/* 复杂选项卡 */
export class JumboTabs extends Component<CP<typeof _JumboTabs>> {
  render = () => <_JumboTabs {...this.props} />;
}
export class JumboTab extends Component<CP<typeof _JumboTabs.Tab>> {
  render = () => <_JumboTabs.Tab {...this.props} />;
}

/* 导航栏 */
export class NavBar extends Component<CP<typeof _NavBar>> {
  render = () => <_NavBar {...this.props} />;
}

/* 侧边导航 */
export class SideBar extends Component<CP<typeof _SideBar>> {
  render = () => <_SideBar {...this.props} />;
}
export class SideBarItem extends Component<CP<typeof _SideBar.Item>> {
  render = () => <_SideBar.Item {...this.props} />;
}

/* 标签栏 */
export class TabBar extends Component<CP<typeof _TabBar>> {
  render = () => <_TabBar {...this.props} />;
}
export class TabBarItem extends Component<CP<typeof _TabBar.Item>> {
  render = () => <_TabBar.Item {...this.props} />;
}

/* 标签页 */
export class Tabs extends Component<CP<typeof _Tabs>> {
  render = () => <_Tabs {...this.props} />;
}
export class Tab extends Component<CP<typeof _Tabs.Tab>> {
  render = () => <_Tabs.Tab {...this.props} />;
}

/* 头像 */
export class Avatar extends Component<CP<typeof _Avatar>> {
  render = () => <_Avatar {...this.props} />;
}

/* 卡片 */
export class Card extends Component<CP<typeof _Card>> {
  render = () => <_Card {...this.props} />;
}

/* 折叠面板 */
export class Collapse extends Component<CP<typeof _Collapse>> {
  render = () => <_Collapse {...this.props} />;
}
export class CollapsePanel extends Component<CP<typeof _Collapse.Panel>> {
  render = () => <_Collapse.Panel {...this.props} />;
}

/* 文本省略 */
export class Ellipsis extends Component<CP<typeof _Ellipsis>> {
  render = () => <_Ellipsis {...this.props} />;
}

/* 浮动面板 */
export class FloatingPanel extends Component<CP<typeof _FloatingPanel>> {
  ref = createRef<FloatingPanelRef>();
  render = () => <_FloatingPanel ref={this.ref} {...this.props} />;
}

/* 图片 */
export class Image extends Component<CP<typeof _Image>> {
  render = () => <_Image {...this.props} />;
}

/* 图片查看器 */
export class ImageViewer extends Component<CP<typeof _ImageViewer>> {
  render = () => <_ImageViewer {...this.props} />;
}
export class MultiImageViewer extends Component<CP<typeof _ImageViewer.Multi>> {
  ref = createRef<MultiImageViewerRef>();
  render = () => <_ImageViewer.Multi ref={this.ref} {...this.props} />;
}

/* 无限滚动 */
export class InfiniteScroll extends Component<CP<typeof _InfiniteScroll>> {
  render = () => <_InfiniteScroll {...this.props} />;
}

/* 列表 */
export class List extends Component<CP<typeof _List>> {
  ref = createRef<ListRef>();
  render = () => <_List ref={this.ref} {...this.props} />;
}
export class ListItem extends Component<CP<typeof _List.Item>> {
  render = () => <_List.Item {...this.props} />;
}

/* 分页符 */
export class PageIndicator extends Component<CP<typeof _PageIndicator>> {
  render = () => <_PageIndicator {...this.props} />;
}

/* 步骤条 */
export class Steps extends Component<CP<typeof _Steps>> {
  render = () => <_Steps {...this.props} />;
}
export class Step extends Component<CP<typeof _Steps.Step>> {
  render = () => <_Steps.Step {...this.props} />;
}

/* 走马灯 */
export class Swiper extends Component<CP<typeof _Swiper> & { items: CP<typeof _Swiper.Item>[] }> {
  ref = createRef<SwiperRef>();
  render = () => {
    const { children, items, ...props } = this.props;
    return (
      <_Swiper ref={this.ref} {...props}>
        {items?.map((itemProps) => <_Swiper.Item {...itemProps} />)}
      </_Swiper>
    );
  };
}

/* 标签 */
export class Tag extends Component<CP<typeof _Tag>> {
  render = () => <_Tag {...this.props} />;
}

/* 水印 */
export class WaterMark extends Component<CP<typeof _WaterMark>> {
  render = () => <_WaterMark {...this.props} />;
}

/* 页脚 */
export class Footer extends Component<CP<typeof _Footer>> {
  render = () => <_Footer {...this.props} />;
}

/* 表格 */
export { Table } from './components/table';

/* 级联选择 */
export class Cascader extends Component<CP<typeof _Cascader> & { render: CP<typeof _Cascader>['children'] }> {
  ref = createRef<CascaderRef>();
  render = () => {
    const { render, children, ...props } = this.props;
    return <_Cascader ref={this.ref} children={render} {...props} />;
  };
}

/* 级联选择视图 */
export class CascaderView extends Component<CP<typeof _CascaderView>> {
  render = () => <_CascaderView {...this.props} />;
}

/* 可勾选列表 */
export class CheckList extends Component<CP<typeof _CheckList>> {
  render = () => <_CheckList {...this.props} />;
}
export class CheckListItem extends Component<CP<typeof _CheckList.Item>> {
  render = () => <_CheckList.Item {...this.props} />;
}

/* 复选框 */
export class Checkbox extends Component<CP<typeof _Checkbox>> {
  ref = createRef<CheckboxRef>();
  render = () => <_Checkbox ref={this.ref} {...this.props} />;
}
export class CheckboxGroup extends Component<CP<typeof _Checkbox.Group>> {
  render = () => <_Checkbox.Group {...this.props} />;
}

/* 表单 */
export class Form extends Component<CP<typeof _Form>> {
  ref = createRef<FormInstance>();
  render = () => {
    const { validateMessages, ...props } = this.props;
    const validateMessagesWithDefault = { ...defaultValidateMessages, ...(validateMessages ?? {}) };
    return <_Form ref={this.ref} validateMessages={validateMessagesWithDefault} {...props} />;
  };
}

export class FormItem extends Component<CP<typeof _Form.Item>> {
  render = () => {
    const { children, ...props } = this.props;
    const newChildren = Array.isArray(children) && children.length === 1 ? children[0] : children;
    return <_Form.Item children={newChildren} {...props} />;
  };
}

export class FormHeader extends Component<CP<typeof _Form.Header>> {
  render = () => <_Form.Header {...this.props} />;
}

export class FormSubscribe extends Component<CP<typeof _Form.Subscribe> & { render: CP<typeof _Form.Subscribe>['children'] }> {
  render = () => {
    const { render, children, ...props } = this.props;
    return <_Form.Subscribe children={render} {...props} />;
  };
}

/* 输入框 */
export class Input extends Component<CP<typeof _Input>> {
  ref = createRef<InputRef>();
  render = () => <_Input ref={this.ref} {...this.props} />;
}

/* 选择器 */
export class Picker extends Component<CP<typeof _Picker> & { render: CP<typeof _Picker>['children'] }> {
  ref = createRef<PickerRef>();
  render = () => {
    const { render, children, ...props } = this.props;
    return <_Picker ref={this.ref} children={render} {...props} />;
  };
}
export class CascadePicker extends Component<CP<typeof _CascadePicker> & { render: CP<typeof _CascadePicker>['children'] }> {
  ref = createRef<CascadePickerRef>();
  render = () => {
    const { render, children, ...props } = this.props;
    return <_CascadePicker ref={this.ref} children={render} {...props} />;
  };
}
export class DatePicker extends Component<CP<typeof _DatePicker> & { render: CP<typeof _DatePicker>['children'] }> {
  ref = createRef<DatePickerRef>();
  render = () => {
    const { render, children, ...props } = this.props;
    return <_DatePicker ref={this.ref} children={render} {...props} />;
  };
}

/* 选择器视图 */
export class PickerView extends Component<CP<typeof _PickerView>> {
  render = () => <_PickerView {...this.props} />;
}
export class CascadePickerView extends Component<CP<typeof _CascadePickerView>> {
  render = () => <_CascadePickerView {...this.props} />;
}
export class DatePickerView extends Component<CP<typeof _DatePickerView>> {
  render = () => <_DatePickerView {...this.props} />;
}

/* 单选框 */
export class Radio extends Component<CP<typeof _Radio>> {
  render = () => <_Radio {...this.props} />;
}
export class RadioGroup extends Component<CP<typeof _Radio.Group>> {
  render = () => <_Radio.Group {...this.props} />;
}

/* 评分 */
export class Rate extends Component<CP<typeof _Rate>> {
  render = () => <_Rate {...this.props} />;
}

/* 搜索框 */
export class SearchBar extends Component<CP<typeof _SearchBar>> {
  ref = createRef<SearchBarRef>();
  render = () => <_SearchBar ref={this.ref} {...this.props} />;
}

/* 选择组 */
export class Selector extends Component<CP<typeof _Selector>> {
  render = () => <_Selector {...this.props} />;
}

/* 滑动输入条 */
export class Slider extends Component<CP<typeof _Slider>> {
  render = () => <_Slider {...this.props} />;
}

/* 步进器 */
export class Stepper extends Component<CP<typeof _Stepper>> {
  ref = createRef<StepperRef>();
  render = () => <_Stepper ref={this.ref} {...this.props} />;
}

/* 开关 */
export class Switch extends Component<CP<typeof _Switch>> {
  render = () => <_Switch {...this.props} />;
}

/* 文本域 */
export class TextArea extends Component<CP<typeof _TextArea>> {
  render = () => <_TextArea {...this.props} />;
}

/* 动作面板 */
export class ActionSheet extends Component<CP<typeof _ActionSheet>> {
  render = () => <_ActionSheet {...this.props} />;
}

/* 对话框 */
export class Dialog extends Component<CP<typeof _Dialog>> {
  render = () => <_Dialog {...this.props} />;
}

/* 异常 */
export class ErrorBlock extends Component<CP<typeof _ErrorBlock>> {
  render = () => <_ErrorBlock {...this.props} />;
}

/* 加载中 */
export class DotLoading extends Component<CP<typeof _DotLoading>> {
  render = () => <_DotLoading {...this.props} />;
}
export class SpinLoading extends Component<CP<typeof _SpinLoading>> {
  render = () => <_SpinLoading {...this.props} />;
}

/* 背景蒙层 */
export class Mask extends Component<CP<typeof _Mask>> {
  render = () => <_Mask {...this.props} />;
}

/* 弹窗 */
export class Modal extends Component<CP<typeof _Modal>> {
  render = () => <_Modal {...this.props} />;
}

/* 气泡弹出框 */
export class Popover extends Component<CP<typeof _Popover>> {
  ref = createRef<PopoverRef>();
  render = () => {
    const { children, ...props } = this.props;
    return <_Popover ref={this.ref} children={children[0]} {...props} />;
  };
}
export class PopoverMenu extends Component<CP<typeof _Popover.Menu>> {
  ref = createRef<PopoverRef>();
  render = () => {
    const { children, ...props } = this.props;
    return <_Popover.Menu ref={this.ref} children={children[0]} {...props} />;
  };
}

/* 弹出层 */
export class CenterPopup extends Component<CP<typeof _CenterPopup>> {
  render = () => <_CenterPopup {...this.props} />;
}
export class Popup extends Component<CP<typeof _Popup>> {
  render = () => <_Popup {...this.props} />;
}

/* 进度条 */
export class ProgressBar extends Component<CP<typeof _ProgressBar>> {
  render = () => <_ProgressBar {...this.props} />;
}

/* 进度圈 */
export class ProgressCircle extends Component<CP<typeof _ProgressCircle>> {
  render = () => <_ProgressCircle {...this.props} />;
}

/* 下拉刷新 */
export class PullToRefresh extends Component<CP<typeof _PullToRefresh>> {
  render = () => <_PullToRefresh {...this.props} />;
}

/* 结果 */
export class Result extends Component<CP<typeof _Result>> {
  render = () => <_Result {...this.props} />;
}

/* 骨架屏 */
export class Skeleton extends Component<CP<typeof _Skeleton>> {
  render = () => <_Skeleton {...this.props} />;
}
export class SkeletonTitle extends Component<CP<typeof _Skeleton.Title>> {
  render = () => <_Skeleton.Title {...this.props} />;
}
export class SkeletonParagraph extends Component<CP<typeof _Skeleton.Paragraph>> {
  render = () => <_Skeleton.Paragraph {...this.props} />;
}

/* 滑动操作 */
export class SwipeAction extends Component<CP<typeof _SwipeAction>> {
  ref = createRef<SwipeActionRef>();
  render = () => <_SwipeAction ref={this.ref} {...this.props} />;
}

/* 徽标 */
export class Badge extends Component<CP<typeof _Badge>> {
  render = () => <_Badge {...this.props} />;
}

/* 通告栏 */
export class NoticeBar extends Component<CP<typeof _NoticeBar>> {
  render = () => <_NoticeBar {...this.props} />;
}

/* 单行输入框 */
export { ZcInput } from './components/zc-input';

/* 多行输入框 */
export { ZcTextArea } from './components/zc-text-area';

/* 单选框 */
export { ZcCheckList } from './components/zc-check-list';

/* 多选框 */
export { ZcMultipleCheckList } from './components/zc-multiple-check-list';

/* 日期 */
export { ZcDatePicker } from './components/zc-date-picker';

/* 开关 */
export { ZcSwitch } from './components/zc-switch';
