import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ErrorBlockMeta: IPublicTypeComponentMetadata = {
  componentName: 'ErrorBlock',
  title: '异常',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'ErrorBlock',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': '描述区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': 'description'
          }
        },
        name: 'description',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fullPage',
            'zh-CN': '整页'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fullPage',
            'zh-CN': 'fullPage'
          }
        },
        name: 'fullPage',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': '图片地址'
          },
          tip: {
            type: 'i18n',
            'en-US': 'image',
            'zh-CN': 'image'
          }
        },
        name: 'image',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': '错误类型'
          },
          tip: {
            type: 'i18n',
            'en-US': 'status',
            'zh-CN': 'status'
          }
        },
        name: 'status',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '网络',
                value: 'disconnected'
              },
              {
                label: '空',
                value: 'empty'
              },
              {
                label: '繁忙',
                value: 'busy'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '网络',
                value: 'disconnected'
              },
              {
                label: '空',
                value: 'empty'
              },
              {
                label: '繁忙',
                value: 'busy'
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
    title: '异常',
    screenshot: '',
    schema: {
      componentName: 'ErrorBlock',
      props: {}
    }
  }
];

export default {
  ...ErrorBlockMeta,
  snippets
};
