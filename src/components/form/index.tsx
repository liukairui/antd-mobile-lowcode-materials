import { FormItemProps, FormProps, Form as OriginalForm } from 'antd-mobile';
import {
  FormInstance,
  FormSubscribeProps as OriginalFormSubscribeProps
} from 'antd-mobile/es/components/form';
import React, { ReactNode, createElement, createRef } from 'react';

/* TODO 待封装 Form.Header Form.Array */

interface FormSubscribeProps {
  to: OriginalFormSubscribeProps['to'];
  render: OriginalFormSubscribeProps['children'];
}

class Form extends React.Component<FormProps> {
  ref = createRef<FormInstance>();

  defaultValidateMessages = {
    default: '${name}字段校验失败',
    required: '${name}为必填项',
    enum: '${name}必须是 [${enum}] 的其中之一',
    whitespace: '${name}不能为空',
    date: {
      format: '${name}日期格式错误',
      parse: '${name}日期转换失败',
      invalid: '${name}日期非法'
    },
    string: {
      len: '${name}必须为${len}个字符',
      min: '${name}至少${min}个字符',
      max: '${name}不能超过${max}个字符',
      range: '${name}字符数必须介于${min}和${max}之间'
    },
    number: {
      len: '${name}必须等于${len}',
      min: '${name}必须小于${min}',
      max: '${name}必须大于${max}',
      range: '${name}必须介于${min}和${max}之间'
    },
    array: {
      len: '${name}必须${len}项',
      min: '${name}至少${min}项',
      max: '${name}不得超过${max}项',
      range: '${name}至少${min}项且不得超过${max}项'
    },
    pattern: {
      mismatch: '${name}不匹配${pattern}'
    },
    types: {
      string: '${name}不是有效的${type}',
      method: '${name}不是有效的${type}',
      array: '${name}不是有效的${type}',
      object: '${name}不是有效的${type}',
      number: '${name}不是有效的${type}',
      date: '${name}不是有效的${type}',
      boolean: '${name}不是有效的${type}',
      integer: '${name}不是有效的${type}',
      float: '${name}不是有效的${type}',
      regexp: '${name}不是有效的${type}',
      email: '${name}不是有效的${type}',
      url: '${name}不是有效的${type}',
      hex: '${name}不是有效的${type}'
    }
  };

  render() {
    const { style, validateMessages, ...restProps } = this.props;
    return (
      <OriginalForm
        ref={this.ref}
        validateMessages={Object.assign(this.defaultValidateMessages, validateMessages ?? {})}
        {...restProps}
      />
    );
  }
}

class FormItem extends React.Component<FormItemProps> {
  render() {
    const { children, ...restProps } = this.props;
    return (
      <OriginalForm.Item
        children={Array.isArray(children) && children.length === 1 ? children[0] : children}
        {...restProps}
      />
    );
  }
}

class FormHeader extends React.Component<{ children?: ReactNode }> {
  render() {
    return <OriginalForm.Header {...this.props} />;
  }
}

class FormSubscribe extends React.Component<FormSubscribeProps> {
  render() {
    const { render, to } = this.props;
    return <OriginalForm.Subscribe to={to} children={render} />;
  }
}

export { Form, FormHeader, FormItem, FormSubscribe };
