import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq-contact',
  templateUrl: './faq-contact.component.html',
  styleUrls: ['./faq-contact.component.scss'],
})
export class FaqContactComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onToContact() {
    this.router.navigate(['/contact']);
  }
}
