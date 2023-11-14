import { CheckList, Form, NavBar, Popup } from 'antd-mobile';
import { FC, Fragment, createElement, useState } from 'react';
import { ZcFieldProps } from 'src/types';
import styles from './index.module.scss';

interface ZcMultipleCheckListItem {
  description?: string;
  disabled?: boolean;
  readOnly?: boolean;
  content: string;
  value: string;
}

interface ZcMultipleCheckListProps {
  items: ZcMultipleCheckListItem[];
  readOnly?: boolean;
}

const ZcMultipleCheckList: FC<ZcFieldProps & ZcMultipleCheckListProps> = (props) => {
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
            const contents = value?.map((v: string) => items?.find((i) => i.value === v)?.content);
            return contents?.length ? contents.join('；') : '请选择';
          }}
        </Form.Subscribe>
      </Form.Item>
      <Popup bodyClassName={styles.popupBody} closeOnMaskClick={true} onClose={() => setVisible(false)} visible={visible}>
        <NavBar
          backArrow={<div className={styles.closeIcon}>✕</div>}
          children={label}
          className={styles.navBar}
          onBack={() => setVisible(false)}
          right={<span children={'确定'} onClick={() => setVisible(false)} style={{ color: 'var(--adm-color-primary)' }} />}
        />
        <Form.Item name={name} noStyle>
          <CheckList className={styles.checkList} readOnly={readOnly} multiple={true}>
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

export { ZcMultipleCheckList };
