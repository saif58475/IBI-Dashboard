import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from 'angular-jwt';
import { AdminModule } from 'src/app/components/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  public RoleId = new BehaviorSubject(null); 
  public Data = new BehaviorSubject(null);
  constructor( private _HttpClient:HttpClient)
            { 
            }

  Get():Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/User/GetAll`);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/User/Create`, data);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/User/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/User/Delete?id=${id}`);
   }
}
