import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';
import { Events } from '../models/events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceService {

  //schoolData = new SchoolData();
  // eventsData = new EventsData();
  serverDetails = new ServerDetails();

  constructor(private http: HttpClient) { }

  public getAllEvents():Observable<Array<Events>>{
    //return this.eventsData.events;
    return this.http.get<Array<Events>>(this.serverDetails.serverUrlForApi+'/event');
  }

  public getFrontPageEvents():Observable<Array<Events>>{
    // var temp:Array<Events> = [];
    // for (let i = 0; i < 2; i++) {
    //   temp.push(this.eventsData.events[i]);
    // }

    // return temp;

    return this.http.get<Array<Events>>(this.serverDetails.serverUrlForApi+'/event/frontPage');
  }

  public getSchoolEventsForFrontPage(schoolId:number):Observable<Array<Events>>{
    // var temp:Array<Events> = [];
    // for (let i = 0; i < this.eventsData.events.length && temp.length < 2; i++) {
    //   if(this.eventsData.events[i].schoolId == schoolId)
    //   {
    //     temp.push(this.eventsData.events[i]);
    //   }
    // }
    // return temp;
    return this.http.get<Array<Events>>(this.serverDetails.serverUrlForApi+'/schools/'+schoolId+'/events');
  }
}
