import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PickerViewMeta: IPublicTypeComponentMetadata = {
  componentName: 'PickerView',
  title: '选择器视图',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'PickerView',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'columns',
            'zh-CN': '列选项'
          },
          tip: {
            type: 'i18n',
            'en-US': 'columns',
            'zh-CN': 'columns | ((value: PickerValue[]) => PickerColumn[])'
          }
        },
        name: 'columns',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
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
                                    'en-US': 'label',
                                    'zh-CN': '标签区域'
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
                                    'en-US': 'value',
                                    'zh-CN': '值'
                                  },
                                  tip: {
                                    type: 'i18n',
                                    'en-US': 'value',
                                    'zh-CN': 'value'
                                  }
                                },
                                name: 'value',
                                setter: {
                                  componentName: 'StringSetter',
                                  initialValue: undefined
                                }
                              },
                              {
                                title: {
                                  label: {
                                    type: 'i18n',
                                    'en-US': 'key',
                                    'zh-CN': '唯一标识'
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
                              }
                            ]
                          }
                        }
                      }
                    },
                    initialValue: undefined
                  }
                },
                initialValue: []
              },
              {
                componentName: 'FunctionSetter'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': '默认值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue'
          }
        },
        name: 'defaultValue',
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
            'en-US': 'loading',
            'zh-CN': '加载状态'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loading',
            'zh-CN': 'loading'
          }
        },
        name: 'loading',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'loadingContent',
            'zh-CN': '加载状态展示区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'loadingContent',
            'zh-CN': 'loadingContent'
          }
        },
        name: 'loadingContent',
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
            'en-US': 'mouseWheel',
            'zh-CN': '允许鼠标滚轮操作'
          },
          tip: {
            type: 'i18n',
            'en-US': 'mouseWheel',
            'zh-CN': 'mouseWheel'
          }
        },
        name: 'mouseWheel',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': '值变化时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange | (value: PickerValue[], extend: PickerValueExtend) => void'
          }
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'renderLabel',
            'zh-CN': '列标签自定义渲染函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'renderLabel',
            'zh-CN':
              'renderLabel | 默认值为 (item) => item.label | (item: PickerColumnItem) => ReactNode'
          }
        },
        name: 'renderLabel',
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
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '当前值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': 'value'
          }
        },
        name: 'value',
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
    title: '选择器视图',
    screenshot: '',
    schema: {
      componentName: 'PickerView',
      props: {}
    }
  }
];

export default {
  ...PickerViewMeta,
  snippets
};
