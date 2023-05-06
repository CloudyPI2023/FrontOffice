import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/ProductAndGiftManagement/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseURL = "http://localhost:8082/PharmaLife/Category";

  constructor(private httpClient: HttpClient) { }

  getAllCategoriesNotArchived(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}` + "/all-categoriesNotArchived");
  }

  getCategoryByName(name: string): any  {
    return this.httpClient.get<any>(`${this.baseURL}` + "/getByName/"+name);
  }
}
