import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'budgetkey-ng2-auth';

import { map } from 'rxjs/operators';
import { API_SERVER, USE_DUMMY_VALUES, DUMMY_INSTANCES,
         DUMMY_TOKEN, DUMMY_USERS, DUMMY_KINDS, DUMMY_PROVIDERS, DUMMY_AUTHENTICATED, DUMMY_DEETS, DUMMY_AUTHORIZED } from './config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER = API_SERVER;

  private instances_ = new BehaviorSubject<any[]>(USE_DUMMY_VALUES ? DUMMY_INSTANCES : []);
  private kinds_ = new BehaviorSubject<any[]>(USE_DUMMY_VALUES ? DUMMY_KINDS : []);
  private users_ = new BehaviorSubject<any[]>(USE_DUMMY_VALUES ? DUMMY_USERS : []);
  private interval: any = null;
  private token_ = new BehaviorSubject<string>(USE_DUMMY_VALUES ? DUMMY_TOKEN : null);
  private providers_: any = USE_DUMMY_VALUES ? DUMMY_PROVIDERS : null;
  private authenticated_: any = USE_DUMMY_VALUES ? DUMMY_AUTHENTICATED : false;
  private authorized_: any = USE_DUMMY_VALUES ? DUMMY_AUTHORIZED : false;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.check(window.location.href)
      .subscribe((authInfo) => {
        if (authInfo) {
          this.providers_ = authInfo.providers;
          this.authenticated_ = authInfo.authenticated;
        }
      });
    auth.getJwt()
        .subscribe((token) => {
          if (token) {
            auth.permission('ckan-cloud-provisioner')
              .subscribe((permission: any) => {
                this.authorized_ = permission.permissions && permission.permissions.level;

                if (this.authorized_) {
                  this.token_.next(permission.token);
                  this.startPolling();
                }
              });
          } else {
            this.stopPolling();
          }
        });
    this.token_.subscribe((token) => {
      if (token) {
        this.queryInstanceKinds()
        .subscribe((kinds) => {
          this.kinds_.next(kinds);
        });
      }
    });
  }

  get authenticated() {
    return this.authenticated_;
  }

  get authorized() {
    return this.authorized_;
  }

  get providers() {
    return this.providers_;
  }

  get instances() {
    return this.instances_;
  }

  get users() {
    return this.users_;
  }

  get instanceKinds() {
    return this.kinds_;
  }

  get token() {
    return this.token_.getValue();
  }

  startPolling() {
    this.interval = setInterval(() => {
      this.queryInstances();
    }, 10000);
    this.queryInstances();
    this.queryUsers();
  }

  stopPolling() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  queryInstances() {
    return this.http.get(`${this.SERVER}/instances?jwt=${this.token}`)
               .pipe(
                 map((ret: any) => ret.instances)
               )
               .subscribe((instances) => {
                 this.instances_.next(instances);
               });
  }

  deleteInstance(instance_id) {
    return this.http.delete(`${this.SERVER}/instance/${instance_id}?jwt=${this.token}`);
  }

  queryUsers() {
    return this.http.get(`${this.SERVER}/users?jwt=${this.token}`)
               .pipe(
                 map((ret: any) => ret.results)
               )
               .subscribe((users) => {
                 this.users_.next(users);
               });
  }

  queryInstanceKinds() {
    return this.http.get(`${this.SERVER}/instance/kinds?jwt=${this.token}`)
               .pipe(
                 map((ret: any) => ret.kinds)
               );
  }

  createOrUpdate(body) {
    return this.http.post(`${this.SERVER}/instance?jwt=${this.token}`, body);
  }

  createUser(email) {
    const body = {
      id: email,
      level: 2
    };
    return this.http.post(`${this.SERVER}/user?jwt=${this.token}`, body);
  }

  deleteUser(email) {
    return this.http.delete(`${this.SERVER}/user/${email}?jwt=${this.token}`);
  }

}
