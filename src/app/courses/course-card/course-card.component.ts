import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Coursemodel } from '../../shared/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  coursesArray: Coursemodel[] = [];

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    this.coursesArray = this.coursesService.coursesArray;
  }

  onShowCourse(id: number, title: string) {
    console.log(id, title);
    const cleanTitle = title.replace(/ /g, '');
    this.router.navigate(['/courses/', id, cleanTitle]);
  }
}
