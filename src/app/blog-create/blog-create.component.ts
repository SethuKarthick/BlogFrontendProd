import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, public _route:ActivatedRoute, public router:Router) { }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology" ]

  ngOnInit() {
  }

  public createBlog():any{
    let blogData = {
      title: this.blogTitle,
      description : this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("BlogCreeated")
        console.log(data);
        alert('blog Posted successfully');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("some error occured");
      }
    )
  }

}
