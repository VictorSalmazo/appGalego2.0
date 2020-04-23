import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdAddPage } from './prod-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProdAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdAddPageRoutingModule {}
