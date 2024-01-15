import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PullToRefreshMeta: IPublicTypeComponentMetadata = {
  componentName: 'PullToRefresh',
  title: '下拉刷新',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'PullToRefresh',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'canReleaseText',
            'zh-CN': '释放提示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'canReleaseText',
            'zh-CN': 'canReleaseText'
          }
        },
        name: 'canReleaseText',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'completeDelay',
            'zh-CN': '完成区域消失延迟'
          },
          tip: {
            type: 'i18n',
            'en-US': 'completeDelay',
            'zh-CN': 'completeDelay | 单位为 ms'
          }
        },
        name: 'completeDelay',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'completeText',
            'zh-CN': '完成提示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'completeText',
            'zh-CN': 'completeText'
          }
        },
        name: 'completeText',
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
            'en-US': 'headHeight',
            'zh-CN': '提示区域高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'headHeight',
            'zh-CN': 'headHeight | 单位为 px'
          }
        },
        name: 'headHeight',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRefresh',
            'zh-CN': '刷新时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onRefresh',
            'zh-CN': 'onRefresh'
          }
        },
        name: 'onRefresh',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pullingText',
            'zh-CN': '下拉提示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'pullingText',
            'zh-CN': 'pullingText'
          }
        },
        name: 'pullingText',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'refreshingText',
            'zh-CN': '刷新提示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'refreshingText',
            'zh-CN': 'refreshingText'
          }
        },
        name: 'refreshingText',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderText',
            'zh-CN': '提示文案函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'renderText',
            'zh-CN': 'renderText | 根据下拉状态，自定义下拉提示文案 | (status: PullStatus) => ReactNode'
          }
        },
        name: 'renderText',
        setter: [
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              params: ['status']
            }
          },
          'FunctionSetter'
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'threshold',
            'zh-CN': '刷新触发高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'threshold',
            'zh-CN': 'threshold | 单位为 px'
          }
        },
        name: 'threshold',
        setter: 'NumberSetter'
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
    title: '下拉刷新',
    screenshot: '',
    schema: {
      componentName: 'PullToRefresh',
      props: {}
    }
  }
];

export default {
  ...PullToRefreshMeta,
  snippets
};
