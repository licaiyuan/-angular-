import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private message: NzMessageService) {}
  isCollapsed = false;
  dhlb = [
    { name: '系统首页', url: '', img: 'sy.png' },
    { name: '跟单记录', url: '', img: 'sy.png' },
    { name: '销售明细', url: '', img: 'sy.png' },
    { name: '订单管理', url: '', img: 'sy.png' },
    { name: '微信管理', url: '', img: 'sy.png' },
  ];
}
