import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {PostService} from './../post.service'; 

import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public allStatus:any;
  public allCategory:any;
  public name:any;
  public description:any;
  public category:any;
  public status:any;
  public postId:any;

  constructor(public router:Router,
    public toastr:ToastrService,
    public postService:PostService,
    public _route:ActivatedRoute) { }

  ngOnInit() {
    this.allStatus=['Published','Draft'];
    this.allCategory=['Category 1','Category 2','Category 3'];
    this.getAllPostDetails();
  }

  public goToHomepage()
  {
    this.router.navigate(['/homepage'])
  }

  public goToView()
  {
   
    this.router.navigate([`/view/${this.postId}`]) 
  }
  
  public getAllPostDetails()
  {
    
    this.postId=this._route.snapshot.paramMap.get('postId');

        this.postService.getSinglePost(this.postId)
        .subscribe(
        (success)=>
        {
          if(success.status === 200)
          {
            this.name=success.data.postName;
            this.description=success.data.postDescription;
            this.category=success.data.postCategory;
            this.status=success.data.postStatus;
          }
          else
          {

          }
        },  //end success func
        (error)=>
        {
          this.toastr.error('Some error occured');
        }) //end error
    
      }
  public updatePost()
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
      let updatePost=
      {
        name:this.name,
        description:this.description,
        category:this.category,
        status:this.status
      }
      this.postService.updatePost(updatePost,this.postId)
      .subscribe(
        (success)=>
        {
          if(success.status === 200)
          {
            
            this.toastr.success(success.message);
            setTimeout(() => {
              this.goToView();
            }, 2000);
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
