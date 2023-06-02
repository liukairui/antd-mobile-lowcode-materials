import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TabBarItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'TabBarItem',
  title: '标签栏项',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'TabBarItem',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'badge',
            'zh-CN': '徽标'
          },
          tip: {
            type: 'i18n',
            'en-US': 'badge',
            'zh-CN': 'badge'
          }
        },
        name: 'badge',
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
            'en-US': 'icon',
            'zh-CN': '图标'
          },
          tip: {
            type: 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon | (active: boolean) => ReactNode'
          }
        },
        name: 'icon',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SlotSetter',
                props: {
                  mode: 'node'
                },
                initialValue: {
                  type: 'JSSlot',
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
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
            'en-US': 'title',
            'zh-CN': '标题区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title | (active: boolean) => ReactNode'
          }
        },
        name: 'title',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SlotSetter',
                props: {
                  mode: 'node'
                },
                initialValue: {
                  type: 'JSSlot',
                  value: []
                }
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
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
    title: '标签栏项',
    screenshot: '',
    schema: {
      componentName: 'TabBarItem',
      props: {}
    }
  }
];

export default {
  ...TabBarItemMeta,
  snippets
};
