import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component:RegistrationComponent },
  { path: 'menu', component: MenuComponent },
  { path : 'welcome', component:WelcomeComponent},
  { path : 'user', component:UserComponent},
  { path : 'user/:id', component:UserComponent},
  { path : 'userlist', component:UserListComponent },
  { path : 'college', component:CollegeComponent},
  { path : 'college/:id', component:CollegeComponent},
  { path : 'collegelist', component:CollegeListComponent},
  { path : 'course', component:CourseComponent},
  { path : 'course/:id', component:CourseComponent},
  { path : 'courselist', component:CourseListComponent},
  { path : 'marksheet', component:MarksheetComponent},
  { path : 'marksheetlist', component:MarksheetListComponent },
  { path : 'meritlist', component:MeritlistComponent },
  { path : 'role', component:RoleComponent},
  { path : 'rolelist', component:RoleListComponent},
  { path : 'role/:id', component:RoleComponent},
  { path : 'student', component:StudentComponent },
  { path : 'studentlist', component:StudentListComponent },
  { path : 'student/:id', component:StudentComponent },
  { path : 'subject', component:SubjectComponent },
  { path : 'subjectlist', component:SubjectListComponent },
  { path : 'subject/:id', component:SubjectComponent },
  { path : 'addfaculty', component:AddFacultyComponent },
  { path : 'addfacultylist', component:AddfacultyListComponent },
  { path : 'addfaculty/:id', component:AddFacultyComponent },
  { path : 'timetable', component:TimetableComponent },
  { path : 'timetablelist', component:TimetableListComponent },
  { path : 'timetable/:id', component:TimetableComponent },
  { path : 'changepassword', component:ChangepasswordComponent },
  { path : 'forgetpassword', component:ForgetpasswordComponent },
  { path : 'logout', component:MenuComponent},
  { path : '**', component:DocumentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
