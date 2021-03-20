import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MainCourseComponent } from './main-course/main-course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { SharedModule } from '../shared/shared.module';
import { CourseBookComponent } from './course-book/course-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainCourseComponent,
    CourseCardComponent,
    CourseInfoComponent,
    CourseBookComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
