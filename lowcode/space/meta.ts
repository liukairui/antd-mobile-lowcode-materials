import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SpaceMeta: IPublicTypeComponentMetadata = {
  componentName: 'Space',
  title: '间距',
  category: '布局',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Space',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': '交叉轴对齐方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'align',
            'zh-CN': 'align'
          }
        },
        name: 'align',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              },
              {
                label: '基线',
                value: 'baseline'
              }
            ],
            options: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              },
              {
                label: '基线',
                value: 'baseline'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': '块级元素'
          },
          tip: {
            type: 'i18n',
            'en-US': 'block',
            'zh-CN': 'block'
          }
        },
        name: 'block',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': '方向'
          },
          tip: {
            type: 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction'
          }
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ],
            options: [
              {
                label: '水平',
                value: 'horizontal'
              },
              {
                label: '垂直',
                value: 'vertical'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'justify',
            'zh-CN': '主轴对齐方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'justify',
            'zh-CN': 'justify'
          }
        },
        name: 'justify',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              },
              {
                label: '两端',
                value: 'between'
              },
              {
                label: '均匀分布',
                value: 'around'
              },
              {
                label: '等间距',
                value: 'evenly'
              },
              {
                label: '拉伸',
                value: 'stretch'
              }
            ],
            options: [
              {
                label: '中央',
                value: 'center'
              },
              {
                label: '头部',
                value: 'start'
              },
              {
                label: '尾部',
                value: 'end'
              },
              {
                label: '两端',
                value: 'between'
              },
              {
                label: '均匀分布',
                value: 'around'
              },
              {
                label: '等间距',
                value: 'evenly'
              },
              {
                label: '拉伸',
                value: 'stretch'
              }
            ]
          }
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
            'en-US': 'wrap',
            'zh-CN': '换行'
          },
          tip: {
            type: 'i18n',
            'en-US': 'wrap',
            'zh-CN': 'wrap | 仅在 horizontal 时有效'
          }
        },
        name: 'wrap',
        setter: 'BoolSetter'
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
    title: '间距',
    screenshot: '',
    schema: {
      componentName: 'Space',
      props: {}
    }
  }
];

export default {
  ...SpaceMeta,
  snippets
};
