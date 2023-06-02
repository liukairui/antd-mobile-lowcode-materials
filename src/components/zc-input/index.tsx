import { Form, FormItemProps, Input } from 'antd-mobile';
import React, { createElement } from 'react';
import { ZcFieldProps } from 'src/types';

interface ZcInputProps {
  placeholder?: string;
  readOnly?: boolean;
}

class ZcInput extends React.Component<ZcFieldProps & ZcInputProps> {
  render() {
    const { disabled, label, name, required } = this.props;
    const formItemProps: FormItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required }]
    };
    const { readOnly, placeholder } = this.props;
    return (
      <Form.Item {...formItemProps}>
        <Input {...{ readOnly, placeholder }} />
      </Form.Item>
    );
  }
}

export { ZcInput };
