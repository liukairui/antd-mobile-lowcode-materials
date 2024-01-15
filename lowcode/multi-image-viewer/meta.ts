import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MultiImageViewerMeta: IPublicTypeComponentMetadata = {
  componentName: 'MultiImageViewer',
  title: '多张图片查看器',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'MultiImageViewer',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'afterClose',
            'zh-CN': '完全关闭后触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'afterClose',
            'zh-CN': 'afterClose | () => void'
          }
        },
        name: 'afterClose',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultIndex',
            'zh-CN': '默认索引'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultIndex',
            'zh-CN': 'defaultIndex'
          }
        },
        name: 'defaultIndex',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': '挂载节点'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': 'getContainer | 指定挂载的 HTML 节点，默认为 body，如果为 null 的话，会渲染到当前节点 HTMLElement | () => HTMLElement'
          }
        },
        name: 'getContainer',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'images',
            'zh-CN': '图片地址'
          },
          tip: {
            type: 'i18n',
            'en-US': 'images',
            'zh-CN': 'images'
          }
        },
        name: 'images',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter'
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxZoom',
            'zh-CN': '最大缩放'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxZoom',
            'zh-CN': 'maxZoom | 单位为百分比'
          }
        },
        name: 'maxZoom',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'auto',
                      value: 'auto'
                    }
                  ],
                  options: [
                    {
                      label: 'auto',
                      value: 'auto'
                    }
                  ]
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
            'en-US': 'onClose',
            'zh-CN': '关闭时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClose',
            'zh-CN': 'onClose | () => void'
          }
        },
        name: 'onClose',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': '索引变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': 'onIndexChange | (index: number) => void'
          }
        },
        name: 'onIndexChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderFooter',
            'zh-CN': '底部区域渲染函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'renderFooter',
            'zh-CN': 'renderFooter | (image: string, index: number) => ReactNode'
          }
        },
        name: 'renderFooter',
        setter: [
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              params: ['image', 'index']
            }
          },
          'FunctionSetter'
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': '显示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': 'visible'
          }
        },
        name: 'visible',
        setter: 'BoolSetter'
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
    title: '多张图片查看器',
    screenshot: '',
    schema: {
      componentName: 'MultiImageViewer',
      props: {}
    }
  }
];

export default {
  ...MultiImageViewerMeta,
  snippets
};
