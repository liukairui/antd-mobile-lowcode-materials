import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SliderMeta: IPublicTypeComponentMetadata = {
  componentName: 'Slider',
  title: '滑动输入条',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Slider',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
          componentName: 'MixedSetter',
          props: {
            setters: ['NumberSetter', 'JsonSetter']
          }
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
        setter: 'BoolSetter'
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
            'zh-CN': 'icon'
          }
        },
        name: 'icon',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'marks',
            'zh-CN': '刻度标记'
          },
          tip: {
            type: 'i18n',
            'en-US': 'marks',
            'zh-CN': 'marks'
          }
        },
        name: 'marks'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': '最大值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': 'max'
          }
        },
        name: 'max',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': '最小值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': 'min'
          }
        },
        name: 'min',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onAfterChange',
            'zh-CN': '放开滑块时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onAfterChange',
            'zh-CN': 'onAfterChange | (value: number | [number, number]) => void'
          }
        },
        name: 'onAfterChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': '值变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange | (value: number | [number, number]) => void'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'popover',
            'zh-CN': '悬浮提示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'popover',
            'zh-CN': 'popover | (value: number) => ReactNode'
          }
        },
        name: 'popover',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'range',
            'zh-CN': '范围'
          },
          tip: {
            type: 'i18n',
            'en-US': 'range',
            'zh-CN': 'range'
          }
        },
        name: 'range',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'residentPopover',
            'zh-CN': '悬浮提示常显'
          },
          tip: {
            type: 'i18n',
            'en-US': 'residentPopover',
            'zh-CN': 'residentPopover'
          }
        },
        name: 'residentPopover',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': '步长'
          },
          tip: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': 'step | 取值必须大于 0，并且 (max - min) 可被 step 整除。当 marks 不为空对象时，step 的配置失效'
          }
        },
        name: 'step',
        setter: 'NumberSetter'
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
            'en-US': 'ticks',
            'zh-CN': '刻度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'ticks',
            'zh-CN': 'ticks'
          }
        },
        name: 'ticks',
        setter: 'BoolSetter'
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
          componentName: 'MixedSetter',
          props: {
            setters: [
              'NumberSetter',
              {
                componentName: 'MixedSetter',
                props: {}
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
    title: '滑动输入条',
    screenshot: '',
    schema: {
      componentName: 'Slider',
      props: {}
    }
  }
];

export default {
  ...SliderMeta,
  snippets
};
