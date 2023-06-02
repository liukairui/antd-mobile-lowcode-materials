import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const EllipsisMeta: IPublicTypeComponentMetadata = {
  componentName: 'Ellipsis',
  title: '文本省略',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Ellipsis',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapseText',
            'zh-CN': '收起按钮文字'
          },
          tip: {
            type: 'i18n',
            'en-US': 'collapseText',
            'zh-CN': 'collapseText'
          }
        },
        name: 'collapseText',
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
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultExpanded',
            'zh-CN': '默认展开'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultExpanded',
            'zh-CN': 'defaultExpanded'
          }
        },
        name: 'defaultExpanded',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
            'zh-CN': 'direction | 省略位置'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '中间',
                value: 'middle'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              }
            ],
            options: [
              {
                label: '中间',
                value: 'middle'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              }
            ]
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'expandText',
            'zh-CN': '展开按钮文字'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandText',
            'zh-CN': 'expandText'
          }
        },
        name: 'expandText',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onContentClick',
            'zh-CN': '点击内容时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onContentClick',
            'zh-CN': 'onContentClick | (e: React.MouseEvent) => void'
          }
        },
        name: 'onContentClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rows',
            'zh-CN': '行数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rows',
            'zh-CN': 'rows'
          }
        },
        name: 'rows',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stopPropagationForActionButtons',
            'zh-CN': '阻止按钮点击冒泡'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stopPropagationForActionButtons',
            'zh-CN': 'stopPropagationForActionButtons'
          }
        },
        name: 'stopPropagationForActionButtons',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter',
              initialValue: ''
            }
          },
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
    title: '文本省略',
    screenshot: '',
    schema: {
      componentName: 'Ellipsis',
      props: {}
    }
  }
];

export default {
  ...EllipsisMeta,
  snippets
};
