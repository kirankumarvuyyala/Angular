import { Component } from '@angular/core';
import { WebRequestService } from '../web-request.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    MobileNumber: '',
    password: ''
  };
  Show:boolean=true;
  constructor(private _WebRequestService:WebRequestService,private _router:Router){

  }
GetEmployeeDetails(){
  // <app-employee></app-employee>
}
CheckUser(){
this._WebRequestService.checkUser(this.formData).subscribe({
  next:(response:any)=>{
if(response==1)
{
  Swal.fire('LoginSuccess', 'success');
  console.log('Valid USer');
  window.sessionStorage.setItem("IsLoged","true");
 this._router.navigate(['/Students']);
}
else
{
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

