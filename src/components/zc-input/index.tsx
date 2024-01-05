import { Form, FormItemProps, Input } from 'antd-mobile';
import { Component, createElement } from 'react';
import { IZcFieldProps } from 'src/types';

interface IZcInputProps extends IZcFieldProps {
  placeholder?: string;
  readOnly?: boolean;
}

class ZcInput extends Component<IZcInputProps> {
  render() {
    const { disabled, label, name, placeholder, readOnly, required } = this.props;

    const formItemProps: FormItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required }]
    };

    const inputProps = {
      placeholder,
      readOnly
    };

    return (
      <Form.Item {...formItemProps}>
        <Input {...inputProps} />
      </Form.Item>
    );
  }
}

export { ZcInput };
