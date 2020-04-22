import { NgModule, Component, OnInit, ViewChild } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { xtsyComponent } from '../xtsy/xtsy.component';
import { xtsyRoutingModule } from './xtsy-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dzxxComponent } from '../dzxx/dzxx.component';
import { bgzjComponent } from '../bgzj/bgzj.component';
import { tcnrmkComponent } from '../tcnrmk/tcnrmk.component';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, FormsModule, xtsyRoutingModule],
  declarations: [xtsyComponent, dzxxComponent, bgzjComponent, tcnrmkComponent],
  exports: [xtsyComponent, dzxxComponent, bgzjComponent, tcnrmkComponent],
})
export class xtsyModule {}
