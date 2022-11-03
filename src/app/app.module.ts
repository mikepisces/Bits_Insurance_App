import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './admin/users/add-customer/add-customer.component';
import { ViewCustomerComponent } from './admin/users/view-customer/view-customer.component';
// import { InsuranceComponent } from './policy/view-insurance/view-insurance.component';
import { OverviewComponent } from './overview/overview.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { ViewManagerComponent } from './admin/manager/view-manager/view-manager.component';
import { AddAgentComponent } from './admin/agent/add-agent/add-agent.component';
import { ViewAgentComponent } from './admin/agent/view-agent/view-agent.component';
import { AddInsuranceComponent } from './policy/add-insurance/add-insurance.component';
import { ViewInsuranceComponent } from './policy/view-insurance/view-insurance.component';
import { ViewPolicyComponent } from './admin/policy/view-policy/view-policy.component';
import { AddPolicyComponent } from './admin/policy/add-policy/add-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    AddInsuranceComponent,
    ViewInsuranceComponent,
    OverviewComponent,
    AddManagerComponent,
    ViewManagerComponent,
    AddAgentComponent,
    ViewAgentComponent,
    ViewPolicyComponent,
    AddPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
