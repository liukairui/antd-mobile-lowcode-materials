import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Button',
  title: '按钮',
  category: '通用',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Button',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': '块级元素'
          },
          tip: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': 'block'
          }
        },
        name: 'block',
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
            'zh-CN': '颜色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': 'color'
          }
        },
        name: 'color',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '主要',
                value: 'primary'
              },
              {
                label: '成功',
                value: 'success'
              },
              {
                label: '警告',
                value: 'warning'
              },
              {
                label: '危险',
                value: 'danger'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '主要',
                value: 'primary'
              },
              {
                label: '成功',
                value: 'success'
              },
              {
                label: '警告',
                value: 'warning'
              },
              {
                label: '危险',
                value: 'danger'
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
            'en-US': 'disabled',
            'zh-CN': '禁用'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fill',
            'zh-CN': '填充模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fill',
            'zh-CN': 'fill'
          }
        },
        name: 'fill',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '实心',
                value: 'solid'
              },
              {
                label: '轮廓',
                value: 'outline'
              }
            ],
            options: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '实心',
                value: 'solid'
              },
              {
                label: '轮廓',
                value: 'outline'
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
            'en-US': 'loading',
            'zh-CN': '加载状态'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
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
            'en-US': 'loadingIcon',
            'zh-CN': '加载图标'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadingIcon',
            'zh-CN': 'loadingIcon'
          }
        },
        name: 'loadingIcon',
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
            'en-US': 'loadingText',
            'zh-CN': '加载文字'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadingText',
            'zh-CN': 'loadingText'
          }
        },
        name: 'loadingText',
        setter: {
          componentName: 'StringSetter',
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
            'zh-CN': 'onClick | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'
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
            'en-US': 'onMouseDown',
            'zh-CN': '鼠标按下时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseDown',
            'zh-CN': 'onMouseDown'
          }
        },
        name: 'onMouseDown',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onMouseUp',
            'zh-CN': '鼠标松开时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMouseUp',
            'zh-CN': 'onMouseUp'
          }
        },
        name: 'onMouseUp',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTouchEnd',
            'zh-CN': '触摸结束时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onTouchEnd',
            'zh-CN': 'onTouchEnd'
          }
        },
        name: 'onTouchEnd',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onTouchStart',
            'zh-CN': '触摸开始时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onTouchStart',
            'zh-CN': 'onTouchStart'
          }
        },
        name: 'onTouchStart',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'shape',
            'zh-CN': '形状'
          },
          tip: {
            type: 'i18n',
            'en-US': 'shape',
            'zh-CN': 'shape'
          }
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '胶囊',
                value: 'rounded'
              },
              {
                label: '矩形',
                value: 'rectangular'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '胶囊',
                value: 'rounded'
              },
              {
                label: '矩形',
                value: 'rectangular'
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
            'en-US': 'size',
            'zh-CN': '尺寸'
          },
          tip: {
            type: 'i18n',
            'en-US': 'size',
            'zh-CN': 'size'
          }
        },
        name: 'size',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '小',
                value: 'small'
              },
              {
                label: '中',
                value: 'middle'
              },
              {
                label: '大',
                value: 'large'
              },
              {
                label: '迷你',
                value: 'mini'
              }
            ],
            options: [
              {
                label: '小',
                value: 'small'
              },
              {
                label: '中',
                value: 'middle'
              },
              {
                label: '大',
                value: 'large'
              },
              {
                label: '迷你',
                value: 'mini'
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
            'en-US': 'type',
            'zh-CN': '类型'
          },
          tip: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': 'type'
          }
        },
        name: 'type',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '标准',
                value: 'button'
              },
              {
                label: '提交',
                value: 'submit'
              },
              {
                label: '重置',
                value: 'reset'
              }
            ],
            options: [
              {
                label: '标准',
                value: 'button'
              },
              {
                label: '提交',
                value: 'submit'
              },
              {
                label: '重置',
                value: 'reset'
              }
            ]
          },
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
    title: '按钮',
    screenshot: '',
    schema: {
      componentName: 'Button',
      props: {}
    }
  }
];

export default {
  ...ButtonMeta,
  snippets
};
