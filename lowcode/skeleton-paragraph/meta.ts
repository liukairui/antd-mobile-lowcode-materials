import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const SkeletonParagraphMeta: IPublicTypeComponentMetadata = {
  componentName: 'SkeletonParagraph',
  title: '段落骨架屏',
  category: '反馈',
  group: '原子组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'SkeletonParagraph',
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
        setter: {
          componentName: 'BoolSetter',
          initialValue: undefined
        }
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'lineCount',
            'zh-CN': '行数'
          },
          tip: {
            type: 'i18n',
            'en-US': 'lineCount',
            'zh-CN': 'lineCount'
          }
        },
        name: 'lineCount',
        setter: {
          componentName: 'NumberSetter',
          initialValue: undefined
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
    title: '段落骨架屏',
    screenshot: '',
    schema: {
      componentName: 'SkeletonParagraph',
      props: {}
    }
  }
];

export default {
  ...SkeletonParagraphMeta,
  snippets
};
