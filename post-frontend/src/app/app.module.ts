import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostService} from './post.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http'; 

import { ToastrModule } from 'ngx-toastr';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ViewComponent,
    EditComponent,
    PagenotfoundComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path:'homepage',
          component:HomepageComponent
        },
        {
          path:'view/:postId',
          component:ViewComponent
        },
        {
          path:'edit/:postId',
          component:EditComponent
        },
        
        {
          path:'create',
          component:CreateComponent
        },
        {
          path:'',
          redirectTo:'/homepage',
          pathMatch:'full'
        },
        {
          path:'pagenotfound',
          component:PagenotfoundComponent
        },
        {
          path:'**',
          redirectTo:'/pagenotfound'
        }
      ]
    )
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule 
{

}
