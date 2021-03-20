import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestimonialModel } from 'src/app/shared/models/testimonial.model';
import { TestimonialService } from 'src/app/shared/services/testimonial.service';

@Component({
  selector: 'app-course-book',
  templateUrl: './course-book.component.html',
  styleUrls: ['./course-book.component.scss'],
})
export class CourseBookComponent implements OnInit {
  //
  testimonialArray: TestimonialModel[];
  bookingForm: FormGroup;

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialArray = this.testimonialService.testimonialServiceArray;

    this.bookingForm = new FormGroup({
      course: new FormControl(null),
      location: new FormControl(null),
      people: new FormControl(null),
      cost: new FormControl(null),
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.bookingForm);
  }
}
