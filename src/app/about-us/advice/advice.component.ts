import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {
  constructor(private router: Router) {}

  onToCourses() {
    this.router.navigate(['/courses']);
  }

  ngOnInit(): void {}
}
