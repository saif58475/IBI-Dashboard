import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from './../../../../shared/API-Service/services/admin.service';

@Component({
  selector: 'app-insert-admins',
  templateUrl: './insert-admins.component.html',
  styleUrls: ['./insert-admins.component.css']
})
export class InsertAdminsComponent implements OnInit {
AdminForm:FormGroup;
update:boolean = false;
button:boolean = false;
recordtoupdate:any;
AdminType:Object [] = [
  { RoleId:0 , Name:'Normal Admin'},
  { RoleId:1 , Name: 'Master Admin'}
];
  constructor( private _AdminService:AdminService
             , private _FormBuilder:FormBuilder
             , private _Router:Router) { }

  ngOnInit(): void {
    this._AdminService.Data.subscribe((res) => {
      if( res == null){
        this.initiate();
      }else{
        this.update = true;
        this.recordtoupdate = res;
        this.initiate(this.recordtoupdate);
      }
    })
  }
  initiate(data?:any){
    this.AdminForm = this._FormBuilder.group({
      FirstName: [data?.firstName || '', Validators.required],
      SecondName: [data?.secondName || '', Validators.required],
      Email: [data?.email || '', Validators.required],
      Password: [data?.password || '', Validators.required],
      RoleId: [data?.roleId || '', Validators.required]
    });
  }
  get fc(){
    return this.AdminForm.controls;
  }
  onSubmit(){
    this.button = true;
    if( this.AdminForm.status == "VALID" && this.update == false){
      this._AdminService.Create(this.AdminForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل المسؤول بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.AdminForm.reset();
       this._Router.navigate(['content/admin/ViewAdmin']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.AdminForm.status == "VALID" && this.update == true){
      this.AdminForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._AdminService.Update(this.AdminForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل المسؤول بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.AdminForm.reset();
       this._Router.navigate(['content/admin/ViewAdmin']);
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
    this._AdminService.Data.next(null);
     }
}
