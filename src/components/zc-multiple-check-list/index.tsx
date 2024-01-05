import { CheckList, Form, NavBar, Popup } from 'antd-mobile';
import { Component, Fragment, createElement } from 'react';
import { IZcFieldProps } from 'src/types';
import styles from './index.module.scss';

interface IZcMultipleCheckListItem {
  description?: string;
  disabled?: boolean;
  readOnly?: boolean;
  content: string;
  value: string;
}

interface IZcMultipleCheckListProps extends IZcFieldProps {
  items: IZcMultipleCheckListItem[];
  readOnly?: boolean;
}

class ZcMultipleCheckList extends Component<IZcMultipleCheckListProps> {
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
              const contents = value?.map((v: string) => items?.find((i) => i.value === v)?.content);
              return contents?.length ? contents.join('；') : '请选择';
            }}
          </Form.Subscribe>
        </Form.Item>
        <Popup bodyClassName={styles.popupBody} closeOnMaskClick={true} onClose={() => this.setState({ visible: false })} visible={visible}>
          <NavBar
            backArrow={<div className={styles.closeIcon}>✕</div>}
            children={label}
            className={styles.navBar}
            onBack={() => this.setState({ visible: false })}
            right={<span children={'确定'} onClick={() => this.setState({ visible: false })} style={{ color: 'var(--adm-color-primary)' }} />}
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
}

export { ZcMultipleCheckList };
