import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();
  constructor(private userService: UserService,
    private route: Router) { }
  ngOnInit(): void {
  }
  userRegister(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe((data: any)=>{JSON.parse(JSON.stringify(data))
     alert("Successfully User is register")
     console.log(data)
     this.route.navigate(['/login']);
    },error=>{
      alert("Sorry User not registred please try later")
      console.log(error)
      this.route.navigate(['/login']);

    
    }
      
    );
    
  }

}
