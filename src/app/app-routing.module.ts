import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './index/main/main.component';
import { NgModule } from '@angular/core';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    component: MainComponent,
  },
  {
    path: 'index/admin',
    component: VerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
