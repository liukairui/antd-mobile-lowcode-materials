import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const StepMeta: IPublicTypeComponentMetadata = {
  componentName: 'Step',
  title: '步骤',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Step',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
            'en-US': 'status',
            'zh-CN': '状态'
          },
          tip: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status | 当不配置该属性时，会使用 Steps 的 current 来自动指定状态；如果该属性与 current 指定的状态不匹配会覆盖自动匹配的状态。'
          }
        },
        name: 'status',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '等待',
                value: 'wait'
              },
              {
                label: '进行',
                value: 'process'
              },
              {
                label: '完成',
                value: 'finish'
              },
              {
                label: '错误',
                value: 'error'
              }
            ],
            options: [
              {
                label: '等待',
                value: 'wait'
              },
              {
                label: '进行',
                value: 'process'
              },
              {
                label: '完成',
                value: 'finish'
              },
              {
                label: '错误',
                value: 'error'
              }
            ]
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
        setter: ['StringSetter', 'SlotSetter']
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
    title: '步骤',
    screenshot: '',
    schema: {
      componentName: 'Step',
      props: {}
    }
  }
];

export default {
  ...StepMeta,
  snippets
};
