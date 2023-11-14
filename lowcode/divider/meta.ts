import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DividerMeta: IPublicTypeComponentMetadata = {
  componentName: 'Divider',
  title: '分割线',
  category: '布局',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Divider',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'contentPosition',
            'zh-CN': '内容位置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'contentPosition',
            'zh-CN': 'contentPosition | 仅在 direction 为 horizontal 时有效'
          }
        },
        name: 'contentPosition',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              }
            ],
            options: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              }
            ]
          }
        }
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
    title: '分割线',
    screenshot: '',
    schema: {
      componentName: 'Divider',
      props: {}
    }
  }
];

export default {
  ...DividerMeta,
  snippets
};
