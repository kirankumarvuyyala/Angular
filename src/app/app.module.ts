import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,UserComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MyTitlePipe } from './my-title.pipe';
import{HttpClientModule,HTTP_INTERCEPTORS} from  '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonDirective } from './Directives/common.directive';
import { WebInterceptorInterceptor } from './Interceptors/web-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MyTitlePipe,
    UserComponents,
    CommonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: WebInterceptorInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
