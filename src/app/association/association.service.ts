import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from '../models/association';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  url : string = 'http://localhost:8082/PharmaLife/'; 
  

  constructor(private httpClient: HttpClient) { }

  ///////////Back

  getAssociationList(): Observable<Association[]>{
   return this.httpClient.get<Association[]>(this.url + 'associations/retrieveAllAssociations');
  }
  getAssociationById(idAssociation: number): Observable<Association>{
    return this.httpClient.get<Association>(`${this.url}/retrieveAssociation/${idAssociation}`);
  }
}
