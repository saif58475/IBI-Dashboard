import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TeachersService } from '../../../../shared/API-Service/services/teachers.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
import { Teacher } from './../../../../shared/Models/teacher';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.css']
})
export class ViewTeachersComponent extends PaginationComponent implements OnInit {

  teachers:Teacher [];

  constructor( private _TeacherService:TeachersService
             , private _Router:Router) { super(); }

  ngOnInit(): void {
    this.getteachers();
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;
    this.getteachers();
  }
  getteachers(){
    this._TeacherService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.teachers = res.data;
      this.totalCount = res.totalCount;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertTeacher`]);
    this._TeacherService.Data.next(data);
  }
  delete(id : number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._TeacherService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getteachers();
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
