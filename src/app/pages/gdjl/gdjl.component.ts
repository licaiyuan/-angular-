import { Component, Input, Output, EventEmitter } from '@angular/core';
import { sydxx, bgcolumn } from './bg.js';
import { getqq, putqqdg, getqqpjhm, postqq, deleteqq } from '../../../serve.js';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from '../../lsy.reducer';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'gdjl-root',
  templateUrl: './gdjl.component.html',
  styleUrls: ['./gdjl.component.scss'],
})
export class gdjlComponent {
  tagState$: Observable<State>;
  private tagStateSubscription: Subscription;
  lsya: State;
  sydxx;
  xxsj = { nextLinktime: '', process: '', wangwang: '' }; //选项数据
  bgsj; //表格数据
  dqy: number = 1; //当前页
  total: number; //总数
  bgcolumn; //表格模式
  isVisible: boolean = false; //显示对话框
  title: string = ''; //弹窗标题
  gdmb; //跟单模板
  form = {}; //弹窗数据
  id: any; //跟单id
  constructor(
    private store: Store<{ count: State }>,
    private message: NzMessageService
  ) {
    this.tagState$ = store.pipe(select('count'));
  }
  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsya = state;
      console.log(state);
    });
    this.sydxx = sydxx;
    this.cxbgsj();
    this.bgcolumn = bgcolumn;
  }
  //查询表格数据
  cxbgsj = async () => {
    let {
      zh: { roleId, userId },
    } = this.lsya;
    let { nextLinktime, process, wangwang } = this.xxsj;
    await postqq(
      {
        limit: 7,
        page: this.dqy,
        userId: userId,
        nextLinktime: nextLinktime,
        process: process,
        wangwang: wangwang,
      },
      'order-follows/list'
    ).then(
      ({
        data: {
          data: { records, total },
        },
      }) => {
        console.log(records);
        this.bgsj = records;
        this.total = total;
      }
    );
  };
  //子组件粗触发父子件操作
  cffa = ({ name, lx }) => {
    console.log(name);
    switch (name) {
      case '查询':
        this.dqy = 1;
        this.cxbgsj();
        break;
    }
  };
  //关闭弹窗
  handleCancel(): void {
    this.isVisible = false;
  }
  //跟单编辑确定
  gdbj = async () => {
    putqqdg(this.id, 'order-follows', this.form);
    this.message.create('success', '修改成功');
    this.cxbgsj();
  };
  //弹框确定
  handleOk(): void {
    this.isVisible = false;
    switch (this.title) {
      case '编辑跟单':
        this.gdbj();
        break;
    }
  }
  //高级操作
  gj = ({ data, item: { name } }) => {
    console.log(data);
    this.title = name;
    switch (name) {
      case '编辑跟单':
        this.isVisible = true;
        this.gdmb = bgcolumn['pt'].map((val) => {
          val['label'] = val['name'];
          return val;
        });
        this.gdmb.pop();
        this.form = data;
        this.id = data.orderFollowId;
        break;
    }
    console.log(name);
  };
  //切换页数
  qh = (value) => {
    console.log(value);
    this.dqy = value;
    this.cxbgsj();
  };
}
