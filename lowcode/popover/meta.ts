import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PopoverMeta: IPublicTypeComponentMetadata = {
  componentName: 'Popover',
  title: '气泡弹出框',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Popover',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '内容'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultVisible',
            'zh-CN': '默认显示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultVisible',
            'zh-CN': 'defaultVisible'
          }
        },
        name: 'defaultVisible',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'destroyOnHide',
            'zh-CN': '不显示时销毁'
          },
          tip: {
            type: 'i18n',
            'en-US': 'destroyOnHide',
            'zh-CN': 'destroyOnHide'
          }
        },
        name: 'destroyOnHide',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': '挂载节点'
          },
          tip: {
            type: 'i18n',
            'en-US': 'getContainer',
            'zh-CN': 'getContainer | 指定挂载的 HTML 节点，默认为 body，如果为 null 的话，会渲染到当前节点 HTMLElement | () => HTMLElement'
          }
        },
        name: 'getContainer',
        setter: 'FunctionSetter'
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
                label: '亮色',
                value: 'light'
              },
              {
                label: '暗色',
                value: 'dark'
              }
            ],
            options: [
              {
                label: '亮色',
                value: 'light'
              },
              {
                label: '暗色',
                value: 'dark'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onVisibleChange',
            'zh-CN': '切换显示隐藏时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onVisibleChange',
            'zh-CN': 'onVisibleChange | (visible: boolean) => void'
          }
        },
        name: 'onVisibleChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': '位置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement'
          }
        },
        name: 'placement',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              },
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
              },
              {
                label: '顶部左侧对齐',
                value: 'top-start'
              },
              {
                label: '顶部右侧对齐',
                value: 'top-end'
              },
              {
                label: '右侧顶部对齐',
                value: 'right-start'
              },
              {
                label: '右侧底部对齐',
                value: 'right-end'
              },
              {
                label: '底部左侧对齐',
                value: 'bottom-start'
              },
              {
                label: '底部右侧对齐',
                value: 'bottom-end'
              },
              {
                label: '左侧顶部对齐',
                value: 'left-start'
              },
              {
                label: '左侧底部对齐',
                value: 'left-end'
              }
            ],
            options: [
              {
                label: '左侧',
                value: 'left'
              },
              {
                label: '右侧',
                value: 'right'
              },
              {
                label: '顶部',
                value: 'top'
              },
              {
                label: '底部',
                value: 'bottom'
              },
              {
                label: '顶部左侧对齐',
                value: 'top-start'
              },
              {
                label: '顶部右侧对齐',
                value: 'top-end'
              },
              {
                label: '右侧顶部对齐',
                value: 'right-start'
              },
              {
                label: '右侧底部对齐',
                value: 'right-end'
              },
              {
                label: '底部左侧对齐',
                value: 'bottom-start'
              },
              {
                label: '底部右侧对齐',
                value: 'bottom-end'
              },
              {
                label: '左侧顶部对齐',
                value: 'left-start'
              },
              {
                label: '左侧底部对齐',
                value: 'left-end'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stopPropagation',
            'zh-CN': '阻止冒泡'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stopPropagation',
            'zh-CN': 'stopPropagation'
          }
        },
        name: 'stopPropagation',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter'
            }
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
            'en-US': 'trigger',
            'zh-CN': '触发方式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'trigger',
            'zh-CN': 'trigger'
          }
        },
        name: 'trigger',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '点击',
                value: 'click'
              }
            ],
            options: [
              {
                label: '点击',
                value: 'click'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': '显示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'visible',
            'zh-CN': 'visible'
          }
        },
        name: 'visible'
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
    title: '气泡弹出框',
    screenshot: '',
    schema: {
      componentName: 'Popover',
      props: {}
    }
  }
];

export default {
  ...PopoverMeta,
  snippets
};
