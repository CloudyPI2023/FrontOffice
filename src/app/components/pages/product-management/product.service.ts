import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8082/PharmaLife/Product";

  constructor(private httpClient: HttpClient) { }

  getAllProductsNotExpired(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}` + "/all-productsFront");
  }
  OnDetailsProduct(idProduct: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}` + "/retrieve-product/" + `${idProduct}`);
  }

  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/add-product", product);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + "/update-product", product);
  }

  deleteProduct(id: number): Observable<Object> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.delete(url);
  }

}
