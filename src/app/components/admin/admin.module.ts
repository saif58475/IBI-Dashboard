
 
 

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
import { ViewCountryComponent } from './Country/view-country/view-country.component';
import { InsertCountryComponent } from './Country/insert-country/insert-country.component';
import { ViewReligionComponent } from './Religion/view-religion/view-religion.component';
import { InsertReligionComponent } from './Religion/insert-religion/insert-religion.component';
import { ViewAdminsComponent } from './admins/view-admins/view-admins.component';
import { InsertAdminsComponent } from './admins/insert-admins/insert-admins.component';
import { ViewStudentsComponent } from './students/view-students/view-students.component';
import { InsertStudentsComponent } from './students/insert-students/insert-students.component';
import { InsertStudentIBIComponent } from './students/insert-student-ibi/insert-student-ibi.component';
import { ViewCourseComponent } from './Course/view-course/view-course.component';
import { InsertCourseComponent } from './Course/insert-course/insert-course.component';
import { ViewSubcourseComponent } from './SubCourse/view-subcourse/view-subcourse.component';
import { InsertSubcourseComponent } from './SubCourse/insert-subcourse/insert-subcourse.component';
import { ViewContentlevelComponent } from './ContentLevel/view-contentlevel/view-contentlevel.component';
import { InsertContentlevelComponent } from './ContentLevel/insert-contentlevel/insert-contentlevel.component';
import { InsertStudentsubcourseIBIStudentComponent } from './studentsubcourses/insert-studentsubcourse-ibistudent/insert-studentsubcourse-ibistudent.component';
import { InsertStudentcoursesComponent } from './studentsubcourses/insert-studentcourses/insert-studentcourses.component';
import { InsertStudentsubcourseStudentComponent } from './studentsubcourses/insert-studentsubcourse-student/insert-studentsubcourse-student.component';
import { ViewStudentPaymenthistoryComponent } from './paymentHistory/view-student-paymenthistory/view-student-paymenthistory.component';
import { InsertStudentPaymenthistoryComponent } from './paymentHistory/insert-student-paymenthistory/insert-student-paymenthistory.component';




 @NgModule({
  declarations: [
    ViewCountryComponent,
    InsertCountryComponent,
    ViewReligionComponent,
    InsertReligionComponent,
    ViewAdminsComponent,
    InsertAdminsComponent,
    ViewStudentsComponent,
    InsertStudentsComponent,
    InsertStudentIBIComponent,
    ViewCourseComponent,
    InsertCourseComponent,
    ViewSubcourseComponent,
    InsertSubcourseComponent,
    ViewContentlevelComponent,
    InsertContentlevelComponent,
    InsertStudentsubcourseIBIStudentComponent,
    InsertStudentcoursesComponent,
    InsertStudentsubcourseStudentComponent,
    ViewStudentPaymenthistoryComponent,
    InsertStudentPaymenthistoryComponent,
    
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
