import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from '../contact.model';

@Injectable({ providedIn: 'root' })
export class Contactservice {
  constructor(private http: HttpClient) {}

  onCreateContact(contactInfo: Contact) {
    this.http
      .post<{ name: string }>(
        'https://first-aider-27854-default-rtdb.europe-west1.firebasedatabase.app/contactInfo.json',
        contactInfo
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onRetrieveContact() {
    this.http
      .get<{ [key: string]: Contact }>(
        'https://first-aider-27854-default-rtdb.europe-west1.firebasedatabase.app/contactInfo.json'
      )
      .pipe(
        map((responseData) => {
          const contactArray: Contact[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              contactArray.push({ ...responseData[key], id: key });
            }
          }
          return contactArray;
        })
      )
      .subscribe((contacts) => {
        console.log(contacts);
      });
  }
}
