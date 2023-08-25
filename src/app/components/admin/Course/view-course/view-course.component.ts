import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CourseService } from '../../../../shared/API-Service/services/course.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent extends PaginationComponent implements OnInit {
  courses:any[];
  constructor(private _CourseService:CourseService
             ,private _Router:Router) { super(); }

  ngOnInit(): void {
    this.getcourses();
  }
  pageChanged(event: any) {
    this.pager.pageNumber = event.page;
    this.getcourses();
  }
  getcourses(){
    this._CourseService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.courses = res.data;
      this.totalCount = res.totalCount;
    })
  }
  subcourses_of_course(courseId:number){
   this._Router.navigate([`/content/admin/ViewSubCourse/${courseId}`]);
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertCourse`]);
    this._CourseService.Data.next(data);
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
        this._CourseService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getcourses();
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
