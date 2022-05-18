import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path: 'review', component:ReviewComponent}
  // {path:'Admin', component:AdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
