import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contactservice } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor(private contactService: Contactservice) {}

  ngOnInit(): void {}

  onCaptureForm(receivedData: NgForm) {
    // console.log(receivedData.value);
    this.contactService.onCreateContact(receivedData.value);
  }
}
