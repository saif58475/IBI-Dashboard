import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BookService } from './../../../../shared/API-Service/services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
BookForm:FormGroup;
recordtoupdate:any;
button:boolean = false;
update:boolean = false;
ContentLevelId:number;
  constructor( private _Router:Router
             , private _HttpClient:HttpClient
             , private _FormBuilder:FormBuilder
             , private _BookService:BookService
             , private _AcitvatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._AcitvatedRoute.params.subscribe((params) => {
    this._BookService.CheckBook(Number(params['contentlevelId'])).subscribe((res) => {
      if(res.data != null){
        this.initiate(res.data);
        this.recordtoupdate = res.data;
        this.update = true;
      }else{
        this.initiate();
      }
    })
    })
  }

  initiate(data?:any){
    this._AcitvatedRoute.params.subscribe((params) => {
      this.BookForm = this._FormBuilder.group({
        name: [data?.name || '', Validators.required],
        price: [data?.price || '', Validators.required],
        ContentLevelId: [data?.ContentLevelId || params['contentlevelId'], Validators.required]
      });
    })
  }

  get fc(){
    return this.BookForm.controls;
  }
  onSubmit(){
    this.button = true;
    if( this.BookForm.status == "VALID" && this.update == false){
      this._BookService.Create(this.BookForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل الكتاب بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.BookForm.reset();
       this._Router.navigate(['content/admin/ViewContentLevel']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.BookForm.status == "VALID" && this.update == true){
      this.BookForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._BookService.Update(this.BookForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الكتاب بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.BookForm.reset();
       this._Router.navigate(['content/admin/ViewContentLevel']);
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
}
