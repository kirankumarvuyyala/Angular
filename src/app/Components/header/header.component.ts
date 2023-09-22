import { Component } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

public IsUserLoged:string;
constructor(public _WebRequestService:WebRequestService){
 // this.IsLoged= window.sessionStorage.getItem("IsLoged");
//  console.log(this._WebRequestService.IsUserLoged);
 this.IsUserLoged=JSON.stringify(window.sessionStorage.getItem("IsUserLoged"));
 console.log(this.IsUserLoged);

}
ngOnInIt(){
// this.IsLoged=this._WebRequestService.isLoading$;
}
LogOut(){
  // this.IsUserLoged=false;
  this._WebRequestService.ToggleLogin(null);
  window.sessionStorage.clear();
}
}
