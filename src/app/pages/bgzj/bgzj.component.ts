import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bgzj-root',
  templateUrl: './bgzj.component.html',
  styleUrls: ['./bgzj.component.scss'],
})
export class bgzjComponent {
  @Input() bgcolumn: any;
  @Input() total: number;
  @Input() x: any;
  @Input() listOfData: any;
  @Output() qhys = new EventEmitter<number>();
  @Output() czsj = new EventEmitter<any>(); //操作数据按钮
  // dyqs: number = 1; //当前页数
  ngOnInit() {}
  //页数改变函数
  ysgb = (page) => {
    this.qhys.emit(page);
  };
  //高级操作
  gjcz = (data, item) => {
    this.czsj.emit({ data: data, item: item });
  };
}
