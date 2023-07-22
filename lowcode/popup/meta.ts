import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PopupMeta: IPublicTypeComponentMetadata = {
  componentName: 'Popup',
  title: {
    type: 'i18n',
    'en-US': 'Popup',
    'zh-CN': '弹出层'
  },
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Popup',
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
            'en-US': 'bodyClassName',
            'zh-CN': '内容区域类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bodyClassName',
            'zh-CN': 'bodyClassName'
          }
        },
        name: 'bodyClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bodyStyle',
            'zh-CN': '内容区域样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bodyStyle',
            'zh-CN': 'bodyStyle'
          }
        },
        name: 'bodyStyle',
        setter: {
          componentName: 'JsonSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeOnMaskClick',
            'zh-CN': '点击蒙层后关闭'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closeOnMaskClick',
            'zh-CN': 'closeOnMaskClick'
          }
        },
        name: 'closeOnMaskClick',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
            'en-US': 'mask',
            'zh-CN': '蒙层'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mask',
            'zh-CN': 'mask'
          }
        },
        name: 'mask',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskClassName',
            'zh-CN': '蒙层类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskClassName',
            'zh-CN': 'maskClassName'
          }
        },
        name: 'maskClassName',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maskStyle',
            'zh-CN': '蒙层样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maskStyle',
            'zh-CN': 'maskStyle'
          }
        },
        name: 'maskStyle',
        setter: {
          componentName: 'JsonSetter'
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
            'en-US': 'onMaskClick',
            'zh-CN': '点击蒙层时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onMaskClick',
            'zh-CN':
              'onMaskClick | (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void'
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
            'en-US': 'position',
            'zh-CN': '位置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'position',
            'zh-CN': 'position'
          }
        },
        name: 'position',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              },
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
              }
            ],
            options: [
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              },
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
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
            'en-US': 'showCloseButton',
            'zh-CN': '关闭按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showCloseButton',
            'zh-CN': 'showCloseButton'
          }
        },
        name: 'showCloseButton',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
    title: '弹出层',
    screenshot: '',
    schema: {
      componentName: 'Popup',
      props: {}
    }
  }
];

export default {
  ...PopupMeta,
  snippets
};
