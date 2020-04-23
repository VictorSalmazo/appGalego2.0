import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdListUPage } from './prod-list-u.page';

const routes: Routes = [
  {
    path: '',
    component: ProdListUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdListUPageRoutingModule {}
