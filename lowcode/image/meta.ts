import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ImageMeta: IPublicTypeComponentMetadata = {
  componentName: 'Image',
  title: '图片',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Image',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': '图片描述'
          },
          tip: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'crossOrigin',
            'zh-CN': '跨域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'crossOrigin',
            'zh-CN': 'crossOrigin'
          }
        },
        name: 'crossOrigin',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '空',
                value: ''
              },
              {
                label: '不包含用户凭据',
                value: 'anonymous'
              },
              {
                label: '包含用户凭据',
                value: 'use-credentials'
              }
            ],
            options: [
              {
                label: '空',
                value: ''
              },
              {
                label: '不包含用户凭据',
                value: 'anonymous'
              },
              {
                label: '包含用户凭据',
                value: 'use-credentials'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'decoding',
            'zh-CN': '解析方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'decoding',
            'zh-CN': 'decoding'
          }
        },
        name: 'decoding',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'auto'
              },
              {
                label: '异步',
                value: 'async'
              },
              {
                label: '同步',
                value: 'sync'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'auto'
              },
              {
                label: '异步',
                value: 'async'
              },
              {
                label: '同步',
                value: 'sync'
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
            'en-US': 'draggable',
            'zh-CN': '拖拽'
          },
          tip: {
            type: 'i18n',
            'en-US': 'draggable',
            'zh-CN': 'draggable'
          }
        },
        name: 'draggable',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fallback',
            'zh-CN': '加载失败占位图'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fallback',
            'zh-CN': 'fallback'
          }
        },
        name: 'fallback',
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
            'en-US': 'fit',
            'zh-CN': '填充模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fit',
            'zh-CN': 'fit'
          }
        },
        name: 'fit',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '填充',
                value: 'fill'
              },
              {
                label: '无',
                value: 'none'
              },
              {
                label: '包含',
                value: 'contain'
              },
              {
                label: '覆盖',
                value: 'cover'
              },
              {
                label: '缩小至适合大小',
                value: 'scale-down'
              }
            ],
            options: [
              {
                label: '填充',
                value: 'fill'
              },
              {
                label: '无',
                value: 'none'
              },
              {
                label: '包含',
                value: 'contain'
              },
              {
                label: '覆盖',
                value: 'cover'
              },
              {
                label: '缩小至适合大小',
                value: 'scale-down'
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
            'en-US': 'height',
            'zh-CN': '高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height | 如果传入数字则单位为 px'
          }
        },
        name: 'height',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
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
            'en-US': 'lazy',
            'zh-CN': '懒加载'
          },
          tip: {
            type: 'i18n',
            'en-US': 'lazy',
            'zh-CN': 'lazy'
          }
        },
        name: 'lazy',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': '加载方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '需要显示时',
                value: 'lazy'
              },
              {
                label: '立即加载',
                value: 'eager'
              }
            ],
            options: [
              {
                label: '需要显示时',
                value: 'lazy'
              },
              {
                label: '立即加载',
                value: 'eager'
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
            'en-US': 'onClick',
            'zh-CN': '点击时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClick',
            'zh-CN': 'onClick | (event: React.MouseEvent<HTMLImageElement, Event>) => void'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onContainerClick',
            'zh-CN': '点击容器时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onContainerClick',
            'zh-CN': 'onContainerClick'
          }
        },
        name: 'onContainerClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onError',
            'zh-CN': '加载失败时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onError',
            'zh-CN': 'onError | (event: React.SyntheticEvent<HTMLImageElement, Event>) => void'
          }
        },
        name: 'onError',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onLoad',
            'zh-CN': '加载完成时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onLoad',
            'zh-CN': 'onLoad | (event: React.SyntheticEvent<HTMLImageElement, Event>) => void'
          }
        },
        name: 'onLoad',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '加载时占位图'
          },
          tip: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
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
            'en-US': 'referrerPolicy',
            'zh-CN': '资源引用方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'referrerPolicy',
            'zh-CN': 'referrerPolicy'
          }
        },
        name: 'referrerPolicy',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '空',
                value: ''
              },
              {
                label: '无引用头',
                value: 'no-referrer'
              },
              {
                label: '降级时无引用头',
                value: 'no-referrer-when-downgrade'
              },
              {
                label: '来源',
                value: 'origin'
              },
              {
                label: '跨域时原始来源',
                value: 'origin-when-cross-origin'
              },
              {
                label: '同源',
                value: 'same-origin'
              },
              {
                label: '严格来源',
                value: 'strict-origin'
              },
              {
                label: '跨域时严格来源',
                value: 'strict-origin-when-cross-origin'
              },
              {
                label: '不安全的URL',
                value: 'unsafe-url'
              }
            ],
            options: [
              {
                label: '空',
                value: ''
              },
              {
                label: '无引用头',
                value: 'no-referrer'
              },
              {
                label: '降级时无引用头',
                value: 'no-referrer-when-downgrade'
              },
              {
                label: '来源',
                value: 'origin'
              },
              {
                label: '跨域时原始来源',
                value: 'origin-when-cross-origin'
              },
              {
                label: '同源',
                value: 'same-origin'
              },
              {
                label: '严格来源',
                value: 'strict-origin'
              },
              {
                label: '跨域时严格来源',
                value: 'strict-origin-when-cross-origin'
              },
              {
                label: '不安全的URL',
                value: 'unsafe-url'
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
            'en-US': 'sizes',
            'zh-CN': '图标尺寸'
          },
          tip: {
            type: 'i18n',
            'en-US': 'sizes',
            'zh-CN': 'sizes'
          }
        },
        name: 'sizes',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '资源地址'
          },
          tip: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': 'src'
          }
        },
        name: 'src',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'srcSet',
            'zh-CN': '资源地址集'
          },
          tip: {
            type: 'i18n',
            'en-US': 'srcSet',
            'zh-CN': 'srcSet'
          }
        },
        name: 'srcSet',
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
            'en-US': 'useMap',
            'zh-CN': '热区'
          },
          tip: {
            type: 'i18n',
            'en-US': 'useMap',
            'zh-CN': 'useMap | 常配合 map 标签使用'
          }
        },
        name: 'useMap',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': '宽度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width | 如果传入数字则单位为 px'
          }
        },
        name: 'width',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
                initialValue: undefined
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
    component: {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '图片',
    screenshot: '',
    schema: {
      componentName: 'Image',
      props: {}
    }
  }
];

export default {
  ...ImageMeta,
  snippets
};
