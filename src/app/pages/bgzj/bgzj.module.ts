import { NgModule } from '@angular/core';

import { bgzjComponent } from './bgzj.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

// registerLocaleData(zh);
@NgModule({
  declarations: [bgzjComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
 

    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [bgzjComponent],
})
export class bgzjModule {}
