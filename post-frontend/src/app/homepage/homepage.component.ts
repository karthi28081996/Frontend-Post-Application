import { Component, OnInit } from '@angular/core';

import {PostService} from './../post.service'; 
import {ActivationEnd,Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public allPost:any;
  
  constructor(public postService:PostService,
    public router:Router,
    public toastr:ToastrService) {
   }


  ngOnInit() {
    this.getAllPostDetails()
  }

  public goToCreatePage()
  {
    this.router.navigate(['/create']);
  }

  public goToRespectivePost(postId)
  {
    this.router.navigate([`/view/${postId}`]);
  }

  public getAllPostDetails()
  {

        this.postService.getAllPostDetails()
        .subscribe(
        (success)=>
        {
          if(success.status === 200)
          {
            this.allPost=success.data;
          }
          else
          {
            this.toastr.error(success.message);
          }
        },  //end success func
        (error)=>
        {
          this.toastr.error('Some error occured');
        }) //end error
    
      }
  }

