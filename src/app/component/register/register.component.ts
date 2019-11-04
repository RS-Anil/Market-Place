import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from 'src/app/common/my-dialog/my-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private register:RegisterService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  userRegister(register:NgForm){
    console.log(register.value);
    this.register.saveUser(register.value).subscribe(
      res => {
        console.log(res)
        this.openModal("User Added Successfuly")
        register.resetForm();
      },
      err =>{
        console.log(err)
      }
    )
  }


  openModal(msg) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: msg
    };

    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      //alert("response: " + result)
    });
  }

}
