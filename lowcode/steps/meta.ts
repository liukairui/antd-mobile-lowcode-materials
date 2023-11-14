import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StepsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Steps',
  title: '步骤条',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Steps',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'current',
            'zh-CN': '当前索引'
          },
          tip: {
            type: 'i18n',
            'en-US': 'current',
            'zh-CN': 'current'
          }
        },
        name: 'current',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': '方向'
          },
          tip: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ],
            options: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
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
    title: '步骤条',
    screenshot: '',
    schema: {
      componentName: 'Steps',
      props: {}
    }
  }
];

export default {
  ...StepsMeta,
  snippets
};
