import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CourseService } from './../../../../shared/API-Service/services/course.service';

@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css']
})
export class InsertCourseComponent implements OnInit {
CourseForm:FormGroup;
update:boolean = false;
button:boolean = false;
recordtoupdate:any;
  constructor(private _CourseService:CourseService
             ,private _Router:Router
             ,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._CourseService.Data.subscribe((res) => {
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
    this.CourseForm = this._FormBuilder.group({
      Name: [data?.name || '', Validators.required],
      Code: [data?.code || '', Validators.required]
    });
  }
  get fc(){
    return this.CourseForm.controls;
  }
  onSubmit(){
    this.button = true;
    if( this.CourseForm.status == "VALID" && this.update == false){
      this._CourseService.Create(this.CourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.CourseForm.reset();
       this._Router.navigate(['content/admin/ViewCourse']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.CourseForm.status == "VALID" && this.update == true){
      this.CourseForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._CourseService.Update(this.CourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.CourseForm.reset();
       this._Router.navigate(['content/admin/ViewCourse']);
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
    this._CourseService.Data.next(null);
     }

}
