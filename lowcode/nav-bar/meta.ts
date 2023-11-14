import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const NavBarMeta: IPublicTypeComponentMetadata = {
  componentName: 'NavBar',
  title: '导航栏',
  category: '导航',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'NavBar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'back',
            'zh-CN': '返回箭头文本区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'back',
            'zh-CN': 'back | 如果为 null 的话，backArrow 也不会渲染'
          }
        },
        name: 'back',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'backArrow',
            'zh-CN': '返回箭头区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'backArrow',
            'zh-CN': 'backArrow | 可以传入 ReactNode 进行自定义'
          }
        },
        name: 'backArrow',
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
            'en-US': 'left',
            'zh-CN': '左侧区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'left',
            'zh-CN': 'left'
          }
        },
        name: 'left',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBack',
            'zh-CN': '返回时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBack',
            'zh-CN': 'onBack | () => void'
          }
        },
        name: 'onBack',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'right',
            'zh-CN': '右侧区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'right',
            'zh-CN': 'right'
          }
        },
        name: 'right',
        setter: 'SlotSetter'
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
    title: '导航栏',
    screenshot: '',
    schema: {
      componentName: 'NavBar',
      props: {}
    }
  }
];

export default {
  ...NavBarMeta,
  snippets
};
