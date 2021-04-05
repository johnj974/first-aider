import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Coursemodel } from 'src/app/shared/models/course.model';
import { TestimonialModel } from 'src/app/shared/models/testimonial.model';
import { CoursesService } from 'src/app/shared/services/courses.service';
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
  courseId: string;
  courseBookingInfo: Coursemodel;
  test: string = 'hell';
  options: {} = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  formSubmitted = false;

  constructor(
    private testimonialService: TestimonialService,
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testimonialArray = this.testimonialService.testimonialServiceArray;

    this.route.params.subscribe((params: Params) => {
      this.courseId = params.id;
      this.courseBookingInfo = this.courseService.onCourseDisplay(
        this.courseId
      );
      console.log(this.courseBookingInfo);
    });

    this.bookingForm = new FormGroup({
      course: new FormControl(null),
      location: new FormControl(null),
      date: new FormControl(null, Validators.required),
      cost: new FormControl(null),
      userData: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
      }),
    });

    this.bookingForm.patchValue({
      course: this.courseBookingInfo.title,
      location: this.courseBookingInfo.location,
      date: this.courseBookingInfo.date.toLocaleDateString(
        'en-US',
        this.options
      ),
      cost: this.courseBookingInfo.price,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.bookingForm);
  }
}
