import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contactservice } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  thankYou: boolean = false;

  constructor(private contactService: Contactservice) {}

  ngOnInit(): void {
    this.contactService.onRetrieveContact();
  }

  onCaptureForm(receivedData: NgForm) {
    this.contactService.onCreateContact(receivedData.value);
    this.thankYou = true;
    setTimeout(() => {
      this.thankYou = false;
      receivedData.reset();
    }, 4000);
  }
}
