import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const BadgeMeta: IPublicTypeComponentMetadata = {
  componentName: 'Badge',
  title: '徽标',
  category: '引导提示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Badge',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bordered',
            'zh-CN': '增加描边'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bordered',
            'zh-CN': 'bordered'
          }
        },
        name: 'bordered',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': '背景色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '内容'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'element'
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
            'en-US': 'wrapperClassName',
            'zh-CN': '包裹区域类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrapperClassName',
            'zh-CN': 'wrapperClassName'
          }
        },
        name: 'wrapperClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'wrapperStyle',
            'zh-CN': '包裹区域样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrapperStyle',
            'zh-CN': 'wrapperStyle'
          }
        },
        name: 'wrapperStyle',
        setter: {
          componentName: 'JsonSetter'
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
    title: '徽标',
    screenshot: '',
    schema: {
      componentName: 'Badge',
      props: {}
    }
  }
];

export default {
  ...BadgeMeta,
  snippets
};
