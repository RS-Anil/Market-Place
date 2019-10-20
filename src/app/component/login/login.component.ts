import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user={
    "email":"anil.sharma@gmail.com",
    "password":"asdf@123d"
  }

  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.userLogin(this.user).subscribe(
      res => {
        console.log("Response is",res);
      }
    )
  }

  userLogin(login){
    alert('Hi Welocme........');
    
  }

}
