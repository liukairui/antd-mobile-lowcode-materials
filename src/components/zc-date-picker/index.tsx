import { DatePicker, DatePickerRef, Form } from 'antd-mobile';
import moment from 'moment';
import { Component, RefObject, createElement } from 'react';
import { IZcFieldProps } from 'src/types';

interface IZcDatePickerProps extends IZcFieldProps {
  type: 'date' | 'datetime';
}

class ZcDatePicker extends Component<IZcDatePickerProps> {
  render = () => {
    const { disabled, label, name, required, type } = this.props;

    const formItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required }]
    };

    const precision = type === 'date' ? 'day' : type === 'datetime' ? 'minute' : 'second';
    const format = type === 'date' ? 'YYYY-MM-DD' : type === 'datetime' ? 'YYYY-MM-DD HH:mm' : '';
    const labelRenderer = (type: string, data: number) => {
      const labels = {
        year: '年',
        month: '月',
        day: '日',
        hour: '时',
        minute: '分'
      };
      return `${data}${labels[type] || ''}`;
    };

    return (
      <Form.Item
        {...formItemProps}
        getValueProps={(v) => ({ value: moment(v).toDate() })}
        normalize={(v) => moment(v).format(format)}
        onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
        trigger="onConfirm"
      >
        <DatePicker precision={precision} renderLabel={labelRenderer}>
          {() => <Form.Subscribe to={[name]}>{(v) => v?.[name] ?? '请选择'}</Form.Subscribe>}
        </DatePicker>
      </Form.Item>
    );
  };
}

export { ZcDatePicker };
