import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdAddPageRoutingModule } from './prod-add-routing.module';

import { ProdAddPage } from './prod-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdAddPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [ProdAddPage]
})
export class ProdAddPageModule {}
