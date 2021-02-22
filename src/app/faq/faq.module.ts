import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { MainFaqComponent } from './main-faq/main-faq.component';


@NgModule({
  declarations: [MainFaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
