import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Skeleton',
  title: '骨架屏',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'Skeleton',
    destructuring: true,
    subName: ''
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'animated',
            'zh-CN': '动画'
          },
          tip: {
            type: 'i18n',
            'en-US': 'animated',
            'zh-CN': 'animated'
          }
        },
        name: 'animated',
        setter: 'BoolSetter'
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
    title: '骨架屏',
    screenshot: '',
    schema: {
      componentName: 'Skeleton',
      props: {}
    }
  }
];

export default {
  ...SkeletonMeta,
  snippets
};
