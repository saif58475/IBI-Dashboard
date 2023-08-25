import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SubcourseService } from '../../../../shared/API-Service/services/subcourse.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-view-subcourse',
  templateUrl: './view-subcourse.component.html',
  styleUrls: ['./view-subcourse.component.css']
})
export class ViewSubcourseComponent extends PaginationComponent implements OnInit {
  subcourses:any[];
  constructor( private _SubcourseService:SubcourseService
             , private _Router:Router
             , private _ActivatedRoute:ActivatedRoute) { super(); }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      if( params['id'] != null){
       this._SubcourseService.GetFilterSubCourse(params['id']).subscribe((res) => {
        this.subcourses = res.data;
       })
      }else{
        this.getsubcourses();
      }
    });
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;// -1 * pageSize;
    this.getsubcourses();
  }
  getsubcourses(){
    this._SubcourseService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.subcourses = res.data;
      this.totalCount = res.totalCount;
    })
  }
  contentlevels_of_subcourse(subCourseId:number){
    this._Router.navigate([`/content/admin/ViewContentLevel/${subCourseId}`]);
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertSubCourse`]);
    this._SubcourseService.Data.next(data);
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
        this._SubcourseService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getsubcourses();
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
