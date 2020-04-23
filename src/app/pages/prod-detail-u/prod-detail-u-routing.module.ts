import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdDetailUPage } from './prod-detail-u.page';

const routes: Routes = [
  {
    path: '',
    component: ProdDetailUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdDetailUPageRoutingModule {}
