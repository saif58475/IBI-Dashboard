import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { GroupService } from '../../../../shared/API-Service/services/group.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
import { Groupcourse } from './../../../../shared/Models/groupcourse';
@Component({
  selector: 'app-view-groups',
  templateUrl: './view-groups.component.html',
  styleUrls: ['./view-groups.component.css']
})
export class ViewGroupsComponent extends PaginationComponent implements OnInit {
GroupsCourse:Groupcourse [];
  constructor( private _GroupService:GroupService
             , private _Router:Router) {super(); }

  ngOnInit(): void {
    this.getgroupcourses();
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;
    this.getgroupcourses();
  }
  getgroupcourses(){
    this._GroupService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.GroupsCourse = res.data;
      this.totalCount = res.totalCount;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertGroupCourse`]);
    this._GroupService.Data.next(data);
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
        this._GroupService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getgroupcourses();
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
