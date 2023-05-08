  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Comment } from '../models/comment';
  
  @Injectable({
    providedIn: 'root'
  })
  export class CommentService {
  
  
    private baseURL = "http://localhost:8082/PharmaLife";
    constructor(private httpClient: HttpClient) { }
  
  
    addComment(comment: Comment): Observable<Object> {
      return this.httpClient.post(`${this.baseURL}`+ "/add-comment", comment);
    }
    getMyComment(idUser:number): Observable<Comment[]> {
      return this.httpClient.get<Comment[]>(`${this.baseURL}`+ "/my-comment/"+`${idUser}`);
    }
  
    duplicatedComment(idUser:number,idProduct:number): Observable<Comment[]> {
      return this.httpClient.get<Comment[]>(`${this.baseURL}` + "/getcomment/"+`${idUser}`+"/"+`${idProduct}`);
    }
  }
  

