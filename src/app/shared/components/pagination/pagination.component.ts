import { Pagination } from './../../Models/Pagination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: '',
})
//
export class PaginationComponent {
  totalCount:number;
  pageNumber:number;
  public pager: any = {
    pageNumber: 1,
    pageSize: 15
  };
  


}
