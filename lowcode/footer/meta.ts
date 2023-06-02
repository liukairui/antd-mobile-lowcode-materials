import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FooterMeta: IPublicTypeComponentMetadata = {
  componentName: 'Footer',
  title: '页脚',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Footer',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'chips',
            'zh-CN': '标签'
          },
          tip: {
            type: 'i18n',
            'en-US': 'chips',
            'zh-CN': 'chips'
          }
        },
        name: 'chips',
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
                          'en-US': 'text',
                          'zh-CN': '内容区域'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'text',
                          'zh-CN': 'text'
                        }
                      },
                      name: 'text',
                      setter: {
                        componentName: 'SlotSetter',
                        props: {
                          mode: 'node'
                        },
                        initialValue: {
                          type: 'JSSlot',
                          value: []
                        }
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': '类型'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': 'type'
                        }
                      },
                      name: 'type',
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          dataSource: [
                            {
                              label: '纯展示',
                              value: 'plain'
                            },
                            {
                              label: '可点击',
                              value: 'link'
                            }
                          ],
                          options: [
                            {
                              label: '纯展示',
                              value: 'plain'
                            },
                            {
                              label: '可点击',
                              value: 'link'
                            }
                          ]
                        },
                        initialValue: undefined
                      }
                    }
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                }
              },
              initialValue: {}
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '内容区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content'
          }
        },
        name: 'content',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': '分割线文本区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'label',
            'zh-CN': 'label'
          }
        },
        name: 'label',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node'
          },
          initialValue: {
            type: 'JSSlot',
            value: []
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'links',
            'zh-CN': '链接'
          },
          tip: {
            type: 'i18n',
            'en-US': 'links',
            'zh-CN': 'links'
          }
        },
        name: 'links',
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
                          'en-US': 'text',
                          'zh-CN': '文字'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'text',
                          'zh-CN': 'text'
                        }
                      },
                      name: 'text',
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'href',
                          'zh-CN': '地址'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'href',
                          'zh-CN': 'href'
                        }
                      },
                      name: 'href',
                      setter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    }
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    props: {}
                  }
                }
              },
              initialValue: {}
            }
          },
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChipClick',
            'zh-CN': '点击标签时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChipClick',
            'zh-CN':
              'onChipClick | 仅在标签 type 为 link 生效 | (item: ChipItem, index: number) => void'
          }
        },
        name: 'onChipClick',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onLinkClick',
            'zh-CN': '点击链接时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onLinkClick',
            'zh-CN':
              'onLinkClick | 将拦截 a 标签的 href 跳转行为 | (item: LinkItem, index: number) => void'
          }
        },
        name: 'onLinkClick',
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
    component: {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '页脚',
    screenshot: '',
    schema: {
      componentName: 'Footer',
      props: {}
    }
  }
];

export default {
  ...FooterMeta,
  snippets
};
