import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TableMeta: IPublicTypeComponentMetadata = {
  componentName: 'Table',
  title: '表格',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.5',
    exportName: 'Table',
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
            'zh-CN': '列配置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'columns',
            'zh-CN': 'columns'
          }
        },
        name: 'columns',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'JsonSetter'
              },
              {
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
                                'en-US': 'align',
                                'zh-CN': '填充模式'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'align',
                                'zh-CN': 'align'
                              }
                            },
                            name: 'align',
                            setter: {
                              componentName: 'SelectSetter',
                              props: {
                                dataSource: [
                                  {
                                    label: '左侧',
                                    value: 'left'
                                  },
                                  {
                                    label: '中央',
                                    value: 'center'
                                  },
                                  {
                                    label: '右侧',
                                    value: 'right'
                                  }
                                ],
                                options: [
                                  {
                                    label: '左侧',
                                    value: 'left'
                                  },
                                  {
                                    label: '中央',
                                    value: 'center'
                                  },
                                  {
                                    label: '右侧',
                                    value: 'right'
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
                                'en-US': 'className',
                                'zh-CN': '类名'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'className',
                                'zh-CN': 'className'
                              }
                            },
                            name: 'className',
                            setter: {
                              componentName: 'StringSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'colSpan',
                                'zh-CN': '列合并数'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'colSpan',
                                'zh-CN': 'colSpan'
                              }
                            },
                            name: 'colSpan',
                            setter: {
                              componentName: 'StringSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'dataIndex',
                                'zh-CN': '取值字段'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'dataIndex',
                                'zh-CN': 'dataIndex'
                              }
                            },
                            name: 'dataIndex',
                            setter: {
                              componentName: 'StringSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'ellipsis',
                                'zh-CN': '超出时省略'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'ellipsis',
                                'zh-CN': 'ellipsis'
                              }
                            },
                            name: 'ellipsis',
                            setter: {
                              componentName: 'BoolSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'fixed',
                                'zh-CN': '加载状态'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'fixed',
                                'zh-CN': 'fixed'
                              }
                            },
                            name: 'fixed',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'BoolSetter',
                                    initialValue: undefined
                                  },
                                  {
                                    componentName: 'RadioGroupSetter',
                                    props: {
                                      dataSource: [
                                        {
                                          label: '左侧',
                                          value: 'left'
                                        },
                                        {
                                          label: '右侧',
                                          value: 'right'
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
                              componentName: 'StringSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'onCell',
                                'zh-CN': '单元格自定义属性'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'onCell',
                                'zh-CN':
                                  'onCell | (data: DataType, index?: number) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>'
                              }
                            },
                            name: 'onCell',
                            setter: {
                              componentName: 'FunctionSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'onHeaderCell',
                                'zh-CN': '表头单元格自定义属性'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'onHeaderCell',
                                'zh-CN':
                                  'onHeaderCell | (data: DataType, index?: number) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>'
                              }
                            },
                            name: 'onHeaderCell',
                            setter: {
                              componentName: 'FunctionSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'render',
                                'zh-CN': '表头单元格自定义属性'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'render',
                                'zh-CN':
                                  'render | (value: any, record: RecordType, index: number) => React.ReactNode | RenderedCell<RecordType>'
                              }
                            },
                            name: 'render',
                            setter: {
                              componentName: 'FunctionSetter',
                              initialValue: undefined
                            }
                          },
                          {
                            title: {
                              label: {
                                type: 'i18n',
                                'en-US': 'rowScope',
                                'zh-CN': '行作用域'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'rowScope',
                                'zh-CN': 'rowScope'
                              }
                            },
                            name: 'rowScope',
                            setter: {
                              componentName: 'SelectSetter',
                              props: {
                                dataSource: [
                                  {
                                    label: '行',
                                    value: 'row'
                                  },
                                  {
                                    label: '行组',
                                    value: 'rowgroup'
                                  }
                                ],
                                options: [
                                  {
                                    label: '行',
                                    value: 'row'
                                  },
                                  {
                                    label: '行组',
                                    value: 'rowgroup'
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
                                'en-US': 'title',
                                'zh-CN': '标题'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'title',
                                'zh-CN': 'title'
                              }
                            },
                            name: 'title',
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
                                'en-US': 'width',
                                'zh-CN': '宽度'
                              },
                              tip: {
                                type: 'i18n',
                                'en-US': 'width',
                                'zh-CN': 'width'
                              }
                            },
                            name: 'width',
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
                    },
                    initialValue: {}
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
            'en-US': 'components',
            'zh-CN': '自定义组件'
          },
          tip: {
            type: 'i18n',
            'en-US': 'components',
            'zh-CN': 'components'
          }
        },
        name: 'components',
        setter: {
          componentName: 'VariableSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'data',
            'zh-CN': '数据'
          },
          tip: {
            type: 'i18n',
            'en-US': 'data',
            'zh-CN': 'data'
          }
        },
        name: 'data',
        setter: {
          componentName: 'VariableSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'emptyText',
            'zh-CN': '空状态区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'emptyText',
            'zh-CN': 'emptyText'
          }
        },
        name: 'emptyText',
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
            'en-US': 'expandable',
            'zh-CN': '折叠设置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'expandable',
            'zh-CN': 'expandable'
          }
        },
        name: 'expandable',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'defaultExpandAllRows',
                      'zh-CN': '默认折叠所有行'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'defaultExpandAllRows',
                      'zh-CN': 'defaultExpandAllRows'
                    }
                  },
                  name: 'defaultExpandAllRows',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'defaultExpandedRowKeys',
                      'zh-CN': '默认折叠行 Key'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'defaultExpandedRowKeys',
                      'zh-CN': 'defaultExpandedRowKeys'
                    }
                  },
                  name: 'defaultExpandedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowClassName',
                      'zh-CN': '已折叠行类名'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandedRowClassName',
                      'zh-CN':
                        'expandedRowClassName | (record: RecordType, index: number, indent: number) => string'
                    }
                  },
                  name: 'expandedRowClassName',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                undefined,
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowKeys',
                      'zh-CN': '已折叠行 Key'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandedRowKeys',
                      'zh-CN': 'expandedRowKeys'
                    }
                  },
                  name: 'expandedRowKeys',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'StringSetter',
                        initialValue: undefined
                      }
                    },
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandedRowRender',
                      'zh-CN': '已折叠行渲染函数'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandedRowRender',
                      'zh-CN':
                        'expandedRowRender | (record: ValueType, index: number, indent: number, expanded: boolean) => React.ReactNode'
                    }
                  },
                  name: 'expandedRowRender',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandIcon',
                      'zh-CN': '折叠按钮图标'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandIcon',
                      'zh-CN':
                        'expandIcon | (props: RenderExpandIconProps<RecordType>) => React.ReactNode'
                    }
                  },
                  name: 'expandIcon',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandIconColumnIndex',
                      'zh-CN': '折叠按钮图标列号'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandIconColumnIndex',
                      'zh-CN': 'expandIconColumnIndex'
                    }
                  },
                  name: 'expandIconColumnIndex',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'expandRowByClick',
                      'zh-CN': '点击行可折叠'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'expandRowByClick',
                      'zh-CN': 'expandRowByClick'
                    }
                  },
                  name: 'expandRowByClick',
                  setter: {
                    componentName: 'BoolSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'fixed',
                      'zh-CN': '滚动时折叠按钮固定'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'fixed',
                      'zh-CN': 'fixed'
                    }
                  },
                  name: 'fixed',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        },
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            dataSource: [
                              {
                                label: 'left',
                                value: 'left'
                              },
                              {
                                label: 'right',
                                value: 'right'
                              }
                            ],
                            options: [
                              {
                                label: 'left',
                                value: 'left'
                              },
                              {
                                label: 'right',
                                value: 'right'
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
                      'en-US': 'indentSize',
                      'zh-CN': '缩进'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'indentSize',
                      'zh-CN': 'indentSize'
                    }
                  },
                  name: 'indentSize',
                  setter: {
                    componentName: 'NumberSetter',
                    initialValue: undefined
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onExpand',
                      'zh-CN': '折叠时触发'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'onExpand',
                      'zh-CN': 'onExpand | (expanded: boolean, record: RecordType) => void'
                    }
                  },
                  name: 'onExpand',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'onExpandedRowsChange',
                      'zh-CN': '折叠行变化时触发'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'onExpandedRowsChange',
                      'zh-CN': 'onExpandedRowsChange | (expandedKeys: readonly Key[]) => void'
                    }
                  },
                  name: 'onExpandedRowsChange',
                  setter: {
                    componentName: 'FunctionSetter'
                  }
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'rowExpandable',
                      'zh-CN': '可折叠判断函数'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'rowExpandable',
                      'zh-CN': 'rowExpandable | (record: RecordType) => boolean'
                    }
                  },
                  name: 'rowExpandable',
                  setter: {
                    componentName: 'FunctionSetter'
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
            'en-US': 'footer',
            'zh-CN': '表尾渲染函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'footer',
            'zh-CN': 'footer | (data: readonly RecordType[]) => React.ReactNode'
          }
        },
        name: 'footer',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'ID'
          },
          tip: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id'
          }
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onHeaderRow',
            'zh-CN': '表头行自定义属性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onHeaderRow',
            'zh-CN':
              'onHeaderRow | (data: DataType, index?: number) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>;'
          }
        },
        name: 'onHeaderRow',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'onRow',
            'zh-CN': '行自定义属性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'onRow',
            'zh-CN':
              'onRow | (data: DataType, index?: number) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>'
          }
        },
        name: 'onRow',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': '标签前缀'
          },
          tip: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls'
          }
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rowClassName',
            'zh-CN': '行类名'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rowClassName',
            'zh-CN': 'rowClassName | (record: RecordType, index: number, indent: number) => string'
          }
        },
        name: 'rowClassName',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
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
            'en-US': 'rowKey',
            'zh-CN': 'Key 获取函数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'rowKey',
            'zh-CN': 'rowKey | (record: RecordType, index?: number) => Key'
          }
        },
        name: 'rowKey',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                initialValue: undefined
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
            'en-US': 'scroll',
            'zh-CN': '滚动设置'
          },
          tip: {
            type: 'i18n',
            'en-US': 'scroll',
            'zh-CN': 'scroll'
          }
        },
        name: 'scroll',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'x',
                      'zh-CN': 'X 轴'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'x',
                      'zh-CN': 'x'
                    }
                  },
                  name: 'x',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        },
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
                      'en-US': 'y',
                      'zh-CN': 'Y 轴'
                    },
                    tip: {
                      type: 'i18n',
                      'en-US': 'y',
                      'zh-CN': 'y'
                    }
                  },
                  name: 'y',
                  setter: {
                    componentName: 'MixedSetter',
                    props: {
                      setters: [
                        {
                          componentName: 'BoolSetter',
                          initialValue: undefined
                        },
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
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showHeader',
            'zh-CN': '显示表头'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showHeader',
            'zh-CN': 'showHeader'
          }
        },
        name: 'showHeader',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'sticky',
            'zh-CN': '粘性'
          },
          tip: {
            type: 'i18n',
            'en-US': 'sticky',
            'zh-CN': 'sticky'
          }
        },
        name: 'sticky',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                initialValue: undefined
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'offsetHeader',
                            'zh-CN': '表头距页顶偏移量'
                          },
                          tip: {
                            type: 'i18n',
                            'en-US': 'offsetHeader',
                            'zh-CN': 'offsetHeader'
                          }
                        },
                        name: 'offsetHeader',
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
                        }
                      },
                      {
                        title: {
                          label: {
                            type: 'i18n',
                            'en-US': 'offsetScroll',
                            'zh-CN': '滚动偏移量'
                          },
                          tip: {
                            type: 'i18n',
                            'en-US': 'offsetScroll',
                            'zh-CN': 'offsetScroll'
                          }
                        },
                        name: 'offsetScroll',
                        setter: {
                          componentName: 'NumberSetter',
                          initialValue: undefined
                        }
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
                            'zh-CN': 'getContainer | () => Window | HTMLElement'
                          }
                        },
                        name: 'getContainer',
                        setter: {
                          componentName: 'FunctionSetter'
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'summary',
            'zh-CN': '汇总'
          },
          tip: {
            type: 'i18n',
            'en-US': 'summary',
            'zh-CN': 'summary | (data: readonly RecordType[]) => React.ReactNode'
          }
        },
        name: 'summary',
        setter: {
          componentName: 'FunctionSetter'
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'tableLayout',
            'zh-CN': '布局'
          },
          tip: {
            type: 'i18n',
            'en-US': 'tableLayout',
            'zh-CN': 'tableLayout'
          }
        },
        name: 'tableLayout',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: '自动',
                value: 'auto'
              },
              {
                label: '固定',
                value: 'fixed'
              }
            ],
            options: [
              {
                label: '自动',
                value: 'auto'
              },
              {
                label: '固定',
                value: 'fixed'
              }
            ]
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
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '表格',
    screenshot: '',
    schema: {
      componentName: 'Table',
      props: {}
    }
  }
];

export default {
  ...TableMeta,
  snippets
};
