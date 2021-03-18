import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { MainFaqComponent } from './main-faq/main-faq.component';
import { QuestionsComponent } from './questions/questions.component';
import { FaqContactComponent } from './faq-contact/faq-contact.component';


@NgModule({
  declarations: [MainFaqComponent, QuestionsComponent, FaqContactComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
