import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentSubCourseService } from './../../../../shared/API-Service/services/studentsubcourse.service';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { CourseService } from './../../../../shared/API-Service/services/course.service';
import { StudentService } from './../../../../shared/API-Service/services/student.service';

@Component({
  selector: 'app-insert-studentsubcourse-student',
  templateUrl: './insert-studentsubcourse-student.component.html',
  styleUrls: ['./insert-studentsubcourse-student.component.css']
})
export class InsertStudentsubcourseStudentComponent implements OnInit {
StudentSubCourseForm:FormGroup;
button:boolean = false;
update:boolean = false;
courses:any;
subcourses:any;
  constructor( private _StudentSubCourseService:StudentSubCourseService
             , private _SubcourseService:SubcourseService
             , private _StudentService:StudentService
             , private _CourseService:CourseService
             , private _FormBuilder:FormBuilder
             , private _ActivatedRoute:ActivatedRoute
             , private _Router:Router) { }

  ngOnInit(): void {
    this.initiate();
  }
  initiate(data?:any){
    this._ActivatedRoute.params.subscribe(params => {
      this.StudentSubCourseForm = this._FormBuilder.group({
        studentId: [data?.studentId || Number(params['studentId']), Validators.required],
        subCourseId: [data?.subCourseId || '', Validators.required],
        group: [data?.group || false],
        privateOne: [data?.group || false],
        privateTwo: [data?.group || false],
        bookAvailable: [data?.bookAvailable || false],
        bookPrice: [data?.bookPrice || ''],
        ibiLevel: [data?.ibiLevel || false, Validators.required],
        subCoursePrice: [data?.subCoursePrice || '', Validators.required],
        ibiStudentDocumentPrice: [data?.ibiStudentDocumentPrice || 0, Validators.required],
        registrationFilePrice: [data?.registrationFilePrice || 0, Validators.required],
        deposit: [data?.deposit || '', Validators.required],
        totalPrice: [data?.totalPrice || '', Validators.required],
      });
    })
    this.getDropDowns();
  }
  get fc(){
    return this.StudentSubCourseForm.controls;
  }
  getDropDowns(){
    this._CourseService.Get().subscribe((res) => {
      this.courses = res.data;
    })
   }
   onSelectCourse(event){
    this._SubcourseService.GetFilterSubCourse(event).subscribe((res) => {
        this.subcourses = res.data;
       });
      }
      onSelectSubCourse(event){
     this.StudentSubCourseForm.value.subCourseId = event.id;
      }

      onSubmit(){
        this.button = true;
        if(this.StudentSubCourseForm.status == "VALID" && this.update == false){
         this._StudentSubCourseService.Create(this.StudentSubCourseForm.value).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "تم تسجيل الطالب بنجاح",
            showConfirmButton: false,
            timer: 1500,
          }); 
          this.StudentSubCourseForm.reset();
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
}
