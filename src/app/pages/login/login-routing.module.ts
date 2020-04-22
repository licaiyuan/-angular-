import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginComponent } from './login.component';

const routes: Routes = [{ path: '', component: loginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class loginRoutingModule {}
