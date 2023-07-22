import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { StudentService } from '../../../../shared/API-Service/services/student.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
students:any [];
  constructor(private _StudentService:StudentService
             ,private _Router:Router
             ,private _DatePipe:DatePipe) { }

  ngOnInit(): void {
    this.getstudents();
  }

  getstudents(){
    this._StudentService.Get().subscribe((res) => {
      res.data.forEach(element => {
        element.dob = this._DatePipe.transform(element.dob, 'yyyy-MM-dd')
        element.gradDate = this._DatePipe.transform(element.gradDate, 'yyyy-MM-dd')
      });
      this.students = res.data;
    });
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertStudents`]);
    this._StudentService.Data.next(data);
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
        this._StudentService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getstudents();
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
