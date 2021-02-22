import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCourseComponent } from './main-course/main-course.component';

const routes: Routes = [{ path: '', component: MainCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
