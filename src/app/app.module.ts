import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,ROUTES, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

const routes:Routes=[
  {path:'list',component:EmployeedetailComponent},
  {path:'create',component:CreateemployeeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailComponent,
    CreateemployeeComponent
  ],
  imports: [
    ReactiveFormsModule, BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
