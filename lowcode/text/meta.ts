import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TextMeta: IPublicTypeComponentMetadata = {
  componentName: 'Text',
  title: '文本',
  category: '通用',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Text',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'attributes',
            'zh-CN': '自定义属性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'attributes',
            'zh-CN': 'attributes'
          }
        },
        name: 'attributes',
        setter: {
          componentName: 'JsonSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'code',
            'zh-CN': '代码'
          },
          tip: {
            type: 'i18n',
            'en-US': 'code',
            'zh-CN': 'code'
          }
        },
        name: 'code',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '文本内容'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: {
          componentName: 'TextAreaSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'deleteline',
            'zh-CN': '删除线'
          },
          tip: {
            type: 'i18n',
            'en-US': 'deleteline',
            'zh-CN': 'deleteline'
          }
        },
        name: 'deleteline',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'elementType',
            'zh-CN': '自定义标签'
          },
          tip: {
            type: 'i18n',
            'en-US': 'elementType',
            'zh-CN': 'elementType'
          }
        },
        name: 'elementType',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'italics',
            'zh-CN': '斜体'
          },
          tip: {
            type: 'i18n',
            'en-US': 'italics',
            'zh-CN': 'italics'
          }
        },
        name: 'italics',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mark',
            'zh-CN': '高亮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mark',
            'zh-CN': 'mark'
          }
        },
        name: 'mark',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'strong',
            'zh-CN': '粗体'
          },
          tip: {
            type: 'i18n',
            'en-US': 'strong',
            'zh-CN': 'strong'
          }
        },
        name: 'strong',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'underline',
            'zh-CN': '下划线'
          },
          tip: {
            type: 'i18n',
            'en-US': 'underline',
            'zh-CN': 'underline'
          }
        },
        name: 'underline',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      }
    ],
    supports: {
      className: true,
      style: true
    },
    component: {
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '文本',
    screenshot: '',
    schema: {
      componentName: 'Text',
      props: {}
    }
  }
];

export default {
  ...TextMeta,
  snippets
};
