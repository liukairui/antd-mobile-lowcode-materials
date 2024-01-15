import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormMeta: IPublicTypeComponentMetadata = {
  componentName: 'Form',
  title: '表单',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Form',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用'
          },
          tip: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled'
          }
        },
        name: 'disabled',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': '底部区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer | 表尾，常用来放置提交按钮'
          }
        },
        name: 'footer',
        setter: ['StringSetter', 'SlotSetter']
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': '实例'
          },
          tip: {
            type: 'i18n',
            'en-US': 'form',
            'zh-CN': 'form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建'
          }
        },
        name: 'form'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': '错误提示'
          },
          tip: {
            type: 'i18n',
            'en-US': 'hasFeedback',
            'zh-CN': 'hasFeedback'
          }
        },
        name: 'hasFeedback',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': '默认值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'initialValues',
            'zh-CN': 'initialValues | 只有初始化以及重置时生效'
          }
        },
        name: 'initialValues',
        setter: 'JsonSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': '布局'
          },
          tip: {
            type: 'i18n',
            'en-US': 'layout',
            'zh-CN': 'layout'
          }
        },
        name: 'layout',
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
                label: '默认',
                value: 'default'
              },
              {
                label: '卡片',
                value: 'card'
              }
            ],
            options: [
              {
                label: '默认',
                value: 'default'
              },
              {
                label: '卡片',
                value: 'card'
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': '表单键'
          },
          tip: {
            type: 'i18n',
            'en-US': 'name',
            'zh-CN': 'name'
          }
        },
        name: 'name',
        setter: 'StringSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFieldsChange',
            'zh-CN': '字段更新时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFieldsChange',
            'zh-CN': 'onFieldsChange | (changedFields, allFields) => void'
          }
        },
        name: 'onFieldsChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFinish',
            'zh-CN': '提交并验证成功后触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFinish',
            'zh-CN': 'onFinish | (values) => void'
          }
        },
        name: 'onFinish',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onFinishFailed',
            'zh-CN': '提交并验证失败后触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onFinishFailed',
            'zh-CN': 'onFinishFailed | ({ values, errorFields, outOfDate }) => void'
          }
        },
        name: 'onFinishFailed',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onValuesChange',
            'zh-CN': '字段值更新时触发'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onValuesChange',
            'zh-CN': 'onValuesChange | (changedValues, allValues) => void'
          }
        },
        name: 'onValuesChange',
        setter: 'FunctionSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': '字段被删除时保留值'
          },
          tip: {
            type: 'i18n',
            'en-US': 'preserve',
            'zh-CN': 'preserve'
          }
        },
        name: 'preserve',
        setter: 'BoolSetter'
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'requiredMarkStyle',
            'zh-CN': '必填标识样式'
          },
          tip: {
            type: 'i18n',
            'en-US': 'requiredMarkStyle',
            'zh-CN': 'requiredMarkStyle'
          }
        },
        name: 'requiredMarkStyle',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '星号',
                value: 'asterisk'
              },
              {
                label: '必填（文本）',
                value: 'text-required'
              },
              {
                label: '选填（文本）',
                value: 'text-optional'
              }
            ],
            options: [
              {
                label: '无',
                value: 'none'
              },
              {
                label: '星号',
                value: 'asterisk'
              },
              {
                label: '必填（文本）',
                value: 'text-required'
              },
              {
                label: '选填（文本）',
                value: 'text-optional'
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
            'en-US': 'validateMessages',
            'zh-CN': '错误信息模板'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateMessages',
            'zh-CN': 'validateMessages'
          }
        },
        name: 'validateMessages',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true
        },
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'default',
                      'zh-CN': 'default'
                    }
                  },
                  name: 'default',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'FunctionSetter']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'required',
                      'zh-CN': 'required'
                    }
                  },
                  name: 'required',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'FunctionSetter']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'enum',
                      'zh-CN': 'enum'
                    }
                  },
                  name: 'enum',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'FunctionSetter']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'whitespace',
                      'zh-CN': 'whitespace'
                    }
                  },
                  name: 'whitespace',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: ['StringSetter', 'FunctionSetter']
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'date',
                      'zh-CN': 'date'
                    }
                  },
                  name: 'date',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'format',
                                'zh-CN': 'format'
                              }
                            },
                            name: 'format',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'parse',
                                'zh-CN': 'parse'
                              }
                            },
                            name: 'parse',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'invalid',
                                'zh-CN': 'invalid'
                              }
                            },
                            name: 'invalid',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'types',
                      'zh-CN': 'types'
                    }
                  },
                  name: 'types',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'string',
                                'zh-CN': 'string'
                              }
                            },
                            name: 'string',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'method',
                                'zh-CN': 'method'
                              }
                            },
                            name: 'method',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'array',
                                'zh-CN': 'array'
                              }
                            },
                            name: 'array',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'object',
                                'zh-CN': 'object'
                              }
                            },
                            name: 'object',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'number',
                                'zh-CN': 'number'
                              }
                            },
                            name: 'number',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'date',
                                'zh-CN': 'date'
                              }
                            },
                            name: 'date',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'boolean',
                                'zh-CN': 'boolean'
                              }
                            },
                            name: 'boolean',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'integer',
                                'zh-CN': 'integer'
                              }
                            },
                            name: 'integer',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'float',
                                'zh-CN': 'float'
                              }
                            },
                            name: 'float',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'regexp',
                                'zh-CN': 'regexp'
                              }
                            },
                            name: 'regexp',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'email',
                                'zh-CN': 'email'
                              }
                            },
                            name: 'email',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'url',
                                'zh-CN': 'url'
                              }
                            },
                            name: 'url',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'hex',
                                'zh-CN': 'hex'
                              }
                            },
                            name: 'hex',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'string',
                      'zh-CN': 'string'
                    }
                  },
                  name: 'string',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'number',
                      'zh-CN': 'number'
                    }
                  },
                  name: 'number',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'array',
                      'zh-CN': 'array'
                    }
                  },
                  name: 'array',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'len',
                                'zh-CN': 'len'
                              }
                            },
                            name: 'len',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'min',
                                'zh-CN': 'min'
                              }
                            },
                            name: 'min',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'max',
                                'zh-CN': 'max'
                              }
                            },
                            name: 'max',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'range',
                                'zh-CN': 'range'
                              }
                            },
                            name: 'range',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'pattern',
                      'zh-CN': 'pattern'
                    }
                  },
                  name: 'pattern',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'mismatch',
                                'zh-CN': 'mismatch'
                              }
                            },
                            name: 'mismatch',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: ['StringSetter', 'FunctionSetter']
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': '触发验证时机'
          },
          tip: {
            type: 'i18n',
            'en-US': 'validateTrigger',
            'zh-CN': 'validateTrigger'
          }
        },
        name: 'validateTrigger',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              'StringSetter',
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'StringSetter'
                  }
                }
              }
            ]
          }
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
    title: '表单',
    screenshot: '',
    schema: {
      componentName: 'Form',
      props: {}
    }
  }
];

export default {
  ...FormMeta,
  snippets
};
