export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '复选框' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ]
    },
    messageVariables: { name: '复选框' },
    name: 'checkbox',
    rules: [{ required: true }],
    _unsafe_MixedSetter_name_select: 'StringSetter'
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'CheckboxGroup',
      props: {},
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: '',
      children: [
        {
          componentName: 'Checkbox',
          props: { block: true, value: '第一项', style: { marginBottom: '4px' } },
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
          componentName: 'Checkbox',
          props: { block: true, style: { marginBottom: '4px' }, value: '第二项' },
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
          componentName: 'Checkbox',
          props: { block: true, style: { marginBottom: '4px' }, value: '第三项' },
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
