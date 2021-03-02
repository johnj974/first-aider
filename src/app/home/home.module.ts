import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [MainHomeComponent, CoursesComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[MainHomeComponent]
})
export class HomeModule { }
