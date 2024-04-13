import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DocumentComponent } from './document/document.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    UserComponent,
    UserListComponent,
    CollegeComponent,
    CollegeListComponent,
    CourseComponent,
    CourseListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    MeritlistComponent,
    RoleComponent,
    RoleListComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    AddFacultyComponent,
    AddfacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    DocumentComponent,
    RegistrationComponent,
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
