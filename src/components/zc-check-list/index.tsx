import { CheckList, Form, NavBar, Popup } from 'antd-mobile';
import { FC, Fragment, createElement, useState } from 'react';
import { ZcFieldProps } from 'src/types';
import styles from './index.module.scss';

interface ZcCheckListItem {
  description?: string;
  disabled?: boolean;
  readOnly?: boolean;
  content: string;
  value: string;
}

interface ZcCheckListProps {
  items: ZcCheckListItem[];
}

const ZcCheckList: FC<ZcFieldProps & ZcCheckListProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const { disabled, label, name, required } = props;
  const formItemProps = {
    disabled,
    label,
    messageVariables: { name: label },
    name,
    rules: [{ required: !!required }]
  };
  const { items, readOnly } = props;
  items?.forEach((i) => (i.value = i.value || i.content));

  return (
    <Fragment>
      <Form.Item {...formItemProps} onClick={() => setVisible(true)}>
        <Form.Subscribe to={[name]}>
          {(values) => {
            const value = values[name];
            return value?.length ? items.find((i) => i.value === value[0])?.content : '请选择';
          }}
        </Form.Subscribe>
      </Form.Item>
      <Popup
        bodyClassName={styles.popupBody}
        closeOnMaskClick={true}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <NavBar
          backArrow={<div className={styles.closeIcon}>✕</div>}
          children={label}
          className={styles.navBar}
          onBack={() => setVisible(false)}
        />
        <Form.Item name={name} noStyle>
          <CheckList
            className={styles.checkList}
            onChange={() => setVisible(false)}
            readOnly={readOnly}
          >
            {items?.map((item) => {
              const { content, ...restProps } = item;
              return <CheckList.Item {...restProps} children={content} />;
            })}
          </CheckList>
        </Form.Item>
      </Popup>
    </Fragment>
  );
};

export { ZcCheckList };
