import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ReligionService } from '../../../../shared/API-Service/services/religion.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
@Component({
  selector: 'app-view-religion',
  templateUrl: './view-religion.component.html',
  styleUrls: ['./view-religion.component.css']
})
export class ViewReligionComponent extends PaginationComponent implements OnInit {
religions:any [];
  constructor(private _ReligionService:ReligionService
             ,private _Router:Router) { super(); }

  ngOnInit(): void {
    this.getreligions();
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;// -1 * pageSize;
    this.getreligions();
  }
  getreligions(){
    this._ReligionService.GetAllRecords(this.pager).subscribe((res) => {
      this.religions = res.data;
      this.totalCount = res.totalCount;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertReligion`]);
    this._ReligionService.Data.next(data);
  }
  delete(id : number){
    Swal.fire({
      title: 'هل انت متأكد?',
      text: "لن يكون لك صلاحية لاسترجاع هذة الديانة!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'امسح!',
      cancelButtonText: 'رجوع'
    }).then((result) => {
      if (result.isConfirmed) {
        this._ReligionService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "تم المسح بنجاح",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getreligions();
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
