import { DatePicker, DatePickerRef, Form } from 'antd-mobile';
import moment from 'moment';
import { FC, RefObject, createElement, useCallback } from 'react';
import { ZcFieldProps } from 'src/types';

interface ZcDatePickerProps {
  type: 'date' | 'datetime';
}

const ZcDatePicker: FC<ZcFieldProps & ZcDatePickerProps> = (props) => {
  const { disabled, label, name, required } = props;
  const formItemProps = {
    disabled,
    label,
    messageVariables: { name: label },
    name,
    rules: [{ required: !!required }]
  };
  const { type } = props;

  const precision = type === 'date' ? 'day' : type === 'datetime' ? 'minute' : 'second';
  const format = type === 'date' ? 'YYYY-MM-DD' : type === 'datetime' ? 'YYYY-MM-DD HH:mm' : '';
  const labelRenderer = useCallback((type: string, data: number) => {
    const labels = {
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      minute: '分'
    };
    return `${data}${labels[type] || ''}`;
  }, []);

  return (
    <Form.Item
      {...formItemProps}
      onClick={(_, ref: RefObject<DatePickerRef>) => ref.current?.open()}
      trigger="onConfirm"
    >
      <DatePicker precision={precision} renderLabel={labelRenderer}>
        {() => (
          <Form.Subscribe to={[name]}>
            {(values) => {
              const value: Date = values[name];
              return value ? moment(value).format(format) : '请选择';
            }}
          </Form.Subscribe>
        )}
      </DatePicker>
    </Form.Item>
  );
};

export { ZcDatePicker };
