import { FormItemProps, TextAreaProps } from 'antd-mobile';
import { FC, createElement } from 'react';
import { ZcFieldProps } from 'src/types';
import { FormItem, TextArea } from '../../index';

interface ZcTextAreaProps {
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  showCount?: boolean;
}

const ZcTextArea: FC<ZcFieldProps & ZcTextAreaProps> = (props) => {
  const { disabled, label, maxLength, name, placeholder, readOnly, required, showCount } = props;

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
    <FormItem {...formItemProps}>
      <TextArea {...textAreaProps} />
    </FormItem>
  );
};

export { ZcTextArea };
