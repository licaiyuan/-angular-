import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { xtsyComponent } from '../xtsy/xtsy.component';
import { gdjlComponent } from '../gdjl/gdjl.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'xtsy',
        component: xtsyComponent,
        // loadChildren: () => import('../xtsy/xtsy.module').then((m) => m.xtsyModule),
      },
      {
        path: 'gdjl',
        component: gdjlComponent,
        // loadChildren: () => import('../xtsy/xtsy.module').then((m) => m.xtsyModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
