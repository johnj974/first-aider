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

  constructor(
    private testimonialService: TestimonialService,
    private courseService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testimonialArray = this.testimonialService.testimonialServiceArray;

    this.bookingForm = new FormGroup({
      course: new FormControl(null),
      location: new FormControl(null),
      date: new FormControl(null, Validators.required),
      cost: new FormControl(null),
      userData: new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, Validators.required),
      }),
    });

    this.route.params.subscribe((params: Params) => {
      this.courseId = params.id;
      this.courseBookingInfo = this.courseService.onCourseDisplay(
        this.courseId
      );
      console.log(this.courseBookingInfo);
    });
  }

  onSubmit() {
    console.log(this.bookingForm);
  }
}
