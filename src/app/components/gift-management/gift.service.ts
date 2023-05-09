import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from 'src/app/Models/ProductAndGiftManagement/gift';
import { Product } from 'src/app/Models/ProductAndGiftManagement/product';


@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private baseURL = "http://localhost:8082/PharmaLife/Gift";

  constructor(private httpClient: HttpClient) { }

  addGift(giftId:number,product:Product): any {
    return this.httpClient.post("http://localhost:8082/PharmaLife/Gift/"+`${giftId}`+"/products",product);
  }
  removeProductFromGift(giftId:number,product:Product): any {
    return this.httpClient.post("http://localhost:8082/PharmaLife/Gift/"+`${giftId}`+"/product-delete",product);
  }

  getGifts(): Observable<Gift[]> {
    return this.httpClient.get<Gift[]>(`${this.baseURL}` + "/all-gifts");
  }
  myGifts(idUser:number): Observable<Gift[]> {
    return this.httpClient.get<Gift[]>(`${this.baseURL}` + "/myGifts/"+idUser);
  }

  getDuplicatedProduct(idGift:number,idProduct:number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseURL}` + "/checkDuplication/"+idGift+"/"+idProduct);
  }

}
