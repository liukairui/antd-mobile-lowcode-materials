import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormItem',
  title: '表单项',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'FormItem',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': '箭头'
          },
          tip: {
            type: 'i18n',
            'en-US': 'arrow',
            'zh-CN': 'arrow | 支持传入 ReactNode 来自定义图标，默认和 clickable 的值保持一致'
          }
        },
        name: 'arrow',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'SlotSetter']
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'childElementPosition',
            'zh-CN': '控件位置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'childElementPosition',
            'zh-CN': 'childElementPosition'
          }
        },
        name: 'childElementPosition',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '普通',
                value: 'normal'
              },
              {
                label: '右侧',
                value: 'right'
              }
            ],
            options: [
              {
                label: '普通',
                value: 'normal'
              },
              {
                label: '右侧',
                value: 'right'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'clickable',
            'zh-CN': '点击效果'
          },
          tip: {
            type: 'i18n',
            'en-US': 'clickable',
            'zh-CN': 'clickable | 当 onClick 属性存在时，默认为 true，否则默认为 false'
          }
        },
        name: 'clickable',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dependencies',
            'zh-CN': '依赖字段'
          },
          tip: {
            type: 'i18n',
            'en-US': 'dependencies',
            'zh-CN': 'dependencies'
          }
        },
        name: 'dependencies',
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
            'en-US': 'description',
            'zh-CN': '描述区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
        setter: ['StringSetter', 'SlotSetter']
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
            'en-US': 'extra',
            'zh-CN': '额外区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra'
          }
        },
        name: 'extra',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueFromEvent',
            'zh-CN': '从 Event 获取控件值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getValueFromEvent',
            'zh-CN': 'getValueFromEvent | (..args: any[]) => any'
          }
        },
        name: 'getValueFromEvent',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getValueProps',
            'zh-CN': '从表单值获取控件值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getValueProps',
            'zh-CN': 'getValueProps | (value) => any'
          }
        },
        name: 'getValueProps',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': '错误提示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': 'hasFeedback'
          }
        },
        name: 'hasFeedback',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': '提示文本区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'help',
            'zh-CN': 'help'
          }
        },
        name: 'help',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hidden',
            'zh-CN': '隐藏'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hidden',
            'zh-CN': 'hidden'
          }
        },
        name: 'hidden',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialValue',
            'zh-CN': '默认值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'initialValue',
            'zh-CN': 'initialValue | 如果与 Form 的 initialValues 冲突则以 Form 为准'
          }
        },
        name: 'initialValue',
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
            'en-US': 'label',
            'zh-CN': '标签区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': 'label'
          }
        },
        name: 'label',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': '布局'
          },
          tip: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ],
            options: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'messageVariables',
            'zh-CN': '错误提示模板变量'
          },
          tip: {
            type: 'i18n',
            'en-US': 'messageVariables',
            'zh-CN': 'messageVariables'
          }
        },
        name: 'messageVariables',
        setter: 'JsonSetter'
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter'
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'noStyle',
            'zh-CN': '无样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'noStyle',
            'zh-CN': 'noStyle | 用于仅需使用表单项各类功能的场景'
          }
        },
        name: 'noStyle',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'normalize',
            'zh-CN': '从控件值获取表单值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'normalize | 不支持异步 | (value, prevValue, prevValues) => any',
            'zh-CN': 'normalize'
          }
        },
        name: 'normalize',
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
            'en-US': 'onClick | 能获取控件 Ref',
            'zh-CN': 'onClick | (e:React.MouseEvent, widgetRef: React.MutableRefObject<any>) => void'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': '字段被删除时保留值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          }
        },
        name: 'preserve',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': '必选'
          },
          tip: {
            type: 'i18n',
            'en-US': 'required',
            'zh-CN': 'required | 仅控制外观，不包含校验逻辑，如 rules 中有 required 则会覆盖此项'
          }
        },
        name: 'required',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rules',
            'zh-CN': '校验规则'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rules',
            'zh-CN': 'rules'
          }
        },
        name: 'rules',
        setter: 'JsonSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'shouldUpdate',
            'zh-CN': '自定义更新'
          },
          tip: {
            type: 'i18n',
            'en-US': 'shouldUpdate',
            'zh-CN': 'shouldUpdate | 当设为 true 时，表单值的任何变化都将更新控件区域 | (prevValue, curValue) => boolean'
          }
        },
        name: 'shouldUpdate',
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
            'en-US': 'trigger',
            'zh-CN': '表单值更新时机'
          },
          tip: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateFirst',
            'zh-CN': '短路校验'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateFirst',
            'zh-CN': 'validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验'
          }
        },
        name: 'validateFirst',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'parallel',
                      value: 'parallel'
                    }
                  ],
                  options: [
                    {
                      label: 'parallel',
                      value: 'parallel'
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': '触发验证时机'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          }
        },
        name: 'validateTrigger',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter'
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'valuePropName',
            'zh-CN': '获取表单值的控件属性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'valuePropName',
            'zh-CN': 'valuePropName | 如 Switch 的是 checked，该属性为 getValueProps 的封装，自定义 getValueProps 后会失效'
          }
        },
        name: 'valuePropName',
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
    title: '表单项',
    screenshot: '',
    schema: {
      componentName: 'FormItem',
      props: {}
    }
  }
];

export default {
  ...FormItemMeta,
  snippets
};
