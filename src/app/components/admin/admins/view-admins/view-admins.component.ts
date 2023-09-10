import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AdminService } from './../../../../shared/API-Service/services/admin.service';
import { JwtHelperService } from 'angular-jwt';
import { User } from './../../../../shared/Models/user';
@Component({
  selector: 'app-view-admins',
  templateUrl: './view-admins.component.html',
  styleUrls: ['./view-admins.component.css']
})

export class ViewAdminsComponent implements OnInit {
admins:User [];
admin:boolean = false;
constructor( private _AdminService:AdminService
           , private _Router:Router) { }

  ngOnInit(): void {
  if( JSON.parse(window.atob(localStorage.getItem("Authorization").split('.')[1])).email == 1){
    this.admin = true;
  }
   this.getadmins();
  }

  getadmins(){
    this._AdminService.Get().subscribe((res) => {
      this.admins = res.data;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertAdmin`]);
    this._AdminService.Data.next(data);
  }
  delete(id : number){
    Swal.fire({
      title: 'هل انت متأكد ؟',
      text: "لن يكون لك صلاحية لاعادة المسؤول!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'امسح!',
      cancelButtonText: 'رجوع',
    }).then((result) => {
      if (result.isConfirmed) {
        this._AdminService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "تم المسح بنجاح",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getadmins();
        },(err) => {
          Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text:err.error.message    
          })
        },() => {
          console.log("completed");
        })
      }
    })
    
  }

}
