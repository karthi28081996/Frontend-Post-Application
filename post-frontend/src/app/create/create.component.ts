import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {PostService} from './../post.service'; 

import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public allStatus:any;
  public allCategory:any;
  public name:any;
  public description:any;
  public category:any;
  public status:any;

  constructor(public router:Router,
    public toastr:ToastrService,
    public postService:PostService) { }

  ngOnInit() {
    this.allStatus=['Published','Draft'];
    this.allCategory=['Category 1','Category 2','Category 3'];
  }

  public goToHomepage()
  {
    this.router.navigate(['/homepage'])
  }

  public createPost()
  {
    if(!this.name)
    {
      this.toastr.warning('Post name is missing');
    }
    else if(!this.description)
    {
      this.toastr.warning('Post description is missing');
    }
    
    else if(!this.category)
    {
      this.toastr.warning('Post category is missing');
    }
    else if(!this.status)
    {
      this.toastr.warning('Post status is missing');
    }
    
    else
    {
      let createPost=
      {
        name:this.name,
        description:this.description,
        category:this.category,
        status:this.status
      }
      this.postService.createPost(createPost)
      .subscribe(
        (success)=>
        {
          if(success.status === 200)
          {
            console.log(success);
            this.goToHomepage();
            
          } 
          else
          {
            this.toastr.error(success.message);
          }
        },
        (error)=>
        {

        }
      )
    }
  }


}
