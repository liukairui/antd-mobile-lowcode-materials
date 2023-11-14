import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SafeAreaMeta: IPublicTypeComponentMetadata = {
  componentName: 'SafeArea',
  title: '安全区',
  category: '布局',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SafeArea',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'position',
            'zh-CN': '位置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'position',
            'zh-CN': 'position'
          }
        },
        name: 'position',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
              }
            ],
            options: [
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
              }
            ]
          }
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
        setter: 'NumberSetter'
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
    title: '安全区',
    screenshot: '',
    schema: {
      componentName: 'SafeArea',
      props: {}
    }
  }
];

export default {
  ...SafeAreaMeta,
  snippets
};
