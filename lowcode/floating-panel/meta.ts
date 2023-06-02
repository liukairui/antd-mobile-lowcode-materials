import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FloatingPanelMeta: IPublicTypeComponentMetadata = {
  componentName: 'FloatingPanel',
  title: '浮动面板',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'FloatingPanel',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'anchors',
            'zh-CN': '可拖拽高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'anchors',
            'zh-CN': 'anchors'
          }
        },
        name: 'anchors',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'NumberSetter',
              initialValue: ''
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'handleDraggingOfContent',
            'zh-CN': '处理内容区拖拽'
          },
          tip: {
            type: 'i18n',
            'en-US': 'handleDraggingOfContent',
            'zh-CN':
              'handleDraggingOfContent | 开启后内容区拖拽可修改面板高度，禁用后则只能拖拽头部区域'
          }
        },
        name: 'handleDraggingOfContent',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onHeightChange',
            'zh-CN': '高度变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onHeightChange',
            'zh-CN':
              'onHeightChange | animating 参数表示是否处于动画过程中 | (height: number, animating: boolean) => void'
          }
        },
        name: 'onHeightChange',
        setter: {
          componentName: 'FunctionSetter'
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
    title: '浮动面板',
    screenshot: '',
    schema: {
      componentName: 'FloatingPanel',
      props: {}
    }
  }
];

export default {
  ...FloatingPanelMeta,
  snippets
};
