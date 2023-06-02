export default {
  componentName: 'FormItem',
  props: {
    label: {
      type: 'JSSlot',
      value: [
        {
          componentName: 'Text',
          props: { content: '级联选择器' },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: ''
        }
      ],
      title: '插槽容器'
    },
    messageVariables: { name: '级联选择器' },
    name: 'cascade-picker',
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
      componentName: 'CascadePicker',
      props: {
        options: {
          type: 'JSExpression',
          value:
            "[\n  {\n    label: '浙江',\n    value: '浙江',\n    children: [\n      {\n        label: '杭州',\n        value: '杭州',\n        children: [\n          {\n            label: '西湖区',\n            value: '西湖区'\n          },\n          {\n            label: '上城区',\n            value: '上城区'\n          },\n          {\n            label: '余杭区',\n            value: '余杭区',\n            disabled: true\n          }\n        ]\n      },\n      {\n        label: '温州',\n        value: '温州',\n        children: [\n          {\n            label: '鹿城区',\n            value: '鹿城区'\n          },\n          {\n            label: '龙湾区',\n            value: '龙湾区',\n            disabled: true\n          },\n          {\n            label: '瓯海区',\n            value: '瓯海区'\n          }\n        ]\n      },\n      {\n        label: '宁波',\n        value: '宁波',\n        children: [\n          {\n            label: '海曙区',\n            value: '海曙区'\n          },\n          {\n            label: '江北区',\n            value: '江北区'\n          },\n          {\n            label: '镇海区',\n            value: '镇海区'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    label: '安徽',\n    value: '安徽',\n    children: [\n      {\n        label: '合肥',\n        value: '合肥',\n        children: [\n          {\n            label: '包河区',\n            value: '包河区'\n          },\n          {\n            label: '蜀山区',\n            value: '蜀山区'\n          },\n          {\n            label: '瑶海区',\n            value: '瑶海区'\n          }\n        ]\n      },\n      {\n        label: '芜湖',\n        value: '芜湖',\n        children: [\n          {\n            label: '镜湖区',\n            value: '镜湖区'\n          },\n          {\n            label: '弋江区',\n            value: '弋江区'\n          },\n          {\n            label: '湾沚区',\n            value: '湾沚区'\n          }\n        ]\n      }\n    ]\n  },\n  {\n    label: '江苏',\n    value: '江苏',\n    children: [\n      {\n        label: '南京',\n        value: '南京',\n        children: [\n          {\n            label: '玄武区',\n            value: '玄武区'\n          },\n          {\n            label: '秦淮区',\n            value: '秦淮区'\n          },\n          {\n            label: '建邺区',\n            value: '建邺区'\n          }\n        ]\n      },\n      {\n        label: '苏州',\n        value: '苏州',\n        children: [\n          {\n            label: '虎丘区',\n            value: '虎丘区'\n          },\n          {\n            label: '吴中区',\n            value: '吴中区'\n          },\n          {\n            label: '相城区',\n            value: '相城区'\n          }\n        ]\n      }\n    ]\n  }\n]"
        },
        render: {
          type: 'JSExpression',
          value: "(v) => v && v.length ? v.map(i => i.label).join(' ') : '请选择'"
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
