import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854",
      "created": "2017-10-20T12:20:47.854",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is my personal description",
      "title": "This is SKS blog"
    },

    {
      "blogId": "2",
      "lastModified": "2017-10-20T12:20:47.854",
      "created": "2017-10-20T12:20:47.854",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is my personal description",
      "title": "This is SKS blog2"
    },


  ]

  constructor() { 
    console.log("service is called ");
  }

  public getAllBlogs():any{
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog=blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
