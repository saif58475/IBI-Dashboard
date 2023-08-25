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
  constructor( private _Router:Router
             , private _ActivatedRoute:ActivatedRoute
             , private _PaymenthistoryService:PaymenthistoryService) { }

  ngOnInit(): void {
    this.GetPaymentHistory();
  }

  GetPaymentHistory(){
  this._ActivatedRoute.params.subscribe((params) => {
    this._PaymenthistoryService.GetFilterContentLevel(Number(params["studentId"])).subscribe((res) => {
      this.paymenthistory = res.data;
      // if( this.paymenthistory == null){
      //   Swal.fire({
      //     title: 'لا يوجد تاريخ اقساط سابقة لهذا الطالب',
      //     icon: 'warning',
      //     showCancelButton: true,
      //     confirmButtonColor: '#3085d6',
      //     cancelButtonText:'رجوع'
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //      this._Router.navigate(['content/admin/ViewStudents']);
      // }})}
    }) 
      })}
  }


