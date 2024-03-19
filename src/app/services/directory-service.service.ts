import { Injectable } from '@angular/core';
import { ServerDetails } from '../models/server-details';
import { HttpClient } from '@angular/common/http';
import { Directory } from '../models/directory';

@Injectable({
  providedIn: 'root'
})
export class DirectoryServiceService {
	_serverDetails:ServerDetails = new ServerDetails()
  constructor(private _http:HttpClient) {

   }

   public getAll(){
	   return this._http.get<Directory[]>(this._serverDetails.serverUrlForApi+'/directory');
   }
}
