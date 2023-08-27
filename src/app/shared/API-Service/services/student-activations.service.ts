import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentActivationsService {

  public Data = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  Get(studentId):Observable<any>{
    return this._HttpClient.get(`${environment.Server_URL}/StudentSubCourse/GetStudentSubCourseActivated?studentId=${studentId}`);
   }
}
