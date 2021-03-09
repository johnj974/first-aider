import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainHomeComponent,
    CoursesComponent,
    AboutComponent,
    ContactComponent,
    TestimonialComponent,
    ShopComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [MainHomeComponent],
})
export class HomeModule {}
