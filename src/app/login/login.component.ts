import { Component } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // formData = {
  //   MobileNumber: '',
  //   password: ''
  // };
  constructor(private _WebRequestService:WebRequestService,private _router:Router){
    window.sessionStorage.clear();
    _WebRequestService.IsUserLoged=false;

  }
  GetEmployeeDetails() {
    // <app-employee></app-employee>
  }
  CheckUser(loginForm: NgForm):void {
    this._WebRequestService.checkUser(loginForm.value).subscribe({
      next: (response: any) => {
        if (response.body.status_code == 1) {

          Swal.fire('LoginSuccess', 'success');
          console.log('Valid USer');
          this._WebRequestService.ToggleLogin(true);
          this._router.navigate(['/Students']);
          let SessionId = response.headers.get('SessionId');
          window.sessionStorage.setItem("IsUserLoged", SessionId);
          window.sessionStorage.setItem("KK", response.headers.get('kk'))
          //  console.log(response.headers.get('SessionId'));
        }
        else {
          Swal.fire('LoginFail', 'fail');
          console.log('Invalid user');
        }
      },
      error: (error: any) => {
        Swal.fire('LoginFail', 'fail');
        console.log('Invalid user');

      }
    })
  }
}

