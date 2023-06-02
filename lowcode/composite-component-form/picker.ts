export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '选择器' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ],
      title: '插槽容器'
    },
    messageVariables: { name: '选择器' },
    name: 'picker',
    rules: [{ required: true }],
    _unsafe_MixedSetter_name_select: 'StringSetter',
    childElementPosition: 'normal',
    _unsafe_MixedSetter_initialValue_select: 'VariableSetter',
    clickable: false,
    onClick: {
      type: 'JSExpression',
      value: '(_, ref) => {\n  ref.current.ref.current.open()\n}'
    },
    trigger: 'onConfirm'
  },
  hidden: false,
  title: '表单项',
  isLocked: false,
  condition: true,
  conditionGroup: '',
  children: [
    {
      componentName: 'Picker',
      props: {
        columns: [
          [
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '周一' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'Mon'
            },
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '周二' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'Tues'
            },
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '周三' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'Wed'
            },
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '周四' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'Thur'
            },
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '周五' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'Fri'
            }
          ],
          [
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '上午' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'am'
            },
            {
              label: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'Text',
                    props: { content: '下午' },
                    hidden: false,
                    title: '',
                    isLocked: false,
                    condition: true,
                    conditionGroup: ''
                  }
                ],
                title: '插槽容器'
              },
              value: 'pm'
            }
          ]
        ],
        render: {
          type: 'JSExpression',
          value: "(v) => v && v.length ? v.map(i => i.label.props.content).join(' ') : '请选择'"
        }
      },
      hidden: false,
      title: '',
      isLocked: false,
      condition: true,
      conditionGroup: ''
    }
  ]
};
