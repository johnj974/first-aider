import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coursemodel } from 'src/app/shared/models/course.model';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  courseId = this.route.snapshot.params['id'];

  displayCourse: Coursemodel = this.coursesService.onCourseDisplay(
    this.courseId
  );

  ngOnInit(): void {}
}
