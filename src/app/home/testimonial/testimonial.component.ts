import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/shared/models/testimonial.model';
import { TestimonialService } from 'src/app/shared/services/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialArray = this.testimonialService.testimonialServiceArray;
  }

  testimonialArray: TestimonialModel[];
}
