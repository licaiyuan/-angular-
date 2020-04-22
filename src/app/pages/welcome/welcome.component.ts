import { Component, OnInit, ViewChild } from '@angular/core';
import { dzxxComponent } from '../dzxx/dzxx.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  // @ViewChild('child1')
  // child1: dzxxComponent;
  constructor() {}

  ngOnInit() {}

  isCollapsed = false;
  dhlb = [
    { name: '系统首页', url: 'xtsy', img: 'sy.png' },
    { name: '跟单记录', url: 'gdjl', img: 'sy.png' },
    { name: '销售明细', url: 'xsmx', img: 'sy.png' },
    { name: '订单管理', url: 'ddgl', img: 'sy.png' },
    { name: '微信管理', url: 'wxgl', img: 'sy.png' },
  ];
  xzd: '系统首页'; //选中的
}
