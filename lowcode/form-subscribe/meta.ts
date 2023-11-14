import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormSubscribeMeta: IPublicTypeComponentMetadata = {
  componentName: 'FormSubscribe',
  title: '表单值订阅',
  category: '信息录入',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'FormSubscribe',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'render',
            'zh-CN': '渲染区域'
          },
          tip: {
            type: 'i18n',
            'en-US': 'render',
            'zh-CN': 'render | (changedValues: Record<string, any>, form: FormInstance) => ReactNode'
          }
        },
        name: 'render',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SlotSetter',
                initialValue: {
                  type: 'JSSlot',
                  params: ['changedValues', 'form']
                }
              },
              'FunctionSetter'
            ]
          }
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'to',
            'zh-CN': '依赖字段'
          },
          tip: {
            type: 'i18n',
            'en-US': 'to',
            'zh-CN': 'to'
          }
        },
        name: 'to',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter'
            }
          }
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
    title: '表单值订阅',
    screenshot: '',
    schema: {
      componentName: 'FormSubscribe',
      props: {}
    }
  }
];

export default {
  ...FormSubscribeMeta,
  snippets
};
