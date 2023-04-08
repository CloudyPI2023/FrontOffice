import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ForgetPassService } from './forget-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  formModel = {
    email: ''
  } 
  constructor(private service: ForgetPassService,private formBuilder: FormBuilder,private http:HttpClient,private route:Router) { }


  ngOnInit():void {
  }


  submit(form: NgForm){
    console.log(form.value)  
    this.service.forgetpassword(form.value.email).subscribe(
      (res: any) => {
        alert("Please check your email");      
      },error=>{
        alert( console.log(error))
        
      
      }
      );
  }
}
