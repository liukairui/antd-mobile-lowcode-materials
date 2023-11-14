export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '选择组' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ],
      title: '插槽容器'
    },
    messageVariables: { name: '选择组' },
    name: 'selector',
    rules: [{ required: true }],
    _unsafe_MixedSetter_name_select: 'StringSetter',
    childElementPosition: 'normal'
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'Selector',
      props: {
        columns: 3,
        options: [
          {
            label: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Text',
                  props: { content: '选项一' },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: ''
                }
              ]
            },
            value: '1'
          },
          {
            value: '2',
            label: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Text',
                  props: { content: '选项二' },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: ''
                }
              ]
            }
          },
          {
            label: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'Text',
                  props: { content: '选项三' },
                  hidden: false,
                  title: '',
                  isLocked: false,
                  condition: true,
                  conditionGroup: ''
                }
              ]
            },
            value: '3'
          }
        ],
        multiple: true
      },
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: ''
    }
  ]
};
