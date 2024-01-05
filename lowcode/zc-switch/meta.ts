import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { zcFieldProps } from '../../src/utils/zero-code';

const ZcSwitchMeta: IPublicTypeComponentMetadata = {
  componentName: 'ZcSwitch',
  title: '零代码-开关',
  group: '零代码组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.3.1',
    exportName: 'ZcSwitch',
    main: 'src/index.tsx',
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
            'en-US': 'loading',
            'zh-CN': '加载中'
          }
        },
        name: 'loading',
        setter: 'BoolSetter'
      }
    ],
    supports: {
      style: true
    },
    component: {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '零代码-开关',
    screenshot: '',
    schema: {
      componentName: 'ZcSwitch',
      props: {
        label: '开关',
        name: 'kaiguan'
      }
    }
  }
];

export default {
  ...ZcSwitchMeta,
  snippets
};
