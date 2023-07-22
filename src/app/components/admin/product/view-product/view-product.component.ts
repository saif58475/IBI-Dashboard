import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Image } from '../../../../../images/images';
import { ProductService } from '../../../../shared/API-Service/services/product.service'
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
products:object [] = [];
img : string = Image;
  constructor(private _Router:Router, private _ProductService:ProductService) { 
    
  }

  ngOnInit(): void {
    this.getproducts();
  }
  

getproducts(){
  
}

productupdate(id : number){
  console.log(id);
}

Update(data) {
  this._Router.navigate([`/content/admin/InsertProduct`]);
  this._ProductService.Data.next(data);
  console.log(data );
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
      this._ProductService.Delete(id).subscribe((res) => {
        Swal.fire({
          icon: "success",
          title: "Deleted Successfuly",
          showConfirmButton: false,
          timer: 1500,
        });
     this.getproducts();
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
