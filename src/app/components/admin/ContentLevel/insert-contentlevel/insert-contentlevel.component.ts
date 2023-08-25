import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { ContentlevelService } from './../../../../shared/API-Service/services/contentlevel.service';
import { CourseService } from './../../../../shared/API-Service/services/course.service';
@Component({
  selector: 'app-insert-contentlevel',
  templateUrl: './insert-contentlevel.component.html',
  styleUrls: ['./insert-contentlevel.component.css']
})
export class InsertContentlevelComponent implements OnInit {
  ContentLevelForm:FormGroup;
  update:boolean = false;
  button:boolean = false;
  SubCourseView:boolean = false;
  SelectedCourse:boolean = true;
  subcourses:any;
  courses:any;
  recordtoupdate:any;
    constructor( private _Router:Router
               , private _FormBuilder:FormBuilder
               , private _CourseService:CourseService
               , private _SubcourseService:SubcourseService
               , private _ContentlevelService:ContentlevelService) { }

  ngOnInit(): void {
    this.getDropDown();
    this._ContentlevelService.Data.subscribe((res) => {
      if( res == null){
        this.initiate();
      }else{
        this.update = true;
        this.SubCourseView = true;
        this.SelectedCourse = false;
        this.recordtoupdate = res;
        this.onOptionSelected(this.recordtoupdate.subcourse.courseId);
        this.initiate(this.recordtoupdate);
      }
    })
  }

  initiate(data?:any){
    this.ContentLevelForm = this._FormBuilder.group({
      Name: [data?.name || '', Validators.required],
      Code: [data?.code || '', Validators.required],
      SubcourseId: [data?.subcourseId || '', Validators.required]
    });
  }
  getDropDown(){
    this._CourseService.Get().subscribe((res) => {
      this.courses = res.data;
    })
  }
  onOptionSelected(event: any){
   this.SubCourseView = true;
     this._SubcourseService.GetFilterSubCourse(event).subscribe((res) => {
      this.subcourses = res.data;
    })
  }
  get fc(){
    return this.ContentLevelForm.controls;
  }
  onSubmit(){
    this.button = true;
    if( this.ContentLevelForm.status == "VALID" && this.update == false){
      this._ContentlevelService.Create(this.ContentLevelForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل محتوى الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.ContentLevelForm.reset();
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
    }else if(this.ContentLevelForm.status == "VALID" && this.update == true){
      this.ContentLevelForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._ContentlevelService.Update(this.ContentLevelForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل محتوى الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.ContentLevelForm.reset();
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
    this._ContentlevelService.Data.next(null);
     }
}
