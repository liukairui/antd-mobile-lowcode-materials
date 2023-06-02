import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DatePickerMeta: IPublicTypeComponentMetadata = {
  componentName: 'DatePicker',
  title: '日期选择器',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'DatePicker',
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
            'en-US': 'cancelText',
            'zh-CN': '取消按钮区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'cancelText',
            'zh-CN': 'cancelText | 如果设置为空则不显示取消按钮'
          }
        },
        name: 'cancelText',
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
            'en-US': 'confirmText',
            'zh-CN': '确认按钮区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'confirmText',
            'zh-CN': 'confirmText'
          }
        },
        name: 'confirmText',
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
            'en-US': 'defaultValue',
            'zh-CN': '默认值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
        setter: {
          componentName: 'VariableSetter'
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
            'en-US': 'filter',
            'zh-CN': '可选时间筛选函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'filter',
            'zh-CN': 'filter | Record<Precision, (val: number, extend: {date: Date}) => boolean>'
          }
        },
        name: 'filter',
        setter: {
          componentName: 'VariableSetter'
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
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadingContent',
            'zh-CN': '加载状态展示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadingContent',
            'zh-CN': 'loadingContent'
          }
        },
        name: 'loadingContent',
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
            'en-US': 'max',
            'zh-CN': '最晚时间'
          },
          tip: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': 'max'
          }
        },
        name: 'max',
        setter: {
          componentName: 'VariableSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': '最早时间'
          },
          tip: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          }
        },
        name: 'min',
        setter: {
          componentName: 'VariableSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mouseWheel',
            'zh-CN': '允许鼠标滚轮操作'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mouseWheel',
            'zh-CN': 'mouseWheel'
          }
        },
        name: 'mouseWheel',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': '取消时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': 'onCancel | () => void'
          }
        },
        name: 'onCancel',
        setter: {
          componentName: 'FunctionSetter'
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
            'en-US': 'onConfirm',
            'zh-CN': '确认时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onConfirm',
            'zh-CN': 'onConfirm | (value: PickerDate) => void'
          }
        },
        name: 'onConfirm',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': '选项改变时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect | (value: PickerDate) => void'
          }
        },
        name: 'onSelect',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': '精度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'precision',
            'zh-CN': 'precision'
          }
        },
        name: 'precision',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '月',
                value: 'month'
              },
              {
                label: '周',
                value: 'week'
              },
              {
                label: '年',
                value: 'year'
              },
              {
                label: '天',
                value: 'day'
              },
              {
                label: '时',
                value: 'hour'
              },
              {
                label: '分',
                value: 'minute'
              },
              {
                label: '秒',
                value: 'second'
              },
              {
                label: '星期',
                value: 'week-day'
              }
            ],
            options: [
              {
                label: '月',
                value: 'month'
              },
              {
                label: '周',
                value: 'week'
              },
              {
                label: '年',
                value: 'year'
              },
              {
                label: '天',
                value: 'day'
              },
              {
                label: '时',
                value: 'hour'
              },
              {
                label: '分',
                value: 'minute'
              },
              {
                label: '秒',
                value: 'second'
              },
              {
                label: '星期',
                value: 'week-day'
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
            'en-US': 'render',
            'zh-CN': '子元素渲染函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'render',
            'zh-CN': 'render | (value: PickerDate | null, actions: PickerActions) => ReactNode'
          }
        },
        name: 'render',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderLabel',
            'zh-CN': '列标签自定义渲染函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'renderLabel',
            'zh-CN': "renderLabel | (type: Precision | 'now', data: number) => ReactNode"
          }
        },
        name: 'renderLabel',
        setter: {
          componentName: 'FunctionSetter'
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
            'en-US': 'tillNow',
            'zh-CN': '至今'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tillNow',
            'zh-CN': 'tillNow'
          }
        },
        name: 'tillNow',
        setter: {
          componentName: 'BoolSetter',
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
            'zh-CN': 'title'
          }
        },
        name: 'title',
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
            'en-US': 'value',
            'zh-CN': '当前值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
        setter: {
          componentName: 'VariableSetter'
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
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '日期选择器',
    screenshot: '',
    schema: {
      componentName: 'DatePicker',
      props: {}
    }
  }
];

export default {
  ...DatePickerMeta,
  snippets
};
