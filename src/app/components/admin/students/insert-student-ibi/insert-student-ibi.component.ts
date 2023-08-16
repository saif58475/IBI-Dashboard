import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from './../../../../shared/API-Service/services/student.service';
import { CountryService } from './../../../../shared/API-Service/services/country.service';
import { ReligionService } from './../../../../shared/API-Service/services/religion.service';
import { DatePipe } from '@angular/common';
import { Image } from './../../../../../images/images';
@Component({
  selector: 'app-insert-student-ibi',
  templateUrl: './insert-student-ibi.component.html',
  styleUrls: ['./insert-student-ibi.component.css']
})
export class InsertStudentIBIComponent implements OnInit {
isDisabled: boolean = true;
StudentForm:FormGroup;
StudentFormData:FormData;
button:boolean = false;
update:boolean = false;
recordtoupdate:any;
img:string = Image;
GradeImage:File;
GradeImageLogo:string;
AllGradesCertificate:File;
AllGradesCertificateLogo:string;
StampedNotify:File;
StampedNotifyLogo:string;
PersonalImage:File;
PersonalImageLogo:string;
BirthImage:File;
BirthImageLogo:string;
MilitralTwoSoldierImage:File;
MilitralTwoSoldierImageLogo:string;
MilitralSixSoldierImage:File;
MilitralSixSoldierImageLogo:string;
MilitralSevenSoldierImage:File;
MilitralSevenSoldierImageLogo:string;
TerminationImage:File;
TerminationImageLogo:string;
caseone:boolean = false;
casetwo:boolean = false;
countries:any;
religions:any;
  constructor( private _Router:Router
             , private _StudentService:StudentService
             , private _CountryService:CountryService
             , private _ReligionService:ReligionService
             , private _FormBuilder:FormBuilder
             , private _DatePipe:DatePipe) { }

  ngOnInit(): void {
    this.getDropDowns();
    this._StudentService.Data.subscribe((res) => {
      if( res != null){
        this.recordtoupdate = res;
      this.initiate(res);
      this.imagesinupdate(res);
      this.update = true;
      } else{
        this.initiate();
      }
    })
  }

  imagesinupdate(data:any){
   if(data.gradeImage){
    this.GradeImageLogo = this.img + data.gradeImage;
   }
   if(data.allGradesCertificate){
    this.AllGradesCertificateLogo = this.img + data.allGradesCertificate;
   }
   if(data.personalImage){
    this.PersonalImageLogo = this.img + data.personalImage;
   }
   if(data.birthImage){
    this.BirthImageLogo = this.img + data.birthImage;
   }
   if(data.militralTwoSoldierImage ){
    this.MilitralTwoSoldierImageLogo = this.img + data.militralTwoSoldierImage;
   }
   if(data.militralSixSoldierImage){
    this.MilitralSixSoldierImageLogo = this.img + data.militralSixSoldierImage;
   }
   if(data.militralSevenSoldierImage){
    this.MilitralSevenSoldierImageLogo = this.img + data.militralSevenSoldierImage;
   }
   if(data.stampedNotify){
    this.StampedNotifyLogo = this.img + data.stampedNotify;
   }
  }
  initiate(data?:any){
    this.StudentForm = this._FormBuilder.group({
      FirstName: [data?.firstName || '', Validators.required],
      SecondName: [data?.secondName || '', Validators.required],
      ThirdName: [data?.thirdName || '', Validators.required],
      FourthName: [data?.fourthName || '', Validators.required],
      BirthLocation: [data?.birthLocation || '', Validators.required],
      JobDescription: [data?.jobDescription || '', Validators.required],
      DOB: [this._DatePipe.transform(data?.dob, 'yyyy-MM-dd') || '', Validators.required],
      NationalId: [data?.nationalId || '', Validators.required],
      GradDate: [this._DatePipe.transform(data?.gradDate, 'yyyy-MM-dd') || '', Validators.required],
      GradeType: [data?.gradeType || '', Validators.required],
      CountryId: [data?.countryId || 1, Validators.required],
      ReligionId: [data?.religionId || '', Validators.required],
      StudentType: [data?.studentType || 1, Validators.required],
    });
  }

  getDropDowns(){
    this._CountryService.Get().subscribe((res) => {
      this.countries = res.data;
    });
    this._ReligionService.Get().subscribe((res) => {
      this.religions = res.data;
    });
  }
  get fc(){
    return this.StudentForm.controls;
  }
  // imgFile
  getLogoUrl(event: any, picnum:number) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      switch(picnum){
      case 1:
        this.PersonalImage = event.target.files[0];
        reader.readAsDataURL(file);
      reader.onload = () => {
        this.PersonalImageLogo = reader.result as string;
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
          this.MilitralTwoSoldierImage = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.MilitralTwoSoldierImageLogo = reader.result as string;
          };
          break;
        case 4:
          this.MilitralSixSoldierImage = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.MilitralSixSoldierImageLogo = reader.result as string;
          };
          break;
        case 5:
          this.GradeImage = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.GradeImageLogo = reader.result as string;
          };
          break;
        case 6:
          this.AllGradesCertificate = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.AllGradesCertificateLogo = reader.result as string;
          };
          break;
        case 7:
          this.StampedNotify = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.StampedNotifyLogo = reader.result as string;
          };
          break;
        case 8:
          this.TerminationImage = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.TerminationImageLogo = reader.result as string;
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
    this.StudentFormData.append('JobDescription', this.StudentForm.value.JobDescription);
    this.StudentFormData.append('NationalId', this.StudentForm.value.NationalId);
    this.StudentFormData.append('StudentType', this.StudentForm.value.StudentType);
    this.StudentFormData.append('GradDate', this.StudentForm.value.GradDate);
    this.StudentFormData.append('GradeType', this.StudentForm.value.GradeType);
    this.StudentFormData.append('CountryId', this.StudentForm.value.CountryId);
    this.StudentFormData.append('ReligionId', this.StudentForm.value.ReligionId);
    this.StudentFormData.append('PersonalImage', this.PersonalImage);
    this.StudentFormData.append('BirthImage', this.BirthImage);
    this.StudentFormData.append('GradeImage', this.GradeImage);
    this.StudentFormData.append('MilitralTwoSoldierImage', this.MilitralTwoSoldierImage);
    this.StudentFormData.append('MilitralSixSoldierImage', this.MilitralSixSoldierImage);
    this.StudentFormData.append('MilitralSevenSoldierImage', this.MilitralSevenSoldierImage);
    this.StudentFormData.append('TerminationImage', this.TerminationImage);
    this.StudentFormData.append('StampedNotify', this.StampedNotify);
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
     }

}
