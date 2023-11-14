import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CollapseMeta: IPublicTypeComponentMetadata = {
  componentName: 'Collapse',
  title: '折叠面板组',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Collapse',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'accordion',
            'zh-CN': '手风琴模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'accordion',
            'zh-CN': 'accordion'
          }
        },
        name: 'accordion',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': '已展开面板的唯一标识'
          },
          tip: {
            type: 'i18n',
            'en-US': 'activeKey',
            'zh-CN': 'activeKey | 手风琴模式：string | null 非手风琴模式：string[]'
          }
        },
        name: 'activeKey',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter'
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': '箭头'
          },
          tip: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': 'arrow | (active: boolean) => React.ReactNode'
          }
        },
        name: 'arrow',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['SlotSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': '默认展开的面板的唯一标识'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultActiveKey',
            'zh-CN': 'defaultActiveKey'
          }
        },
        name: 'defaultActiveKey',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter'
                  }
                }
              }
            ]
          }
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
            'zh-CN': 'onChange | 手风琴模式：(activeKey: string | null) => void 非手风琴模式：(activeKey: string[]) => void'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['FunctionSetter']
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
    title: '折叠面板组',
    screenshot: '',
    schema: {
      componentName: 'Collapse',
      props: {}
    }
  }
];

export default {
  ...CollapseMeta,
  snippets
};
