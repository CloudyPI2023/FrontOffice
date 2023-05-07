import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // constructor() { }
  constructor(private commandService: CartserviceService,private router: Router) { }


  // createCommand(cart: Cart): Observable<any>{
  //   return this.httpClient.post(this.url + '/add-command', Cart);
  // }

  ngOnInit(): void {
  }

}
