import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule, AUTH_CONFIG_TOKEN } from 'budgetkey-ng2-auth';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HeaderComponent } from './header/header.component';
import { InstancesComponent } from './instances/instances.component';
import { InstanceComponent } from './instance/instance.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { InstanceDetailsFormComponent } from './instance-details-form/instance-details-form.component';
import { InstanceDetailsModalComponent } from './instance-details-modal/instance-details-modal.component';
import { AUTH_SERVER } from './config';
import { InstanceConnectionModalComponent } from './instance-connection-modal/instance-connection-modal.component';
import { InstanceConnectionFormComponent } from './instance-connection-form/instance-connection-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    LoginScreenComponent,
    HeaderComponent,
    InstancesComponent,
    InstanceComponent,
    UsersComponent,
    UserComponent,
    InstanceDetailsFormComponent,
    InstanceDetailsModalComponent,
    InstanceConnectionModalComponent,
    InstanceConnectionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
  ],
  providers: [
    {
      provide: AUTH_CONFIG_TOKEN,
      useValue: {
            'authServerUrl': AUTH_SERVER,
            'jwtLocalStorageKey': 'jwt',
            'jwtQueryParam': 'jwt',
            'profilePagePath': ''
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
