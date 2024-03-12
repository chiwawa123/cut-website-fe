import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeAttendanceTypeServiceService {
  serverDetails = new ServerDetails();

  constructor(private http: HttpClient) { }

  addProgramAttendanceType(data:any){
    return this.http.post(this.serverDetails.serverUrlForApi + "/addProgrammeAttendanceType",data);
  }

}
