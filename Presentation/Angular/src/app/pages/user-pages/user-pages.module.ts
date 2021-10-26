import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPagesRoutingModule } from './user-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components/components.module';
import { ListPageUserComponent } from './list-page-user/list-page-user.component';
import { FormPageUserComponent } from './form-page-user/form-page-user.component';
import { FormUserComponent } from 'src/app/form-user/form-user.component';
import { NgxMaskModule } from 'ngx-mask';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [ 
    ListPageUserComponent,
    FormPageUserComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
  ]
})
export class UserPagesModule { }
