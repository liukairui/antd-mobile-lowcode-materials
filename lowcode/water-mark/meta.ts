import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const WaterMarkMeta: IPublicTypeComponentMetadata = {
  componentName: 'WaterMark',
  title: '水印',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'WaterMark',
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
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter',
                    initialValue: ''
                  }
                },
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
            'en-US': 'fontColor',
            'zh-CN': '字体颜色'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fontColor',
            'zh-CN': 'fontColor'
          }
        },
        name: 'fontColor',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fontFamily',
            'zh-CN': '字体'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fontFamily',
            'zh-CN': 'fontFamily'
          }
        },
        name: 'fontFamily',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'fontSize',
            'zh-CN': '字号'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fontSize',
            'zh-CN': 'fontSize'
          }
        },
        name: 'fontSize',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
              },
              {
                componentName: 'NumberSetter',
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
            'en-US': 'fontStyle',
            'zh-CN': '字体样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fontStyle',
            'zh-CN': 'fontStyle'
          }
        },
        name: 'fontStyle',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '普通',
                value: 'normal'
              },
              {
                label: '斜体',
                value: 'italic'
              },
              {
                label: '倾斜',
                value: 'oblique'
              }
            ],
            options: [
              {
                label: '普通',
                value: 'normal'
              },
              {
                label: '斜体',
                value: 'italic'
              },
              {
                label: '倾斜',
                value: 'oblique'
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
            'en-US': 'fontWeight',
            'zh-CN': '字重'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fontWeight',
            'zh-CN': 'fontWeight'
          }
        },
        name: 'fontWeight',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                initialValue: undefined
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: '普通',
                      value: 'normal'
                    },
                    {
                      label: '细',
                      value: 'light'
                    },
                    {
                      label: '粗',
                      value: 'weight'
                    }
                  ],
                  options: [
                    {
                      label: '普通',
                      value: 'normal'
                    },
                    {
                      label: '细',
                      value: 'light'
                    },
                    {
                      label: '粗',
                      value: 'weight'
                    }
                  ]
                },
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
            'en-US': 'fullPage',
            'zh-CN': '全屏'
          },
          tip: {
            type: 'i18n',
            'en-US': 'fullPage',
            'zh-CN':
              'fullPage | 把 WaterMark 放到一个 relative 定位的父元素，它会自动撑满这个父元素的范围'
          }
        },
        name: 'fullPage',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gapX',
            'zh-CN': '水平间距'
          },
          tip: {
            type: 'i18n',
            'en-US': 'gapX',
            'zh-CN': 'gapX | 单位为 px'
          }
        },
        name: 'gapX',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'gapY',
            'zh-CN': '垂直间距'
          },
          tip: {
            type: 'i18n',
            'en-US': 'gapY',
            'zh-CN': 'gapY | 单位为 px'
          }
        },
        name: 'gapY',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': '水印高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': 'height | 单位为 px'
          }
        },
        name: 'height',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
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
            'zh-CN': 'image | 建议导出 2 倍或 3 倍图，优先使用图片渲染水印'
          }
        },
        name: 'image',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'imageHeight',
            'zh-CN': '图片高度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'imageHeight',
            'zh-CN': 'imageHeight | 单位为 px'
          }
        },
        name: 'imageHeight',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'imageWidth',
            'zh-CN': '图片宽度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'imageWidth',
            'zh-CN': 'imageWidth | 单位为 px'
          }
        },
        name: 'imageWidth',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rotate',
            'zh-CN': '旋转'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rotate',
            'zh-CN': 'rotate | 单位为度'
          }
        },
        name: 'rotate',
        setter: {
          componentName: 'NumberSetter',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': '水印宽度'
          },
          tip: {
            type: 'i18n',
            'en-US': 'width',
            'zh-CN': 'width | 单位为 px'
          }
        },
        name: 'width',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': '层叠顺序'
          },
          tip: {
            type: 'i18n',
            'en-US': 'zIndex',
            'zh-CN': 'zIndex'
          }
        },
        name: 'zIndex',
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
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '水印',
    screenshot: '',
    schema: {
      componentName: 'WaterMark',
      props: {}
    }
  }
];

export default {
  ...WaterMarkMeta,
  snippets
};
