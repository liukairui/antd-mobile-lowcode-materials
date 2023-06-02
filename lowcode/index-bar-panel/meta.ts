import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const IndexBarPanelMeta: IPublicTypeComponentMetadata = {
  componentName: 'IndexBarPanel',
  title: '序列标题',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'IndexBarPanel',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'brief',
            'zh-CN': '索引内容'
          },
          tip: {
            type: 'i18n',
            'en-US': 'brief',
            'zh-CN': 'brief | 默认取 index 的第一个字符'
          }
        },
        name: 'brief',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'index',
            'zh-CN': '唯一索引'
          },
          tip: {
            type: 'i18n',
            'en-US': 'index',
            'zh-CN': 'index | 不可重复'
          }
        },
        name: 'index',
        setter: {
          componentName: 'StringSetter',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title | 默认取 index'
          }
        },
        name: 'title',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
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
    title: '序列标题',
    screenshot: '',
    schema: {
      componentName: 'IndexBarPanel',
      props: {}
    }
  }
];

export default {
  ...IndexBarPanelMeta,
  snippets
};
