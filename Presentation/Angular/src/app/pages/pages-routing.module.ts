import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user',
    loadChildren:  () => import('./user-pages/user-pages.module').then( m => m.UserPagesModule),
  },
  {
    path: '',
    redirectTo: '/user'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
