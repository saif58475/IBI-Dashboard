import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ChangePassword Component



import { ViewCountryComponent } from "./Country/view-country/view-country.component";
import { InsertCountryComponent } from "./Country/insert-country/insert-country.component";
import { ViewReligionComponent } from "./Religion/view-religion/view-religion.component";
import { InsertReligionComponent } from "./Religion/insert-religion/insert-religion.component";
import { ViewStudentsComponent } from "./students/view-students/view-students.component";
import { InsertStudentsComponent } from "./students/insert-students/insert-students.component";
import { ViewAdminsComponent } from "./admins/view-admins/view-admins.component";
import { InsertAdminsComponent } from "./admins/insert-admins/insert-admins.component";
import { InsertStudentIBIComponent } from "./students/insert-student-ibi/insert-student-ibi.component";
import { ViewCourseComponent } from "./Course/view-course/view-course.component";
import { InsertCourseComponent } from "./Course/insert-course/insert-course.component";
import { ViewSubcourseComponent } from "./SubCourse/view-subcourse/view-subcourse.component";
import { InsertSubcourseComponent } from "./SubCourse/insert-subcourse/insert-subcourse.component";
import { ViewContentlevelComponent } from "./ContentLevel/view-contentlevel/view-contentlevel.component";
import { InsertContentlevelComponent } from "./ContentLevel/insert-contentlevel/insert-contentlevel.component";
import { InsertStudentsubcourseIBIStudentComponent } from "./studentsubcourses/insert-studentsubcourse-ibistudent/insert-studentsubcourse-ibistudent.component";
import { InsertStudentsubcourseStudentComponent } from "./studentsubcourses/insert-studentsubcourse-student/insert-studentsubcourse-student.component";
import { ViewStudentPaymenthistoryComponent } from "./paymentHistory/view-student-paymenthistory/view-student-paymenthistory.component";





const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "ViewCountry",
                component: ViewCountryComponent,
            },
            {
                path: "InsertCountry",
                component: InsertCountryComponent,
            },
            {
                path: "ViewReligion",
                component: ViewReligionComponent,
            },
            {
                path: "InsertReligion",
                component: InsertReligionComponent,
            },
            {
                path: "ViewStudents",
                component: ViewStudentsComponent,
            },
            {
                path: "InsertStudents",
                component: InsertStudentsComponent,
            },
            {
                path: "InsertStudentsIBI",
                component: InsertStudentIBIComponent,
            },
            {
                path: "ViewAdmin",
                component: ViewAdminsComponent,
            },
            {
                path: "InsertAdmin",
                component: InsertAdminsComponent,
            },
            {
                path: "ViewCourse",
                component: ViewCourseComponent,
            },
            {
                path: "InsertCourse",
                component: InsertCourseComponent,
            },
            {
                path: "ViewSubCourse",
                component: ViewSubcourseComponent,
            },
            {
                path: "ViewSubCourse/:id",
                component: ViewSubcourseComponent,
            },
            {
                path: "InsertSubCourse",
                component: InsertSubcourseComponent,
            },
            {
                path: "ViewContentLevel",
                component: ViewContentlevelComponent,
            },
            {
                path: "ViewContentLevel/:id",
                component: ViewContentlevelComponent,
            },
            {
                path: "InsertContentLevel",
                component: InsertContentlevelComponent,
            },
            {
                path: "InsertIBIStudentSubCourse/:studentId",
                component: InsertStudentsubcourseIBIStudentComponent
            },
            {
                path: "InsertStudentSubCourse/:studentId",
                component: InsertStudentsubcourseStudentComponent
            },
            {
                path: "ViewPaymentHistory/:studentId",
                component: ViewStudentPaymenthistoryComponent
            },
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
