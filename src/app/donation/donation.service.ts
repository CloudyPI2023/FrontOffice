import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from '../models/donation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  url : string = 'http://localhost:8082/PharmaLife/';
 
  constructor(private httpClient: HttpClient) { }

  ////Back

  getDonationList(): Observable<Donation[]>{
   return this.httpClient.get<Donation[]>(this.url + 'donations/retrieveAllDonations');  
  }
}
