import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { handleEmptyStringExtraProps, zcFieldProps } from '../../src/utils/zero-code';

const ZcTextAreaMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcTextArea',
  title: '多行输入框',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.2',
    exportName: 'ZcTextArea',
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
            'en-US': 'maxLength',
            'zh-CN': '最大字符数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength'
          }
        },
        name: 'maxLength',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': '提示文字'
          },
          tip: {
            type: 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder'
          }
        },
        name: 'placeholder',
        setter: {
          componentName: 'StringSetter',
          initialValue: undefined
        },
        extraProps: handleEmptyStringExtraProps
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showCount',
            'zh-CN': '显示字数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'showCount',
            'zh-CN': 'showCount'
          }
        },
        name: 'showCount',
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
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
    title: '多行输入框',
    screenshot: '',
    schema: {
      componentName: 'ZcTextArea',
      props: {
        label: '多行输入框',
        maxLength: 100,
        name: 'duohangshurukuang',
        placeholder: '请输入',
        showCount: true
      }
    }
  }
];

export default {
  ...ZcTextAreaMeta,
  snippets
};
