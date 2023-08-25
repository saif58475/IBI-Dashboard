import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentSubCourseService } from './../../../../shared/API-Service/services/studentsubcourse.service';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { CourseService } from './../../../../shared/API-Service/services/course.service';
import { StudentService } from './../../../../shared/API-Service/services/student.service';

@Component({
  selector: 'app-insert-studentsubcourse-ibistudent',
  templateUrl: './insert-studentsubcourse-ibistudent.component.html',
  styleUrls: ['./insert-studentsubcourse-ibistudent.component.css']
})
export class InsertStudentsubcourseIBIStudentComponent implements OnInit {
IBIStudentSubCourseForm:FormGroup;
courses:any;
subcourses:any;
selectedCourse:any;
selectedsubcourse:any;
students:any;
update:boolean = false;
button:boolean = false;
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
      this.IBIStudentSubCourseForm = this._FormBuilder.group({
        studentId: [data?.studentId || Number(params['studentId']), Validators.required],
        subCourseId: [data?.subCourseId || '', Validators.required],
        group: [data?.group || true, Validators.required],
        privateOne: [data?.group || false, Validators.required],
        privateTwo: [data?.group || false, Validators.required],
        bookAvailable: [data?.bookAvailable || false, Validators.required],
        ibiLevel: [data?.ibiLevel || true, Validators.required],
        subCoursePrice: [data?.subCoursePrice || '', Validators.required],
        ibiStudentDocumentPrice: [data?.ibiStudentDocumentPrice || ''],
        registrationFilePrice: [data?.registrationFilePrice || ''],
        deposit: [data?.deposit || '', Validators.required],
        totalPrice: [data?.totalPrice || '', Validators.required],
      });
    })
    this.getDropDowns();
  }
  get fc(){
    return this.IBIStudentSubCourseForm.controls;
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
  this.IBIStudentSubCourseForm.value.subCourseId = event.id;
   }
   
   onSubmit(){
    this.button = true;
    if(this.IBIStudentSubCourseForm.status == "VALID" && this.update == false){
     this._StudentSubCourseService.Create(this.IBIStudentSubCourseForm.value).subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "تم تسجيل الطالب بنجاح",
        showConfirmButton: false,
        timer: 1500,
      }); 
      this.IBIStudentSubCourseForm.reset();
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
