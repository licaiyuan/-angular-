import { Component, Input, ViewChild } from '@angular/core';

import { bgcolumn, sydxx, khmb, ddglsj } from './sj.js';
import { getqq, putqqdg, getqqpjhm, postqq, deleteqq } from '../../../serve.js';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from '../../lsy.reducer';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'xtsy-root',
  templateUrl: './xtsy.component.html',
  styleUrls: ['./xtsy.component.scss'],
})
export class xtsyComponent {
  @ViewChild('khmk')
  // child1: dzxxComponent;
  tagState$: Observable<State>;
  private tagStateSubscription: Subscription;
  lsya: State;
  //   a: any;

  constructor(
    private store: Store<{ count: State }>,
    private message: NzMessageService
  ) {
    this.tagState$ = store.pipe(select('count'));
  }

  bgcolumn;
  sydxx;
  isVisible: boolean = false; //显示对话框
  title: string = ''; //弹窗标题
  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsya = state;
      console.log(state);
    });
    this.bgcolumn = bgcolumn;
    this.sydxx = sydxx;
    this.khmb = khmb;
    console.log(this.lsya);
    this.sylb();
  }
  dqy = 1; //当前页
  bgsj; //表格数据
  totala; //所有页数
  khmb: any;
  id; //选择得id
  xxsj = {}; //选项数据
  form = {}; //客户数据
  gjform: {}; //高级搜索数据
  ddxqsj; //订单详情数据
  //分页请求首页数据
  sylb = async () => {
    let {
      zh: { roleId, userId },
    } = this.lsya;
    let {
      data: {
        data: { records, total },
      },
    } = await getqq(
      {
        limit: 7,
        page: this.dqy,
        roleId: roleId,
        userId: userId,
        // roleId: 1,
        // userId: 1,
      },
      'customers/queryCustomerList'
    );

    this.bgsj = records;
    for (let item of this.bgsj) {
      item.address = item.xtrysf + item.xtrycs + item.xtryqy + item.detail;
    }
    this.totala = total;

    this.form = {};
  };
  //全部客户列表请求
  qbkhlb = () => {
    this.dqy = 1;
    this.sylb();
  };
  //子组件粗触发父子件操作
  cffa = ({ name, lx }) => {
    this.form = {};
    if (lx == 'bd') {
      this.isVisible = true;
      this.title = name;
      this.khmb = khmb;
    } else {
      switch (name) {
        case '全部客户列表':
          this.qbkhlb();
          break;
        case '导出':
          console.log(this.xxsj['sj'][0]);

          const map1 = this.xxsj['sj'].map((x) => {
            var d = new Date(x);
            var datetime =
              d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            console.log(datetime);
            return datetime;
          });
          console.log(
            `${this.lsya.ip}/orders/exportExcel?userId=1` +
              '&beginTime=' +
              map1[0] +
              '&endTime=' +
              map1[1] +
              '&type=' +
              this.xxsj['dclx']
          );
          window.location.href =
            `${this.lsya.ip}/orders/exportExcel?userId=1` +
            '&beginTime=' +
            map1[0] +
            '&endTime=' +
            map1[1] +
            '&type=' +
            this.xxsj['dclx'];

          break;
      }
    }
  };

  writeCurrentDate() {
    var now = new Date();
    var year: any = now.getFullYear(); //得到年份
    var month: any = now.getMonth(); //得到月份
    var date: any = now.getDate(); //得到日期
    var day: any = now.getDay(); //得到周几
    var hour: any = now.getHours(); //得到小时
    var minu: any = now.getMinutes(); //得到分钟
    var sec: any = now.getSeconds(); //得到秒
    var week;
    month = month + 1;
    if (month < 10) month = '0' + month;
    if (date < 10) date = '0' + date;
    if (hour < 10) hour = '0' + hour;
    if (minu < 10) minu = '0' + minu;
    if (sec < 10) sec = '0' + sec;

    var arr_week = new Array(
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    );
    week = arr_week[day];
    var time = '';
    time =
      year +
      '-' +
      month +
      '-' +
      date +
      '-' +
      ' ' +
      hour +
      ':' +
      minu +
      ':' +
      sec +
      ' ';
    return time;
  }

  //新增客户
  xzkh = async () => {
    let {
      zh: { roleId, userId, roleName, zh },
    } = this.lsya;

    this.form['userId'] = userId;
    this.form['billingPerson'] = zh;
    this.form['updateTime'] = this.writeCurrentDate();
    this.form['billingPerson'] = zh;
    this.form['address'] = { xtrysf: '', xtrycs: '', detail: '' };
    await postqq(this.form, 'customers').then((val) => {
      console.log(val);
      this.dqy = 1;
      this.sylb();
    });
  };
  //切换页数
  qh = (value) => {
    console.log(value);
    this.dqy = value;
    this.sylb();
  };
  //高级操作按钮
  gj = ({ data, item: { name } }) => {
    let { billingPerson, wangwang, id } = data;
    console.log(data);
    switch (name) {
      case '新增订单':
        this.isVisible = true;
        this.title = name;
        this.khmb = ddglsj;
        let {
          zh: { roleId, userId },
        } = this.lsya;
        this.form = {
          ...{
            salemanName: billingPerson,
            wangwang: wangwang,
            customerId: id,
            updateTime: this.writeCurrentDate(),
            userId: userId,
          },
          ...this.form,
        };
        console.log(this.form);
        break;
      case '删除订单':
        this.scdd(id);
        break;
      case '订单详情':
        this.isVisible = true;
        this.title = name;
        this.ddxq(id);
        break;
      case '编辑订单':
        this.isVisible = true;
        this.title = name;
        this.khmb = khmb;
        data.address = {
          xtrysf: data['xtrysf'],
          xtrycs: data['xtrycs'],
          xtryqy: data['xtryqy'],
        };
        this.form = data;
        this.id = id;
        break;
    }
  };
  //订单详情
  ddxq = async (id) => {
    await getqqpjhm(id, 'customers').then(({ data: { data } }) => {
      console.log(data);
      data.address = data.xtrysf + data.xtrycs + data.xtryqy + data.detail;
      this.khmb = bgcolumn['pt'].map((val) => {
        val['type'] = 'text';
        val['label'] = val['name'];

        for (var p in data) {
          val.prop == p ? (val['value'] = data[p] == null ? '' : data[p]) : '';
        }
        return val;
      });
      this.khmb.pop();
      console.log(this.khmb);
    });
  };
  //删除订单
  scdd = async (val) => {
    await deleteqq(val, 'customers').then((val) => {
      this.dqy = 1;
      this.sylb();
    });
  };
  //关闭弹窗
  handleCancel(): void {
    this.isVisible = false;
  }
  //新增订单
  xzdd = async () => {
    let res = await postqq(this.form, 'orders');
    this.message.create('success', '新增订单成功');
    this.form = {};
  };
  //高级搜索
  gjsl = async () => {
    this.isVisible = false;
    let {
      zh: { roleId, userId, roleName, zh },
    } = this.lsya;
    this.gjform = this.form;
    console.log(this.gjform);
    this.gjform['userId'] = userId;
    this.gjform['limit'] = 7;
    this.gjform['page'] = this.dqy;

    await postqq(this.gjform, 'customers/search').then(
      ({
        data: {
          data: { records, total },
        },
      }) => {
        console.log(records);
        this.bgsj = records;
        for (let item of this.bgsj) {
          item.address = item.xtrysf + item.xtrycs + item.xtryqy + item.detail;
        }
        this.totala = total;
      }
    );
    this.message.create('success', '搜索完毕');
  };
  //编辑订单确定
  bjdd = async () => {
    await putqqdg(this.id, 'customers', this.form).then((val) => {
      console.log(val);
      this.message.create('success', '编辑订单成功');
      this.sylb();
    });
  };
  //弹框确定
  handleOk(): void {
    this.isVisible = false;
    console.log(this.form);
    switch (this.title) {
      case '新增客户':
        this.xzkh();
        break;
      case '高级搜索':
        this.gjsl();
        break;
      case '新增订单':
        this.xzdd();
        break;
      case '编辑订单':
        this.bjdd();
        break;
    }
  }
}
