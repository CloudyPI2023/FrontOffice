import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../models/user/user-login';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserLogin = new UserLogin();
  formModel: any = {};

  constructor(private fb: FormBuilder, private service: LoginService, private route: Router) {}
  /*  formModel = {
      email: '',
      password: ''
    }  */

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
   // alert("you are not allowed")
    this.route.navigateByUrl('');
    }

    this.formModel = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

 /* onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log(res)
        console.log(res.access_token)
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('username', res.user);
        alert("Welcome")
        this.route.navigateByUrl('');       
      }
      ,error=>{
        alert(console.log() )
        this.route.navigate(['/login']);
  
      
      });
  }*/
  onSubmit() {
    if (this.formModel.valid) {
      this.service.login(this.formModel.value).subscribe(
        (res: any) => {
          console.log(res)
          console.log(res.access_token)
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('username', res.user);
          //alert("Welcome")
         // this.toast.success({detail:'Success',summary:'You are successfully logged in !',position:'tr',duration:2000})
          this.route.navigateByUrl('');       
        },
        (error) => {
         // alert(console.log() )
       //   this.toast.error({detail:'Error',summary:'Email or password is incorrect',position:'tr',duration:3000})
        this.route.navigate(['/login']);
        }
      );
    }
  }

  onLogout() {
    localStorage.removeItem('token');  
    this.route.navigate(['/login']);
  }
}