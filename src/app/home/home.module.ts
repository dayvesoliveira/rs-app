import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HomeService }   from "./home/home.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ],
  providers: [ HomeService ]
})
export class HomeModule {}