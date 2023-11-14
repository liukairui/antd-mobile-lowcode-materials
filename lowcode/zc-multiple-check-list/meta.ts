import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { zcFieldProps } from '../../src/utils/zero-code';

const ZcMultipleCheckListMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcMultipleCheckList',
  title: '多选框',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.2',
    exportName: 'ZcMultipleCheckList',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      ...zcFieldProps,
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'items',
            'zh-CN': '选项'
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
                          'en-US': 'description',
                          'zh-CN': '描述'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'description',
                          'zh-CN': 'description'
                        }
                      },
                      name: 'description',
                      setter: 'StringSetter'
                    },
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
                          'en-US': 'readOnly',
                          'zh-CN': '只读'
                        },
                        tip: {
                          type: 'i18n',
                          'en-US': 'readOnly',
                          'zh-CN': 'readOnly'
                        }
                      },
                      name: 'readOnly',
                      setter: 'BoolSetter'
                    },
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
                      setter: 'StringSetter',
                      isRequired: true
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
                      setter: 'StringSetter'
                    }
                  ]
                }
              }
            }
          }
        }
      }
    ],
    supports: {
      style: true,
      className: true
    },
    component: {
      isContainer: false
    }
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '多选框',
    screenshot: '',
    schema: {
      componentName: 'ZcMultipleCheckList',
      props: {
        label: '多选框',
        name: 'duoxuankuang',
        items: [{ content: '苹果' }, { content: '香蕉' }, { content: '橙子' }, { content: '梨' }]
      }
    }
  }
];

export default {
  ...ZcMultipleCheckListMeta,
  snippets
};
