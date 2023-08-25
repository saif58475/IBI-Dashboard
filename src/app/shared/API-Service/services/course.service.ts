import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  Get():Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/Course/GetAll`);
   }
  GetAllRecords(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/Course/GetAllRecords`, data);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/Course/Create`, data);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/Course/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/Course/Delete?id=${id}`);
   }
}
