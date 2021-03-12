import { Injectable } from '@angular/core';
import { Coursemodel } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  randomDate(start, end) {
    let date = new Date(+start + Math.random() * (end - start));
    return date;
  }

  locationArray: string[] = ['Dublin', 'Kerry', 'Limerick', 'Cork', 'Mayo'];

  randomLocation(array) {
    let randomNumber = Math.trunc(Math.random() * array.length);
    let result = array[randomNumber];
    return result;
  }

  onCourseDisplay(number) {
    let capturedCourse = this.coursesArray[number];
    return capturedCourse;
  }

  coursesArray: Coursemodel[] = [
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2020/04/Emergency-First-Aid-at-Work.png',
      'First Aid Response',
      this.randomDate(new Date(2021, 0, 1), new Date()),
      '10',
      `${this.randomLocation(this.locationArray)}`,
      'some information'
    ),
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png',
      'Cardiac First Response',
      this.randomDate(new Date(2021, 0, 1), new Date()),
      '10',
      `${this.randomLocation(this.locationArray)}`,
      'more information'
    ),
    new Coursemodel(
      'https://www.trainingexpress.org.uk/wp-content/uploads/2019/10/Workplace-First-Aid-Training-Express-Online-Certification-Course.png',
      'Cardiac First Response',
      this.randomDate(new Date(2022, 0, 1), new Date()),
      '10',
      `${this.randomLocation(this.locationArray)}`,
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
