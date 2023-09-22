import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
urls:string='/assets/Config.json';
Geturl:string='http://localhost:64790/api/Selfcare/GetData';
PostUrl:string='http://localhost:64790/api/Selfcare/InsertUsers';
LoginUrl:string='http://localhost:64790/api/Selfcare/LoginUser';
pageNumber:number=1;
public IsUserLoged:boolean;
private isLoading$$=new  BehaviorSubject<boolean>(false);
isLoading$=this.isLoading$$.asObservable();
  constructor( public http:HttpClient) { 
    if(JSON.parse(window.sessionStorage.getItem("IsLoged")!))
    {
     this.IsUserLoged=JSON.parse(window.sessionStorage.getItem("IsUserLoged")!);
    }
  }
  // public headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  GetStudentsList():any{
   // return  this.http.get(this.urls);  for json data
   let headers = new HttpHeaders();
   headers=headers.set('LANG','EN');
   headers = headers.set('Authorization', 'Admin');
  
   return this.http.get(this.Geturl,{headers:headers,observe:'response'});

  }
    ToggleLogin(IsLoged:boolean){
    this.IsUserLoged=IsLoged;
  }
  getStudentsFrmUrl(){
    return  this.http.get('https://reqres.in/api/users?page='+this.pageNumber);
  }

  UpdateStudents(postBody: any){   
    return this.http.post(this.PostUrl, postBody);
  
}
checkUser(postBody:any){
  return this.http.post(this.LoginUrl,postBody,{observe:'response'})
}
show(){
this.isLoading$$.next(true);
}
hide(){
  this.isLoading$$.next(false);
}
}
