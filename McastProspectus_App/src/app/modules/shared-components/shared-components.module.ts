import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/prospectus/header/header.component';



@NgModule({
  // We are declaring a definition for all of our custom components.
  declarations: [
    HeaderComponent
  ],
  // Preloads the custom components.
  entryComponents: [
    HeaderComponent
  ],
  // Makes the custom components accessible to any page that needs them.
  exports: [
    HeaderComponent
  ],
  imports: [
    // Allows us to use Ionic tags inside our custom components.
    IonicModule,
    CommonModule
  ]
})
export class SharedComponentsModule { }
