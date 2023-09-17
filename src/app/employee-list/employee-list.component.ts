import { Component } from '@angular/core';

@Component({
  selector: 'app-Employeelist',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  selectedStudentCountRadioButton:string='All';
  ListName:string='EmployeeLists';
  Employees: any[] = [
    {
        ID: 'emp101', FirstName: 'Pranaya', LastName: 'Rout',
        DOB: '12/8/1988', Gender: 'Male', Salary: 70234.56
    },
    {
        ID: 'emp102', FirstName: 'Anurag', LastName: 'Mohanty',
        DOB: '10/14/1989', Gender: 'Male', Salary: 66066.00
    },
    {
        ID: 'emp103', FirstName: 'Priyanka', LastName: 'Dewangan',
        DOB: '7/24/1992', Gender: 'Female', Salary: 61543.15
    },
    {
        ID: 'emp104', FirstName: 'Hina', LastName: 'Sharma',
        DOB: '8/19/1990', Gender: 'Female', Salary: 90000.50
    },
    {
        ID: 'emp105', FirstName: 'Sambit', LastName: 'Satapathy',
        DOB: '4/12/1991', Gender: 'Male', Salary: 19876.54
    },{
      ID: 'emp106', FirstName: 'Tarun', LastName: 'Mallick',
      DOB: '4/10/1992', Gender: 'Female', Salary: 11278.55
  }
];
getAllEmployeeStudentsList():number{
 return this.Employees.length
}
getMaleStudents():number{
  return this.Employees.filter(emp=>emp.Gender==="Male").length
}
getFeMaleStudents():number{
  return this.Employees.filter(emp=>emp.Gender==="Female").length
}
onStudentCountRadioButtonChange(selectedRadioButtonValue: any): void {
  this.selectedStudentCountRadioButton = selectedRadioButtonValue;
}
}
