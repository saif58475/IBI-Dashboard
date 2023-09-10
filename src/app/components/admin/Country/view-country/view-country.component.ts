import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CountryService } from '../../../../shared/API-Service/services/country.service';
import { PaginationComponent } from './../../../../shared/components/pagination/pagination.component';
import { Country } from './../../../../shared/Models/country';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent extends PaginationComponent implements OnInit {
  countries:Country [];
  constructor( private _CountryService:CountryService
             , private _Router:Router) { super(); }

  ngOnInit(): void {
    this.getcountries();
  }

  pageChanged(event: any) {
    this.pager.pageNumber = event.page;// -1 * pageSize;
    this.getcountries();
  }
  getcountries(){
    this._CountryService.GetAllRecords(this.pager).subscribe((res : any) => {
      this.countries = res.data;
      this.totalCount = res.totalCount;
    })
  }
  Update(data) {
    this._Router.navigate([`/content/admin/InsertCountry`]);
    this._CountryService.Data.next(data);
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
        this._CountryService.Delete(id).subscribe((res) => {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfuly",
            showConfirmButton: false,
            timer: 1500,
          });
       this.getcountries();
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
