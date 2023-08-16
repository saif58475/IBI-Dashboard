import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// ChangePassword Component



import { ViewProductComponent } from './product/view-product/view-product.component';
import { ViewCountryComponent } from "./Country/view-country/view-country.component";
import { InsertCountryComponent } from "./Country/insert-country/insert-country.component";
import { ViewReligionComponent } from "./Religion/view-religion/view-religion.component";
import { InsertReligionComponent } from "./Religion/insert-religion/insert-religion.component";
import { ViewStudentsComponent } from "./students/view-students/view-students.component";
import { InsertStudentsComponent } from "./students/insert-students/insert-students.component";
import { ViewAdminsComponent } from "./admins/view-admins/view-admins.component";
import { InsertAdminsComponent } from "./admins/insert-admins/insert-admins.component";
import { InsertStudentIBIComponent } from "./students/insert-student-ibi/insert-student-ibi.component";





const routes: Routes = [
    {
        path: "",
        children: [
            

            {
                path: "ViewProduct",
                component: ViewProductComponent,
            },
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
           
            
           
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
