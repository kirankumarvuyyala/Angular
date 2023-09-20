import { Component } from '@angular/core';
// import { EmployeeService } from '../employee.service';
import { WebRequestService } from '../web-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  name = 'Angular';
  enableEdit = false;
  enableEditIndex = null;
  students:any[];
  constructor(private _WebRequestService:WebRequestService,private _router:Router){
  }
  ngOnInit(){
    if (window.sessionStorage.getItem("IsUserLoged") != null) {
      this._WebRequestService.GetStudentsList()
        .subscribe((data: any) => {
          this.students = data.body;
          console.log(data.headers.get('SessionId'));
          console.log(data.headers.get('kk'));
        });
    }
    else {
      this._router.navigate(['/Login']);
    }
  }
  AddNewStudents(){
this._router.navigate(['/Register']);
  }
  // enableEditMethod(i) {
  //   this.enableEdit = true;
  //   this.enableEditIndex = ;
  //   // console.log(i, e);
  // }
  saveSegment(){
    console.log('save');
  }
}
