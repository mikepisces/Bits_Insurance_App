import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { InsuranceComponent } from './admin/insurance/insurance.component';
import { OverviewComponent } from './overview/overview.component';
import { AgentsComponent } from './admin/agents/agents.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
   { path: 'home', component: OverviewComponent},
   { path: 'admin/view-insurance', component: InsuranceComponent },
   { path: 'admin/customers', component: UsersComponent },
   { path: 'admin/agents', component: AgentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
