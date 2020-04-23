import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdEditPage } from './prod-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProdEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdEditPageRoutingModule {}
