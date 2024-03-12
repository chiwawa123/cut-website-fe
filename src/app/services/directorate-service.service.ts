import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Directorate } from '../models/directorate';

@Injectable({
  providedIn: 'root'
})
export class DirectorateServiceService {

  serverDetails = new ServerDetails();
  // schoolData = new SchoolData();
  // directorateData:DirectorateData = new DirectorateData();
  public currentDirectorate:BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public getAll():Observable<Directorate[]>{
    return this.http.get<Directorate[]>(`${this.serverDetails.serverUrlForApi}/directorates`);
  }

  public getById(id: any):Observable<Directorate>{
    return this.http.get<Directorate>(`${this.serverDetails.serverUrlForApi}/directorates/${id}`);
  }
}
