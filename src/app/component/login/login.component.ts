import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from 'src/app/common/my-dialog/my-dialog.component';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:NgForm;
  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {

  }

  userLogin(login:NgForm) {
    this.loginService.userLogin(login.value).subscribe(
      res => {
        console.log("Response is", res);
        login.resetForm();
        this.router.navigate(['home']);
      },
      err => {
        console.log(err.error);
        this.openModal(err)
      }
    )
  } 

  openModal(err) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: err.error
    };

    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      //alert("response: " + result)
    });
  }

}
