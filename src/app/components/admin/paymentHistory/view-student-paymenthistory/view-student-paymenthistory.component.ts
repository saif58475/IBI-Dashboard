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
  TotalPaidInstallments:number;
  RemainingAmount:number;
  constructor( private _Router:Router
             , private _DatePipe:DatePipe
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
      this.paymenthistory.forEach(element => {
          element.paymentTime = this._DatePipe.transform(element.paymentTime, 'yyyy-MM-dd');  
      });
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
      else{
        this._PaymenthistoryService.GetTotalPaidInstallment(Number(params["studentId"]), Number(params["studentsubcourseId"])).subscribe((res) => {
          this.TotalPaidInstallments = res.data['totalPaidAmount'];
          this.RemainingAmount = this.paymenthistory[0]['totalPrice'] - this.TotalPaidInstallments;
          if( this.RemainingAmount <= 0 ){
            Swal.fire({
              icon: "warning",
              title: "قد اتم دفع ثمن الكورس بالكامل و لا يوجد اقساط",
              showConfirmButton: false,
              timer: 4000,
            }); 
       this._Router.navigate([`/content/admin/ViewStudentActivations/${this.studentId}`]);
          }
        })
      }
    }) 
      })
    }

    new_Payment(){
      this._Router.navigate([`/content/admin/InsertPaymentHistory/${this.studentId}/${this.studentsubcourseId}/${this.paymenthistory.length}`]);
      this._PaymenthistoryService.TotalPaidInstallment.next(this.TotalPaidInstallments);
    }
    Update(data:any){
      this._PaymenthistoryService.GetById(data.id).subscribe((res) => {
        this._PaymenthistoryService.DataUpdate.next(res.data);
      })
      this._Router.navigate(["/content/admin/InsertPaymentHistory"]);
    }
  }


