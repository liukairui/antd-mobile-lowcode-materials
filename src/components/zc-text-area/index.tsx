import { Form, FormItemProps, TextArea, TextAreaProps } from 'antd-mobile';
import { Component, createElement } from 'react';
import { IZcFieldProps } from 'src/types';

interface IZcTextAreaProps extends IZcFieldProps {
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  showCount?: boolean;
}

class ZcTextArea extends Component<IZcTextAreaProps> {
  render = () => {
    const { disabled, label, maxLength, name, placeholder, readOnly, required, showCount } = this.props;

    const formItemProps: FormItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required, max: maxLength }]
    };

    const textAreaProps: TextAreaProps = {
      autoSize: true,
      maxLength,
      placeholder,
      readOnly,
      showCount
    };

    return (
      <Form.Item {...formItemProps}>
        <TextArea {...textAreaProps} />
      </Form.Item>
    );
  };
}

export { ZcTextArea };
