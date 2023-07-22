import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  Get():Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/Religion/GetAll`);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/Religion/Create`, data);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/Religion/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/Religion/Delete?id=${id}`);
   }
}
