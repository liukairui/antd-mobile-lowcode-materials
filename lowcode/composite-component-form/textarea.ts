export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '文本域' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ]
    },
    messageVariables: { name: '文本域' },
    name: 'textarea',
    rules: [{ required: true, max: 100 }],
    _unsafe_MixedSetter_name_select: 'StringSetter'
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'TextArea',
      props: {
        maxLength: 100,
        placeholder: '请输入',
        showCount: true
      },
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: ''
    }
  ]
};
