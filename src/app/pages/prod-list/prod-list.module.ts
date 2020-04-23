import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdListPageRoutingModule } from './prod-list-routing.module';

import { ProdListPage } from './prod-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdListPageRoutingModule
  ],
  declarations: [ProdListPage]
})
export class ProdListPageModule {}
