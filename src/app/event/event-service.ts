import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife/events';
  
   
 
   constructor(private httpClient: HttpClient) { }

  
 
   getEventList(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/retrieveAllEvents');
   }

   createEvent(event: Event): Observable<any>{
     return this.httpClient.post(this.API_URL + '/addEvent', event);
   }

   getEventById(idEvent: number): Observable<Event>{
    return this.httpClient.get<Event>(`${this.API_URL}/retrieveEvent/${idEvent}`);
  }

  updateEvent1(idEvent:number, event: Event):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/updateEvent/${idEvent}`, event);
  }
  public updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.API_URL+"/updateEvent"}`, event);
  }

  deleteEvent(idEvent: number): Observable<Object>{
    return this.httpClient.delete(`${this.API_URL}/deleteEvent/${idEvent}`);
  }



}
