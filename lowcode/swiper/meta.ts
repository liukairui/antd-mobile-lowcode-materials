import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SwiperMeta: IPublicTypeComponentMetadata = {
  componentName: 'Swiper',
  title: '走马灯',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Swiper',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'allowTouchMove',
            'zh-CN': '允许手势滑动'
          },
          tip: {
            type: 'i18n',
            'en-US': 'allowTouchMove',
            'zh-CN': 'allowTouchMove'
          }
        },
        name: 'allowTouchMove',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplay',
            'zh-CN': '自动切换'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoplay',
            'zh-CN': 'autoplay'
          }
        },
        name: 'autoplay',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'autoplayInterval',
            'zh-CN': '自动切换时间间隔'
          },
          tip: {
            type: 'i18n',
            'en-US': 'autoplayInterval',
            'zh-CN': 'autoplayInterval | 单位为 ms'
          }
        },
        name: 'autoplayInterval',
        setter: 'NumberSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultIndex',
            'zh-CN': '默认索引'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultIndex',
            'zh-CN': 'defaultIndex'
          }
        },
        name: 'defaultIndex',
        setter: 'NumberSetter'
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
            'en-US': 'indicator',
            'zh-CN': '自定义指示器'
          },
          tip: {
            type: 'i18n',
            'en-US': 'indicator',
            'zh-CN': 'indicator | (total: number, current: number) => ReactNode'
          }
        },
        name: 'indicator',
        setter: [
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              params: ['total', 'current']
            }
          },
          'FunctionSetter'
        ]
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'indicatorProps',
            'zh-CN': '指示器属性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'indicatorProps',
            'zh-CN': 'indicatorProps | 支持 PageIndicator 的 color style className 属性'
          }
        },
        name: 'indicatorProps',
        setter: 'JsonSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'items',
            'zh-CN': '项'
          },
          tip: {
            type: 'i18n',
            'en-US': 'items',
            'zh-CN': 'items'
          }
        },
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'children',
                          'zh-CN': '内容'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'children',
                          'zh-CN': 'children'
                        }
                      },
                      name: 'children',
                      setter: ['StringSetter', 'SlotSetter']
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'key',
                          'zh-CN': 'Key'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'key',
                          'zh-CN': 'key'
                        }
                      },
                      name: 'key',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: ['StringSetter', 'NumberSetter']
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
                          'zh-CN': 'onClick'
                        }
                      },
                      name: 'onClick',
                      setter: 'FunctionSetter'
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loop',
            'zh-CN': '循环'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loop',
            'zh-CN': 'loop'
          }
        },
        name: 'loop',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': '索引变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onIndexChange',
            'zh-CN': 'onIndexChange | (index: number) => void'
          }
        },
        name: 'onIndexChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rubberband',
            'zh-CN': '橡皮筋效果'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rubberband',
            'zh-CN': 'rubberband | 仅在非 loop 模式下生效'
          }
        },
        name: 'rubberband',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'slideSize',
            'zh-CN': '滑块宽度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'slideSize',
            'zh-CN': 'slideSize | 单位为百分比'
          }
        },
        name: 'slideSize',
        setter: 'NumberSetter'
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
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  {
                    label: 'mousedown',
                    value: 'mousedown'
                  },
                  {
                    label: 'mousemove',
                    value: 'mousemove'
                  },
                  {
                    label: 'mouseup',
                    value: 'mouseup'
                  }
                ],
                options: [
                  {
                    label: 'mousedown',
                    value: 'mousedown'
                  },
                  {
                    label: 'mousemove',
                    value: 'mousemove'
                  },
                  {
                    label: 'mouseup',
                    value: 'mouseup'
                  }
                ]
              }
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'stuckAtBoundary',
            'zh-CN': '边界限位'
          },
          tip: {
            type: 'i18n',
            'en-US': 'stuckAtBoundary',
            'zh-CN': 'stuckAtBoundary | 是否在边界两边卡住，避免出现空白，仅在非 loop 模式且 slideSize < 100 时生效'
          }
        },
        name: 'stuckAtBoundary',
        setter: 'BoolSetter'
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
            'en-US': 'trackOffset',
            'zh-CN': '轨道偏移'
          },
          tip: {
            type: 'i18n',
            'en-US': 'trackOffset',
            'zh-CN': 'trackOffset | 单位为百分比'
          }
        },
        name: 'trackOffset',
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
    title: '走马灯',
    screenshot: '',
    schema: {
      componentName: 'Swiper',
      props: {}
    }
  }
];

export default {
  ...SwiperMeta,
  snippets
};
