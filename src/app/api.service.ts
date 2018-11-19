import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'budgetkey-ng2-auth';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER = 'http://192.168.64.3:8092/api';

  private instances_ = new BehaviorSubject<any[]>([]);
  private kinds_ = new BehaviorSubject<any[]>([]);
  private users_ = new BehaviorSubject<any[]>([]);
  private interval: any = null;
  private token_ = new BehaviorSubject<string>(null);
  private providers_: any = null;

  constructor(private http: HttpClient, private auth: AuthService) {
    console.log('init');
    this.auth.check('http://localhost:4200/')
      .subscribe((authInfo) => {
        if (authInfo && authInfo.providers) {
          this.providers_ = authInfo.providers;
        } else {
          this.providers_ = null;
        }
      });
    auth.getJwt()
        .subscribe((token) => {
          if (token) {
            auth.permission('ckan-cloud-provisioner')
              .subscribe((permission: any) => {
                console.log(permission);
                this.token_.next(permission.token);
                this.startPolling();
              });
          } else {
            this.stopPolling();
          }
        });
    this.token_.subscribe((token) => {
      console.log('TOTOTO', token);
      if (token) {
        this.queryInstanceKinds()
        .subscribe((kinds) => {
          console.log('KIKIKI', kinds);
          this.kinds_.next(kinds);
        });
      }
    });
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
