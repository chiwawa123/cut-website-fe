import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMonitorServiceService {

  private monitorLoading:BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  public getStatus():Observable<any>{
    return this.monitorLoading;
  }

  public changeStatus(){
    this.monitorLoading.next(this.monitorLoading.value+1);
  }

  public close(){
    this.monitorLoading.next(0);
  }
}
