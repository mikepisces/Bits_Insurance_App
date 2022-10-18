import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { InsuranceComponent } from './admin/insurance/insurance.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
   { path: 'home', component: OverviewComponent},
   { path: 'admin/view-insurance', component: InsuranceComponent },
   { path: 'admin/users', component: UsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
