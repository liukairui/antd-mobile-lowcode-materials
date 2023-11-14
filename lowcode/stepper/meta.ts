import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StepperMeta: IPublicTypeComponentMetadata = {
  componentName: 'Stepper',
  title: '步进器',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Stepper',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowEmpty',
            'zh-CN': '允许为空'
          },
          tip: {
            type: 'i18n',
            'en-US': 'allowEmpty',
            'zh-CN': 'allowEmpty'
          }
        },
        name: 'allowEmpty',
        setter: 'BoolSetter'
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
          componentName: 'MixedSetter',
          props: {
            setters: ['NumberSetter', 'StringSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'digits',
            'zh-CN': '小数点后位数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'digits',
            'zh-CN': 'digits | 设置为 0 表示格式化到整数。配置 formatter 时展示会以 formatter 为准'
          }
        },
        name: 'digits',
        setter: 'NumberSetter'
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
            'en-US': 'formatter',
            'zh-CN': '展示内容格式化函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'formatter',
            'zh-CN': 'formatter | (value?: number) => string'
          }
        },
        name: 'formatter',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['FunctionSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inputReadOnly',
            'zh-CN': '输入框只读'
          },
          tip: {
            type: 'i18n',
            'en-US': 'inputReadOnly',
            'zh-CN': 'inputReadOnly'
          }
        },
        name: 'inputReadOnly',
        setter: 'BoolSetter'
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['NumberSetter', 'StringSetter']
          }
        }
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['NumberSetter', 'StringSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': '失去焦点时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBlur',
            'zh-CN': 'onBlur | (e: React.FocusEvent<HTMLInputElement>) => void'
          }
        },
        name: 'onBlur',
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
            'zh-CN': 'onChange | (value: number | string | null) => void'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': '获取焦点时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFocus',
            'zh-CN': 'onFocus | (e: React.FocusEvent<HTMLInputElement>) => void'
          }
        },
        name: 'onFocus',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'parser',
            'zh-CN': '输入内容解析函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'parser',
            'zh-CN': 'parser | 将输入解析为对应数字，一般配合 formatter 使用 | (text: string) => number'
          }
        },
        name: 'parser',
        setter: 'FunctionSetter'
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
            'zh-CN': 'step | 接受小数'
          }
        },
        name: 'step',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stringMode',
            'zh-CN': '字符串模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stringMode',
            'zh-CN':
              'stringMode | 开启后支持高精度小数。开启后 defaultValue、value、min、max、onChange 等都将转换为 string 类型，【请手动切换设置器类型为 StringSetter，自动切换功能将后续优化】'
          }
        },
        name: 'stringMode',
        setter: 'BoolSetter'
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
            setters: ['NumberSetter', 'StringSetter']
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
    title: '步进器',
    screenshot: '',
    schema: {
      componentName: 'Stepper',
      props: {}
    }
  }
];

export default {
  ...StepperMeta,
  snippets
};
