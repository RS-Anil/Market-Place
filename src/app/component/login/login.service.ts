import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'localhost:3000/login'

  constructor( private http:HttpClient) { }

  userLogin(user){
   return this.http.post(this.url,user)
  }
  
}
