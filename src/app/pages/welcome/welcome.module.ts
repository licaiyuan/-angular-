// import { NgModule, Component, OnInit, ViewChild } from '@angular/core';

// import { WelcomeRoutingModule } from './welcome-routing.module';

// import { WelcomeComponent } from './welcome.component';
// import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import { dzxxComponent } from '../dzxx/dzxx.component';
// import { bgzjComponent } from '../bgzj/bgzj.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   imports: [CommonModule, WelcomeRoutingModule, NgZorroAntdModule, FormsModule],
//   declarations: [WelcomeComponent, dzxxComponent, bgzjComponent],
//   exports: [WelcomeComponent, dzxxComponent, bgzjComponent],
//   bootstrap: [WelcomeComponent],
// })
// export class WelcomeModule {
//   // @ViewChild('child1')
//   // child1: dzxxComponent;
// }

import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { dzxxComponent } from '../dzxx/dzxx.component';
import { xtsyModule } from '../xtsy/xtsy.module';
import { gdjlModule } from '../gdjl/gdjl.module';
registerLocaleData(zh);
@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    xtsyModule,
    // gdjlModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [],
  // bootstrap: [WelcomeComponent],
})
export class WelcomeModule {}
