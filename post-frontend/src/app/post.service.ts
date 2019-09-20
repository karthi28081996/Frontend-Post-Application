import { Injectable } from '@angular/core';

import {HttpClient,HttpParams} from '@angular/common/http';
import {HttpErrorResponse,HttpHeaders} from '@angular/common/http';

import { Observable}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public baseUrl='http://localhost:3000/api/v1.0.0/post';
  constructor(public http:HttpClient) {

   }

   public getAllPostDetails():Observable<any>
   {
     return this.http.get(`${this.baseUrl}/get/all`);
   }

   public getSinglePost(postId):Observable<any>
   {
     return this.http.get(`${this.baseUrl}/details/${postId}`);
   }

   public createPost(data):Observable<any>
   {
     const params=new HttpParams()
     .set('name',data.name)
     .set('description',data.description)
     .set('category',data.category)
     .set('status',data.status)

     return this.http.post(`${this.baseUrl}/create`,params);
   }

   public updatePost(data,postId):Observable<any>
   {
     console.log(data);
     console.log(postId);
     const params=new HttpParams()
     .set('postName',data.name)
     .set('postDescription',data.description)
     .set('postCategory',data.category)
     .set('postStatus',data.status)
     return this.http.put(`${this.baseUrl}/update/${postId}`,params);
   }

   public deletePost(postId):Observable<any>
   {
    const params=new HttpParams()
    .set('postId',postId)
     return this.http.post(`${this.baseUrl}/delete/${postId}`,params);
   }
   

}
