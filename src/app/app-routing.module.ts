import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InsuranceComponent } from './policy/view-insurance/view-insurance.component';
import { OverviewComponent } from './overview/overview.component';
import { ViewManagerComponent } from './admin/manager/view-manager/view-manager.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { AddAgentComponent } from './admin/agent/add-agent/add-agent.component';
import { ViewAgentComponent } from './admin/agent/view-agent/view-agent.component';
import { AddCustomerComponent } from './admin/users/add-customer/add-customer.component';
import { ViewCustomerComponent } from './admin/users/view-customer/view-customer.component';
import { AddInsuranceComponent } from './policy/add-insurance/add-insurance.component';
import { ViewInsuranceComponent } from './policy/view-insurance/view-insurance.component';
import { ViewPolicyComponent } from './admin/policy/view-policy/view-policy.component';
import { AddPolicyComponent } from './admin/policy/add-policy/add-policy.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'home', component: OverviewComponent },
  { path: 'admin/view-insurance', component: ViewInsuranceComponent },
  { path: 'admin/add-insurance', component: AddInsuranceComponent },
  { path: 'admin/edit-insurance/:id', component: AddInsuranceComponent },
  // { path: 'admin/users', component: UsersComponent },
  { path: 'admin/view-customers', component: ViewCustomerComponent },
  { path: 'admin/add-customer', component: AddCustomerComponent },
  { path: 'admin/edit-customer/:id', component: AddCustomerComponent },
  { path: 'admin/view-manager', component: ViewManagerComponent },
  { path: 'admin/add-manager', component: AddManagerComponent },
  { path: 'admin/edit-manager/:id', component: AddManagerComponent },
  { path: 'admin/view-agent', component: ViewAgentComponent },
  { path: 'admin/add-agent', component: AddAgentComponent },
  { path: 'admin/edit-agent/:id', component: AddAgentComponent },
  { path: 'admin/view-policies', component: ViewPolicyComponent },
  { path: 'admin/add-policies', component: AddPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
