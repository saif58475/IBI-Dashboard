import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ContentlevelService } from '../../../../shared/API-Service/services/contentlevel.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-view-contentlevel',
  templateUrl: './view-contentlevel.component.html',
  styleUrls: ['./view-contentlevel.component.css']
})
export class ViewContentlevelComponent extends PaginationComponent implements OnInit {

  contentlevel:any[];
  filterstring:string;
  constructor( private _ContentlevelService:ContentlevelService
             , private _Router:Router
             , private _ActivatedRoute:ActivatedRoute) { super(); }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      if( params['id'] != null){
       this._ContentlevelService.GetFilterContentLevel(params['id']).subscribe((res) => {
        this.contentlevel = res.data;
       })
      }else{
        this.getcontentlevel();
      }
    });
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;// -1 * pageSize;
    this.getcontentlevel();
  }
  getcontentlevel(){
    this._ContentlevelService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.contentlevel = res.data;
      this.totalCount = res.totalCount;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertContentLevel`]);
    this._ContentlevelService.Data.next(data);
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
        this._ContentlevelService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getcontentlevel();
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
