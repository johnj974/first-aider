import { Component, OnInit } from '@angular/core';
import { Coursemodel } from '../../shared/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  coursesArray: Coursemodel[] = [
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2020/04/Emergency-First-Aid-at-Work.png',
      'First Aid Response',
      '12',
      '10',
      'dublin',
      'some information'
    ),
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png',
      'Cardiac First Response',
      '12',
      '10',
      'Limerick',
      'hkhjhhkhkhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
    ),
  ];

  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixH9oF77GlcMcLgiRon4j9xSDxT95isiwLQ&usqp=CAU
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkOULQj9DEGBh-nj2UPsMU0izs3vJXXWd5Q&usqp=CAU
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rj6-mLYSZhAulCaeNP29AAYP5McNHZK13A&usqp=CAU
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkOULQj9DEGBh-nj2UPsMU0izs3vJXXWd5Q&usqp=CAU
}
