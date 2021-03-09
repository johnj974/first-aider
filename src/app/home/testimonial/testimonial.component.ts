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
      'first statement',
      'I learned so much',
      'Annette Curtin',
      'Glenderry N.S'
    ),
  ];
}
