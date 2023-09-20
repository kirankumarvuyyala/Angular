import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebRequestService } from 'src/app/web-request.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  gender:string='male';
  isAccept:boolean=false;
  students:any[];
  StudentsUrl:any;
  MobileNum:number;
  Show:boolean=false;
   

  constructor(private _WebRequestService:WebRequestService,private router:Router){

  }
  ngOnInit(){
    // this._WebRequestService.GetStudentsList()
    // .subscribe((data:any[]) =>
    // {this.students=data
    // });
    // this._WebRequestService.getStudentsFrmUrl().subscribe((data:any)=>
    // {this.StudentsUrl=data.data
    //   console.log(this.StudentsUrl);
    // });
  }
  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);
    this._WebRequestService.UpdateStudents(studentForm.value).subscribe({
      next: (response: any) => {
        if (response =='1'|| response) {
 console.log('suc');
 alert('successfully Inserted');
 this.router.navigate(['/Students']);
        } else {
          console.log('fail');
        }
      },
      error: (error: any) => {
        console.log('error');
      },
    });
  } catch (error: any) {
    console.log('catch');
  }
  CheckIsNumber(eve){
    var ASCIICode = (eve.which) ? eve.which : eve.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
  }
  ShowPassword(){
    this.Show=!this.Show;
  }
}
