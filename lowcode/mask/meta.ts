import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MaskMeta: IPublicTypeComponentMetadata = {
  componentName: 'Mask',
  title: '背景蒙层',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Mask',
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
            'en-US': 'afterShow',
            'zh-CN': '完全展示后触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'afterShow',
            'zh-CN': 'afterShow | () => void'
          }
        },
        name: 'afterShow',
        setter: {
          componentName: 'FunctionSetter'
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: '白色',
                      value: 'white'
                    },
                    {
                      label: '黑色',
                      value: 'black'
                    }
                  ],
                  options: [
                    {
                      label: '白色',
                      value: 'white'
                    },
                    {
                      label: '黑色',
                      value: 'black'
                    }
                  ]
                },
                initialValue: undefined
              },
              {
                componentName: 'StringSetter',
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
            'en-US': 'destroyOnClose',
            'zh-CN': '不显示时销毁'
          },
          tip: {
            type: 'i18n',
            'en-US': 'destroyOnClose',
            'zh-CN': 'destroyOnClose'
          }
        },
        name: 'destroyOnClose',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disableBodyScroll',
            'zh-CN': '蒙层禁止下方滚动'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disableBodyScroll',
            'zh-CN': 'disableBodyScroll'
          }
        },
        name: 'disableBodyScroll',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': '强制渲染'
          },
          tip: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender | 被隐藏时渲染 DOM 结构'
          }
        },
        name: 'forceRender',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
            'en-US': 'onMaskClick',
            'zh-CN': '点击蒙层时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMaskClick',
            'zh-CN': 'onMaskClick | () => void'
          }
        },
        name: 'onMaskClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'opacity',
            'zh-CN': '透明度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'opacity',
            'zh-CN': 'opacity'
          }
        },
        name: 'opacity',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: '默认',
                      value: 'default'
                    },
                    {
                      label: '浅',
                      value: 'thin'
                    },
                    {
                      label: '深',
                      value: 'thick'
                    }
                  ],
                  options: [
                    {
                      label: '默认',
                      value: 'default'
                    },
                    {
                      label: '浅',
                      value: 'thin'
                    },
                    {
                      label: '深',
                      value: 'thick'
                    }
                  ]
                },
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
            'en-US': 'stopPropagation',
            'zh-CN': '阻止冒泡'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stopPropagation',
            'zh-CN': 'stopPropagation'
          }
        },
        name: 'stopPropagation',
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
    title: '背景蒙层',
    screenshot: '',
    schema: {
      componentName: 'Mask',
      props: {}
    }
  }
];

export default {
  ...MaskMeta,
  snippets
};
