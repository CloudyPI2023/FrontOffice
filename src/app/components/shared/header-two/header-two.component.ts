import { Component } from '@angular/core';
import { HelperService } from '../../helper/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent extends HelperService {

  constructor(private router:Router){
    super();
  }
 //router: Router;

 onLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('username');

  this.router.navigate(['/login']);
}
}
