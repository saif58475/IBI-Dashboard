import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { CourseService } from './../../../../shared/API-Service/services/course.service';
@Component({
  selector: 'app-insert-subcourse',
  templateUrl: './insert-subcourse.component.html',
  styleUrls: ['./insert-subcourse.component.css']
})
export class InsertSubcourseComponent implements OnInit {
  SubCourseForm:FormGroup;
  update:boolean = false;
  button:boolean = false;
  recordtoupdate:any;
  courses:any;
    constructor(private _SubcourseService:SubcourseService
               ,private _Router:Router
               ,private _FormBuilder:FormBuilder
               ,private _CourseService:CourseService) { }
  ngOnInit(): void {
    this.getDropDowns();
    this._SubcourseService.Data.subscribe((res) => {
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
    this.SubCourseForm = this._FormBuilder.group({
      Name: [data?.name || '', Validators.required],
      Code: [data?.code || '', Validators.required],
      CourseId: [data?.courseId || '', Validators.required],
      GroupAmount: [data?.groupAmount || ''],
      PrivateOneAmount: [data?.privateOneAmount || ''],
      PrivateTwoAmount: [data?.privateTwoAmount || ''],
      BookAmount: [data?.bookAmount || '']
    });
  }
  get fc(){
    return this.SubCourseForm.controls;
  }
  getDropDowns(){
   this._CourseService.Get().subscribe((res) => {
    this.courses = res.data;
   })
  }
  onSubmit(){
    this.button = true;
    if( this.SubCourseForm.status == "VALID" && this.update == false){
      this._SubcourseService.Create(this.SubCourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل تقسيمة كورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.SubCourseForm.reset();
       this._Router.navigate(['content/admin/ViewSubCourse']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.SubCourseForm.status == "VALID" && this.update == true){
      this.SubCourseForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._SubcourseService.Update(this.SubCourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل تقسيمة الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.SubCourseForm.reset();
       this._Router.navigate(['content/admin/ViewSubCourse']);
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
    this._SubcourseService.Data.next(null);
     }
}
