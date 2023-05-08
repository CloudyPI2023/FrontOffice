import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})


export class ArticleDetailService {
    /* readonly API_URL = 'http://localhost:8082/PharmaLife';*/
 API_URL : string = 'http://localhost:8082/PharmaLife';
  
 constructor(private httpClient: HttpClient) { }

 /* getArticles() {
   return this.httpClient.get(`${this.API_URL}/all-articles`);
 } */

 getArticleList(): Observable<Article[]>{
   return this.httpClient.get<Article[]>(`${this.API_URL}`+"/all-articles");
 }

/*  getArticleById(idArticle: number) {
   return this.httpClient.get(`${this.API_URL}`+"/articles/${idArticle}");
 } */

 addCommentToArticle(comment: Comment, idArticle:number) : Observable<any>{
   return this.httpClient.post(`${this.API_URL}/articles/8/comments`, comment);
 }

 getArticleById(idArticle: number): Observable<Article>{
   return this.httpClient.get<Article>(`${this.API_URL}/article/${idArticle}`);
 }

 
 /* updateArticle(article: Article) : Observable<Article>{
   return this.httpClient.put(`${this.API_URL}`+"/edit-article/${article.idArticle}", article);
 } */

 updateArticle1(idArticle:number, article: Article):Observable<Object>{
   return this.httpClient.put(`${this.API_URL}/edit-article/${idArticle}`, article);
 } 

 public updateArticle(article: Article): Observable<Article> {
   return this.httpClient.put<Article>(`${this.API_URL+"/edit-article"}`, article);
 }
 


deleteArticle(idArticle: any): Observable<Object> {
   return this.httpClient.delete(`${this.API_URL}/delete-article/${idArticle}`);
 }

 
/* statisticsDonationStatus(): Observable<Map<String,number>>{
   return this.httpClient.get<Map<String,number>>(`${this.url}`+"/statisticsDonationStatus/");
 }*/


//  getOldAssociationList(): Observable<Association[]>{
 //   return this.httpClient.get<Association[]>(this.url + '/retrieveAssociationsPlusTroixAns');
 // }

}
