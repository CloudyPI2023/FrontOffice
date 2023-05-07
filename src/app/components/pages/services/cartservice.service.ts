import { Injectable } from '@angular/core';
import { Cart } from '../../models/Cart/cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  url='http://localhost:8082/PharmaLife/commands'
 
  constructor(private httpClient: HttpClient) { }


  createCommand(cart: Cart): Observable<any>{
    return this.httpClient.post(this.url + '/add-command', Cart);
  }
}
