import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SpinLoadingMeta: IPublicTypeComponentMetadata = {
  componentName: 'SpinLoading',
  title: '转圈加载中',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SpinLoading',
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
            'zh-CN': 'color'
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
    component: {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '转圈加载中',
    screenshot: '',
    schema: {
      componentName: 'SpinLoading',
      props: {}
    }
  }
];

export default {
  ...SpinLoadingMeta,
  snippets
};
