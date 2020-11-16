import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {RepoComponent} from './repo/repo.component';

const routes: Routes = [
 {path: 'User', component:'./user/user.component'},
 { path: 'Repo', component: './repo/repo.component'},
 {path:'', redirectTo:'/User', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
