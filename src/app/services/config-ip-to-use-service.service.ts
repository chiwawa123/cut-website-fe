import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigIpToUseServiceService {

  public ip: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public is_internal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  internal = 'https://10.165.41.22';
  // internal = 'http://10.20.50.85';
  external = 'http://197.155.226.213';

  constructor(private http: HttpClient) {
    http.get(this.internal + "/api/mobile/covid", { 'observe': 'response' }).toPromise()
      .then(data => {
        this.is_internal.next(true);
        sessionStorage.setItem('ipAddress', this.internal);
      })
      .catch(reason => {
        sessionStorage.setItem('ipAddress', this.external);
      })
      .finally(() => {
        this.ip.next(true);
      });
  }
}
