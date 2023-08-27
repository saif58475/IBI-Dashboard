import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReligionService } from './../../../../shared/API-Service/services/religion.service';

@Component({
  selector: 'app-insert-religion',
  templateUrl: './insert-religion.component.html',
  styleUrls: ['./insert-religion.component.css']
})
export class InsertReligionComponent implements OnInit {
ReligionForm:FormGroup;
update:boolean = false;
button:boolean = false;
recordtoupdate:any;
  constructor(private _ReligionService:ReligionService
             ,private _Router:Router
             ,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._ReligionService.Data.subscribe((res) => {
      if( res == null){
       this._Router.navigate(['content/admin/ViewReligion']);
       //this.initiate();
      }else{
        this.update = true;
        this.recordtoupdate = res;
        this.initiate(this.recordtoupdate);
      }
    })
  }

  initiate(data?:any){
    this.ReligionForm = this._FormBuilder.group({
      ReligionName: [data?.religionName || '', Validators.required]
    });
  }

  get fc(){
    return this.ReligionForm.controls;
  }
  onSubmit(){
    this.button = true;
    if(this.ReligionForm.status == "VALID" && this.update == true){
      this.ReligionForm.addControl('id', new FormControl(this.recordtoupdate.id));
      this._ReligionService.Update(this.ReligionForm.value).subscribe((res) => {
        Swal.fire({
         icon: "success",
         title: "تم تعديل الديانة بنجاح",
         showConfirmButton: false,
         timer: 1500,
       }); 
       this.ReligionForm.reset();
       this._Router.navigate(['content/admin/ViewReligion']);
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
    this._ReligionService.Data.next(null);
     }
}
