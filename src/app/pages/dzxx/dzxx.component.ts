import { Component, Input } from '@angular/core';

@Component({
  selector: 'dzxx-root',
  templateUrl: './dzxx.component.html',
  styleUrls: ['./dzxx.component.scss'],
})
export class dzxxComponent {
  @Input() items: any;

  @Input() cffa: any;
  @Input() xxsj: any;
  ngOnInit() {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
    console.log(result[0]);
  } //日期改变事件

  styleMethod02(val) {
    let style;
    val == 'selected'
      ? (style = {
          height: '8px',
        })
      : '';
    return style;
  } //选择p样式
}
