import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const IndexBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'IndexBar',
  title: '序列',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'IndexBar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': '锚点变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': 'onIndexChange | (index: string) => void'
          }
        },
        name: 'onIndexChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sticky',
            'zh-CN': '锚点自动吸顶'
          },
          tip: {
            type: 'i18n',
            'en-US': 'sticky',
            'zh-CN': 'sticky'
          }
        },
        name: 'sticky',
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
    title: '序列',
    screenshot: '',
    schema: {
      componentName: 'IndexBar',
      props: {}
    }
  }
];

export default {
  ...IndexBarMeta,
  snippets
};
