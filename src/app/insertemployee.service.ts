import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InsertemployeeService {
  public Data    =new BehaviorSubject(null)
  constructor( private _HttpClient:HttpClient) { }

  insertemployee(employeedata:any):Observable<any>{
    console.log(employeedata);
  return this._HttpClient.post(`${environment.Server_URL}/Company/CreateCompanyEmployee`, employeedata);

}
update(employeeid:any):Observable<any>{
  return this._HttpClient.post(`${environment.Server_URL}/Company/UpdateCompanyEmployee`, employeeid);
}

getemployee():Observable<any>{
  return this._HttpClient.get(`${environment.Server_URL}/Company/GetCompanyEmployees`);
}
} 



