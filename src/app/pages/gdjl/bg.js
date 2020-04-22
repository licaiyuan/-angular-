//顶部选择模板
let sydxx = [
  { name: "客户旺旺", type: "input", prop: "wangwang" },
  {
    name: "跟单进度:",
    type: "selected",
    prop: "process",
    xlxx: [
      { name: "无意向", value: "" },
      { name: "有意向", value: "有意向" },
      { name: "已下单", value: "已下单" },
    ],
  },
  { name: "下次联系:", type: "datepick", prop: "nextLinktime" },
  { name: "查询", type: "button", lx: "fbd" },
];
//表格模块
let bgcolumn = {
  pt: [
    {
      name: "客户旺旺",
      prop: "wangwang",
      type: "input",
      sjlx: "text",
    },
    {
      name: "跟单时间",
      prop: "followTime",
      type: "date",
    },
    {
      name: "跟单类型",
      prop: "wangtypewang",
      type: "input",
      sjlx: "text",
    },
    {
      name: "跟单进度",
      prop: "process",
      type: "xlk",
      options: [
        {
          value: "无意向",
          label: "无意向",
        },
        {
          value: "有意向",
          label: "有意向",
        },
        {
          value: "已下单",
          label: "已下单",
        },
      ],
    },

    {
      name: "下次联系",
      prop: "nextLinktime",
      type: "date",
    },
    {
      name: "联系人",
      prop: "linkMan",
      type: "input",
      sjlx: "text",
    },
    {
      name: "详情备注",
      prop: "remark",
      type: "inputarea",
      sjlx: "text",
    },
    {
      name: "操作",
      prop: "cz",
    },
  ],
  gj: [
    {
      icon: "delete",
      name: "删除跟单",
    },
    {
      icon: "edit",
      name: "编辑跟单",
    },
  ],
};
export { sydxx, bgcolumn };
