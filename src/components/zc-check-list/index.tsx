import { CheckList, Form, NavBar, Popup } from 'antd-mobile';
import { Component, Fragment, createElement } from 'react';
import { IZcFieldProps } from 'src/types';
import styles from './index.module.scss';

interface IZcCheckListItem {
  description?: string;
  disabled?: boolean;
  readOnly?: boolean;
  content: string;
  value: string;
}

interface ZcCheckListProps extends IZcFieldProps {
  items: IZcCheckListItem[];
  readOnly?: boolean;
}

class ZcCheckList extends Component<ZcCheckListProps> {
  state = { visible: false };
  render = () => {
    const { visible } = this.state;

    const { disabled, items, label, name, readOnly, required } = this.props;

    const formItemProps = {
      disabled,
      label,
      messageVariables: { name: label },
      name,
      rules: [{ required: !!required }]
    };

    items?.forEach((i) => (i.value = i.value || i.content));

    return (
      <Fragment>
        <Form.Item {...formItemProps} onClick={() => this.setState({ visible: true })}>
          <Form.Subscribe to={[name]}>
            {(values) => {
              const value = values?.[name];
              return value?.length ? items.find((i) => i.value === value[0])?.content : '请选择';
            }}
          </Form.Subscribe>
        </Form.Item>
        <Popup bodyClassName={styles.popupBody} closeOnMaskClick={true} onClose={() => this.setState({ visible: false })} visible={visible}>
          <NavBar
            backArrow={<div className={styles.closeIcon}>✕</div>}
            children={label}
            className={styles.navBar}
            onBack={() => this.setState({ visible: false })}
          />
          <Form.Item name={name} noStyle>
            <CheckList className={styles.checkList} onChange={() => this.setState({ visible: false })} readOnly={readOnly}>
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
}

export { ZcCheckList };
