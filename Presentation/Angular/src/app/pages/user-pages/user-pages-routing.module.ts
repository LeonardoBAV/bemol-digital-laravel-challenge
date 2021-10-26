import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageUserComponent } from './form-page-user/form-page-user.component';
import { ListPageUserComponent } from './list-page-user/list-page-user.component';


const routes: Routes = [
  {
    path: 'form',
	  children:[
    {
      path: '',
      component: FormPageUserComponent,
    },
    {
      path: ':id',
      component: FormPageUserComponent,
    } 
    ]  
  },
  {
    path:'',
	  component: ListPageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
