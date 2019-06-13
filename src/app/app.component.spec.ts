import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HeaderComponent } from './header/header.component';
import { InstancesComponent } from './instances/instances.component';
import { UsersComponent } from './users/users.component';
import { InstanceComponent } from './instance/instance.component';
import { InstanceDetailsModalComponent } from './instance-details-modal/instance-details-modal.component';
import { InstanceDetailsFormComponent } from './instance-details-form/instance-details-form.component';
import { InstanceConnectionModalComponent } from './instance-connection-modal/instance-connection-modal.component';
import { InstanceConnectionFormComponent } from './instance-connection-form/instance-connection-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BudgetkeyNg2AuthModule, getAuthServiceConfigProvider, AUTH_CONFIG_TOKEN } from 'budgetkey-ng2-auth';
import { AUTH_SERVER } from './config';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginScreenComponent,
        WorkspaceComponent,
        HeaderComponent,
        InstancesComponent,
        UsersComponent,
        InstanceComponent,
        InstanceDetailsModalComponent,
        InstanceDetailsFormComponent,
        InstanceConnectionModalComponent,
        InstanceConnectionFormComponent,
        UserComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BudgetkeyNg2AuthModule,
      ],
      providers: [
        {provide: AUTH_CONFIG_TOKEN,
         useValue: {
          'authServerUrl': 'https://next.obudget.org',
          'jwtLocalStorageKey': 'jwt',
          'jwtQueryParam': 'jwt',
          'profilePagePath': ''
        }}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
