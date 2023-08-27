import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymenthistoryService } from './../../../../shared/API-Service/services/paymenthistory.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insert-student-paymenthistory',
  templateUrl: './insert-student-paymenthistory.component.html',
  styleUrls: ['./insert-student-paymenthistory.component.css']
})
export class InsertStudentPaymenthistoryComponent implements OnInit {

  PaymentHistoryForm:FormGroup;
  update:boolean = false;
  button:boolean = false;
  totalPaidAmountCurrently:number;
  studentId:number;
  studentsubcourseId:number;
  paymentNumber:number;
  recordtoupdate:any;
  constructor( private _FormBuilder:FormBuilder
             , private _Router:Router
             , private _ActivatedRoute:ActivatedRoute
             , private _PaymenthistoryService:PaymenthistoryService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      if(params['paymentNumber'] != null){
        this.paymentNumber = Number(params['paymentNumber']) + 1;
        this.studentId = Number(params['studentId']);
        this.studentsubcourseId = Number(params['studentsubcourseId']);
        this.initiate();
      }
      else{
     this._PaymenthistoryService.DataUpdate.subscribe((res) => {
      this.initiate(res);
      this.recordtoupdate = res;
      this.update = true;
     })
      }
    })
  }

  initiate(data?:any){
    this.PaymentHistoryForm = this._FormBuilder.group({
      paymentNumber: [data?.paymentNumber || this.paymentNumber, Validators.required],
      installmentAmount: [data?.installmentAmount || '', Validators.required],
      totalPaidAmountCurrently: [data?.totalPaidAmountCurrently || '', Validators.required],
      studentId: [data?.studentId || this.studentId, Validators.required],
      studentsubcoursesId: [data?.studentsubcoursesId || this.studentsubcourseId, Validators.required]
    });  
  }

  get fc(){
    return this.PaymentHistoryForm.controls;
  }

  onSubmit(){
    this.button = true;
    if( this.PaymentHistoryForm.status == "VALID" && this.update == false){
      this._PaymenthistoryService.Create(this.PaymentHistoryForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل القسط بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.PaymentHistoryForm.reset();
       this._Router.navigate(['content/admin/ViewStudents']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.PaymentHistoryForm.status == "VALID" && this.update == true){
      this.PaymentHistoryForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._PaymenthistoryService.Update(this.PaymentHistoryForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل القسط بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.PaymentHistoryForm.reset();
       this._Router.navigate(['content/admin/ViewStudents']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'لم تقم بتغيير اي شئ',
             });
             this.button = false;
       })
    }
    else{
      this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
    }
  }
  ngOnDestroy(){
    this._PaymenthistoryService.DataUpdate.next(null);
  }
}

