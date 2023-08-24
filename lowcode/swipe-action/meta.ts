import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SwipeActionMeta: IPublicTypeComponentMetadata = {
  componentName: 'SwipeAction',
  title: '滑动操作',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SwipeAction',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeOnAction',
            'zh-CN': '点击按钮后关闭'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closeOnAction',
            'zh-CN': 'closeOnAction'
          }
        },
        name: 'closeOnAction',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeOnTouchOutside',
            'zh-CN': '点击其他区域时关闭'
          },
          tip: {
            type: 'i18n',
            'en-US': 'closeOnTouchOutside',
            'zh-CN': 'closeOnTouchOutside'
          }
        },
        name: 'closeOnTouchOutside',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'leftActions',
            'zh-CN': '左侧按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'leftActions',
            'zh-CN': 'leftActions'
          }
        },
        name: 'leftActions',
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
                                    label: '轻',
                                    value: 'light'
                                  },
                                  {
                                    label: '较轻',
                                    value: 'weak'
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
                                    label: '轻',
                                    value: 'light'
                                  },
                                  {
                                    label: '较轻',
                                    value: 'weak'
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
                          'en-US': 'onClick',
                          'zh-CN': '点击时触发'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'onClick',
                          'zh-CN': 'onClick | (e: React.MouseEvent) => void'
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
                          'en-US': 'text',
                          'zh-CN': '文字区域'
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
                    }
                  ]
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
            'en-US': 'onAction',
            'zh-CN': '点击选项时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onAction',
            'zh-CN': 'onAction | (action: Action, e: React.MouseEvent) => void'
          }
        },
        name: 'onAction',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onActionsReveal',
            'zh-CN': '按钮完全出现时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onActionsReveal',
            'zh-CN': "onActionsReveal | (side: 'left' | 'right') => void"
          }
        },
        name: 'onActionsReveal',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rightActions',
            'zh-CN': '右侧按钮'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rightActions',
            'zh-CN': 'rightActions'
          }
        },
        name: 'rightActions',
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
                                    label: '轻',
                                    value: 'light'
                                  },
                                  {
                                    label: '较轻',
                                    value: 'weak'
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
                                    label: '轻',
                                    value: 'light'
                                  },
                                  {
                                    label: '较轻',
                                    value: 'weak'
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
                          'en-US': 'onClick',
                          'zh-CN': '点击时触发'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'onClick',
                          'zh-CN': 'onClick | (e: React.MouseEvent) => void'
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
                          'en-US': 'text',
                          'zh-CN': '文字区域'
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
                    }
                  ]
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
              componentName: 'StringSetter',
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
    title: '滑动操作',
    screenshot: '',
    schema: {
      componentName: 'SwipeAction',
      props: {}
    }
  }
];

export default {
  ...SwipeActionMeta,
  snippets
};
