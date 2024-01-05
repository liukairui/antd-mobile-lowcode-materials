import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { zcFieldProps } from '../../src/utils/zero-code';

const ZcDatePickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcDatePicker',
  title: '零代码-日期',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.2',
    exportName: 'ZcDatePicker',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      ...zcFieldProps,
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '类型'
          },
          tip: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '年-月-日',
                value: 'date'
              },
              {
                label: '年-月-日 时:分',
                value: 'datetime'
              }
            ],
            options: [
              {
                label: '年-月-日',
                value: 'date'
              },
              {
                label: '年-月-日 时:分',
                value: 'datetime'
              }
            ]
          }
        }
      }
    ],
    supports: {
      style: true,
      className: true
    },
    component: {
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '零代码-日期',
    screenshot: '',
    schema: {
      componentName: 'ZcDatePicker',
      props: {
        label: '日期',
        name: 'riqi',
        type: 'date'
      }
    }
  }
];

export default {
  ...ZcDatePickerMeta,
  snippets
};
