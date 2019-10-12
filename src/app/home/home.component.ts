import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogHttpService } from '../blog-http.service';
//import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs= [];

  constructor(public blogService : BlogServiceService, public blogHttpService:BlogHttpService ) { }

  ngOnInit() {
    console.log("NgonIt is called");
    //this.allBlogs= this.blogHttpService.getAllBlogs();
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs= data["data"];
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBlogs)
  }

}
