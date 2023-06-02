import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TagMeta: IPublicTypeComponentMetadata = {
  componentName: 'Tag',
  title: '标签',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Tag',
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
                componentName: 'SelectSetter',
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
                      label: '成功',
                      value: 'success'
                    },
                    {
                      label: '警告',
                      value: 'warning'
                    },
                    {
                      label: '危险',
                      value: 'danger'
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
                      label: '成功',
                      value: 'success'
                    },
                    {
                      label: '警告',
                      value: 'warning'
                    },
                    {
                      label: '危险',
                      value: 'danger'
                    }
                  ]
                },
                initialValue: undefined
              },
              {
                componentName: 'StringSetter',
                initialValue: undefined
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fill',
            'zh-CN': '填充模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fill',
            'zh-CN': 'fill'
          }
        },
        name: 'fill',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '实心',
                value: 'solid'
              },
              {
                label: '轮廓',
                value: 'outline'
              }
            ],
            options: [
              {
                label: '实心',
                value: 'solid'
              },
              {
                label: '轮廓',
                value: 'outline'
              }
            ]
          },
          initialValue: undefined
        }
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
            'zh-CN': 'onClick | (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'round',
            'zh-CN': '胶囊'
          },
          tip: {
            type: 'i18n',
            'en-US': 'round',
            'zh-CN': 'round'
          }
        },
        name: 'round',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
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
    title: '标签',
    screenshot: '',
    schema: {
      componentName: 'Tag',
      props: {}
    }
  }
];

export default {
  ...TagMeta,
  snippets
};
