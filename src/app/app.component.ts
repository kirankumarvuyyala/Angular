import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebRequestService } from './web-request.service';

@Component({
  selector: 'app-root',
  // template:`<div><app-employee></app-employee></div>`,
   templateUrl: './app.component.html',
    // templateUrl: `<app-employee></app-employee>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  isLoading;
  constructor(public _webRequest:WebRequestService){
  }
}
