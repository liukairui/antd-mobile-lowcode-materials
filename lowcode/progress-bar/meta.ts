import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ProgressBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'ProgressBar',
  title: '进度条',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'ProgressBar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': '百分比'
          },
          tip: {
            type: 'i18n',
            'en-US': 'percent',
            'zh-CN': 'percent'
          }
        },
        name: 'percent',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rounded',
            'zh-CN': '圆角'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rounded',
            'zh-CN': 'rounded'
          }
        },
        name: 'rounded',
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
            'en-US': 'text',
            'zh-CN': '进度文本'
          },
          tip: {
            type: 'i18n',
            'en-US': 'text',
            'zh-CN': 'text | (percent: number) => ReactNode'
          }
        },
        name: 'text',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'BoolSetter',
              'FunctionSetter',
              {
                componentName: 'SlotSetter',
                initialValue: {
                  type: 'JSSlot',
                  params: ['percent']
                }
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
    component: {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '进度条',
    screenshot: '',
    schema: {
      componentName: 'ProgressBar',
      props: {}
    }
  }
];

export default {
  ...ProgressBarMeta,
  snippets
};
