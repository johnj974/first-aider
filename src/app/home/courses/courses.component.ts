import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coursemodel } from 'src/app/shared/models/course.model';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseList: Coursemodel[] = [];

  constructor(private router: Router, private coursesService: CoursesService) {}

  onToCourses() {
    this.router.navigate(['/courses']);
  }

  ngOnInit(): void {
    this.courseList = this.coursesService.coursesArray;
  }
}
