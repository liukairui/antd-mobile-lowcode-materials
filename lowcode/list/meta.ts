import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ListMeta: IPublicTypeComponentMetadata = {
  componentName: 'List',
  title: '列表',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'List',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'header',
            'zh-CN': '顶部区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'header',
            'zh-CN': 'header'
          }
        },
        name: 'header',
        setter: 'SlotSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': '模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mode',
            'zh-CN': 'mode'
          }
        },
        name: 'mode',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '卡片',
                value: 'card'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '卡片',
                value: 'card'
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
    title: '列表',
    screenshot: '',
    schema: {
      componentName: 'List',
      props: {}
    }
  }
];

export default {
  ...ListMeta,
  snippets
};
