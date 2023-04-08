import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


    registerUser(user: User): Observable<Object> {
      console.log(user);
      return this.http.post<string>(`${this.apiServerUrl}/registration`,user);
   }


  
}
