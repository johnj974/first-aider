import { Injectable } from '@angular/core';
import { TestimonialModel } from '../models/testimonial.model';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  testimonialServiceArray: TestimonialModel[] = [
    new TestimonialModel(
      'First Aid Responder ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nulla quasi! Non optio qui eaque quis tempore ea magnam beatae, quod officiis quos ipsa natus ',
      'Annette Curtin',
      'Principal',
      'Glenderry N.S'
    ),
    new TestimonialModel(
      'Cardiac First Response ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nulla quasi! Non optio qui eaque quis tempore ea magnam beatae, quod officiis quos ipsa natus ',
      'Seamus Sinnot',
      'Training Co-ordinator',
      'Stac First Aid'
    ),
    new TestimonialModel(
      'Paediatric Care ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nulla quasi! Non optio qui eaque quis tempore ea magnam beatae, quod officiis quos ipsa natus ',
      'Denis Nielsen',
      'Teacher',
      'Bouleensheere N.S'
    ),
  ];
}
