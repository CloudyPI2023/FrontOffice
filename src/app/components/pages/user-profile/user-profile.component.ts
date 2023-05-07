import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtServiceService } from '../../services/jwt-service.service';
import { User } from '../../models/user/user';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  user: User;
  token = localStorage.getItem('token');
  decodedToken : any;
  idUser :any ;
  role:any;
  editing: boolean = false;
  public editUser?: User;


  constructor(private jwtService:JwtServiceService ,private userService: UserService) {}

  ngOnInit(): void {
    if (this.token) {
      this.decodedToken= this.jwtService.DecodeToken(this.token);
      this.idUser =this.decodedToken.idUser;
      this.role =this.decodedToken.roles;

      console.log(this.role);
      console.log(this.idUser);

   }

   this.userService.getUserById(this.idUser).subscribe(
    (data) => {
      this.user = data;
    },
    (error) => {
      console.error(error);
    }
  );

 
  }

  public OnDetailsUser(idUser: number){
    this.userService.getUserById(idUser).subscribe(
      (response: User) => {
        this.editUser = this.user;
        console.log(response);
      });
  }




  edit() {
    this.editing = !this.editing;
  }

 /* onSubmit() {
    this.userService.updateUser(this.user).subscribe(user => {
      this.editing = false;
    });
  }*/

  public onUpdateUser(user: User) {
    this.userService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
      },(error) => {
        //alert(error.message);
      if (error.status === 403) {
        alert('Your are not authorized to do this action .');
       // this.toast.error({detail:'Error',summary:'Your are not authorized to do this action .',position:'tr',duration:3000})
  
      } else  {
        alert('Something wrong !');}
       // this.toast.error({detail:'Error',summary:'Something wrong !',position:'tr',duration:2000})    }
      }
    );
  }

  





}
