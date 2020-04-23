import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdDetailUPageRoutingModule } from './prod-detail-u-routing.module';

import { ProdDetailUPage } from './prod-detail-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdDetailUPageRoutingModule
  ],
  declarations: [ProdDetailUPage]
})
export class ProdDetailUPageModule {}
