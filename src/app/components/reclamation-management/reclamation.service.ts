import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from 'src/app/Models/ProductAndGiftManagement/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {


  private baseURL = "http://localhost:8082/PharmaLife/Reclamation";
  constructor(private httpClient: HttpClient) { }


  addReclamation(reclamation: Reclamation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + "/add-reclamation", reclamation);
  }
  getMyReclamations(idUser:number): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}` + "/my-reclamations/"+`${idUser}`);
  }

  duplicatedReclamation(idUser:number,idProduct:number): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.baseURL}` + "/getrec/"+`${idUser}`+"/"+`${idProduct}`);
  }
}
