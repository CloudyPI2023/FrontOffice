import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../Models/ProductAndGiftManagement/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }

  getAllProductsNotExpired(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-productsNotExpired");
  }

  getTop3Prodcuts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/top3Products");
  }
  OnDetailsProduct(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}` + "/retrieve-product/"+`${idProduct}`);
  }

  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/add-product", product);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + "/update-product", product);
  }

  deleteProduct(id: number): Observable<Object> {
    
    return this.httpClient.delete("http://localhost:8082/PharmaLife/Product/delete-product/"+id);
  }
  checkProductExists(name: string): Observable<boolean> {
    const url = `${this.baseURL}/exists/${name}`;
    return this.httpClient.get<boolean>(url);
  }
}
