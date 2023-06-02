import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const InfiniteScrollMeta: IPublicTypeComponentMetadata = {
  componentName: 'InfiniteScroll',
  title: '无限滚动',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'InfiniteScroll',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasMore',
            'zh-CN': '存在更多内容'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hasMore',
            'zh-CN': 'hasMore'
          }
        },
        name: 'hasMore',
        setter: {
          componentName: 'VariableSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadMore',
            'zh-CN': '加载更多时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadMore',
            'zh-CN': 'loadMore | (isRetry: boolean) => Promise<void>'
          }
        },
        name: 'loadMore',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'threshold',
            'zh-CN': '加载触发高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'threshold',
            'zh-CN': 'threshold | 单位为 px'
          }
        },
        name: 'threshold',
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
    title: '无限滚动',
    screenshot: '',
    schema: {
      componentName: 'InfiniteScroll',
      props: {}
    }
  }
];

export default {
  ...InfiniteScrollMeta,
  snippets
};
