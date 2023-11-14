import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const InputMeta: IPublicTypeComponentMetadata = {
  componentName: 'Input',
  title: '输入框',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Input',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoCapitalize',
            'zh-CN': '自动大写'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoCapitalize',
            'zh-CN': 'autoCapitalize'
          }
        },
        name: 'autoCapitalize',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '句首大写',
                value: 'sentences'
              },
              {
                label: '词首大写',
                value: 'words'
              },
              {
                label: '全部大写',
                value: 'characters'
              }
            ],
            options: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '句首大写',
                value: 'sentences'
              },
              {
                label: '词首大写',
                value: 'words'
              },
              {
                label: '全部大写',
                value: 'characters'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': '自动完成'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoComplete',
            'zh-CN': 'autoComplete'
          }
        },
        name: 'autoComplete',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoCorrect',
            'zh-CN': '自动更正'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoCorrect',
            'zh-CN': 'autoCorrect | 仅 Safari 支持'
          }
        },
        name: 'autoCorrect',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '开启',
                value: 'on'
              },
              {
                label: '关闭',
                value: 'off'
              }
            ],
            options: [
              {
                label: '开启',
                value: 'on'
              },
              {
                label: '关闭',
                value: 'off'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': '自动获取焦点'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus'
          }
        },
        name: 'autoFocus',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'clearable',
            'zh-CN': '清除按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'clearable',
            'zh-CN': 'clearable'
          }
        },
        name: 'clearable',
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
        setter: 'StringSetter'
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
            'en-US': 'enterKeyHint',
            'zh-CN': '回车键文本'
          },
          tip: {
            type: 'i18n',
            'en-US': 'enterKeyHint',
            'zh-CN': 'enterKeyHint | 移动端回车键提示文本'
          }
        },
        name: 'enterKeyHint',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '搜索',
                value: 'search'
              },
              {
                label: '回车',
                value: 'enter'
              },
              {
                label: '完成',
                value: 'done'
              },
              {
                label: '打开',
                value: 'go'
              },
              {
                label: '继续',
                value: 'next'
              },
              {
                label: '后退',
                value: 'previous'
              },
              {
                label: '发送',
                value: 'send'
              }
            ],
            options: [
              {
                label: '搜索',
                value: 'search'
              },
              {
                label: '回车',
                value: 'enter'
              },
              {
                label: '完成',
                value: 'done'
              },
              {
                label: '打开',
                value: 'go'
              },
              {
                label: '继续',
                value: 'next'
              },
              {
                label: '后退',
                value: 'previous'
              },
              {
                label: '发送',
                value: 'send'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'ID'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id | 常配合 label 使用'
          }
        },
        name: 'id',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'inputMode',
            'zh-CN': '虚拟键盘类型'
          },
          tip: {
            type: 'i18n',
            'en-US': 'inputMode',
            'zh-CN': 'inputMode'
          }
        },
        name: 'inputMode',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '文本',
                value: 'text'
              },
              {
                label: '电话',
                value: 'tel'
              },
              {
                label: '网址',
                value: 'url'
              },
              {
                label: '电子邮件',
                value: 'email'
              },
              {
                label: '整数',
                value: 'numeric'
              },
              {
                label: '小数',
                value: 'decimal'
              },
              {
                label: '搜索',
                value: 'search'
              }
            ],
            options: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '文本',
                value: 'text'
              },
              {
                label: '电话',
                value: 'tel'
              },
              {
                label: '网址',
                value: 'url'
              },
              {
                label: '电子邮件',
                value: 'email'
              },
              {
                label: '整数',
                value: 'numeric'
              },
              {
                label: '小数',
                value: 'decimal'
              },
              {
                label: '搜索',
                value: 'search'
              }
            ]
          }
        }
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
            'zh-CN': 'max | 仅在 type 为 number 时生效'
          }
        },
        name: 'max',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': '最大长度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
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
            'zh-CN': 'min | 仅在 type 为 number 时生效'
          }
        },
        name: 'min',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': '最小长度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'minLength',
            'zh-CN': 'minLength'
          }
        },
        name: 'minLength',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': '表单键'
          },
          tip: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
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
            'zh-CN': 'onBlur | (this: GlobalEventHandlers, ev: FocusEvent) => void'
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
            'zh-CN': 'onChange | (value: string) => void'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onClear',
            'zh-CN': '清除时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onClear',
            'zh-CN': 'onClear | () => void'
          }
        },
        name: 'onClear',
        setter: 'FunctionSetter'
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
            'zh-CN': 'onClick | (this: GlobalEventHandlers, ev: MouseEvent) => void'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCompositionEnd',
            'zh-CN': '输入法结束输入时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCompositionEnd',
            'zh-CN': 'onCompositionEnd | (this: GlobalEventHandlers, ev: CompositionEvent) => void'
          }
        },
        name: 'onCompositionEnd',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onCompositionStart',
            'zh-CN': '输入法开始输入时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCompositionStart',
            'zh-CN': 'onCompositionStart | (this: GlobalEventHandlers, ev: CompositionEvent) => void'
          }
        },
        name: 'onCompositionStart',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onEnterPress',
            'zh-CN': '按下回车键时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onEnterPress',
            'zh-CN': 'onEnterPress'
          }
        },
        name: 'onEnterPress',
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
            'zh-CN': 'onFocus | (this: GlobalEventHandlers, ev: FocusEvent) => void'
          }
        },
        name: 'onFocus',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': '按下键盘时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onKeyDown',
            'zh-CN': 'onKeyDown | (this: GlobalEventHandlers, ev: KeyboardEvent) => void'
          }
        },
        name: 'onKeyDown',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onKeyUp',
            'zh-CN': '释放键盘时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onKeyUp',
            'zh-CN': 'onKeyUp | (this: GlobalEventHandlers, ev: KeyboardEvent) => void'
          }
        },
        name: 'onKeyUp',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onlyShowClearWhenFocus',
            'zh-CN': '仅聚焦时显示清除按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onlyShowClearWhenFocus',
            'zh-CN': 'onlyShowClearWhenFocus'
          }
        },
        name: 'onlyShowClearWhenFocus',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pattern',
            'zh-CN': '正则校验'
          },
          tip: {
            type: 'i18n',
            'en-US': 'pattern',
            'zh-CN': 'pattern'
          }
        },
        name: 'pattern',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '占位文字'
          },
          tip: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': '只读'
          },
          tip: {
            type: 'i18n',
            'en-US': 'readOnly',
            'zh-CN': 'readOnly'
          }
        },
        name: 'readOnly',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': '抽象角色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'role',
            'zh-CN': 'role | 不推荐使用'
          }
        },
        name: 'role',
        setter: 'StringSetter'
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
            'zh-CN': 'step'
          }
        },
        name: 'step',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['StringSetter', 'NumberSetter']
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
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '按钮',
                value: 'button'
              },
              {
                label: '复选框',
                value: 'checkbox'
              },
              {
                label: '颜色选择器',
                value: 'color'
              },
              {
                label: '日期选择器',
                value: 'date'
              },
              {
                label: '日期时间选择器',
                value: 'datetime-local'
              },
              {
                label: '邮箱地址输入框',
                value: 'email'
              },
              {
                label: '文件选择器',
                value: 'file'
              },
              {
                label: '隐藏域',
                value: 'hidden'
              },
              {
                label: '图像按钮',
                value: 'image'
              },
              {
                label: '年月选择器',
                value: 'month'
              },
              {
                label: '数字输入框',
                value: 'number'
              },
              {
                label: '密码输入框',
                value: 'password'
              },
              {
                label: '单选按钮',
                value: 'radio'
              },
              {
                label: '范围选择器',
                value: 'range'
              },
              {
                label: '重置按钮',
                value: 'reset'
              },
              {
                label: '搜索框',
                value: 'search'
              },
              {
                label: '提交按钮',
                value: 'submit'
              },
              {
                label: '电话号码输入框',
                value: 'tel'
              },
              {
                label: '文本框',
                value: 'text'
              },
              {
                label: '时间选择器',
                value: 'time'
              },
              {
                label: 'URL输入框',
                value: 'url'
              },
              {
                label: '周选择器',
                value: 'week'
              }
            ],
            options: [
              {
                label: '按钮',
                value: 'button'
              },
              {
                label: '复选框',
                value: 'checkbox'
              },
              {
                label: '颜色选择器',
                value: 'color'
              },
              {
                label: '日期选择器',
                value: 'date'
              },
              {
                label: '日期时间选择器',
                value: 'datetime-local'
              },
              {
                label: '邮箱地址输入框',
                value: 'email'
              },
              {
                label: '文件选择器',
                value: 'file'
              },
              {
                label: '隐藏域',
                value: 'hidden'
              },
              {
                label: '图像按钮',
                value: 'image'
              },
              {
                label: '年月选择器',
                value: 'month'
              },
              {
                label: '数字输入框',
                value: 'number'
              },
              {
                label: '密码输入框',
                value: 'password'
              },
              {
                label: '单选按钮',
                value: 'radio'
              },
              {
                label: '范围选择器',
                value: 'range'
              },
              {
                label: '重置按钮',
                value: 'reset'
              },
              {
                label: '搜索框',
                value: 'search'
              },
              {
                label: '提交按钮',
                value: 'submit'
              },
              {
                label: '电话号码输入框',
                value: 'tel'
              },
              {
                label: '文本框',
                value: 'text'
              },
              {
                label: '时间选择器',
                value: 'time'
              },
              {
                label: 'URL输入框',
                value: 'url'
              },
              {
                label: '周选择器',
                value: 'week'
              }
            ]
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
        setter: 'StringSetter'
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
    title: '输入框',
    screenshot: '',
    schema: {
      componentName: 'Input',
      props: {}
    }
  }
];

export default {
  ...InputMeta,
  snippets
};
