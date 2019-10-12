import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private blogHttpService:BlogHttpService, public _route:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    let myBlogId  = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog=data["data"];
        console.log(this.currentBlog);

      }, 
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data =>{
        console.log(data);
        alert("Blog edited scuccesfully ");
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)
      }, 
      error => {
        console.log("Some error has occured ");
        console.log(error.errorMessage);
      }
    )
  }

}
