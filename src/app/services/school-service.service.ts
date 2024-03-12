import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { School } from '../models/school';
import { Observable, map, publishReplay, refCount } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolServiceService {
  serverDetails = new ServerDetails();
  schools!: Observable<School[]>;
  schoolsWithDept!: Observable<School[]>;
  schoolsWithDeptAndProg!: Observable<School[]>;
  schoolsById!: Array<Observable<School>>;
  constructor( private http: HttpClient) {}

  public getSchoolById(id: number): Observable<School>{
      return this.http.get<School>(this.serverDetails.serverUrlForApi+'/schools/'+id+'/withDepartmentsAndProgram');
  }
  public getAllSchools():Observable<Array<School>>{

    if (!this.schools) {
      this.schools = this.http.get<Array<School>>(this.serverDetails.serverUrlForApi+'/schools').pipe(
        map(data=>data),
        publishReplay(1),
        refCount()
      );
    }

    return this.schools;
  }

  public getAllSchoolsWithDepartments():Observable<Array<School>>{

    if (!this.schoolsWithDept) {

     this.schoolsWithDept = this.http.get<Array<School>>(this.serverDetails.serverUrlForApi+'/schools/withDepartments').pipe(
      map(data=>data),
      publishReplay(1),
      refCount()
     );
    }
    return this.schoolsWithDept;
  }

  public getAllSchoolsWithDepartmentsAndProgram():Observable<Array<School>>{

    if (!this.schoolsWithDeptAndProg) {
      this.schoolsWithDeptAndProg = this.http.get<Array<School>>(this.serverDetails.serverUrlForApi+'/schools/withDepartmentsAndProgram').pipe(
        map(data=>data),
        publishReplay(1),
        refCount()
      );
    }
    return this.schoolsWithDeptAndProg;
  }

}
