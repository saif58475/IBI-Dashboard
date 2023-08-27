import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PaymenthistoryService } from '../../../../shared/API-Service/services/paymenthistory.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-student-paymenthistory',
  templateUrl: './view-student-paymenthistory.component.html',
  styleUrls: ['./view-student-paymenthistory.component.css']
})
export class ViewStudentPaymenthistoryComponent implements OnInit {
  paymenthistory:any [];
  studentId: number;
  studentsubcourseId:number;
  maxValue:number;
  constructor( private _Router:Router
             , private _ActivatedRoute:ActivatedRoute
             , private _PaymenthistoryService:PaymenthistoryService) { }

  ngOnInit(): void {
    this.GetPaymentHistory();
  }

  GetPaymentHistory(){
  this._ActivatedRoute.params.subscribe((params) => {
    this.studentId = Number(params["studentId"]);
    this.studentsubcourseId = Number(params["studentsubcourseId"]);
    this._PaymenthistoryService.GetFilterContentLevel(Number(params["studentId"]),Number(params["studentsubcourseId"])).subscribe((res) => {
      this.paymenthistory = res.data;
      if( this.paymenthistory.length == 0){
        Swal.fire({
          title: 'لا يوجد تاريخ اقساط سابقة لهذا الطالب',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText:'رجوع',
          cancelButtonText:'تسجيل قسط'
        }).then((result) => {
          if (result.isConfirmed) {
           this._Router.navigate(['content/admin/ViewStudents']);
      }})}
    }) 
      })
    }

    new_Payment(){
      this._Router.navigate([`/content/admin/InsertPaymentHistory/${this.studentId}/${this.studentsubcourseId}/${this.paymenthistory.length}`]);
    }
    Update(data:any){
      this._PaymenthistoryService.GetById(data.id).subscribe((res) => {
        this._PaymenthistoryService.DataUpdate.next(res.data);
      })
      this._Router.navigate(["/content/admin/InsertPaymentHistory"]);
    }
  }


