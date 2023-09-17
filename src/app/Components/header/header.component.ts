import { Component } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

public IsLoged:boolean;
constructor(public _WebRequestService:WebRequestService){
 // this.IsLoged= window.sessionStorage.getItem("IsLoged");
 console.log(this._WebRequestService.isLoading);
 this.IsLoged=JSON.parse(window.sessionStorage.getItem("IsLoged")!);
 console.log(this.IsLoged);

}
ngOnInIt(){
// this.IsLoged=this._WebRequestService.isLoading$;
}
LogOut(){
  this.IsLoged=false;
  this._WebRequestService.ToggleLogin(false);
  window.sessionStorage.clear();
}
}
