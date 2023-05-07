import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife/reservations';
  
   
 
   constructor(private httpClient: HttpClient) { }

  
 
   getReservationList(): Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>(this.API_URL + '/retrieveAllReservations');
   }

   createReservation(reservation: Reservation): Observable<any>{
     return this.httpClient.post(this.API_URL + '/addReservation', reservation);
   }

   getReservationById(idReservation: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.API_URL}/retrieveReservation/${idReservation}`);
  }

  updateReservation1(idReservation:number, reservation: Reservation):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/updateReservation/${idReservation}`, Reservation);
  }
  public updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(`${this.API_URL+"/updateReservation"}`, Reservation);
  }

  deleteReservation(idReservation: number): Observable<Object>{
    return this.httpClient.delete(`${this.API_URL}/deleteReservation/${idReservation}`);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    reservation.dateReservation = new Date();
    reservation.codeReservation = Math.floor(Math.random() * 1000) + 1;
    return this.httpClient.post<Reservation>(`${this.httpClient}/addReservation`, reservation);
  }


}
