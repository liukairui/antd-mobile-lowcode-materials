import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CascadePickerViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'CascadePickerView',
  title: '级联选择器视图',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'CascadePickerView',
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
        setter: 'BoolSetter'
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
        setter: 'SlotSetter'
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
        setter: 'BoolSetter'
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
            'zh-CN': 'onChange | (value: PickerValue[], extend: PickerValueExtend) => void'
          }
        },
        name: 'onChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': '选项'
          },
          tip: {
            type: 'i18n',
            'en-US': 'options',
            'zh-CN': 'options'
          }
        },
        name: 'options'
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
            'zh-CN': 'renderLabel | 默认值为 (item) => item.label | (item: PickerColumnItem) => ReactNode'
          }
        },
        name: 'renderLabel',
        setter: 'FunctionSetter'
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
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter'
            }
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
    title: '级联选择器视图',
    screenshot: '',
    schema: {
      componentName: 'CascadePickerView',
      props: {}
    }
  }
];

export default {
  ...CascadePickerViewMeta,
  snippets
};
