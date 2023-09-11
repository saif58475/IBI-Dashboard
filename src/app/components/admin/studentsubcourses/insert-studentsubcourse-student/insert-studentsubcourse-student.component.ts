import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentSubCourseService } from './../../../../shared/API-Service/services/studentsubcourse.service';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { CourseService } from './../../../../shared/API-Service/services/course.service';
import { StudentService } from './../../../../shared/API-Service/services/student.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-insert-studentsubcourse-student',
  templateUrl: './insert-studentsubcourse-student.component.html',
  styleUrls: ['./insert-studentsubcourse-student.component.css']
})
export class InsertStudentsubcourseStudentComponent implements OnInit {
StudentSubCourseForm:FormGroup;
TotalBookPrice:number;
button:boolean = false;
update:boolean = false;
openCheckBox:boolean = false;
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
        ibiLevel: [data?.ibiLevel || false, Validators.required],
        ibiStudentDocumentPrice: [data?.ibiStudentDocumentPrice || 0, Validators.required],
        registrationFilePrice: [data?.registrationFilePrice || 0, Validators.required],
        deposit: [data?.deposit || '', Validators.required],
      });
    })
    this.getDropDowns();
  }
  get fc(){
    return this.StudentSubCourseForm.controls;
  }
  
  SectionType(){
    this._SubcourseService.GetById(this.StudentSubCourseForm.value.subCourseId).subscribe((res) => {
    switch( this.StudentSubCourseForm.value.group || this.StudentSubCourseForm.value.privateOne || this.StudentSubCourseForm.value.privateTwo){
      case this.StudentSubCourseForm.value.group == true:
        this.StudentSubCourseForm.addControl('subCoursePrice', new FormControl(Number(res.data['groupAmount'])));
           break; 
    case this.StudentSubCourseForm.value.privateOne == true: 
           this.StudentSubCourseForm.addControl('subCoursePrice', new FormControl(Number(res.data['privateOneAmount'])));
           break;
    case this.StudentSubCourseForm.value.privateTwo == true: 
           this.StudentSubCourseForm.addControl('subCoursePrice', new FormControl(Number(res.data['privateTwoAmount'])));
           break;
    default:
      alert('Select the section type');
      break;
    }
  })
  }
 bookCheck(){
      if(this.StudentSubCourseForm.value.bookAvailable == true){
        this._SubcourseService.GetBookPrice(this.StudentSubCourseForm.value.subCourseId).subscribe((res:any) => {
          this.StudentSubCourseForm.addControl('bookPrice', new FormControl(Number(res.data['totalBookPrice'])));
          debugger
      })
    }
  }
  TotalPrice(){
    this.StudentSubCourseForm.addControl('totalPrice' , new FormControl(this.StudentSubCourseForm.value.bookPrice + this.StudentSubCourseForm.value.subCoursePrice));
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
      this.openCheckBox = true;
      }
     onSubmit(){
        this.button = true;
        if(this.StudentSubCourseForm.status == "VALID" && this.update == false){
          this.TotalPrice();
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
                  text: 'تأكد من ملئ جميع الخانات',
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
