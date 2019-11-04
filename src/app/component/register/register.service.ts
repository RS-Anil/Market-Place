import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:3000/api/register'

  constructor( private http:HttpClient) { }

  saveUser(user){
   return this.http.post(this.url,user)
  }
  
}