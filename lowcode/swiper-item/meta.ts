import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SwiperItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'SwiperItem',
  title: '走马灯项',
  category: '信息展示',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SwiperItem',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
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
            'zh-CN': 'onClick | (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'
          }
        },
        name: 'onClick',
        setter: {
          componentName: 'FunctionSetter'
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
    title: '走马灯项',
    screenshot: '',
    schema: {
      componentName: 'SwiperItem',
      props: {}
    }
  }
];

export default {
  ...SwiperItemMeta,
  snippets
};
