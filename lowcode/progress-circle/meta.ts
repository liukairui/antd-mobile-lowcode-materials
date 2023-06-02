import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProgressCircleMeta: IPublicTypeComponentMetadata = {
  componentName: 'ProgressCircle',
  title: '进度圈',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'ProgressCircle',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': '百分比'
          },
          tip: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': 'percent'
          }
        },
        name: 'percent',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': '聚焦索引'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex'
          }
        },
        name: 'tabIndex',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      className: true,
      style: true
    },
    component: {
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '进度圈',
    screenshot: '',
    schema: {
      componentName: 'ProgressCircle',
      props: {}
    }
  }
];

export default {
  ...ProgressCircleMeta,
  snippets
};
