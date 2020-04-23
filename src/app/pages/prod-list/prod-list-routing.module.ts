import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdListPage } from './prod-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProdListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdListPageRoutingModule {}
