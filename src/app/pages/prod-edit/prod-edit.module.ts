import { BrMaskerModule } from 'br-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdEditPageRoutingModule } from './prod-edit-routing.module';

import { ProdEditPage } from './prod-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdEditPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [ProdEditPage]
})
export class ProdEditPageModule {}
