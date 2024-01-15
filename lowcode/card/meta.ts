import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const CardMeta: IPublicTypeComponentMetadata = {
  componentName: 'Card',
  title: '卡片',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Card',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bodyClassName',
            'zh-CN': '内容区域类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bodyClassName',
            'zh-CN': 'bodyClassName'
          }
        },
        name: 'bodyClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'bodyStyle',
            'zh-CN': '内容区域样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'bodyStyle',
            'zh-CN': 'bodyStyle'
          }
        },
        name: 'bodyStyle',
        setter: 'JsonSetter'
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
            'en-US': 'headerClassName',
            'zh-CN': '标题区域类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'headerClassName',
            'zh-CN': 'headerClassName'
          }
        },
        name: 'headerClassName',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'headerStyle',
            'zh-CN': '标题区域样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'headerStyle',
            'zh-CN': 'headerStyle'
          }
        },
        name: 'headerStyle',
        setter: 'JsonSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onBodyClick',
            'zh-CN': '点击内容区域时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onBodyClick',
            'zh-CN': 'onBodyClick | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'
          }
        },
        name: 'onBodyClick',
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
            'zh-CN': 'onClick | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'
          }
        },
        name: 'onClick',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onHeaderClick',
            'zh-CN': '点击标题区域时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onHeaderClick',
            'zh-CN': 'onHeaderClick | (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'
          }
        },
        name: 'onHeaderClick',
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
    title: '卡片',
    screenshot: '',
    schema: {
      componentName: 'Card',
      props: {}
    }
  }
];

export default {
  ...CardMeta,
  snippets
};
