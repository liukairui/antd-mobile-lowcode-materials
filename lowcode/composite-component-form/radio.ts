export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '单选框' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ]
    },
    messageVariables: { name: '单选框' },
    name: 'radio',
    rules: [{ required: true }],
    _unsafe_MixedSetter_name_select: 'StringSetter',
    initialValue: ''
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'RadioGroup',
      props: {},
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Radio',
          props: {
            block: true,
            value: '第一项',
            style: { marginBottom: '4px' }
          },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Text',
              props: { content: '第一项' },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: ''
            }
          ]
        },
        {
          componentName: 'Radio',
          props: {
            block: true,
            value: '第二项',
            style: { marginBottom: '4px' }
          },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Text',
              props: { content: '第二项' },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: ''
            }
          ]
        },
        {
          componentName: 'Radio',
          props: { block: true, value: '第三项', style: {} },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Text',
              props: { content: '第三项' },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: ''
            }
          ]
        }
      ]
    }
  ]
};
