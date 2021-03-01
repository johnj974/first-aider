import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [MainHomeComponent, CoursesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[MainHomeComponent]
})
export class HomeModule { }
