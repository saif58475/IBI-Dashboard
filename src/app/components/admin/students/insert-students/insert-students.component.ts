import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from './../../../../shared/API-Service/services/student.service';
import { CountryService } from './../../../../shared/API-Service/services/country.service';
import { ReligionService } from './../../../../shared/API-Service/services/religion.service';
import { DatePipe } from '@angular/common';
import { Image } from './../../../../../images/images';
@Component({
  selector: 'app-insert-students',
  templateUrl: './insert-students.component.html',
  styleUrls: ['./insert-students.component.css']
})
export class InsertStudentsComponent implements OnInit {
StudentForm:FormGroup;
StudentFormData:FormData;
img:string = Image;
religions:any [];
countries:any [];
update:boolean = false;
button:boolean = false;
recordtoupdate:any;
GradeImage:File;
GradeImageLogo:string;
BirthImage:File;
BirthImageLogo:string;
PersonalImage:File;
PersonalImageLogo:string;
MilitralImage:File;
MilitralImageLogo:string;
  constructor(private _StudentService:StudentService
             ,private _ReligionService:ReligionService
             ,private _CountryService:CountryService
             ,private _Router:Router
             ,private _FormBuilder:FormBuilder
             ,private _DatePipe:DatePipe) { }

  ngOnInit(): void {
    this.getdropdown();
    this._StudentService.Data.subscribe((res) => {
      if( res == null){
        this.initiate();
      }else{
        this.update = true;
        this.recordtoupdate = res;
        this.GradeImageLogo = this.img + res.gradeImage;
        this.BirthImageLogo = this.img + res.birthImage;
        this.PersonalImageLogo = this.img + res.personalImage;
        this.MilitralImageLogo = this.img + res.militralImage;
        this.initiate(res);
      }
    })
  }
  initiate(data?:any){
    this.StudentForm = this._FormBuilder.group({
      FirstName: [data?.firstName || '', Validators.required],
      SecondName: [data?.secondName || '', Validators.required],
      ThirdName: [data?.thirdName || '', Validators.required],
      FourthName: [data?.fourthName || '', Validators.required],
      BirthLocation: [data?.birthLocation || '', Validators.required],
      DOB: [this._DatePipe.transform(data?.dob, 'yyyy-MM-dd') || '', Validators.required],
      NationalId: [data?.nationalId || '', Validators.required],
      GradDate: [this._DatePipe.transform(data?.gradDate, 'yyyy-MM-dd') || '', Validators.required],
      GradeType: [data?.gradeType || '', Validators.required],
      CountryId: [data?.countryId || '', Validators.required],
      ReligionId: [data?.religionId || '', Validators.required],
    });
  }
  get fc(){
    return this.StudentForm.controls;
  }
  getdropdown(){
   this._CountryService.Get().subscribe((res) => {
    this.countries = res.data;
   });
   this._ReligionService.Get().subscribe((res) => {
    this.religions = res.data;
   });
  }
  // imgFile
  getLogoUrl(event: any, picnum:number) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      switch(picnum){
      case 1:
        this.GradeImage = event.target.files[0];
        reader.readAsDataURL(file);
      reader.onload = () => {
        this.GradeImageLogo = reader.result as string;
      };
        break;
      case 2:
        this.BirthImage = event.target.files[0];
        reader.readAsDataURL(file);
      reader.onload = () => {
        this.BirthImageLogo = reader.result as string;
      };
        break;
      case 3:
        this.PersonalImage = event.target.files[0];
        reader.readAsDataURL(file);
      reader.onload = () => {
        this.PersonalImageLogo = reader.result as string;
      };
        break;
      case 4:
        this.MilitralImage = event.target.files[0];
        reader.readAsDataURL(file);
      reader.onload = () => {
        this.MilitralImageLogo = reader.result as string;
      };
        break;
        default:
          alert('nothing selected')
          break;
      }
      
    }
  }
  appendData(){
    this.StudentFormData = new FormData();
    this.StudentFormData.append('FirstName', this.StudentForm.value.FirstName);
    this.StudentFormData.append('SecondName', this.StudentForm.value.SecondName);
    this.StudentFormData.append('ThirdName', this.StudentForm.value.ThirdName);
    this.StudentFormData.append('FourthName', this.StudentForm.value.FourthName);
    this.StudentFormData.append('BirthLocation', this.StudentForm.value.BirthLocation);
    this.StudentFormData.append('DOB', this.StudentForm.value.DOB);
    this.StudentFormData.append('NationalId', this.StudentForm.value.NationalId);
    this.StudentFormData.append('GradDate', this.StudentForm.value.GradDate);
    this.StudentFormData.append('GradeType', this.StudentForm.value.GradeType);
    this.StudentFormData.append('CountryId', this.StudentForm.value.CountryId);
    this.StudentFormData.append('ReligionId', this.StudentForm.value.ReligionId);
    this.StudentFormData.append('GradeImage', this.GradeImage);
    this.StudentFormData.append('BirthImage', this.BirthImage);
    this.StudentFormData.append('PersonalImage', this.PersonalImage);
    this.StudentFormData.append('MilitralImage', this.MilitralImage);
  }
  onSubmit(){
    this.button = true;
    if( this.StudentForm.status == "VALID" && this.update == false){
      this.appendData();
      this._StudentService.Create(this.StudentFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تسجيل الطالب بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.StudentForm.reset();
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
    }else if(this.StudentForm.status == "VALID" && this.update == true){
      this.appendData();
      this.StudentFormData.append('Id', this.recordtoupdate.id);
      this._StudentService.Update(this.StudentFormData).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الطالب بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.StudentForm.reset();
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
  
  ngOnDestroy(){
    this._StudentService.Data.next(null);
    this.GradeImageLogo = '';
    this.BirthImageLogo = '';
    this.PersonalImageLogo = '';
    this.MilitralImageLogo = '';
     }
}
