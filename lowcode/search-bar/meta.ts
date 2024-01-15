import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SearchBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'SearchBar',
  title: '搜索框',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SearchBar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'clearOnCancel',
            'zh-CN': '点击取消按钮时清空'
          },
          tip: {
            type: 'i18n',
            'en-US': 'clearOnCancel',
            'zh-CN': 'clearOnCancel'
          }
        },
        name: 'clearOnCancel',
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
        setter: ['StringSetter', 'SlotSetter']
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
            'en-US': 'onCancel',
            'zh-CN': '点击取消按钮时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onCancel',
            'zh-CN': 'onCancel | () => void'
          }
        },
        name: 'onCancel',
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
            'en-US': 'onSearch',
            'zh-CN': '输入框回车时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onSearch',
            'zh-CN': 'onSearch | (value: string) => void'
          }
        },
        name: 'onSearch',
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
            'en-US': 'showCancelButton',
            'zh-CN': '取消按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showCancelButton',
            'zh-CN': 'showCancelButton | (focus: boolean, value: string) => boolean)'
          }
        },
        name: 'showCancelButton',
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
        setter: 'StringSetter'
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
    title: '搜索框',
    screenshot: '',
    schema: {
      componentName: 'SearchBar',
      props: {}
    }
  }
];

export default {
  ...SearchBarMeta,
  snippets
};
