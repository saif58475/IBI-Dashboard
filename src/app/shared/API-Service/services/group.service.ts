import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  Get():Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/GroupCourse/GetAll`);
   }
  GetById(GroupId:number):Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/GroupCourse/GetById?id=${GroupId}`);
   }
  GetAllRecords(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/GroupCourse/GetAllRecords`, data);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/GroupCourse/Create`, data);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/GroupCourse/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/GroupCourse/Delete?id=${id}`);
   }
}
