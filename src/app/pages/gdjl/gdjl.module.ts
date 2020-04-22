import { NgModule } from '@angular/core';

import { gdjlComponent } from './gdjl.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { dzxxComponent } from '../dzxx/dzxx.component';
import { bgzjComponent } from '../bgzj/bgzj.component';
import { tcnrmkComponent } from '../tcnrmk/tcnrmk.component';
import { xtsyModule } from '../xtsy/xtsy.module';
// registerLocaleData(zh);
@NgModule({
  declarations: [gdjlComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    xtsyModule,
  ],

  exports: [gdjlComponent],
})
export class gdjlModule {}
