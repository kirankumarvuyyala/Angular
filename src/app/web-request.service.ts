import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
urls:string='/assets/Config.json';
Geturl:string='http://localhost:64790/api/Selfcare/GetData';
PostUrl:string='http://localhost:64790/api/Selfcare/InsertUsers';
LoginUrl:string='http://localhost:64790/api/Selfcare/LoginUser';
pageNumber:number=1;
public isLoading:boolean;
  constructor( public http:HttpClient) { 
    if(JSON.parse(window.sessionStorage.getItem("IsLoged")!))
    {
     this.isLoading=JSON.parse(window.sessionStorage.getItem("IsLoged")!);
    }
  }
  GetStudentsList():any{
   // return  this.http.get(this.urls);  for json data
   return this.http.get(this.Geturl);

  }
  private isLoading$$ = false;


  ToggleLogin(IsLoged:boolean){
    this.isLoading=IsLoged;
  }
  getStudentsFrmUrl(){
    return  this.http.get('https://reqres.in/api/users?page='+this.pageNumber);
  }
  UpdateStudents(postBody: any){   
    return this.http.post(this.PostUrl, postBody);
  
}
checkUser(postBody:any){
  return this.http.post(this.LoginUrl,postBody)
}
}
