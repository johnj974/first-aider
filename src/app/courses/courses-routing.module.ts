import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { MainCourseComponent } from './main-course/main-course.component';

const routes: Routes = [
  {
    path: '',
    component: MainCourseComponent,
  },
  {
    path: 'info',
    component: CourseInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
