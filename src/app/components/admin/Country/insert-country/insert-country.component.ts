import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CountryService } from './../../../../shared/API-Service/services/country.service';

@Component({
  selector: 'app-insert-country',
  templateUrl: './insert-country.component.html',
  styleUrls: ['./insert-country.component.css']
})
export class InsertCountryComponent implements OnInit {
CountryForm:FormGroup;
update:boolean = false;
button:boolean = false;
recordtoupdate:any;
  constructor( private _CountryService:CountryService
             , private _Router:Router
             , private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._CountryService.Data.subscribe((res) => {
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
    this.CountryForm = this._FormBuilder.group({
      CountryName: [data?.countryName || '', Validators.required],
      CountryCode: [data?.countryCode || '', Validators.required]
    });
  }

  get fc(){
    return this.CountryForm.controls;
  }
  onSubmit(){
    this.button = true;
    if( this.CountryForm.status == "VALID" && this.update == false){
      this._CountryService.Create(this.CountryForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل الدولة بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.CountryForm.reset();
       this._Router.navigate(['content/admin/ViewCountry']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.CountryForm.status == "VALID" && this.update == true){
      this.CountryForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._CountryService.Update(this.CountryForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الدولة بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.CountryForm.reset();
       this._Router.navigate(['content/admin/ViewCountry']);
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
    this._CountryService.Data.next(null);
     }
}
