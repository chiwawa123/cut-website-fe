import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';
import { Program } from '../models/program';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramServiceService {

  serverDetails = new ServerDetails();

  constructor(private http: HttpClient) { }

  getProgramById(id:number): Observable<Program> {
    return this.http.get<Program>(this.serverDetails.serverUrlForApi+'/programs/'+id);
  }

  public getRequirement(id: number,index: any):Observable<any>{
    return this.http.get(this.serverDetails.serverUrlForApi+'/programs/getProgramEntryRequirements/'+id+'/'+index);
  }

  getAllPrograms(): Observable<Array<Program>>{
    return this.http.get<Array<Program>>(this.serverDetails.serverUrlForApi+'/programs');
  }

  getDepartmentalPrograms(departmentId:number):Observable<Array<Program>>{
    return this.http.get<Array<Program>>(this.serverDetails.serverUrlForApi+'/programs/departmentalPrograms/'+departmentId);
  }

  getMinifiedProgramJobsById(programId:number):string{
    return "";
  }
}
