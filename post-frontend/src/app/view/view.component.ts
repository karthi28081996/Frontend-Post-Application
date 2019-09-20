import { Component, OnInit } from '@angular/core';
import {PostService} from './../post.service'; 
import {Router, ActivatedRoute} from '@angular/router';

import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public post:any;
  public postId:any;

  constructor(public postService:PostService,
    public router:Router,
    public toastr:ToastrService,
    public _route:ActivatedRoute,
    public location:Location) { }

  ngOnInit() {
    this.getAllPostDetails();
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
            this.post=success.data;
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
      public goBack=()=>
      {
        this.location.back();
      }

      public goToEdit()
      {
        this.router.navigate([`/edit/${this.postId}`])
      }

      public goToCreatepage()
      {
        this.router.navigate(['/create'])
      }

      public goToHomepage()
      {
        this.router.navigate(['/homepage'])
      }
      public delete()
      {
        this.postService.deletePost(this.postId)
        .subscribe(
          (success)=>
          {
            if(success.status === 200)
            {
              
            this.toastr.success('post deleted successfully');
            setTimeout(() => {
              this.goToHomepage();
            }, 2000);
            }
            else
            {
  
              this.toastr.error('Some error occured');
            }
          },  //end success func
          (error)=>
          {
            this.toastr.error('Some error occured');
          }
        )
      }

}
