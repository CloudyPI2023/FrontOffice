import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from './event-service';
import { RequestService } from '../request/request.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation/reservation-service';
import { Reservation } from '../models/reservation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  addForm: FormGroup;
  public editEvent?: Event;
  public deleteEvent?: Event;
  public detailsEvent?: Event;
  public yearsEvent?: Event;
  events: Event[];
  a: Event[];
  oldevents: Event[];
  idEvent:number;
  public requestEvent?: Request;
  public requestEventA?: Event;
  requests: any;
  totalEvent: number;
  res:Reservation;
  reservations: Reservation[];


  r:Reservation={
    dateReservation: new Date(),
    userReservation: new User(),
    event: [],
    idEvent: 0,
    idUser: 0
  }

  constructor(private http: HttpClient,private reservationService:ReservationService ,private eventService:EventService
    ,private router: Router) { }



  ngOnInit(): void {
    this.getEvents(); 
  
  }

  private getEvents(){
    this.eventService.getEventList().subscribe(data => {
       this.events = data;
       this.totalEvent = this.events.length;
    });
  }



  onFileSelected(fileEvent: any) {
    const file: File = fileEvent.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file, file.name);
      this.http.post('/api/upload', formData).subscribe(
        (response) => {
          console.log('File uploaded successfully');
          // Handle the response from the server as needed
        },
        (error) => {
          console.error('Error uploading file', error);
          // Handle the error as needed
        }
      );
    }
  }

  private getReservations(){
    this.reservationService.getReservationList().subscribe(data => {
       this.reservations = data;
    });
  }
  
  public onAddReservation(id:number) {
  
        this.r.idUser=1
        this.r.idEvent=id;
        let confirmAction = confirm("Are you sure to execute this action?");
        if (confirmAction) {
         
          this.reservationService.createReservation(this.r).subscribe(
            (response: Reservation) => {
              console.error;
              console.log(response);
              alert("Action successfully executed");
              this.getReservations();
             
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        } else {
          alert("Action canceled");
        }
      }
   
  
  

 /* public OnDetailsEvent(idEvent: number){
    this.eventService.getEventById(idEvent).subscribe(
      (response: Event) => {
        console.log(response);
      });
  }*/

  public onAddEvent(addForm: NgForm): void {
    document.getElementById('add-Event-form')!.click();
    this.eventService.createEvent(addForm.value).subscribe(
      (response: Event) => {
        console.error
        console.log(response);
        this.getEvents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
 /* public onUpdateEvent(event: Event) {
    this.eventService.updateEvent(event).subscribe(
      (response: Event) => {
        console.log(response);
        this.getEvents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
  
 
  

  
  public onDeleteEvent(idEvent: number): void {
    
    
    
    if (confirm('Are you sure you want to delete this event?')) { this.eventService.deleteEvent(idEvent).subscribe(() => { this.getEvents(); }
    
    ),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }; }
  }
  
  public onOpenModal(event: Event, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editEvent = event;
      button.setAttribute('data-target', '#updateEventModal');
    }
    if (mode === 'delete') {
      this.deleteEvent = event;
      button.setAttribute('data-target', '#deleteEventModal');
    }
    if (mode === 'add') {
  
      button.setAttribute('data-target', '#addEventModal');
    }
    if (mode === 'detail') {
      this.detailsEvent = event;
      button.setAttribute('data-target', '#detailEventModal');
    }
  
  
    container?.appendChild(button);
    button.click();
  }
  




}
