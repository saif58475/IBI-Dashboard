import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class OfferapproveService {
data:object;

  constructor(private _HttpClient:HttpClient) { }


    applytheoffer(data: any):Observable<any>{
      console.log(data);
    return this._HttpClient.post(`${environment.Server_URL}/Shipment/ApprovedOffer`, data);

  }

  
    canceltheoffer(data: any ):Observable<any>{
      console.log(data);
    return this._HttpClient.post(`${environment.Server_URL}/Shipment/CancelOffer`, data);

  }
    cancelreasons():Observable<any>{
      
    return this._HttpClient.get(`${environment.Server_URL}/ShipmentCancelationReason/GetAllForList`);

  }
} 

