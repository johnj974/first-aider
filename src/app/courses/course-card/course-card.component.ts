import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Coursemodel } from '../../shared/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  coursesArray: Coursemodel[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesArray = this.coursesService.coursesArray;
  }
}
