import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from '../models/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url : string = 'http://localhost:8082/PharmaLife/donations';
 
  constructor(private httpClient: HttpClient) { }

  ///crud donation

  getDonationList(): Observable<Donation[]>{
   return this.httpClient.get<Donation[]>(this.url + '/retrieveAllDonations');  
  }
  createDonation(donation: Donation): Observable<any>{
    return this.httpClient.post(this.url + '/addDonation', donation);
  }

  getDonationById(idDonation: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.url}/retrieveDonation/${idDonation}`);
  }


  public updateDonation(donation: Donation): Observable<Donation> {
    return this.httpClient.put<Donation>(`${this.url+"/updateDonation"}`, donation);
  }

  deleteDonation(idDonation: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/deleteDonation/${idDonation}`);
  }
 
}
