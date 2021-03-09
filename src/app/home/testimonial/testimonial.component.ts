import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/shared/models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  testimonialArray: TestimonialModel[] = [
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
