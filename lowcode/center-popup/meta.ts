import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CenterPopupMeta: IPublicTypeComponentMetadata = {
  componentName: 'CenterPopup',
  title: '中央弹出层',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'CenterPopup',
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
        setter: 'FunctionSetter'
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
        setter: 'StringSetter'
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
        setter: 'JsonSetter'
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
        setter: 'BoolSetter'
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
        setter: 'BoolSetter'
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
        setter: 'BoolSetter'
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
        setter: 'BoolSetter'
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
        setter: 'BoolSetter'
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
        setter: 'StringSetter'
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
        setter: 'JsonSetter'
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
        setter: 'FunctionSetter'
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
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': '角色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': 'role | 请勿使用，未知属性，文档中未标明但存在于类型声明中'
          }
        },
        name: 'role',
        setter: 'StringSetter'
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
        setter: 'BoolSetter'
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
              componentName: 'StringSetter'
            }
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
    title: '中央弹出层',
    screenshot: '',
    schema: {
      componentName: 'CenterPopup',
      props: {}
    }
  }
];

export default {
  ...CenterPopupMeta,
  snippets
};
