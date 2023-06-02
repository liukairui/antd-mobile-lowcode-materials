export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '日期选择器' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ],
      title: '插槽容器'
    },
    messageVariables: { name: '日期选择器' },
    name: 'date_picker',
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
      componentName: 'DatePicker',
      props: {
        render: {
          type: 'JSExpression',
          value: "(v) => v ? moment(v).format('YYYY-MM-DD HH:mm') : '请选择'\n"
        },
        precision: 'minute',
        renderLabel: {
          type: 'JSExpression',
          value:
            "(type, data) => {\n  const formatMap = { year: '年', month: '月', day: '日', hour: '时', minute: '分', second: '秒' };\n  return formatMap[type] ? data + formatMap[type] : data;\n}"
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
