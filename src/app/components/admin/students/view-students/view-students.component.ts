import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { StudentService } from '../../../../shared/API-Service/services/student.service';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent extends PaginationComponent implements OnInit {
students:any [];
  constructor(private _StudentService:StudentService
             ,private _Router:Router
             ,private _DatePipe:DatePipe) { super(); }

  ngOnInit(): void {
    this.getstudents();
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;// -1 * pageSize;
    this.getstudents();
  }
  getstudents(){
    this._StudentService.GetAllRecords(this.pager).subscribe((res) => {
      res.data.forEach(element => {
        element.dob = this._DatePipe.transform(element.dob, 'yyyy-MM-dd')
        element.gradDate = this._DatePipe.transform(element.gradDate, 'yyyy-MM-dd')
      });
      this.students = res.data;
      this.totalCount = res.totalCount;
    });
  }
  Update(data) {
    switch(data.studentType){
      case 1:
        this._Router.navigate([`/content/admin/InsertStudentsIBI`]);
        break;
        case 2:
          this._Router.navigate([`/content/admin/InsertStudents`]);
          break;
          default:
            alert('Delete this record because it was a trial record');
            break;
    }
    this._StudentService.Data.next(data);
  }

  delete(id : number){
    Swal.fire({
      title: 'هل انت متأكد من المسح?',
      text: "لن يكون لك صلاحية لاسترجاع الطالب!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'امسح!',
      cancelButtonText:'رجوع'
    }).then((result) => {
      if (result.isConfirmed) {
        this._StudentService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "تم المسح بنجاح",
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
