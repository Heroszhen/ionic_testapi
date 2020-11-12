import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[MenuComponent]})
export class MenuModule { }
