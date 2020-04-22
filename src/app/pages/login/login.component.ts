import { Component, Input, OnInit } from '@angular/core';
import { postqq } from 'src/serve.js';
import { async } from '@angular/core/testing';

import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from '../../lsy.reducer';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class loginComponent implements OnInit {
  tagState$: Observable<State>;
  private tagStateSubscription: Subscription;
  lsya: State;
  //   a: any;

  constructor(
    private store: Store<{ count: State }>,
    public router: Router,
    private message: NzMessageService
  ) {
    this.tagState$ = store.pipe(select('count'));
  }

  ngOnInit() {
    // this.a = this.store.select('count');
    var username = sessionStorage.getItem('username');
    var password = sessionStorage.getItem('password');
    username != null
      ? (this.form = { username: username, password: password })
      : '';
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.lsya = state;
      console.log(state);
    });
  }
  form = {
    username: '',
    password: '',
  };

  dl = async () => {
    console.log('cxzczx');
    await postqq(this.form, 'login').then(({ data }) => {
      console.log(data['data']);
      data['data'].zh = this.form.username;
      this.store.dispatch({
        type: 'szzh',
        zh: data['data'],
      });
      let { username, password } = this.form;
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      this.router.navigate(['/welcome/xtsy']);
      this.message.create('success', '登录成功');
    });
  };
}
