import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import  {Router} from '@angular/router';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private Location:Location,
    private router:Router) { }

  ngOnInit() {
  }

  public goHomepage()
  {
    this.router.navigate(['/homepage']);
  }


}
