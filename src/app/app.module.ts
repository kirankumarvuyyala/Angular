import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MyTitlePipe } from './my-title.pipe';
import { LoginComponent } from './login/login.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { RegisterComponent } from './Components/register/register.component';
import{HttpClientModule} from  '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LearningsComponent } from './Components/learnings/learnings.component';
import { OverViewComponent } from './Components/over-view/over-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MyTitlePipe,
    LoginComponent,
    WildcardRouteComponent,
    StudentsListComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LearningsComponent,
    OverViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
