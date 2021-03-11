import { Injectable } from '@angular/core';
import { Coursemodel } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  coursesArray: Coursemodel[] = [
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2020/04/Emergency-First-Aid-at-Work.png',
      'First Aid Response',
      '12-7-2019',
      '10',
      'dublin',
      'some information'
    ),
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png',
      'Cardiac First Response',
      '12-5-2020',
      '10',
      'Limerick',
      'more information'
    ),
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png',
      'Cardiac First Response',
      '12-5-2020',
      '10',
      'Limerick',
      'more information'
    ),
  ];
}

// https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png
// https://www.trainingexpress.org.uk/wp-content/uploads/2020/04/Emergency-First-Aid-at-Work.png
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixH9oF77GlcMcLgiRon4j9xSDxT95isiwLQ&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkOULQj9DEGBh-nj2UPsMU0izs3vJXXWd5Q&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rj6-mLYSZhAulCaeNP29AAYP5McNHZK13A&usqp=CAU
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkOULQj9DEGBh-nj2UPsMU0izs3vJXXWd5Q&usqp=CAU
