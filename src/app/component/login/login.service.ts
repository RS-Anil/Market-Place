import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login'
  

  constructor( private http:HttpClient) { }

  userLogin(user){
    
    return this.http.get(this.url,{observe: "body",params:{"email":user.email,"password":user.password}})
  }
  
}
