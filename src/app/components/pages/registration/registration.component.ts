import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();
  imgURL : any;
  image_user:String ;
  public message: string;
  public imagePath : String;

  constructor(private userService: UserService,
    private route: Router) { }
  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe((data: any)=>{JSON.parse(JSON.stringify(data))
     // this.user('file',this.image_user);      
     alert("Successfully User is register ! Please check your email")
     console.log(data)
     this.route.navigate(['/login']);
    },error=>{
      alert("Sorry User not registred please try later")
      console.log(error)
      //this.route.navigate(['/login']);

    
    }
      
    );
    
  }

  onFileSelected(event: any) {
    console.log(event);
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.image_user = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
}
