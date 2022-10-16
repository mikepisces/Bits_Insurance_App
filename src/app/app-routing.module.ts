import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { InsuranceComponent } from './admin/insurance/insurance.component';

const routes: Routes = [
   { path: 'admin/view-insurance', component: InsuranceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
