import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  Get():Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/Book/GetAll`);
   }
  GetAllRecords(data:any){
    return this._HttpClient.post(`${environment.Server_URL}/Book/GetAllRecords`, data);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/Book/Create`, data);
   }
  CheckBook(contentlevelId:number):Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/Book/CheckBook?contentlevelId=${contentlevelId}`);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/Book/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/Book/Delete?id=${id}`);
   }
   
}
