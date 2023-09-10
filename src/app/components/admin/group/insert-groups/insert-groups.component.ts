import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { GroupService } from './../../../../shared/API-Service/services/group.service';
import { TeachersService } from './../../../../shared/API-Service/services/teachers.service';
import { SubCourse } from 'src/app/shared/Models/sub-course';
import { Teacher } from 'src/app/shared/Models/teacher';
@Component({
  selector: 'app-insert-groups',
  templateUrl: './insert-groups.component.html',
  styleUrls: ['./insert-groups.component.css']
})
export class InsertGroupsComponent implements OnInit {
GroupCourseForm:FormGroup;
subCourses:SubCourse [];
teachers:Teacher [];
update:boolean = false;
button:boolean = false;
reasonFiled:boolean = false;
recordtoupdate:any;
  constructor( private _SubcourseService:SubcourseService
             , private _TeachersService:TeachersService
             , private _GroupService:GroupService
             , private _FormBuilder:FormBuilder
             , private _Router:Router) { }

  ngOnInit(): void {
    this.DropDownsData();
    this.initiate();
  }
  handleChange(){
    if(this.GroupCourseForm.value.secondTeacher != null){
      this.reasonFiled = true;
      }
  }
  initiate(data?:any){
    this.GroupCourseForm = this._FormBuilder.group({
      groupName: [data?.groupName || '', Validators.required],
      firstTeacher: [data?.firstTeacher || '', Validators.required],
      secondTeacher: [data?.secondTeacher || ''],
      reasonForSecondTeacher: [data?.reasonForSecondTeacher || ''],
      subCourseId: [data?.subCourseId || '', Validators.required]
    });
  }
  get fc(){
    return this.GroupCourseForm.controls;
  }
 DropDownsData(){
  this._TeachersService.Get().subscribe((res) => {
    this.teachers = res.data;
  })
  this._SubcourseService.Get().subscribe((res) => {
    this.subCourses = res.data;
  })
 }
  onSubmit(){
    this.button = true;
    if( this.GroupCourseForm.status == "VALID" && this.update == false){
      this._GroupService.Create(this.GroupCourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.GroupCourseForm.reset();
       this._Router.navigate(['content/admin/ViewGroupCourse']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.GroupCourseForm.status == "VALID" && this.update == true){
      this.GroupCourseForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._GroupService.Update(this.GroupCourseForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الكورس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.GroupCourseForm.reset();
       this._Router.navigate(['content/admin/ViewGroupCourse']);
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
    this._GroupService.Data.next(null);
     }

}
