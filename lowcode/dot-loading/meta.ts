import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DotLoadingMeta: IPublicTypeComponentMetadata = {
  componentName: 'DotLoading',
  title: '点状加载中',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'DotLoading',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': '颜色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'color',
            'zh-CN': 'color | 等效于手动设置 --color CSS 变量'
          }
        },
        name: 'color',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: '默认',
                      value: 'default'
                    },
                    {
                      label: '主要',
                      value: 'primary'
                    },
                    {
                      label: '白色',
                      value: 'white'
                    }
                  ],
                  options: [
                    {
                      label: '默认',
                      value: 'default'
                    },
                    {
                      label: '主要',
                      value: 'primary'
                    },
                    {
                      label: '白色',
                      value: 'white'
                    }
                  ]
                }
              },
              'StringSetter'
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
    title: '点状加载中',
    screenshot: '',
    schema: {
      componentName: 'DotLoading',
      props: {}
    }
  }
];

export default {
  ...DotLoadingMeta,
  snippets
};
