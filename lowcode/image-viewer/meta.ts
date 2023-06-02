import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageViewerMeta: IPublicTypeComponentMetadata = {
  componentName: 'ImageViewer',
  title: '图片查看器',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'ImageViewer',
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
        setter: {
          componentName: 'FunctionSetter'
        }
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
            'zh-CN':
              'getContainer | 指定挂载的 HTML 节点，默认为 body，如果为 null 的话，会渲染到当前节点 HTMLElement | () => HTMLElement'
          }
        },
        name: 'getContainer',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': '图片地址'
          },
          tip: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': 'image'
          }
        },
        name: 'image',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
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
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
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
                },
                initialValue: undefined
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
        setter: {
          componentName: 'FunctionSetter'
        }
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
            'zh-CN': 'renderFooter | (image: string) => ReactNode'
          }
        },
        name: 'renderFooter',
        setter: {
          componentName: 'FunctionSetter'
        }
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
      isContainer: true
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '图片查看器',
    screenshot: '',
    schema: {
      componentName: 'ImageViewer',
      props: {}
    }
  }
];

export default {
  ...ImageViewerMeta,
  snippets
};
