import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { MainAboutComponent } from './main-about/main-about.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { AdviceComponent } from './advice/advice.component';


@NgModule({
  declarations: [MainAboutComponent, WhoWeAreComponent, WhatWeDoComponent, AdviceComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
