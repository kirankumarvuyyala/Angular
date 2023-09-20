import { jsDocComment } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private _router:Router){

  }
  ngOnInit() {
    if (JSON.stringify(window.sessionStorage.getItem("IsUserLoged")) == 'null') {
      this._router.navigate(['/Login']);
    }
  }
  public ListBox:boolean=false;
  public dropDownValue="";
  @Input()
  All: number;
  @Input()
  Male: number;
  @Input()
  Female: number;
  @Input()
  ListName:string;
isTrue:boolean=true;
  selectedRadioButtonValue:string='All';
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
      new EventEmitter<string>();
  // This method raises the custom event. We will bind this
  // method to the change event of all the 3 radio buttons
  onRadioButtonSelectionChange() {
      this.countRadioButtonSelectionChanged
          .emit(this.selectedRadioButtonValue);
          console.log(this.selectedRadioButtonValue);
  }
 
  setDropDownValue(DropDownValue:any){
    this.dropDownValue=DropDownValue.target.value;
    console.log(this.dropDownValue);
  }
  ChangeValue(){
    this.isTrue=!this.isTrue;
  }
  IsChecked(){
    this.ListBox=!this.ListBox;
   if(this.ListBox)
    this.ListName='Studentslist';
  else
  this.ListName='EmployeeLists';
    console.log(this.ListName);
  }
}
