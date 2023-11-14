import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { handleEmptyStringExtraProps, zcFieldProps } from '../../src/utils/zero-code';

const ZcInputMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcInput',
  title: '单行输入框',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.2',
    exportName: 'ZcInput',
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
        setter: 'StringSetter',
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
        setter: 'BoolSetter'
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
    title: '单行输入框',
    screenshot: '',
    schema: {
      componentName: 'ZcInput',
      props: {
        label: '单行输入框',
        name: 'danhangshurukuang',
        placeholder: '请输入'
      }
    }
  }
];

export default {
  ...ZcInputMeta,
  snippets
};
