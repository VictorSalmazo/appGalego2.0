import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdListUPageRoutingModule } from './prod-list-u-routing.module';

import { ProdListUPage } from './prod-list-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdListUPageRoutingModule
  ],
  declarations: [ProdListUPage]
})
export class ProdListUPageModule {}
