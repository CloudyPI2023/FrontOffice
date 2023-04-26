import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  url : string = 'http://localhost:8082/PharmaLife';

  constructor(private httpClient: HttpClient) { }

  getRequestList(): Observable<Request[]>{
   return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequests');
   
  }

 
  
}
