import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MainContactComponent } from './main-contact/main-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainContactComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, FormsModule, SharedModule],
})
export class ContactModule {}
