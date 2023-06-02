import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const JumboTabsMeta: IPublicTypeComponentMetadata = {
  componentName: 'JumboTabs',
  title: '复杂选项卡组',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'JumboTabs',
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
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
            'zh-CN': 'defaultActiveKey | 默认取第一个面板'
          }
        },
        name: 'defaultActiveKey',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': '切换面板时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange | (key: string) => void'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter'
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
    title: '复杂选项卡组',
    screenshot: '',
    schema: {
      componentName: 'JumboTabs',
      props: {}
    }
  }
];

export default {
  ...JumboTabsMeta,
  snippets
};
