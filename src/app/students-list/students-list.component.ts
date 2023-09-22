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
  students: any[];
  pagination:number=1;
  allStudents:number=0;
  constructor(private _WebRequestService: WebRequestService, private _router: Router) {
  }
  ngOnInit() {
    if (window.sessionStorage.getItem("IsUserLoged") != 'null') {
      this._WebRequestService.GetStudentsList()
        .subscribe((data: any) => {
          this.students = data.body;
          this.allStudents=this.students.length;
          console.log(data.headers.get('SessionId'));
          console.log(data.headers.get('kk'));
        });
    }
    else {
      this._router.navigate(['/Login']);
    }
  }
  GetStudents(){
    if (window.sessionStorage.getItem("IsUserLoged") != null) {
      this._WebRequestService.GetStudentsList()
        .subscribe((data: any) => {
          this.students = data.body;
          this.allStudents=this.students.length;
          console.log(data.headers.get('SessionId'));
          console.log(data.headers.get('kk'));
        });
    }
    else {
      this._router.navigate(['/Login']);
    }
  }
  AddNewStudents() {
    this._router.navigate(['/Register']);
  }

  saveSegment() {
    console.log('save');
  }
  pageChange(event: number) {
    this.pagination = event;
    this.GetStudents();
  }
}
