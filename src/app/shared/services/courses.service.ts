import { Injectable } from '@angular/core';
import { Coursemodel } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  randomDate(start, end) {
    let date = new Date(+start + Math.random() * (end - start));
    return date;
  }

  locationArray: string[] = [
    'Ashling Hotel, Dublin',
    'Glen Eagle Hotel, Kerry',
    'The Savoy Hotel, Limerick',
    'The Montenotte, Cork',
    'The Ellison, Mayo',
  ];

  randomLocation(array) {
    let randomNumber = Math.trunc(Math.random() * array.length);
    let result = array[randomNumber];
    return result;
  }

  onCourseDisplay(number) {
    let capturedCourse = this.coursesArray[number];
    return capturedCourse;
  }

  retrieveCourseArray() {
    return this.coursesArray.slice();
  }

  coursesArray: Coursemodel[] = [
    new Coursemodel(
      'assets/images/first-aid.png',
      'First Aid Response',
      this.randomDate(new Date(2024, 0, 1), new Date()),
      '9.00 AM',
      '10',
      '3 Days',
      `${this.randomLocation(this.locationArray)}`,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique at numquam nobis nihil! Iure assumenda sequi sunt sed at cum libero quo blanditiis ipsa veniam officiis dolor necessitatibus voluptas odit adipisci veritatis repellat laudantium expedita magnam, eum voluptatum nam! Quis, porro eos quidem unde sed non reprehenderit maxime est quibusdam enim dolorem itaque illo atque in aliquid repellat explicabo! Atque totam amet adipisci doloremque expedita, facere pariatur, repellendus veniam beatae nemo nam natus error iure. Voluptas voluptate neque ex reiciendis iusto totam quo. Natus, placeat aut quae debitis soluta ipsum qui pariatur sint porro, labore cum ut. Quibusdam, rerum!',
      '€300'
    ),
    new Coursemodel(
      'assets/images/cpr.png',
      'Cardiac First Response',
      this.randomDate(new Date(2024, 0, 1), new Date()),
      '9.00 AM',
      '10',
      '1 Day',
      `${this.randomLocation(this.locationArray)}`,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique at numquam nobis nihil! Iure assumenda sequi sunt sed at cum libero quo blanditiis ipsa veniam officiis dolor necessitatibus voluptas odit adipisci veritatis repellat laudantium expedita magnam, eum voluptatum nam! Quis, porro eos quidem unde sed non reprehenderit maxime est quibusdam enim dolorem itaque illo atque in aliquid repellat explicabo! Atque totam amet adipisci doloremque expedita, facere pariatur, repellendus veniam beatae nemo nam natus error iure. Voluptas voluptate neque ex reiciendis iusto totam quo. Natus, placeat aut quae debitis soluta ipsum qui pariatur sint porro, labore cum ut. Quibusdam, rerum!',
      '€120'
    ),
    new Coursemodel(
      'assets/images/first-aid-kit3.png',
      'Peadiatric First Aid',
      this.randomDate(new Date(2024, 0, 1), new Date()),
      '9.00 AM',
      '10',
      '1 day',
      `${this.randomLocation(this.locationArray)}`,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique at numquam nobis nihil! Iure assumenda sequi sunt sed at cum libero quo blanditiis ipsa veniam officiis dolor necessitatibus voluptas odit adipisci veritatis repellat laudantium expedita magnam, eum voluptatum nam! Quis, porro eos quidem unde sed non reprehenderit maxime est quibusdam enim dolorem itaque illo atque in aliquid repellat explicabo! Atque totam amet adipisci doloremque expedita, facere pariatur, repellendus veniam beatae nemo nam natus error iure. Voluptas voluptate neque ex reiciendis iusto totam quo. Natus, placeat aut quae debitis soluta ipsum qui pariatur sint porro, labore cum ut. Quibusdam, rerum!',
      '€120'
    ),
    new Coursemodel(
      'assets/images/epipen-01.png',
      'EpiPen Administration',
      this.randomDate(new Date(2022, 0, 1), new Date()),
      '9.00 AM',
      '10',
      '1 day',
      `${this.randomLocation(this.locationArray)}`,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique at numquam nobis nihil! Iure assumenda sequi sunt sed at cum libero quo blanditiis ipsa veniam officiis dolor necessitatibus voluptas odit adipisci veritatis repellat laudantium expedita magnam, eum voluptatum nam! Quis, porro eos quidem unde sed non reprehenderit maxime est quibusdam enim dolorem itaque illo atque in aliquid repellat explicabo! Atque totam amet adipisci doloremque expedita, facere pariatur, repellendus veniam beatae nemo nam natus error iure. Voluptas voluptate neque ex reiciendis iusto totam quo. Natus, placeat aut quae debitis soluta ipsum qui pariatur sint porro, labore cum ut. Quibusdam, rerum!',
      '€100'
    ),
  ];
}
