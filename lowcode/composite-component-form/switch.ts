export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '开关' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ],
      title: '插槽容器'
    },
    messageVariables: { name: '开关' },
    name: 'switch',
    rules: [{ required: true }],
    _unsafe_MixedSetter_name_select: 'StringSetter',
    initialValue: '',
    childElementPosition: 'right'
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'Switch',
      props: {},
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: ''
    }
  ]
};
