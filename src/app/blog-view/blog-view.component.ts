import { Component, OnInit } from '@angular/core';

// manual imports

import { ActivatedRoute, Router } from "@angular/router";
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { BlogServiceService } from '../blog-service.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers :  [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogServiceService, public blogHttpService:BlogHttpService, private location:Location) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("blog ngOnInit is called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog = data["data"];
      },
      error =>{
        console.log("some error has occured");
        console.log(error.errorMessage);
      }
    )

  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
        data => {
          console.log(data);
          alert("blog Deleted successully");
          setTimeout(()=>{
            this.router.navigate(['/home']);
          },1000)
        },
        error =>{
          console.log("some error has occured");
          console.log(error.errorMessage);
        }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

  

  

}
