import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable,finalize } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { WebRequestService } from '../web-request.service';

@Injectable()
export class WebInterceptorInterceptor implements HttpInterceptor {

  constructor(private _webRequest:WebRequestService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._webRequest.show();
    const authReq = request.clone({
      headers: new HttpHeaders({
        'X-IMI-OAUTH': "X-IMI-OAUTH" || [],
        'X-IMI-LANG':"1"|| [],
        'X-IMI-CHANNEL': "ONE8" || [],
        'SessionId':window.sessionStorage.getItem('IsUserLoged') || [],
        "Access-Control-Allow-Origin": "*",
      })  
    });
    return next.handle(authReq).pipe(
      finalize(()=>{
                this._webRequest.hide();
            }));
    
    // .pipe(tap(
    //   {
    //     next: (Event) => {
    //       if (Event instanceof HttpResponse) {
    //         if (Event.status == 401) {
    //           alert('invalid session id');
    //         }

    //       }
    //       return Event;
    //     },
    //     error: (Event) => {
    //       if (Event.status == 0) {
    //         alert(Event.status_code);
    //       }
    //       else {
    //         alert('Server Not Found');
    //       }
    //       this._webRequest.hide();
    //     },
    //     finalize:()=>{
    //         this._webRequest.hide();
    //     }
    //   }
    // ));
  }
}
