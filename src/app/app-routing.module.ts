import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { LearningsComponent } from './Components/learnings/learnings.component';
import { LearnDetailsComponent } from './Components/learn-details/learn-details.component';
import { OverViewComponent } from './Components/over-view/over-view.component';
const routes: Routes = [
  {
    path:'employee',component:EmployeeComponent
  },
  {
    path:'employeeList',component:EmployeeListComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Students',component:StudentsListComponent
  },
  {
    path:'',redirectTo:'Login',pathMatch:'full'
  }  ,
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Learn',component:LearningsComponent
  },
  {
    path:'Learn/:id',component:LearnDetailsComponent,children:[{path:'OverView',component:OverViewComponent},]
  },
  {
    path:'**',component:WildcardRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
