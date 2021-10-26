import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { UserPagesModule } from './user-pages/user-pages.module';


@NgModule({
  declarations: [ 
	],
  imports: [
    CommonModule,
	  UserPagesModule,
    PagesRoutingModule,
    ComponentsModule
  ],
  exports:[
    MatIconModule
  ],
  
})
export class PagesModule { }