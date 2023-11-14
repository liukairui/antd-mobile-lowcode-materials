import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CapsuleTabsMeta: IPublicTypeComponentMetadata = {
  componentName: 'CapsuleTabs',
  title: '胶囊选项卡组',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'CapsuleTabs',
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
    title: '胶囊选项卡组',
    screenshot: '',
    schema: {
      componentName: 'CapsuleTabs',
      props: {}
    }
  }
];

export default {
  ...CapsuleTabsMeta,
  snippets
};
