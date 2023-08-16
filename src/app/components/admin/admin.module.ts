
 
 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { RouterModule } from '@angular/router';
 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPrintElementModule } from 'ngx-print-element';
 
import { NgApexchartsModule } from 'ng-apexcharts';
 

 

// **  
import {NgxPaginationModule} from 'ngx-pagination';

// cookie 
import { CookieService } from 'ngx-cookie-service'


import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ViewCountryComponent } from './Country/view-country/view-country.component';
import { InsertCountryComponent } from './Country/insert-country/insert-country.component';
import { ViewReligionComponent } from './Religion/view-religion/view-religion.component';
import { InsertReligionComponent } from './Religion/insert-religion/insert-religion.component';
import { ViewAdminsComponent } from './admins/view-admins/view-admins.component';
import { InsertAdminsComponent } from './admins/insert-admins/insert-admins.component';
import { ViewStudentsComponent } from './students/view-students/view-students.component';
import { InsertStudentsComponent } from './students/insert-students/insert-students.component';
import { InsertStudentIBIComponent } from './students/insert-student-ibi/insert-student-ibi.component';




 @NgModule({
  declarations: [
    ViewProductComponent,
    ViewCountryComponent,
    InsertCountryComponent,
    ViewReligionComponent,
    InsertReligionComponent,
    ViewAdminsComponent,
    InsertAdminsComponent,
    ViewStudentsComponent,
    InsertStudentsComponent,
    InsertStudentIBIComponent,
    
  ],
  imports: [
    DxReportViewerModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ArchwizardModule,
    SweetAlert2Module,
    NgxPaginationModule,
    RouterModule,
    NgApexchartsModule,
    NgxPrintElementModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
   CookieService
  ],
  
  exports:[ ]
})
export class AdminModule { }
