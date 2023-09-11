import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TeachersService } from './../../../../shared/API-Service/services/teachers.service';
import { CountryService } from './../../../../shared/API-Service/services/country.service';
import { SubcourseService } from './../../../../shared/API-Service/services/subcourse.service';
import { ContentlevelService } from './../../../../shared/API-Service/services/contentlevel.service';
import { Teacher } from './../../../../shared/Models/teacher';
import { SubCourse } from './../../../../shared/Models/sub-course';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Country } from 'src/app/shared/Models/country';
import { Contentlevel } from 'src/app/shared/Models/contentlevel';

@Component({
  selector: 'app-insert-teachers',
  templateUrl: './insert-teachers.component.html',
  styleUrls: ['./insert-teachers.component.css']
})
export class InsertTeachersComponent implements OnInit {
TeacherForm:FormGroup;
update:boolean = false;
button:boolean = false;
contentDropDown:boolean = false;
recordtoupdate:Teacher;
Country:Country [];
subCourse:SubCourse [];
subCourseSelected:number [];
contentLevelSelected:number [];
contentLevel:Contentlevel [] = [];
dropdownSettings:IDropdownSettings  = {
  idField: 'id',
  textField: 'name',
  enableCheckAll: true,
  selectAllText: "اختيار جميع الكورسات",
  unSelectAllText: "ازالة جميع الكورسات",
};
dropdownSettingsContentLevel:IDropdownSettings  = {
  idField: 'id',
  textField: 'name',
  enableCheckAll: true,
  selectAllText: "اختيار جميع المراحل",
  unSelectAllText: "ازالة جميع المراحل",
  noDataAvailablePlaceholderText: "يجب اختيار كورسات اولاً"
};
Shifts:Object [] = [
  { id:1 , name:'مسائي'},
  { id:2 , name:'صباحي'},
];
  constructor( private _TeachersService:TeachersService
             , private _CountryService:CountryService
             , private _SubcourseService:SubcourseService
             , private _ContentlevelService:ContentlevelService
             , private _FormBuilder:FormBuilder
             , private _Router:Router ) { }

  ngOnInit(): void {
    this.getCountry();
    this.getsubCourses();
    this._TeachersService.Data.subscribe((res) => {
      if(res != null){
        this.recordtoupdate = res;
    this.updateLoop(res.id)
    this.update = true;
      }else{
        this.initiate();
      }
    })
  }

  initiate(data?:any){
    this.TeacherForm = this._FormBuilder.group({
      name: [data?.name || '', Validators.required],
      phoneNumber: [data?.phoneNumber || '', [Validators.required, Validators.pattern(`^01[0125]{1}[0-9]{8}`)]],
      paymentPerHour: [data?.paymentPerHour || '', Validators.required],
      countryId: [data?.countryId || '', Validators.required],
      shift: [data?.shift || '', Validators.required],
      subCourses: [''],
      contentlevels: ['']
    });
  }

  getCountry(){
  this._CountryService.Get().subscribe((res) => {
    this.Country = res.data;
  });
}
  getsubCourses(){
    this._SubcourseService.Get().subscribe((res) => {
      this.subCourse = res.data;
    })
  }
  getcontentLevel(event){
  this._ContentlevelService.GetFilterContentLevel(event.id).subscribe((res) => {
    if(this.contentLevel.length == 0){
     this.contentLevel = res.data;
    }else{
      this.contentLevel = this.contentLevel.concat(res.data);
    }
    this.contentDropDown = true;
  });
  }
  updateLoop(teacherId:number){
    this.initiate(this.recordtoupdate);
    this._TeachersService.GetById(teacherId).subscribe((res) => {
      this.recordtoupdate = res.data;
      this.subCourseSelected = this.recordtoupdate.subCourses;
      this.recordtoupdate.subCourses.forEach(element => {
        this._ContentlevelService.GetFilterContentLevel(element).subscribe((res) => {
          if(this.contentLevel.length == 0){
           this.contentLevel = res.data;
          }else{
            this.contentLevel = this.contentLevel.concat(res.data);
          }
          this.contentDropDown = true;
          this.contentLevelSelected = this.recordtoupdate.contentlevels;
        });
      });
    })
    
  }
  get fc(){
    return this.TeacherForm.controls;
  }
  data(){
//this is for the subcourse array 
this.subCourseSelected.forEach(element => {
  this.subCourseSelected[this.subCourseSelected.indexOf(element)] = element['id']; 
 });
this.TeacherForm.value.subCourses = this.subCourseSelected;
//this is for the array of the contentlevel
this.contentLevelSelected.forEach(element => {
  this.contentLevelSelected[this.contentLevelSelected.indexOf(element)] = element['id'];
});
this.TeacherForm.value.contentlevels = this.contentLevelSelected;
  }
  onSubmit(){
    this.button = true;
    this.data();
    if( this.TeacherForm.status == "VALID" && this.update == false){
      this._TeachersService.Create(this.TeacherForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل المدرس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.TeacherForm.reset();
       this._Router.navigate(['content/admin/ViewTeacher']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'تأكد من ملئ جميع الخانات',
             });
             this.button = false;
       })
    }else if(this.TeacherForm.status == "VALID" && this.update == true){
      this.TeacherForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._TeachersService.Update(this.TeacherForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل المدرس بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.TeacherForm.reset();
       this._Router.navigate(['content/admin/ViewTeacher']);
       },(err) => {
        this.button = false;
             Swal.fire({
               icon: 'error',
               title: 'خطأ',
               text: 'حدث خطأ اثناء عملية التعديل',
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
    this._TeachersService.Data.next(null);
     }
}
