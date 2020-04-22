import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { xtsyComponent } from './xtsy.component';

const routes: Routes = [{ path: '', component: xtsyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class xtsyRoutingModule {}
