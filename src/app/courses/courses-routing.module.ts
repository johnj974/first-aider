import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseBookComponent } from './course-book/course-book.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { MainCourseComponent } from './main-course/main-course.component';

const routes: Routes = [
  {
    path: '',
    component: MainCourseComponent,
  },
  {
    path: ':id/:name',
    component: CourseInfoComponent,
  },
  {
    path: ':id/:name/booking',
    component: CourseBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
