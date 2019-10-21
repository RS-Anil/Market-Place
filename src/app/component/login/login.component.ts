import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private login:LoginService) { }

  ngOnInit() {
 
  }

  userLogin(login){
    this.login.userLogin(login.value).subscribe(
      res => {
        console.log("Response is",res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
