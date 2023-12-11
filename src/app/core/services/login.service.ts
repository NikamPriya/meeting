import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  onLogin(obj:any): Observable<any>{
    return this.http.post(APIConstant.login.onLogin, obj)
  }
}
