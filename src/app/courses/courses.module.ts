import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MainCourseComponent } from './main-course/main-course.component';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  declarations: [MainCourseComponent, CourseCardComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
