//顶部选择模板
let sydxx = [
  { name: '高级搜索', type: 'button', lx: 'bd' },
  { name: '新增客户', type: 'button', lx: 'bd' },
  { name: '全部客户列表', type: 'button', lx: 'fbd' },
  { name: '导出时间范围:', type: 'datepick', prop: 'sj' },
  {
    name: '导出类型:',
    type: 'selected',
    prop: 'dclx',
    xlxx: [
      { name: '全部', value: '' },
      { name: '微信老客户', value: '微信老客户' },
      { name: '天猫老客户', value: '天猫老客户' },
    ],
  },
  { name: '导出', type: 'button', lx: 'fbd' },
  { name: '导入', type: 'upload', lx: 'fbd' },
];
//表格模板
let bgcolumn = {
  pt: [
    {
      name: '姓名',
      prop: 'customername',
    },
    {
      name: '客户旺旺 ',
      prop: 'wangwang',
    },
    {
      name: '性别 ',
      prop: 'gender',
    },
    {
      name: '电话 ',
      prop: 'tel',
    },
    {
      name: '粉丝级别 ',
      prop: 'fansLevel',
    },
    {
      name: '购买能力 ',
      prop: 'purchaseAbility',
    },
    {
      name: '忌口',
      prop: 'hate',
    },
    {
      name: '购买偏好',
      prop: 'likeProduct',
    },
    {
      name: '拍单类型',
      prop: 'source',
    },

    {
      name: '购买时间',
      prop: 'purchaseTime',
    },
    {
      name: '购买金额',
      prop: 'purchaseMoney',
    },
    {
      name: '客户体验',
      prop: 'customerFeel',
    },
    {
      name: '消耗时间(天)',
      prop: 'useTime',
    },
    {
      name: '开单微信号',
      prop: 'wechatNo',
    },
    {
      name: '产品名称',
      prop: 'productName',
    },
    {
      name: '数量',
      prop: 'number',
    },
    {
      name: '地址',
      prop: 'address',
    },
    {
      name: '操作',
      prop: 'cz',
    },
  ],
  gj: [
    {
      icon: 'plus',
      name: '新增订单',
    },
    {
      icon: 'question',
      name: '订单详情',
    },
    {
      icon: 'delete',
      name: '删除订单',
    },
    {
      icon: 'edit',
      name: '编辑订单',
    },
  ],
};
//客户模板
let khmb = [
  {
    label: '姓名',
    prop: 'customername',
    type: 'input',
    sjlx: 'text',
  },
  {
    label: '性别',
    prop: 'gender',
    type: 'dxk',
    options: ['男', '女'],
  },
  {
    label: '客户旺旺',
    prop: 'wangwang',
    type: 'input',
    sjlx: 'text',
  },

  {
    label: '体重',
    prop: 'weight',
    type: 'input',
    sjlx: 'number',
  },
  {
    label: '电话',
    prop: 'tel',
    type: 'input',
    sjlx: 'tel',
  },

  {
    label: '粉丝福利',
    prop: 'fanWelware',
    type: 'input',
    sjlx: 'text',
  },
  {
    label: '粉丝级别',
    prop: 'fansLevel',
    type: 'xlk',

    options: [
      {
        value: '新粉',
        label: '新粉',
      },
      {
        value: '铁粉',
        label: '铁粉',
      },
      {
        value: '钻粉',
        label: '钻粉',
      },
      {
        value: '挚爱粉',
        label: '挚爱粉',
      },
    ],
  },
  {
    label: '拍单类型',
    prop: 'source',
    type: 'xlk',
    options: [
      {
        value: '微信老客户',
        label: '微信老客户',
      },
      {
        value: '天猫客户',
        label: '天猫客户',
      },
    ],
  },
  {
    label: '购买能力',
    prop: 'purchaseAbility',
    type: 'input',
    sjlx: 'text',
  },

  {
    label: '忌口',
    prop: 'hate',
    type: 'input',
    sjlx: 'text',
  },
  {
    label: '购买偏好',
    prop: 'likeProduct',
    type: 'input',
    sjlx: 'number',
  },
  {
    label: '购买时间',
    prop: 'purchaseTime',
    type: 'date',
  },

  {
    label: '购买金额(元)',
    prop: 'purchaseMoney',
    type: 'input',
    sjlx: 'number',
  },
  {
    label: '客户体验',
    prop: 'customerFeel',
    type: 'input',
    sjlx: 'text',
  },
  {
    label: '消耗时间(天)',
    prop: 'useTime',
    type: 'input',
    sjlx: 'number',
  },
  {
    label: '开单微信号',
    prop: 'wechatNo',
    type: 'input',
    sjlx: 'text',
  },
  // {
  //   label: "开单人员",
  //   prop: "billingPerson"
  // },
  {
    label: '产品名称',
    prop: 'productName',
    type: 'input',
    sjlx: 'text',
  },
  {
    label: '数量',
    prop: 'number',
    type: 'input',
    sjlx: 'number',
  },
  {
    label: '地址',
    prop: 'detail',
    type: 'input',
    sjlx: 'text',
  },
];
let ddglsj = [
  {
    prop: 'useTime',
    label: '消耗时间(天)',
    type: 'input',
    sjlx: 'number',
  },
  //   {
  //     prop: 'index',
  //     label: '序号',
  //   },
  //   {
  //     prop: 'wangwang',
  //     label: '客户旺旺',
  //   },
  {
    prop: 'trackNo',
    label: '订单编号',
    type: 'input',
    sjlx: 'text',
  },
  {
    prop: 'orderTime',
    label: '下单日期',
    type: 'date',
  },
  //   {
  //     prop: 'endOrderTime',
  //     label: '交单日期',
  //   },
  {
    prop: 'productName',
    label: '产品名称',
    type: 'input',
    sjlx: 'text',
  },

  {
    prop: 'type',
    label: '拍货类型',
    type: 'xlk',
    options: [
      {
        value: '微信老客户',
        label: '微信老客户',
      },
      {
        value: '天猫客户',
        label: '天猫客户',
      },
    ],
  },

  {
    prop: 'count',
    label: '数量',
    type: 'input',
    sjlx: 'number',
  },
  {
    prop: 'customerFeel',
    label: '客户体验',
    type: 'input',
    sjlx: 'text',
  },
  //   {
  //     prop: 'isProcess',
  //     label: '处理结果',
  //   },
  {
    prop: 'money',
    label: '金额(元）',
    type: 'input',
    sjlx: 'number',
  },
  {
    prop: 'profit',
    label: '利润(元）',
    type: 'input',
    sjlx: 'number',
  },
  //   {
  //     prop: 'salemanName',
  //     label: '业务员',
  //   },
  {
    prop: 'remark',
    label: '备注',
    type: 'inputarea',
    sjlx: 'text',
  },
];
export { sydxx, bgcolumn, khmb, ddglsj };
