export class ServerDetails {

  public baseServerUrl:string = 'https://www.cut.ac.zw/cut-back/public' //'http://10.20.50.85';
  //public baseServerUrl:string = 'http://cut.ac.zw:8700' //'http://10.20.50.85';
 //  public baseServerUrl:string = 'http://172.16.50.109:8000' //'http://10.20.50.85';
 // public baseServerUrl:string = sessionStorage.getItem("ipAddress")//'http://10.20.50.85';

//public baseServerUrl:string = 'http://127.0.0.1:8000' //'http://10.20.50.85';
 public serverUrlForApi:string = this.baseServerUrl+"/api";
 public serverUrlForStrorage:string = this.baseServerUrl;
}
