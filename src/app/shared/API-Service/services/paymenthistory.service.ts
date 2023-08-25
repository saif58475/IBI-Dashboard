import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymenthistoryService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  GetFilterContentLevel(studentId:number):Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/PaymentHistory/GetPaymentHistoryForStudentInSubCourse?studentId=${studentId}`);
   }
  Create(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.Server_URL}/PaymentHistory/Create`, data);
   }
  Update(data:object):Observable<any>{
    return this._HttpClient.put(`${environment.Server_URL}/PaymentHistory/Update`, data);
   }
  Delete(id:number):Observable<any>{
    return this._HttpClient.delete(`${environment.Server_URL}/PaymentHistory/Delete?id=${id}`);
   }
   
}
