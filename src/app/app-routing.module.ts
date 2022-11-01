import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { InsuranceComponent } from './admin/insurance/insurance.component';
import { OverviewComponent } from './overview/overview.component';
import { ViewManagerComponent } from './admin/manager/view-manager/view-manager.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { AddAgentComponent } from './admin/agent/add-agent/add-agent.component';
import { ViewAgentComponent } from './admin/agent/view-agent/view-agent.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'home', component: OverviewComponent },
  { path: 'admin/view-insurance', component: InsuranceComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/view-manager', component: ViewManagerComponent },
  { path: 'admin/add-manager', component: AddManagerComponent },
  { path: 'admin/edit-manager/:id', component: AddManagerComponent },
  { path: 'admin/view-agent', component: ViewAgentComponent },
  { path: 'admin/add-agent', component: AddAgentComponent },
  { path: 'admin/edit-agent/:id', component: AddAgentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
