import { Form, FormItemProps, Switch } from 'antd-mobile';
import { Component, createElement } from 'react';
import { IZcFieldProps } from 'src/types';

interface IZcSwitchProps extends IZcFieldProps {
  loading: boolean;
}

class ZcSwitch extends Component<IZcSwitchProps> {
  render = () => {
    const { disabled, label, loading, name, required } = this.props;

    const formItemProps: FormItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required }]
    };

    const switchProps = {
      loading
    };

    return (
      <Form.Item {...formItemProps}>
        <Switch {...switchProps} />
      </Form.Item>
    );
  };
}

export { ZcSwitch };
