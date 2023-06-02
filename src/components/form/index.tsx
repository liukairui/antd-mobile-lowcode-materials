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

  typeTemplate = '${name}不是有效的${type}';
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
      len: '${name}必须为${len}字',
      min: '${name}至少${min}字',
      max: '${name}不能超过${max}字',
      range: '${name}字数必须介于${min}和${max}之间'
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
      string: this.typeTemplate,
      method: this.typeTemplate,
      array: this.typeTemplate,
      object: this.typeTemplate,
      number: this.typeTemplate,
      date: this.typeTemplate,
      boolean: this.typeTemplate,
      integer: this.typeTemplate,
      float: this.typeTemplate,
      regexp: this.typeTemplate,
      email: this.typeTemplate,
      url: this.typeTemplate,
      hex: this.typeTemplate
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
