import { Component, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/shared/models/testimonial.model';
import { TestimonialService } from 'src/app/shared/services/testimonial.service';

@Component({
  selector: 'app-course-book',
  templateUrl: './course-book.component.html',
  styleUrls: ['./course-book.component.scss'],
})
export class CourseBookComponent implements OnInit {
  testimonialArray: TestimonialModel[];

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialArray = this.testimonialService.testimonialServiceArray;
  }
}
