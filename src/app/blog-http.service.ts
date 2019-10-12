import { Injectable } from '@angular/core';


import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs ;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'OTgzMjJkYTBiNWQwMGVkYzBiY2ZlYjhiMzg4YmFhNzcwZmQ1MTYyNGRhYjFiNGU1ZDQ2YmIzYjA2NDZjNTUyMjAwZjkyMDVhMWRkZjA0NzkyM2EyZmM0N2ZlMDdlNGViODQ5ZTA0N2ZhYmI1ZDI1ZGZkYTBhODIwZjQ3MzM5YjNmMw=='

  constructor(private _http:HttpClient) {
    console.log("blog http service is called");
   }

   private handleError(err: HttpErrorResponse){
     console.log("Handle error http calls");
     console.log(err.message);
     return Observable.throw(err.message);
   }

   public getAllBlogs():any{
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;
  }
  public createBlog(blogData):any{
    let myResponse = this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken, blogData )
    return myResponse;
  }

  public deleteBlog(blogId):any{
    let data = {}
    let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken, data)
    return myResponse;
  }

  public editBlog(blogId, blogData): any{
     let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.authToken, blogData)
     return myResponse;
  }
}
