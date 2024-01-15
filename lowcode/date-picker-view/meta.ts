import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DatePickerViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'DatePickerView',
  title: '日期选择器视图',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'DatePickerView',
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
        name: 'defaultValue'
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
        name: 'filter'
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
        setter: ['StringSetter', 'SlotSetter']
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
        name: 'max'
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
        name: 'min'
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
          }
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
        setter: [
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              params: ['type', 'data']
            }
          },
          'FunctionSetter'
        ]
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
        name: 'value'
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
    title: '日期选择器视图',
    screenshot: '',
    schema: {
      componentName: 'DatePickerView',
      props: {}
    }
  }
];

export default {
  ...DatePickerViewMeta,
  snippets
};
