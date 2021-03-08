import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Contactservice {
  constructor(private http: HttpClient) {}

  onCreateContact(contactInfo) {
    this.http
      .post(
        'https://first-aider-27854-default-rtdb.europe-west1.firebasedatabase.app/contactInfo.json',
        contactInfo
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
