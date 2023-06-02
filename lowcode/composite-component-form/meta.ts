import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import cascadePickerSchema from './cascade-picker';
import cascaderSchema from './cascader';
import checkboxSchema from './checkbox';
import datePickerSchema from './date-picker';
import formSchema from './form';
import inputSchema from './input';
import pickerSchema from './picker';
import radioSchema from './radio';
import selectorSchema from './selector';
import switchSchema from './switch';
import textareaSchema from './textarea';

const CompositeComponentFormMeta: IPublicTypeComponentMetadata = {
  componentName: 'CompositeComponentForm',
  category: '表单',
  group: '复合组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'antd-mobile-lowcode-materials',
    version: '0.1.0',
    exportName: 'CompositeComponentForm',
    destructuring: true,
    subName: ''
  },
  snippets: [
    {
      title: '表单',
      screenshot: '',
      schema: formSchema
    },
    {
      title: '输入框',
      screenshot: '',
      schema: inputSchema
    },
    {
      title: '文本域',
      screenshot: '',
      schema: textareaSchema
    },
    {
      title: '单选框',
      screenshot: '',
      schema: radioSchema
    },
    {
      title: '复选框',
      screenshot: '',
      schema: checkboxSchema
    },
    {
      title: '开关',
      screenshot: '',
      schema: switchSchema
    },
    {
      title: '选择组',
      screenshot: '',
      schema: selectorSchema
    },
    {
      title: '选择器',
      screenshot: '',
      schema: pickerSchema
    },
    {
      title: '级联选择器',
      screenshot: '',
      schema: cascadePickerSchema
    },
    {
      title: '日期选择器',
      screenshot: '',
      schema: datePickerSchema
    },
    {
      title: '级联选择',
      screenshot: '',
      schema: cascaderSchema
    }
  ]
};

export default CompositeComponentFormMeta;
