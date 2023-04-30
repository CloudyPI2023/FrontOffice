import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from '../models/association';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  url : string = 'http://localhost:8082/PharmaLife/associations'; 
  

  constructor(private httpClient: HttpClient) { }

  getAssociationList(): Observable<Association[]>{
   return this.httpClient.get<Association[]>(this.url + '/retrieveAllAssociations');
  }
  getAssociationById(idAssociation: number): Observable<Association>{
    return this.httpClient.get<Association>(`${this.url}/retrieveAssociation/${idAssociation}`);
  }

  
   createAssociation(association: Association): Observable<any>{
     return this.httpClient.post(this.url + '/addAssociation', association);
   }

   
  updateAssociation1(idAssociation:number, association: Association):Observable<Object>{
    return this.httpClient.put(`${this.url}/updateAssociation/${idAssociation}`, association);
  }
  public updateAssociation(association: Association): Observable<Association> {
    return this.httpClient.put<Association>(`${this.url+"/updateAssociation"}`, association);
  }

  deleteAssociation(idAssociation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteAssociation/${idAssociation}`);
  }

  getOldAssociationList(): Observable<Association[]>{
    return this.httpClient.get<Association[]>(this.url + '/retrieveAssociationsPlusTroixAns');
  }



}
