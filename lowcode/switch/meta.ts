import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SwitchMeta: IPublicTypeComponentMetadata = {
  componentName: 'Switch',
  title: '开关',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Switch',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'beforeChange',
            'zh-CN': '值变化前触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'beforeChange',
            'zh-CN': 'beforeChange | 已弃用，推荐使用 onChange 属性 | (val: boolean) => Promise<void>'
          }
        },
        name: 'beforeChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': '选中'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checked',
            'zh-CN': 'checked'
          }
        },
        name: 'checked',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'checkedText',
            'zh-CN': '选中状态文本区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'checkedText',
            'zh-CN': 'checkedText'
          }
        },
        name: 'checkedText',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultChecked',
            'zh-CN': '默认选中'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultChecked',
            'zh-CN': 'defaultChecked'
          }
        },
        name: 'defaultChecked',
        setter: 'BoolSetter'
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
            'en-US': 'onChange',
            'zh-CN': '值变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange | 当返回 Promise 时，会自动显示加载状态 | (val: boolean) => void | Promise<void>'
          }
        },
        name: 'onChange',
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
            'en-US': 'uncheckedText',
            'zh-CN': '未选中状态文本区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'uncheckedText',
            'zh-CN': 'uncheckedText'
          }
        },
        name: 'uncheckedText',
        setter: 'SlotSetter'
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
    title: '开关',
    screenshot: '',
    schema: {
      componentName: 'Switch',
      props: {}
    }
  }
];

export default {
  ...SwitchMeta,
  snippets
};
