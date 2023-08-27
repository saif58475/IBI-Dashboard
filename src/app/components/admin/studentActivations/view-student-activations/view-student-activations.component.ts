import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentActivationsService } from './../../../../shared/API-Service/services/student-activations.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-student-activations',
  templateUrl: './view-student-activations.component.html',
  styleUrls: ['./view-student-activations.component.css']
})
export class ViewStudentActivationsComponent implements OnInit {
ActivatedCourses:any [];
  constructor( private _ActivatedRoute:ActivatedRoute
             , private _Router:Router
             , private _StudentActivationsService:StudentActivationsService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      this.GetStudentActivatedCourses(Number(params['studentId']));
    })
  }

  GetStudentActivatedCourses(studentId:number){
   this._StudentActivationsService.Get(studentId).subscribe((res) => {
    this.ActivatedCourses = res.data;
    if( this.ActivatedCourses.length == 0){
      Swal.fire({
        icon: "warning",
        title: "هذا الطالب غير مشترك في اي كورس",
        showConfirmButton: false,
        timer: 2000,
      });
      this._Router.navigate(["content/admin/ViewStudents"]);
    }
   })
  }
  GoToPayments(view:any){
     this._Router.navigate([`/content/admin/ViewPaymentHistory/${view.studentId}/${view.studentSubCourseId}`]);
  }

}
