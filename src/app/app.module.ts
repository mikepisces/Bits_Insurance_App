import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { InsuranceComponent } from './admin/insurance/insurance.component';
import { OverviewComponent } from './overview/overview.component';
import { AddManagerComponent } from './admin/manager/add-manager/add-manager.component';
import { ViewManagerComponent } from './admin/manager/view-manager/view-manager.component';
import { AddAgentComponent } from './admin/agent/add-agent/add-agent.component';
import { ViewAgentComponent } from './admin/agent/view-agent/view-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    InsuranceComponent,
    OverviewComponent,
    AddManagerComponent,
    ViewManagerComponent,
    AddAgentComponent,
    ViewAgentComponent,
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
