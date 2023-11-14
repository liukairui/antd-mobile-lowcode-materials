import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TabsMeta: IPublicTypeComponentMetadata = {
  componentName: 'Tabs',
  title: '标签页组',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Tabs',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': '激活的唯一标识'
          },
          tip: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': 'activeKey'
          }
        },
        name: 'activeKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeLineMode',
            'zh-CN': '下划线宽度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'activeLineMode',
            'zh-CN': 'activeLineMode'
          }
        },
        name: 'activeLineMode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '标题',
                value: 'auto'
              },
              {
                label: '标签',
                value: 'full'
              },
              {
                label: '固定',
                value: 'fixed'
              }
            ],
            options: [
              {
                label: '标题',
                value: 'auto'
              },
              {
                label: '标签',
                value: 'full'
              },
              {
                label: '固定',
                value: 'fixed'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': '默认激活的唯一标识'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': 'defaultActiveKey'
          }
        },
        name: 'defaultActiveKey',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': '值变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange | (key: string) => void'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stretch',
            'zh-CN': '标签页宽度拉伸'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stretch',
            'zh-CN': 'stretch'
          }
        },
        name: 'stretch',
        setter: 'BoolSetter'
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
    title: '标签页组',
    screenshot: '',
    schema: {
      componentName: 'Tabs',
      props: {}
    }
  }
];

export default {
  ...TabsMeta,
  snippets
};
