import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class AssociationRequestService {

  url : string = 'http://localhost:8082/PharmaLife/requests'; 


  constructor(private httpClient: HttpClient) { }


  getRequestList(): Observable<Request[]>{
   return this.httpClient.get<Request[]>(this.url + '/retrieveAllRequests');
   
  }

  createRequest(request: Request): Observable<any>{
    return this.httpClient.post(this.url + '/addRequest', request);
  }


}
