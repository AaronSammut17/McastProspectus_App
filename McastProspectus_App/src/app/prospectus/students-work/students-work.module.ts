import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsWorkPageRoutingModule } from './students-work-routing.module';

import { StudentsWorkPage } from './students-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsWorkPageRoutingModule
  ],
  declarations: [StudentsWorkPage]
})
export class StudentsWorkPageModule {}
