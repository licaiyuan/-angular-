import { NgModule, Component, OnInit, ViewChild } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { loginComponent } from '../login/login.component';
import { loginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule, FormsModule, loginRoutingModule],
  declarations: [loginComponent],
  exports: [loginComponent],
})
export class loginModule {
  // @ViewChild('child1')
  // child1: dzxxComponent;
}
