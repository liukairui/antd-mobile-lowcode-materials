import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AvatarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Avatar',
  title: '头像',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Avatar',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': '图片描述'
          },
          tip: {
            type: 'i18n',
            'en-US': 'alt',
            'zh-CN': 'alt'
          }
        },
        name: 'alt',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fallback',
            'zh-CN': '加载失败占位图'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fallback',
            'zh-CN': 'fallback'
          }
        },
        name: 'fallback',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fit',
            'zh-CN': '填充模式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fit',
            'zh-CN': 'fit'
          }
        },
        name: 'fit',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '填充',
                value: 'fill'
              },
              {
                label: '无',
                value: 'none'
              },
              {
                label: '包含',
                value: 'contain'
              },
              {
                label: '覆盖',
                value: 'cover'
              },
              {
                label: '缩小至适合大小',
                value: 'scale-down'
              }
            ],
            options: [
              {
                label: '填充',
                value: 'fill'
              },
              {
                label: '无',
                value: 'none'
              },
              {
                label: '包含',
                value: 'contain'
              },
              {
                label: '覆盖',
                value: 'cover'
              },
              {
                label: '缩小至适合大小',
                value: 'scale-down'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lazy',
            'zh-CN': '懒加载'
          },
          tip: {
            type: 'i18n',
            'en-US': 'lazy',
            'zh-CN': 'lazy'
          }
        },
        name: 'lazy',
        setter: 'BoolSetter'
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
            'en-US': 'onError',
            'zh-CN': '加载失败时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onError',
            'zh-CN': 'onError | (event: React.SyntheticEvent<HTMLImageElement, Event>) => void'
          }
        },
        name: 'onError',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onLoad',
            'zh-CN': '加载完成时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onLoad',
            'zh-CN': 'onLoad | (event: React.SyntheticEvent<HTMLImageElement, Event>) => void'
          }
        },
        name: 'onLoad',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': '资源地址'
          },
          tip: {
            type: 'i18n',
            'en-US': 'src',
            'zh-CN': 'src'
          }
        },
        name: 'src',
        setter: 'StringSetter'
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
    title: '头像',
    screenshot: '',
    schema: {
      componentName: 'Avatar',
      props: {}
    }
  }
];

export default {
  ...AvatarMeta,
  snippets
};
